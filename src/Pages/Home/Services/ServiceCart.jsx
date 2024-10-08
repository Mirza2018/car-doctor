import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
    const { _id,title, img,  price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">

                <h2 className="card-title ">{title}</h2>
                <p className='font-bold text-orange-400 '>Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/ourservices/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                     

                </div>
            </div>
        </div>
    );
};
export default ServiceCart; 