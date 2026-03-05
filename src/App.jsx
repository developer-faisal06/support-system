import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Navigation from './Component/Navigation/Navigation'
import StatusCard from './Component/StatusCard/StatusCard'
import TicketManagment from './Component/TicketManagment/TicketManagment'
import Footer from './Component/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify'

const ticketPromices = async () => {
  const res = await fetch('/tickets.json')
  return res.json();
}
const ticketsPromise = ticketPromices();


function App() {
  const [progress, setProgress] = useState([]);
  const [disabled, setDisabled] = useState([]);
  const [resolve, setResolve] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const result = await ticketsPromise;
      setData(result);
    };

    loadData();
  }, [ticketsPromise]);


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
    setData(prev => prev.filter(d => d.id !== item.id));
    toast.success("Task Resolved");
  }
  return (
    <>

      <Navigation></Navigation>
      <StatusCard
        progress={progress}
        resolve={resolve}
      ></StatusCard>

      <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
        <TicketManagment
          progress={progress}
          disabled={disabled}
          data={data}

          handleProcess={handleProcess}
          handeleComplete={handeleComplete}
          resolve={resolve}
        ></TicketManagment>
      </Suspense>

      <Footer></Footer>

      <ToastContainer />

    </>
  )
}

export default App
