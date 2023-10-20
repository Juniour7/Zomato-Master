import { Routes, Route } from "react-router-dom";
import './App.css';

//components
import HomeLayout from './components/Layout/Home.Layout';
import TempCompo from './components/temp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </>
  );
};

export default App;
