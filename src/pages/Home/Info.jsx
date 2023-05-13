import { CalendarDaysIcon,PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Info = () => {
    return (
        <div className='text-white flex justify-between bg-black py-16 rounded-lg mt-16 mb-8  px-6'>
            <div className='flex gap-4 justify-center items-center'>
            <CalendarDaysIcon className="h-10 w-10" />
            <div>
                <p>We are open monday-friday</p>
                <p className='text-3xl font-semibold'>7:00 am - 9:00 pm</p>
            </div>
            </div>
            <div className='flex gap-4 justify-center items-center'>
            <PhoneIcon className="h-10 w-10" />
            <div>
                <p>Have a question?</p>
                <p className='text-3xl font-semibold'>+2546 251 2658</p>
            </div>
            </div>
            <div className='flex gap-4 justify-center items-center '>
            <MapPinIcon className="h-10 w-10" />
            <div>
                <p>Need a repair? our address</p>
                <p className='text-3xl font-semibold'>Liza Street, New York</p>
            </div>
            </div>
        </div>
    );
};

export default Info;