import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();

    const url = `https://car-doctor-server-538k.onrender.com/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    return setBookings(data)
                }
                else {
                    navigate('/')
                }

            })
    }, [url, navigate])

    const handleDelete = id => {
        const proceed = confirm("Are you sure to delete")
        if (proceed) {
            console.log(id);
            fetch(`https://car-doctor-server-538k.onrender.com/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("delete Successfully")
                        const remaining = bookings.filter(book => book._id !== id);
                        setBookings(remaining)
                    }
                })

        }
    }

    const handleConfrimBooking = (id) => {
        console.log('lll');
        fetch(`https://car-doctor-server-538k.onrender.com/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(book => book._id !== id);
                    const updated = bookings.find(book => book._id === id)
                    updated.status = "confirm"
                    const newBookings = [...remaining, updated]
                    setBookings(newBookings)
                }
            })

    }



    return (
        <div>
            <h1 className="text-5xl">Your bokking{bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(book => <BookingRow key={book._id}
                                book={book}
                                handleDelete={handleDelete}
                                handleConfrimBooking={handleConfrimBooking}
                            >
                            </BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;