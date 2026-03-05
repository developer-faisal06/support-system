import React from 'react';

const TicketResult = ({ progress, handeleComplete, resolve }) => {

    return (
        <div className='bg-gray-200 w-[20%] p-4'>
            <h1 className='text-2xl pb-4 font-bold text-black '  >Customer Tickets </h1>

            <div className="flex flex-col gap-4">

                {
                    progress.map(progres =>
                        <div className='bg-gray-300  p-4 text-black rounded-md shadow-md '>
                            <div className="">
                                <h2 className='text-bold font-bold pb-4' >{progres.title}</h2>
                                <button onClick={() => handeleComplete(progres)} className="btn btn-success btn-block text-white text-lg">Success</button>
                            </div>
                        </div>
                    )
                }



            </div>

            <h1 className='text-2xl py-4 font-bold text-black ' >Resolve Tickets </h1>

            <div className="flex flex-col gap-4">

                {
                    resolve.map(resolve =>
                        <div className='bg-gray-300  p-4 text-black rounded-md shadow-md '>
                            <div className="">
                                <h2 className='text-bold font-bold ' >{resolve.title}</h2>
                            </div>
                        </div>
                    )
                }


                {/* <div className='bg-gray-300  p-4 text-black rounded-md shadow-md '>
                    <div className="">
                        <h2 className='text-bold font-bold ' >Payment Failed - Card Declined</h2>
                    </div>
                </div> */}

            </div>

        </div>
    );
};

export default TicketResult;