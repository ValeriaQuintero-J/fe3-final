import './index.css'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { ContextProvider } from './Components/utils/global.context';
import Layout from './Components/Layout';



function App() {
  return (
      <div className="App">
        <ContextProvider>
          <Layout>
            <Navbar/>
            <Outlet />
            <Footer/>
          </Layout>
        </ContextProvider>
      </div>
  );
}

export default App;
