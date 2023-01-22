import './App.css';
import { Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';

function App() {
    return (
        <Routes>
            <Route path='/' element={<EmployeeDashboard />}></Route>
            <Route path='/employee' element={<EmployeeForm />}></Route>
        </Routes>
    );
}

export default App;
