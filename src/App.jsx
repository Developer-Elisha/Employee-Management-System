import React, { useContext, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const userData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (userData?.admin?.email === email && userData?.admin?.password === password) {
      setUser('admin');
    }
    else if (userData?.employees && userData.employees.find((e) => e.email === email && e.password === password)
    ) {
      setUser('employee');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
