import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const result = await login(email, password);
        setLoading(false);
        if (result.success) {
            navigate('/browse');
        } else {
            setError(result.message || 'Login failed');
        }
    };

    return (
        <div style={styles.pageWrapper}>
            {/* Decorative Background Elements */}
            <div style={styles.bgPattern}></div>
            <div style={styles.goldAccent1}></div>
            <div style={styles.goldAccent2}></div>

            {/* Header/Logo Area */}
            <header style={styles.header}>
                <Link to="/" style={styles.logo}>
                    <span style={styles.logoIcon}>🛒</span>
                    <span style={styles.logoText}>DalChaal</span>
                </Link>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                <div className="fade-in" style={styles.card}>
                    {/* Card Header */}
                    <div style={styles.cardHeader}>
                        <h1 style={styles.title}>Welcome Back</h1>
                        <p style={styles.subtitle}>Sign in to continue shopping</p>
                    </div>

                    {/* Gold Divider */}
                    <div style={styles.divider}></div>

                    {/* Error Message */}
                    {error && (
                        <div style={styles.errorBox}>
                            <span style={styles.errorIcon}>⚠️</span>
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={onSubmit} style={styles.form}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                placeholder="Enter your email"
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Enter your password"
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.rememberRow}>
                            <label style={styles.checkboxLabel}>
                                <input type="checkbox" style={styles.checkbox} />
                                <span>Remember me</span>
                            </label>
                            <span style={styles.forgotLink}>Forgot password?</span>
                        </div>

                        <button
                            type="submit"
                            style={{
                                ...styles.button,
                                opacity: loading ? 0.7 : 1,
                                cursor: loading ? 'not-allowed' : 'pointer'
                            }}
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Footer */}
                    <div style={styles.footer}>
                        <span style={styles.footerText}>New to DalChaal?</span>
                        <Link to="/register" style={styles.registerLink}>
                            Create an account
                        </Link>
                    </div>
                </div>
            </main>

            {/* Bottom Tagline */}
            <footer style={styles.tagline}>
                <p>Premium Shopping Experience • Where Every Choice Matters</p>
            </footer>
        </div>
    );
}

const styles = {
    pageWrapper: {
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FFFEF7 0%, #F5E6C8 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
    },
    bgPattern: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201, 162, 39, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(201, 162, 39, 0.08) 0%, transparent 40%),
                          radial-gradient(circle at 40% 80%, rgba(201, 162, 39, 0.05) 0%, transparent 40%)`,
        pointerEvents: 'none'
    },
    goldAccent1: {
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
    },
    goldAccent2: {
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(201, 162, 39, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
    },
    header: {
        padding: '24px 40px',
        position: 'relative',
        zIndex: 10
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
    },
    logoIcon: {
        fontSize: '36px'
    },
    logoText: {
        fontSize: '24px',
        fontWeight: '700',
        fontFamily: "'Playfair Display', serif",
        color: '#1A1A1A',
        letterSpacing: '-0.5px'
    },
    main: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        zIndex: 10
    },
    card: {
        width: '100%',
        maxWidth: '440px',
        background: '#FFFFFF',
        borderRadius: '24px',
        padding: '48px 40px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 25px rgba(201, 162, 39, 0.1)',
        border: '1px solid rgba(201, 162, 39, 0.2)'
    },
    cardHeader: {
        textAlign: 'center',
        marginBottom: '24px'
    },
    title: {
        fontSize: '32px',
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: '8px',
        fontFamily: "'Playfair Display', serif"
    },
    subtitle: {
        fontSize: '15px',
        color: '#666666',
        fontWeight: '400'
    },
    divider: {
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #C9A227, transparent)',
        marginBottom: '32px'
    },
    errorBox: {
        background: '#FEF2F2',
        border: '1px solid #FECACA',
        color: '#B91C1C',
        padding: '14px 18px',
        borderRadius: '12px',
        marginBottom: '24px',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    errorIcon: {
        fontSize: '16px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    label: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#1A1A1A'
    },
    input: {
        width: '100%',
        padding: '16px 20px',
        borderRadius: '12px',
        border: '2px solid #E8E8E8',
        fontSize: '15px',
        fontFamily: "'Poppins', sans-serif",
        transition: 'all 0.3s ease',
        background: '#FAFAFA',
        outline: 'none'
    },
    rememberRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '4px'
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        color: '#666666',
        cursor: 'pointer'
    },
    checkbox: {
        width: '18px',
        height: '18px',
        accentColor: '#C9A227',
        cursor: 'pointer'
    },
    forgotLink: {
        fontSize: '14px',
        color: '#C9A227',
        fontWeight: '500',
        cursor: 'pointer'
    },
    button: {
        width: '100%',
        padding: '18px',
        borderRadius: '12px',
        border: 'none',
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 50%, #C9A227 100%)',
        color: '#1A1A1A',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Poppins', sans-serif",
        cursor: 'pointer',
        marginTop: '8px',
        boxShadow: '0 8px 25px rgba(201, 162, 39, 0.25)',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    footer: {
        marginTop: '32px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    footerText: {
        fontSize: '14px',
        color: '#666666'
    },
    registerLink: {
        fontSize: '15px',
        color: '#C9A227',
        fontWeight: '600',
        textDecoration: 'none'
    },
    tagline: {
        padding: '24px',
        textAlign: 'center',
        color: '#999999',
        fontSize: '13px',
        position: 'relative',
        zIndex: 10
    }
};

export default Login;
