import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Checkout = () => {
    const loadService = useLoaderData()
    const { user } = useContext(AuthContext)
    const { _id, title, img, price } = loadService;

    

    const handleForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const due = e.target.due.value;
        const date = e.target.date.value;
        const order = {
            customerName: name,
            email, date,
            service: title,
            img,
            service_id: _id,
            price: due,
        }
        console.log(order);
        fetch('https://car-doctor-server-mirza2018s-projects.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>
            <h1>Checkout now:{title}</h1>

            <form onSubmit={handleForm}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' defaultValue={user?.email} name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due</span>
                    </label>
                    <input type='text' value={'$' + price} name='due' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary mb-10" type="submit" value="Confrim book" />
                </div>
            </form>

        </div>
    );
};

export default Checkout;