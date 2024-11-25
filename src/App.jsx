import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if(authData){
      const loggesInUser = localStorage.getItem("loggedInUser")
      if(loggesInUser){
        setUser(loggesInUser.role)
      }
    }
  }, [])
  

  const handleLogin = (email, password) => {
    if (authData?.admin?.email === email && authData?.admin?.password === password) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }
    else if (authData?.employees && authData.employees.find((e) => e.email === email && e.password === password)
    ) {
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
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
