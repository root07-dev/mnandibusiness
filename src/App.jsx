import { Routes, Route, BrowserRouter} from 'react-router-dom'

import Boutique from "./pages/Boutique";
import Home from "./components/Home";


function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
