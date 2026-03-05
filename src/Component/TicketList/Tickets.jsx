import React from 'react';

const Tickets = () => {
    return (
        <div className='bg-gray-300 p-4 text-black rounded-md shadow-md '>
                <div className="flex justify-between">
                    <h2 className='text-bold font-bold text-2xl' >Login Issues - Can't Access Account</h2>
                    <div className="badge badge-primary rounded pt-0.5 pb-1">Primary</div>
                </div>
                <p>
                    Customer is unable to log in to their account. They've tried resetting their password multiple times but still...
                </p>

                <div className="footer flex justify-between items-center ">
                    <div className="flex gap-4 items-center pt-1">
                        <span className='pt-1'>#10002</span>
                        <span className='text-red-500 text-2xl' >High Priority</span>
                    </div>
                    <div className="flex pt-2">
                        <p>Michal Modusudhon</p>
                        <span> 📅 01-01-2020</span>
                    </div>

                </div>

            </div>
            
    );
};

export default Tickets;