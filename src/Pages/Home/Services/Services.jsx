import { useEffect, useRef, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])
    const [asc, SetAsc] = useState(true)
    const [src,setSrc]=useState('')
    const searchRef = useRef(null)
  

    useEffect(() => {
        fetch(`https://car-doctor-server-538k.onrender.com/serviecs?sort=${asc ? 'asc' : 'dasc'}&search=${src}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [asc,src])

    const handeleSearch=()=>{
        const search=searchRef.current.value;
        setSrc(search)
        console.log(search,"ddferdf");
    }


    return (
        <div className='text-center mt-5'>
            <h3 className='text-3xl font-bold text-cyan-500 '>
                Our Services
            </h3>
            <h2 className='text-5xl'>
                Our Service Area
            </h2>
            <p>Car Doctor - The best car service center in Dhaka providing top quality auto repair services for all vehicle types. If you are looking for the best car repair services from a premium car servicing center in Dhaka City. Then we are the best leading multi-brand car workshop for you.</p>


            <div className="form-control">
                <div className="input-group  my-4  justify-center ">
                    <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handeleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>


            <button onClick={() => SetAsc(!asc)} className='mt-5 btn bg-info text-white'>{asc ? 'Price: High to Low' : "Price : Low to High"}</button>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4 mb-4'>
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