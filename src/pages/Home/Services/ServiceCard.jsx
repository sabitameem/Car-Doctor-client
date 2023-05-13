import {  ArrowRightIcon } from '@heroicons/react/24/solid'

const ServiceCard = ({service}) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className='flex'>
            <p className="text-xl text-orange-500">Price: ${price}</p>
            <ArrowRightIcon className="h-6 w-6 text-orange-500" />
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;