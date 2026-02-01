import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ transparent }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navStyle = {
        ...styles.nav,
        background: transparent ? 'transparent' : 'var(--royal-dark)',
        boxShadow: transparent ? 'none' : '0 4px 20px rgba(0,0,0,0.1)',
        position: 'relative'
    };

    // If not transparent (Dashboard/Browse), stick to top
    if (!transparent) {
        navStyle.position = 'sticky';
        navStyle.top = 0;
    }

    return (
        <nav style={navStyle}>
            <div className="container" style={styles.container}>
                <Link to="/browse" style={styles.logo}>
                    <span style={{ fontSize: '32px', marginRight: '8px', color: '#2563EB' }}>🛒</span>

                </Link>

                <div style={styles.actions}>
                    {user ? (
                        <>
                            <Link to="/browse" style={styles.navLink}>Browse Items</Link>
                            <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
                            <div style={styles.divider}></div>
                            <div style={styles.userProfile}>
                                <div style={styles.avatar}>{user.username.charAt(0).toUpperCase()}</div>
                                <span style={styles.username}>{user.username}</span>
                            </div>
                            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
                        </>
                    ) : (
                        <>
                            {!transparent && <Link to="/login" style={styles.navLink}>Login</Link>}
                            {/* In Netflix style transparent nav, usually minimal links, maybe just Sign In if on landing */}
                            {transparent && (
                                <Link to="/login" style={{
                                    background: '#2563EB',
                                    color: 'white',
                                    padding: '7px 17px',
                                    fontWeight: '500',
                                    borderRadius: '3px',
                                    textDecoration: 'none',
                                    fontSize: '1rem'
                                }}>
                                    Sign In
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        padding: '0',
        zIndex: 1000,
        height: '80px',
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
    },
    navLink: {
        color: '#dbeafe',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'color 0.2s',
        display: 'block'
    },
    divider: {
        width: '1px',
        height: '24px',
        background: 'rgba(255,255,255,0.2)'
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    avatar: {
        width: '32px',
        height: '32px',
        background: 'var(--royal-main)',
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '14px'
    },
    username: {
        color: 'white',
        fontWeight: '600',
        fontSize: '14px'
    },
    logoutBtn: {
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.3)',
        color: 'white',
        padding: '6px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '13px',
        transition: 'background 0.2s'
    }
};

export default Navbar;
