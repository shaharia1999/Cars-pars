import React from 'react';
import CountUp from 'react-countup';
import { PlusIcon ,TableIcon,ArchiveIcon,BriefcaseIcon} from '@heroicons/react/solid'
import './Business.css'

const HomeBusiness = () => {
    return (
        <div className='home-business'>
            <h1 className='text-5xl bold text-center text-white'>Business Summary</h1>
            <div className='Business-gird'>
            <div className="grid grid-cols-1 lg:grid-cols-3">
            <div>
            <h1 className='text-2xl bold text-center flex justify-center p-5'>
                    <ArchiveIcon className="h-32 w-36 text-rose-500 "/>
            </h1>
                    <div className='flex w-72 items-center justify-center'>
                    <h1 className='text-4xl bold text-center'><CountUp end={325} duration={15} /></h1>
                    <h1 className='text-4xl bold text-center'>
                    <PlusIcon  className="h-10 w-10 text-rose-700"/>
                    </h1>

                    </div>
                    <h1 className='text-3xl text-white  bold text-center flex justify-center p-4'>
                   ComPlete Orders
                    </h1>
                
                </div>
                <div>
                <h1 className='text-2xl bold text-center flex p-5 justify-center'>
                    <BriefcaseIcon className="h-32 w-36 text-rose-500"/>
            </h1>
                    <div className='flex w-72 items-center justify-center'>
                    <h1 className='text-4xl bold text-center'><CountUp end={405} duration={15} /></h1>
                    <h1 className='text-4xl bold text-center'>
                    <PlusIcon  className="h-10 w-10 text-rose-700"/>
                    </h1>

                    </div>
                    <h1 className='text-3xl text-white  bold text-center flex justify-center p-4'>
                    Orders Panding
                    </h1>
                
                </div>
                <div>
                <h1 className='text-2xl bold text-center flex p-5 justify-center'>
                    <TableIcon className="h-32 w-36 text-rose-500"/>
            </h1>
                    <div className='flex w-72 items-center justify-center'>
                    <h1 className='text-4xl bold text-center'><CountUp end={257} duration={15} /></h1>
                    <h1 className='text-4xl bold text-center'>
                    <PlusIcon  className="h-10 w-10 text-rose-700"/>
                    </h1>

                    </div>
                    <h1 className='text-3xl text-white  bold text-center flex justify-center p-4'>
                   Happy Clints
                    </h1>
                
                </div>
         
            </div>
            </div>
        </div>
    );
};

export default HomeBusiness;