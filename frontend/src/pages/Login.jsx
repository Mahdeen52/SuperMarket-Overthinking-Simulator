import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/browse');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: 'url(/bg-login.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
        }}>
            {/* Dark Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 1
            }}></div>

            <div style={{ position: 'relative', zIndex: 10 }}>
                <Navbar transparent />
            </div>

            <div className="container" style={{
                position: 'relative',
                zIndex: 5,
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '80px'
            }}>
                <div className="fade-in glass" style={{
                    width: '100%',
                    maxWidth: '480px',
                    padding: '60px 50px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    borderRadius: '24px',
                    color: '#fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h1 style={{
                            fontSize: '42px',
                            fontWeight: '800',
                            color: '#fff',
                            letterSpacing: '-1px',
                            marginBottom: '10px'
                        }}>
                            Welcome Back
                        </h1>
                        <p style={{ color: '#94a3b8', fontSize: '16px' }}>Sign in to your premium collection</p>
                    </div>

                    {error && (
                        <div style={{
                            background: '#e87c03',
                            color: 'white',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            marginBottom: '16px',
                            fontSize: '14px'
                        }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                placeholder="Email or phone number"
                                style={styles.input}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                                style={styles.input}
                                required
                            />
                        </div>

                        <button type="submit" style={styles.button}>
                            Sign In
                        </button>
                    </form>

                    <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#b3b3b3' }}>
                        <div>
                            <input type="checkbox" id="remember" style={{ marginRight: '5px' }} />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <span style={{ cursor: 'pointer' }}>Need help?</span>
                    </div>

                    <div style={{ marginTop: '40px', color: '#737373', fontSize: '16px' }}>
                        New to Overthinking Simulator?{' '}
                        <Link to="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>
                            Sign up now.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    input: {
        width: '100%',
        padding: '16px 20px',
        borderRadius: '8px',
        border: '1px solid #444',
        background: 'rgba(51, 51, 51, 0.9)',
        color: '#fff',
        fontSize: '16px',
        outline: 'none',
        transition: 'all 0.2s'
    },
    button: {
        width: '100%',
        padding: '16px',
        borderRadius: '8px',
        border: 'none',
        background: 'var(--royal-gradient)',
        color: 'white',
        fontSize: '18px',
        fontWeight: '800',
        cursor: 'pointer',
        marginTop: '24px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    }
};

export default Login;
