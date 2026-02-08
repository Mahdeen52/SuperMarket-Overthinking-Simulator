import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ transparent }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    const navStyle = {
        ...styles.nav,
        background: transparent ? 'transparent' : '#FFFFFF',
        boxShadow: transparent ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.06)',
        borderBottom: transparent ? 'none' : '1px solid rgba(201, 162, 39, 0.15)'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={styles.container}>
                {/* Logo */}
                <Link to="/browse" style={styles.logo}>
                    <span style={styles.logoIcon}>🛒</span>
                    <span style={styles.logoText}>DalChaal</span>
                </Link>

                {/* Navigation Links & Actions */}
                <div style={styles.actions}>
                    {user ? (
                        <>
                            {/* Navigation Links */}
                            <Link
                                to="/browse"
                                style={{
                                    ...styles.navLink,
                                    color: isActive('/browse') ? '#C9A227' : '#666666',
                                    borderBottom: isActive('/browse') ? '2px solid #C9A227' : '2px solid transparent'
                                }}
                            >
                                Products
                            </Link>
                            <Link
                                to="/dashboard"
                                style={{
                                    ...styles.navLink,
                                    color: isActive('/dashboard') ? '#C9A227' : '#666666',
                                    borderBottom: isActive('/dashboard') ? '2px solid #C9A227' : '2px solid transparent'
                                }}
                            >
                                Dashboard
                            </Link>

                            {/* Admin Only - Merchant Dashboard */}
                            {user.email === 'admin@supermarket.com' && (
                                <Link
                                    to="/merchant-dashboard"
                                    style={{
                                        ...styles.navLink,
                                        color: isActive('/merchant-dashboard') ? '#C9A227' : '#666666',
                                        borderBottom: isActive('/merchant-dashboard') ? '2px solid #C9A227' : '2px solid transparent'
                                    }}
                                >
                                    Merchant Dashboard
                                </Link>
                            )}

                            {/* Divider */}
                            <div style={styles.divider}></div>

                            {/* User Profile */}
                            <div style={styles.userProfile}>
                                <div style={styles.avatar}>
                                    {user.username.charAt(0).toUpperCase()}
                                </div>
                                <span style={styles.username}>{user.username}</span>
                            </div>

                            {/* Logout Button */}
                            <button onClick={handleLogout} style={styles.logoutBtn}>
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            {transparent ? (
                                <Link to="/login" style={styles.signInButton}>
                                    Sign In
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login" style={styles.navLink}>Login</Link>
                                    <Link to="/register" style={styles.signInButton}>Get Started</Link>
                                </>
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
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
    },
    logoIcon: {
        fontSize: '32px'
    },
    logoText: {
        fontSize: '22px',
        fontWeight: '700',
        fontFamily: "'Playfair Display', serif",
        color: '#1A1A1A',
        letterSpacing: '-0.5px'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '28px'
    },
    navLink: {
        color: '#666666',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '15px',
        padding: '8px 0',
        transition: 'all 0.2s ease',
        fontFamily: "'Poppins', sans-serif"
    },
    divider: {
        width: '1px',
        height: '24px',
        background: '#E8E8E8'
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    avatar: {
        width: '36px',
        height: '36px',
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 100%)',
        borderRadius: '50%',
        color: '#1A1A1A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '15px',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 2px 8px rgba(201, 162, 39, 0.3)'
    },
    username: {
        color: '#1A1A1A',
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif"
    },
    logoutBtn: {
        background: 'transparent',
        border: '2px solid #C9A227',
        color: '#C9A227',
        padding: '8px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '13px',
        fontFamily: "'Poppins', sans-serif",
        transition: 'all 0.2s ease',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    signInButton: {
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 50%, #C9A227 100%)',
        color: '#1A1A1A',
        padding: '10px 24px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        textDecoration: 'none',
        boxShadow: '0 4px 15px rgba(201, 162, 39, 0.25)',
        transition: 'all 0.2s ease',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    }
};

export default Navbar;
