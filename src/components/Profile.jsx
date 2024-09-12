import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

const Profile = ({ email, onLogout }) => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <p className="profile-email">Correo electrónico: paula@gmail.com {email}</p>
      <Button variant="danger" onClick={onLogout} className="logout-button">
        Cerrar sesión
      </Button>
    </div>
  );
};

export default Profile;
