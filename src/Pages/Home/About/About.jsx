import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-orange-500 font-bold text-3xl">About us</h3>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/ourservices"><button className="btn btn-warning">Get More Info</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;