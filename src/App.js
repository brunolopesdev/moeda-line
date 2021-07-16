import { BrowserRouter as Router } from "react-router-dom"
import { AuthContextProvider } from '@/Context/AuthContext';
import Routes from "@/Routes/Routes"
import './App.css';




function App() {

   return (

      <AuthContextProvider>
          <Router>
             <Routes />
          </Router>
      </AuthContextProvider>

   );
}

export default App;
