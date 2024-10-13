import React from 'react';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';
import './App.css'; // Import the CSS file for styles

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Social Media Submission System</h1>
      <UserForm />
      <AdminDashboard />
    </div>
  );
}

export default App;
