import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

function Browse() {
    const { token } = useAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
            <Navbar />

            <main style={styles.main}>
                <div style={styles.header}>
                    <h1 style={styles.title}>The Grocery Aisle</h1>
                    <p style={styles.subtitle}>Choose wisely. Or don't. It probably matters.</p>
                </div>

                {loading ? (
                    <div style={styles.loading}>Loading choices...</div>
                ) : (
                    <div style={styles.grid}>
                        {items.map((item, index) => (
                            <div
                                key={item._id}
                                className="fade-in"
                                style={{
                                    ...styles.card,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div style={styles.imageContainer}>
                                    <img src={item.image} alt={item.name} style={styles.image} />
                                    <span style={styles.price}>${item.price.toFixed(2)}</span>
                                </div>

                                <div style={styles.content}>
                                    <span style={styles.category}>{item.catrgory || item.category}</span>
                                    <h3 style={styles.itemName}>{item.name}</h3>
                                    <p style={styles.comment}>"{item.comment}"</p>

                                    <div style={styles.overthinkingBox}>
                                        <p style={styles.overthinkingText}>🧠 {item.overthinkingComment}</p>
                                    </div>

                                    <button style={styles.buyBtn}>
                                        Buy Now (Maybe?)
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

const styles = {
    main: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px',
    },
    title: {
        fontSize: '48px',
        marginBottom: '10px',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    subtitle: {
        fontSize: '18px',
        color: '#64748b'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
    },
    card: {
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid rgba(0,0,0,0.03)',
        cursor: 'default'
    },
    imageContainer: {
        height: '200px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    price: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'white',
        padding: '6px 12px',
        borderRadius: '30px',
        fontWeight: '700',
        fontSize: '14px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    content: {
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },
    category: {
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '700',
        color: '#94a3b8'
    },
    itemName: {
        fontSize: '20px',
        color: '#1e293b'
    },
    comment: {
        fontSize: '15px',
        color: '#64748b',
        fontStyle: 'italic',
    },
    overthinkingBox: {
        background: '#f1f5f9',
        padding: '12px',
        borderRadius: '10px',
        marginTop: '5px',
        borderLeft: '4px solid #667eea'
    },
    overthinkingText: {
        fontSize: '13px',
        color: '#475569',
        lineHeight: '1.5'
    },
    buyBtn: {
        marginTop: '15px',
        width: '100%',
        padding: '14px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        fontWeight: '600',
        fontSize: '16px',
        boxShadow: '0 4px 12px rgba(118, 75, 162, 0.25)',
    },
    loading: {
        textAlign: 'center',
        padding: '50px',
        fontSize: '20px',
        color: '#64748b'
    }
};

export default Browse;
