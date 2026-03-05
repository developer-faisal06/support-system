import TicketList from '../TicketList/TicketList';
import TicketResult from '../TicketResult/TicketResult';

const TicketManagment = ({disabled, data, handleProcess, progress , handeleComplete,resolve }) => {
    
    return (
        <div className='bg-gray-200 pb-10' >                       
            <div className="grid grid-cols md:grid-cols-3 container mx-auto">
                <div className='col-span md:col-span-2 p-4'>
                    <h1 className='container mx-auto text-2xl pb-4 font-bold text-black' >Customer Tickets </h1>
                    <div className="card-list grid grid-cols sm:grid-cols md:grid-cols lg:grid-cols-2 gap-5">
                        {
                        data.map(ticket => <TicketList 
                            disabled={disabled.includes(ticket.id)} 
                            key={ticket.id} 
                            handleProcess={handleProcess}   
                            ticket={ticket}  
                            
                            ></TicketList>)
                        }
                    </div>
                </div>
                <TicketResult progress={progress}  handeleComplete={handeleComplete} key={progress.id} resolve={resolve} ></TicketResult>
            </div>

        </div>
    );
};

export default TicketManagment;