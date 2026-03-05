import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import StatusCard from './Component/StatusCard/StatusCard';
import TicketManagment from './Component/TicketManagment/TicketManagment';
import Footer from './Component/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';

// const ticketPromices = async () => {
//   const res = await fetch('/tickets.json')
//   return res.json();
// }
// const ticketsPromise = ticketPromices();


function App() {
  const [progress, setProgress] = useState([]);
  const [disabled, setDisabled] = useState([]);
  const [resolve, setResolve] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/tickets.json')
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    loadData();
  }, []);


  const handleProcess = (ticket) => {
    const newProgress = [...progress, ticket]
    setProgress(newProgress);
    setDisabled([...disabled, ticket.id]);
    toast("Task In-Progress");
  }

  const handeleComplete = async (item) => {
    const progressItem = [...resolve, item];
    setResolve(progressItem);
    const updatedProgress = progress.filter(p => p.id !== item.id);
    setProgress(updatedProgress);
    setData(prevData => prevData.filter(d => d.id !== item.id));
    toast.success("Task Resolved");
  }

  {
    if (loading) {
      return (
        <div className='h-screen w-screen flex items-center justify-center' >
          <span className="loading loading-spinner  loading-lg text-success"></span>
        </div>

      );
    }
  }

  return (
    <>

      <Navigation></Navigation>
      <StatusCard
        progress={progress}
        resolve={resolve}
      ></StatusCard>


      <TicketManagment
        progress={progress}
        disabled={disabled}
        data={data}

        handleProcess={handleProcess}
        handeleComplete={handeleComplete}
        resolve={resolve}
      ></TicketManagment>


      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
