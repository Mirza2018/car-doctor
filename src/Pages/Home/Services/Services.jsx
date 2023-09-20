import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cars-doctor-server-fawn.vercel.app/serviecs')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='text-center mt-5'>
            <h3 className='text-3xl font-bold text-cyan-500 '>
                Our Services
            </h3>
            <h2 className='text-5xl'>
                Our Service Area
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi, dolores in nihil veniam commodi officia fugiat reiciendis veritatis sed tenetur obcaecati autem excepturi quaerat? Ullam doloremque enim nulla quaerat!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-4'>
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;