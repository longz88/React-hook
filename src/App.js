import './App.scss';
import Header from './components/Header';
import TableBooks from './components/TableBooks';
import { ToastContainer } from 'react-toastify';

function App() {
   return (
      <>
         <div className="app-container">
            <Header />
            <TableBooks />
         </div>

         <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </>
   );
}

export default App;
