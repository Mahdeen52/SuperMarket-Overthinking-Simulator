import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ transparent }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    const navStyle = {
        ...styles.nav,
        background: transparent ? 'transparent' : 'linear-gradient(180deg, rgba(15, 15, 26, 0.98) 0%, rgba(10, 10, 18, 0.95) 100%)',
        backdropFilter: transparent ? 'none' : 'blur(25px)',
        boxShadow: transparent ? 'none' : `
            0 4px 20px rgba(0, 0, 0, 0.4),
            0 8px 40px rgba(0, 0, 0, 0.3),
            0 20px 60px rgba(201, 162, 39, 0.08),
            inset 0 1px 0 rgba(201, 162, 39, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3)
        `,
        borderBottom: transparent ? 'none' : 'none',
        borderImage: transparent ? 'none' : 'linear-gradient(90deg, transparent, rgba(201, 162, 39, 0.6), rgba(232, 212, 138, 0.8), rgba(201, 162, 39, 0.6), transparent) 1',
    };

    const getNavLinkStyle = (path) => ({
        ...styles.navLink,
        color: isActive(path) ? '#E8D48A' : hoveredLink === path ? '#C9A227' : 'rgba(255, 255, 255, 0.7)',
        transform: hoveredLink === path ? 'translateY(-2px)' : 'translateY(0)',
    });

    const getUnderlineStyle = (path) => ({
        ...styles.navLinkUnderline,
        transform: isActive(path) || hoveredLink === path ? 'scaleX(1)' : 'scaleX(0)',
        background: isActive(path) ? 'linear-gradient(90deg, #C9A227, #E8D48A, #C9A227)' : '#C9A227'
    });

    return (
        <nav style={navStyle} className="navbar-sophisticated navbar-3d-gold">
            {/* 3D Golden Border Effect - Top */}
            {!transparent && (
                <>
                    <div style={styles.goldBorderTop}></div>
                    <div style={styles.goldBorderGlow}></div>
                    <div style={styles.goldBorderBottom}></div>
                </>
            )}
            <div className="container" style={styles.container}>
                {/* Sophisticated Logo */}
                <Link to="/browse" style={styles.logo} className="nav-logo">
                    <div style={styles.logoIconWrapper}>
                        {/* Premium Diamond Shopping Bag Logo */}
                        <svg style={styles.logoIcon} width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="logoGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#F5E6C8" />
                                    <stop offset="25%" stopColor="#C9A227" />
                                    <stop offset="50%" stopColor="#E8D48A" />
                                    <stop offset="75%" stopColor="#C9A227" />
                                    <stop offset="100%" stopColor="#DAA520" />
                                </linearGradient>
                                <linearGradient id="logoGradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(201, 162, 39, 0.3)" />
                                    <stop offset="50%" stopColor="rgba(232, 212, 138, 0.2)" />
                                    <stop offset="100%" stopColor="rgba(201, 162, 39, 0.3)" />
                                </linearGradient>
                                <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="2" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Outer Diamond Shape */}
                            <path d="M24 4L42 16V32L24 44L6 32V16L24 4Z" fill="url(#logoGradientFill)" stroke="url(#logoGradientMain)" strokeWidth="2" filter="url(#logoGlow)" />
                            {/* Inner Shopping Bag */}
                            <path d="M16 18L14 22V36C14 36.5 14.2 37 14.6 37.4C15 37.8 15.5 38 16 38H32C32.5 38 33 37.8 33.4 37.4C33.8 37 34 36.5 34 36V22L32 18H16Z" stroke="url(#logoGradientMain)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <path d="M14 22H34" stroke="url(#logoGradientMain)" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M30 26C30 28.2 28.4 30 24 30C19.6 30 18 28.2 18 26" stroke="url(#logoGradientMain)" strokeWidth="1.5" strokeLinecap="round" />
                            {/* Crown/Premium Symbol */}
                            <path d="M19 12L24 8L29 12" stroke="url(#logoGradientMain)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="24" cy="8" r="1.5" fill="url(#logoGradientMain)" />
                            {/* Sparkle Accents */}
                            <path d="M38 10L39 12L38 14L37 12L38 10Z" fill="#E8D48A" opacity="0.8" />
                            <path d="M10 10L11 12L10 14L9 12L10 10Z" fill="#E8D48A" opacity="0.8" />
                        </svg>
                        <div style={styles.logoGlow}></div>
                        <div style={styles.logoSparkle}></div>
                    </div>
                    <div style={styles.logoTextWrapper}>
                        <span style={styles.logoText}>DalChaal</span>
                        <span style={styles.logoTagline}>Premium Market</span>
                    </div>
                </Link>

                {/* Navigation Links & Actions */}
                <div style={styles.actions}>
                    {user ? (
                        <>
                            {/* Navigation Links with Hover Effects */}
                            <div style={styles.navLinks}>
                                <Link
                                    to="/browse"
                                    style={getNavLinkStyle('/browse')}
                                    onMouseEnter={() => setHoveredLink('/browse')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className="nav-link-animated"
                                >
                                    <svg style={styles.navLinkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="prodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke="url(#prodGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 10C16 12.21 14.21 14 12 14C9.79 14 8 12.21 8 10" stroke="url(#prodGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 6H21" stroke="url(#prodGrad)" strokeWidth="1.8" strokeLinecap="round" />
                                        <circle cx="19" cy="4" r="1.5" fill="currentColor" opacity="0.6" />
                                    </svg>
                                    Products
                                    <div style={getUnderlineStyle('/browse')}></div>
                                </Link>
                                <Link
                                    to="/dashboard"
                                    style={getNavLinkStyle('/dashboard')}
                                    onMouseEnter={() => setHoveredLink('/dashboard')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className="nav-link-animated"
                                >
                                    <svg style={styles.navLinkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="dashGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                                                <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                                            </linearGradient>
                                        </defs>
                                        <rect x="16" y="10" width="4" height="10" rx="1" fill="url(#dashGrad)" opacity="0.3" />
                                        <rect x="10" y="4" width="4" height="16" rx="1" fill="url(#dashGrad)" opacity="0.3" />
                                        <rect x="4" y="14" width="4" height="6" rx="1" fill="url(#dashGrad)" opacity="0.3" />
                                        <path d="M18 20V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 20V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 20V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="18" cy="8" r="1.5" fill="currentColor" opacity="0.5" />
                                        <circle cx="12" cy="2" r="1.5" fill="currentColor" opacity="0.5" />
                                    </svg>
                                    Dashboard
                                    <div style={getUnderlineStyle('/dashboard')}></div>
                                </Link>

                                {/* Admin Only - Merchant Dashboard */}
                                {user.email === 'admin@supermarket.com' && (
                                    <Link
                                        to="/merchant-dashboard"
                                        style={getNavLinkStyle('/merchant-dashboard')}
                                        onMouseEnter={() => setHoveredLink('/merchant-dashboard')}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className="nav-link-animated"
                                    >
                                        <svg style={styles.navLinkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="merchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M3 9L12 2L21 9V20C21 20.53 20.79 21.04 20.41 21.41C20.04 21.79 19.53 22 19 22H5C4.47 22 3.96 21.79 3.59 21.41C3.21 21.04 3 20.53 3 20V9Z" stroke="url(#merchGrad)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 22V12H15V22" stroke="url(#merchGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="5" r="1" fill="currentColor" opacity="0.7" />
                                            <path d="M7 9H17" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
                                        </svg>
                                        Merchant
                                        <div style={getUnderlineStyle('/merchant-dashboard')}></div>
                                    </Link>
                                )}
                            </div>

                            {/* Glowing Divider */}
                            <div style={styles.divider}></div>

                            {/* User Profile with Animation */}
                            <div style={styles.userProfile} className="user-profile-animated">
                                <div style={styles.avatarWrapper}>
                                    <div style={styles.avatar}>
                                        {user.username.charAt(0).toUpperCase()}
                                    </div>
                                    <div style={styles.avatarRing}></div>
                                </div>
                                <span style={styles.username}>{user.username}</span>
                            </div>

                            {/* Animated Logout Button */}
                            <button
                                onClick={handleLogout}
                                style={styles.logoutBtn}
                                className="logout-btn-animated"
                            >
                                <span style={styles.btnText}>Sign Out</span>
                                <div style={styles.btnShine}></div>
                            </button>
                        </>
                    ) : (
                        <>
                            {transparent ? (
                                <Link to="/login" style={styles.signInButton} className="signin-btn-animated">
                                    Sign In
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        style={getNavLinkStyle('/login')}
                                        onMouseEnter={() => setHoveredLink('/login')}
                                        onMouseLeave={() => setHoveredLink(null)}
                                    >
                                        Login
                                        <div style={getUnderlineStyle('/login')}></div>
                                    </Link>
                                    <Link to="/register" style={styles.signInButton} className="signin-btn-animated">
                                        Get Started
                                    </Link>
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
        height: '88px',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        transition: 'all 0.3s ease',
        overflow: 'visible'
    },
    // 3D Golden Border - Top highlight
    goldBorderTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(201, 162, 39, 0.4) 15%, rgba(232, 212, 138, 1) 30%, rgba(245, 230, 200, 1) 50%, rgba(232, 212, 138, 1) 70%, rgba(201, 162, 39, 0.4) 85%, transparent 100%)',
        zIndex: 10
    },
    // 3D Golden Border - Glow effect
    goldBorderGlow: {
        position: 'absolute',
        top: '-2px',
        left: '10%',
        right: '10%',
        height: '8px',
        background: 'linear-gradient(90deg, transparent, rgba(201, 162, 39, 0.5), rgba(232, 212, 138, 0.6), rgba(201, 162, 39, 0.5), transparent)',
        filter: 'blur(6px)',
        zIndex: 9
    },
    // 3D Golden Border - Bottom shadow for 3D effect
    goldBorderBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(154, 123, 10, 0.4) 15%, rgba(201, 162, 39, 0.7) 35%, rgba(232, 212, 138, 0.9) 50%, rgba(201, 162, 39, 0.7) 65%, rgba(154, 123, 10, 0.4) 85%, transparent 100%)',
        boxShadow: '0 2px 8px rgba(201, 162, 39, 0.4), 0 6px 20px rgba(201, 162, 39, 0.25), 0 10px 40px rgba(0, 0, 0, 0.4)',
        zIndex: 10
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 20
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        textDecoration: 'none',
        transition: 'transform 0.3s ease'
    },
    logoIconWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '52px',
        height: '52px'
    },
    logoIcon: {
        position: 'relative',
        zIndex: 2,
        filter: 'drop-shadow(0 0 15px rgba(201, 162, 39, 0.6))',
        transition: 'all 0.3s ease'
    },
    logoGlow: {
        position: 'absolute',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle, rgba(201, 162, 39, 0.4) 0%, rgba(232, 212, 138, 0.2) 40%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 2s ease-in-out infinite',
        top: '-4px',
        left: '-4px'
    },
    logoSparkle: {
        position: 'absolute',
        width: '70px',
        height: '70px',
        background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(232, 212, 138, 0.3) 60deg, transparent 120deg, rgba(201, 162, 39, 0.2) 180deg, transparent 240deg, rgba(232, 212, 138, 0.3) 300deg, transparent 360deg)',
        borderRadius: '50%',
        animation: 'spin 8s linear infinite',
        top: '-9px',
        left: '-9px',
        opacity: 0.6
    },
    logoTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
    },
    logoText: {
        fontSize: '28px',
        fontWeight: '700',
        fontFamily: "'Playfair Display', serif",
        background: 'linear-gradient(135deg, #FFFFFF 0%, #E8D48A 30%, #C9A227 60%, #E8D48A 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.5px',
        lineHeight: 1.1,
        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
    },
    logoTagline: {
        fontSize: '10px',
        fontWeight: '500',
        fontFamily: "'Poppins', sans-serif",
        color: 'rgba(201, 162, 39, 0.8)',
        letterSpacing: '2px',
        textTransform: 'uppercase'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
    },
    navLinks: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    navLink: {
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '14px',
        padding: '12px 18px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '12px',
        background: 'transparent',
        letterSpacing: '0.5px'
    },
    navLinkIcon: {
        width: '20px',
        height: '20px',
        opacity: 0.9,
        filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))',
        transition: 'all 0.3s ease'
    },
    navLinkUnderline: {
        position: 'absolute',
        bottom: '4px',
        left: '18px',
        right: '18px',
        height: '2px',
        borderRadius: '2px',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transformOrigin: 'center'
    },
    divider: {
        width: '2px',
        height: '32px',
        background: 'linear-gradient(180deg, transparent, rgba(201, 162, 39, 0.5), transparent)',
        borderRadius: '2px'
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease'
    },
    avatarWrapper: {
        position: 'relative'
    },
    avatar: {
        width: '38px',
        height: '38px',
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 100%)',
        borderRadius: '50%',
        color: '#0f0f1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '15px',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 4px 15px rgba(201, 162, 39, 0.4)',
        position: 'relative',
        zIndex: 2
    },
    avatarRing: {
        position: 'absolute',
        top: '-3px',
        left: '-3px',
        right: '-3px',
        bottom: '-3px',
        borderRadius: '50%',
        border: '2px solid rgba(201, 162, 39, 0.3)',
        animation: 'pulse 2s ease-in-out infinite'
    },
    username: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        letterSpacing: '0.3px'
    },
    logoutBtn: {
        background: 'rgba(201, 162, 39, 0.1)',
        border: '2px solid rgba(201, 162, 39, 0.5)',
        color: '#E8D48A',
        padding: '10px 24px',
        borderRadius: '12px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '12px',
        fontFamily: "'Poppins', sans-serif",
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        position: 'relative',
        overflow: 'hidden'
    },
    btnText: {
        position: 'relative',
        zIndex: 2
    },
    btnShine: {
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        transition: 'left 0.5s ease'
    },
    signInButton: {
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 50%, #C9A227 100%)',
        backgroundSize: '200% 200%',
        color: '#0f0f1a',
        padding: '12px 28px',
        borderRadius: '12px',
        fontWeight: '700',
        fontSize: '13px',
        fontFamily: "'Poppins', sans-serif",
        textDecoration: 'none',
        boxShadow: '0 8px 25px rgba(201, 162, 39, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px'
    }
};

export default Navbar;

