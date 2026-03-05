import React from 'react';


const StatusCard = ({progress,resolve}) => {
    return (
        <div className="bg-gray-200">
            <div className='container mx-auto grid grid-cols md:grid-cols-2 gap-4 p-4 lg:py-10 lg:gap-10'>
                <div className="status-card relative h-[200px] shadow-sm flex justify-center items-center ">
                    
                    <div className="content flex z-1 flex-col  ">
                        <h2 className="text-2xl font-bold ">In-Progress </h2>
                        <span className='text-4xl font-bold mx-auto py-2'>{progress.length}</span>
                    </div>

                </div>
                <div className="status-card-right relative h-[200px]  shadow-sm flex justify-center items-center">
                    <div className="content flex z-1 flex-col  ">
                        <h2 className="text-2xl font-bold ">Resolved</h2>
                        <span className='text-4xl font-bold mx-auto py-2'>{resolve.length}</span>
                    </div>

                </div>




            </div>


            {/* <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={bg}
                        alt="Shoes" />
                        <div className="card-body flex items-center self-center absolute ">
                    <h2 className="card-title text-4xl font-bold ">Card Title</h2>

                </div>
                </figure>
                

            </div> */}



        </div>

    );
};

export default StatusCard;