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
                                className={`cursor-pointer bg-slate-100 p-4 text-black rounded-md shadow-md 
      ${disabled ? "pointer-events-none opacity-60" : ""}`}>

                    <div className="flex justify-between">
                        <h2 className='text-bold font-bold text-2xl' >{ticket.title}</h2>
                        <div className={`badge rounded pt-0.5 font-white pb-1 ${disabled ? "badge-secondary":"bg-[#632EE3]"}`}>
                            {disabled ? "Progress":"Open"}</div>
                    </div>
                    <p className='py-4' > {ticket.description} </p>

                    <div className="footer flex justify-between items-center ">
                        <div className="flex gap-4 items-center pt-1">
                            <span className='pt-1'>#00{ticket.id}</span>
                            <span className={`text-xl font-bold ${ticket.priority === "High"?"text-red-500": ticket.priority === "Medium" ? "text-yellow-500": "text-green-500"} `} >{ticket.priority}</span>
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