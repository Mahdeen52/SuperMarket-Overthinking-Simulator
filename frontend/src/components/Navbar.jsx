import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = ({ transparent }) => {
    const { user, logout } = useAuth();
    const { getCartItemCount } = useCart();
    const navigate = useNavigate();
    const [showCartPreview, setShowCartPreview] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navStyle = {
        ...styles.nav,
        background: transparent ? 'transparent' : 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
        boxShadow: transparent ? 'none' : '0 4px 20px rgba(0,0,0,0.15)',
        position: 'relative'
    };

    // If not transparent (Dashboard/Browse), stick to top
    if (!transparent) {
        navStyle.position = 'sticky';
        navStyle.top = 0;
    }

    const cartCount = getCartItemCount();

    return (
        <nav style={navStyle}>
            <div className="container" style={styles.container}>
                <Link to="/browse" style={styles.logo}>
                    <span style={{ fontSize: '32px', marginRight: '12px' }}>🛒</span>
                    <span style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: 'white',
                        fontFamily: 'Montserrat, sans-serif',
                        letterSpacing: '-0.5px'
                    }}>
                        Overthinking Market
                    </span>
                </Link>

                <div style={styles.actions}>
                    {user ? (
                        <>
                            <Link to="/browse" style={styles.navLink}>
                                <span style={{ fontSize: '18px', marginRight: '6px' }}>🏪</span>
                                Browse
                            </Link>
                            <Link to="/orders" style={styles.navLink}>
                                <span style={{ fontSize: '18px', marginRight: '6px' }}>📦</span>
                                Orders
                            </Link>
                            <Link to="/dashboard" style={styles.navLink}>
                                <span style={{ fontSize: '18px', marginRight: '6px' }}>📊</span>
                                Dashboard
                            </Link>

                            {/* Cart Icon with Badge */}
                            <div
                                style={styles.cartContainer}
                                onMouseEnter={() => setShowCartPreview(true)}
                                onMouseLeave={() => setShowCartPreview(false)}
                            >
                                <div style={styles.cartIcon}>
                                    🛒
                                    {cartCount > 0 && (
                                        <span style={styles.cartBadge}>{cartCount}</span>
                                    )}
                                </div>
                            </div>

                            <div style={styles.divider}></div>
                            <div style={styles.userProfile}>
                                <div style={styles.avatar}>{user.username.charAt(0).toUpperCase()}</div>
                                <span style={styles.username}>{user.username}</span>
                            </div>
                            <button onClick={handleLogout} style={styles.logoutBtn}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            {!transparent && <Link to="/login" style={styles.navLink}>Login</Link>}
                            {transparent && (
                                <Link to="/login" style={{
                                    background: 'white',
                                    color: '#2563EB',
                                    padding: '10px 24px',
                                    fontWeight: '700',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
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
        fontSize: '20px',
        transition: 'transform 0.2s'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '15px',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        borderRadius: '8px',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
    },
    cartContainer: {
        position: 'relative',
        cursor: 'pointer',
        padding: '8px 12px',
        borderRadius: '8px',
        background: 'rgba(255,255,255,0.15)',
        transition: 'all 0.2s'
    },
    cartIcon: {
        fontSize: '24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartBadge: {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        background: '#ef4444',
        color: 'white',
        borderRadius: '50%',
        width: '22px',
        height: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        fontWeight: '700',
        border: '2px solid white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    },
    divider: {
        width: '1px',
        height: '30px',
        background: 'rgba(255,255,255,0.3)'
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '6px 12px',
        borderRadius: '8px',
        background: 'rgba(255,255,255,0.1)'
    },
    avatar: {
        width: '36px',
        height: '36px',
        background: 'white',
        borderRadius: '50%',
        color: '#2563EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    username: {
        color: 'white',
        fontWeight: '700',
        fontSize: '15px'
    },
    logoutBtn: {
        background: 'rgba(255,255,255,0.2)',
        border: '2px solid white',
        color: 'white',
        padding: '8px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '14px',
        transition: 'all 0.2s',
        backdropFilter: 'blur(10px)'
    }
};

export default Navbar;
