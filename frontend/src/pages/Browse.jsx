import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

function Browse() {
    const { token } = useAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/items', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setItems(res.data);
            } catch (err) {
                console.error("Failed to fetch items:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, [token]);

    const handleDecision = async (itemId, action) => {
        try {
            const res = await axios.post('http://localhost:5000/api/decisions',
                { itemId, action },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setMessage({ text: res.data.message, type: action === 'buy' ? 'success' : 'neutral' });
            setTimeout(() => setMessage(null), 3000);
        } catch (err) {
            setMessage({
                text: err.response?.data?.message || "Decision failed",
                type: 'error'
            });
            setTimeout(() => setMessage(null), 3000);
        }
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            <Navbar />

            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: 'var(--royal-dark)' }}>
                        Premium Market
                    </h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Select the finest items for your collection. Quality decisions matter.
                    </p>
                </div>

                {message && (
                    <div style={{
                        position: 'fixed',
                        top: '100px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        padding: '16px 32px',
                        borderRadius: '50px',
                        background: message.type === 'error' ? '#ef4444' : '#10b981',
                        color: 'white',
                        zIndex: 200,
                        fontWeight: '600',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        animation: 'slideUp 0.3s ease-out'
                    }}>
                        {message.text}
                    </div>
                )}

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-secondary)' }}>
                        Loading inventory...
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                        {items.map((item, index) => (
                            <div key={item._id} className="card fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                <div style={{ height: '220px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' }}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        background: 'rgba(30, 64, 175, 0.9)',
                                        color: 'white',
                                        padding: '6px 14px',
                                        borderRadius: '30px',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                    }}>
                                        ${item.price.toFixed(2)}
                                    </div>
                                </div>

                                <div style={{ padding: '24px' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>
                                        {item.name}
                                    </h3>
                                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', fontStyle: 'italic' }}>
                                        "{item.comment}"
                                    </p>

                                    <div style={{
                                        background: '#f8fafc',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid var(--royal-main)',
                                        fontSize: '13px',
                                        color: '#334155',
                                        marginBottom: '24px',
                                        lineHeight: 1.6
                                    }}>
                                        {item.overthinkingComment}
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <button
                                            onClick={() => handleDecision(item._id, 'buy')}
                                            className="btn btn-primary"
                                        >
                                            Purchase
                                        </button>
                                        <button
                                            onClick={() => handleDecision(item._id, 'pass')}
                                            className="btn btn-secondary"
                                        >
                                            Decline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Browse;
