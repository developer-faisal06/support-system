import React from 'react';
import Tickets from './Tickets';

const TicketList = ({ ticket, handleProcess,disabled }) => {
    // console.log(ticket)

//     {
//     "id": 11,
//     "title": "App Crash on Startup",
//     "description": "Mobile app crashes immediately after launch.",
//     "customer": "Farzana Rahman",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2026-03-04"
// }
    return (        
                <div onClick={()=>!disabled && handleProcess(ticket)} 
                                className={`cursor-pointer bg-gray-300 p-4 text-black rounded-md shadow-md 
      ${disabled ? "pointer-events-none opacity-60" : ""}`}>

                    <div className="flex justify-between">
                        <h2 className='text-bold font-bold text-2xl' >{ticket.title}</h2>
                        <div className="badge badge-primary rounded pt-0.5 pb-1">
                            {disabled ? "Progress":"Open"}</div>
                    </div>
                    <p className='py-4' > {ticket.description} </p>

                    <div className="footer flex justify-between items-center ">
                        <div className="flex gap-4 items-center pt-1">
                            <span className='pt-1'>#00{ticket.id}</span>
                            <span className='text-red-500 text-xl' >{ticket.priority}</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2  pt-2 ">
                            <p>{ticket.customer}</p>
                            <span className='text-[12px]' > 📅 {ticket.createdAt}</span>
                        </div>

                    </div>

                </div>
              

           
              
    );
};

export default TicketList;