import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <Link to="/browse" style={styles.logo}>
                    🛒 Overthinking<span style={styles.highlight}>Simulator</span>
                </Link>

                <div style={styles.links}>
                    {user ? (
                        <>
                            <span style={styles.user}>Hi, {user.username}</span>
                            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" style={styles.link}>Login</Link>
                            <Link to="/register" style={styles.registerBtn}>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '1rem 0'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '24px',
        fontWeight: '800',
        color: '#1e293b',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    highlight: {
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    },
    user: {
        fontSize: '15px',
        fontWeight: '600',
        color: '#64748b'
    },
    link: {
        textDecoration: 'none',
        color: '#64748b',
        fontWeight: '600',
        transition: 'color 0.2s'
    },
    registerBtn: {
        textDecoration: 'none',
        background: '#1e293b',
        color: 'white',
        padding: '8px 20px',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '14px'
    },
    logoutBtn: {
        background: 'transparent',
        border: '1px solid #e2e8f0',
        padding: '8px 16px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#64748b'
    }
};

export default Navbar;
