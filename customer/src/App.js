import './App.css';
import { Route, Routes } from 'react-router-dom';

//components
import HomeLayout from './Layout/Home.Layout';
import Master from './components/master';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/:type" element={<Master />} />
      </Routes>
    </>
  );
};

export default App;
