import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Browse() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>🛒 Browse Items</h1>
                <div style={styles.userInfo}>
                    <span style={styles.username}>Welcome, {user?.username}!</span>
                    <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
                </div>
            </div>

            <div style={styles.content}>
                <div style={styles.card}>
                    <h2>🎉 Authentication Successful!</h2>
                    <p>You are now logged in as <strong>{user?.email}</strong></p>
                    <p style={styles.note}>
                        Week 4 will add the item browsing functionality here.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        background: '#f5f5f5',
        fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    title: {
        margin: 0,
        fontSize: '24px'
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    },
    username: {
        fontSize: '16px'
    },
    logoutBtn: {
        padding: '8px 16px',
        background: 'white',
        color: '#667eea',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    content: {
        padding: '40px',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px'
    },
    note: {
        marginTop: '20px',
        padding: '15px',
        background: '#e3f2fd',
        borderRadius: '6px',
        color: '#1976d2'
    }
};

export default Browse;
