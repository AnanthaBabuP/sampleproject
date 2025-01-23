import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ListView from './components/ListView';
import CarUpdateScreen from './components/CarUpdateScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ListView />} /> 
      <Route path="/update/:carId" element={<CarUpdateScreen />} />
    </Routes>
  );
}

export default App;
