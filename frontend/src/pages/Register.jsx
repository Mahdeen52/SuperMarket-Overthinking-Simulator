import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const { username, email, password, confirmPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await register(username, email, password);
            navigate('/browse');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
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
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.6)',
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
                paddingBottom: '80px',
                paddingTop: '20px'
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
                            Create Account
                        </h1>
                        <p style={{ color: '#94a3b8', fontSize: '16px' }}>Join the elite shoppers community</p>
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
                                type="text"
                                name="username"
                                value={username}
                                onChange={onChange}
                                placeholder="Username"
                                style={styles.input}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                placeholder="Email address"
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

                        <div>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={onChange}
                                placeholder="Confirm Password"
                                style={styles.input}
                                required
                            />
                        </div>

                        <button type="submit" style={styles.button}>
                            Start Overthinking
                        </button>
                    </form>

                    <div style={{ marginTop: '40px', color: '#737373', fontSize: '16px' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>
                            Sign in.
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

export default Register;
