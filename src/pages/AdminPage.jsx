import React from 'react';

const AdminPage = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url("https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
    },
    textContainer: {
      border: '2px solid white',
      padding: '10px',
      background: 'rgba(0, 0, 255, 0.5)', 
      borderRadius: '10px', 
    },
    text: {
      fontSize: '5em',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.text}>Bienvenido Administrador!</h1>
      </div>
    </div>
  );
};

export default AdminPage;
