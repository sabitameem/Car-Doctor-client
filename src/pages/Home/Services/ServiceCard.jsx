import {  ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className='flex'>
            <p className="text-xl text-orange-500">Price: ${price}</p>
            <Link to={`/checkOut/${_id}`}>
            <ArrowRightIcon className="h-6 w-6 text-orange-500" />
            </Link>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;