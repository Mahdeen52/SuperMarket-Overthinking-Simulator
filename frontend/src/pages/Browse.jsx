<<<<<<< Updated upstream
=======
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ItemsService, DecisionsService } from '../api/services';
import Navbar from '../components/Navbar';

function Browse() {
    const { token } = useAuth();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await ItemsService.getAll();
                setItems(data);
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
            const data = await DecisionsService.create(itemId, action);
            setMessage({ text: data.message, type: action === 'buy' ? 'success' : 'neutral' });
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
        <div style={styles.pageWrapper}>
            <Navbar />

            <div className="container" style={styles.container}>
                {/* Page Header */}
                <div style={styles.header}>
                    <span style={styles.badge}>✨ Premium Selection</span>
                    <h1 style={styles.title}>Our Products</h1>
                    <p style={styles.subtitle}>
                        Carefully curated items for the discerning shopper.
                        Every choice tells a story.
                    </p>
                </div>

                {/* Toast Message */}
                {message && (
                    <div style={{
                        ...styles.toast,
                        background: message.type === 'error' ? '#FEE2E2' : '#D1FAE5',
                        color: message.type === 'error' ? '#B91C1C' : '#065F46',
                        border: `1px solid ${message.type === 'error' ? '#FECACA' : '#A7F3D0'}`
                    }}>
                        <span>{message.type === 'error' ? '❌' : '✓'}</span>
                        {message.text}
                    </div>
                )}

                {/* Products Grid */}
                {loading ? (
                    <div style={styles.loadingContainer}>
                        <div style={styles.spinner}></div>
                        <p>Loading premium products...</p>
                    </div>
                ) : (
                    <div style={styles.grid}>
                        {items.map((item, index) => (
                            <div
                                key={item._id}
                                className="card fade-in"
                                style={{
                                    ...styles.productCard,
                                    animationDelay: `${index * 0.08}s`
                                }}
                            >
                                {/* Product Image */}
                                <div style={styles.imageContainer}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={styles.productImage}
                                    />
                                    <div style={styles.priceBadge}>
                                        ৳{item.price}
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div style={styles.productInfo}>
                                    <h3 style={styles.productName}>{item.name}</h3>

                                    {item.comment && (
                                        <p style={styles.productComment}>"{item.comment}"</p>
                                    )}

                                    {/* Nutrition Info */}
                                    {item.nutritionInfo && (
                                        <div style={styles.nutritionBox}>
                                            <div style={styles.nutritionHeader}>Nutrition Information</div>
                                            <div style={styles.nutritionGrid}>
                                                <div style={styles.nutritionItem}>
                                                    <span style={styles.nutritionLabel}>Calorie</span>
                                                    <span style={styles.nutritionValue}>{item.nutritionInfo.calories}</span>
                                                </div>
                                                <div style={styles.nutritionItem}>
                                                    <span style={styles.nutritionLabel}>Protein</span>
                                                    <span style={styles.nutritionValue}>{item.nutritionInfo.protein}</span>
                                                </div>
                                                <div style={styles.nutritionItem}>
                                                    <span style={styles.nutritionLabel}>Carbs</span>
                                                    <span style={styles.nutritionValue}>{item.nutritionInfo.carbs}</span>
                                                </div>
                                                <div style={styles.nutritionItem}>
                                                    <span style={styles.nutritionLabel}>Fat</span>
                                                    <span style={styles.nutritionValue}>{item.nutritionInfo.fat}</span>
                                                </div>
                                            </div>
                                            {item.nutritionJoke && (
                                                <div style={styles.nutritionJoke}>{item.nutritionJoke}</div>
                                            )}
                                        </div>
                                    )}

                                    {/* Overthinking Comment Box */}
                                    <div style={styles.overthinkingBox}>
                                        <div style={styles.overthinkingHeader}>
                                            <span style={styles.overthinkingIcon}></span>
                                            <span style={styles.overthinkingLabel}>Overthinking Aspect</span>
                                        </div>
                                        <p style={styles.overthinkingText}>
                                            {item.overthinkingComment}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div style={styles.buttonGroup}>
                                        <button
                                            onClick={() => handleDecision(item._id, 'buy')}
                                            style={styles.buyButton}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => handleDecision(item._id, 'pass')}
                                            style={styles.passButton}
                                        >
                                            Pass
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

const styles = {
    pageWrapper: {
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FAFAFA 0%, #F5E6C8 100%)'
    },
    container: {
        padding: '48px 24px 80px'
    },
    header: {
        textAlign: 'center',
        marginBottom: '56px'
    },
    badge: {
        display: 'inline-block',
        padding: '8px 20px',
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 100%)',
        color: '#1A1A1A',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '13px',
        marginBottom: '20px',
        letterSpacing: '0.5px',
        boxShadow: '0 4px 15px rgba(201, 162, 39, 0.25)'
    },
    title: {
        fontSize: '42px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '16px',
        fontFamily: "'Playfair Display', serif"
    },
    subtitle: {
        fontSize: '17px',
        color: '#666666',
        maxWidth: '500px',
        margin: '0 auto',
        lineHeight: '1.7'
    },
    toast: {
        position: 'fixed',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '16px 32px',
        borderRadius: '12px',
        zIndex: 200,
        fontWeight: '600',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '15px'
    },
    loadingContainer: {
        textAlign: 'center',
        padding: '100px 0',
        color: '#666666'
    },
    spinner: {
        width: '40px',
        height: '40px',
        border: '3px solid #E8E8E8',
        borderTopColor: '#C9A227',
        borderRadius: '50%',
        margin: '0 auto 16px',
        animation: 'spin 1s linear infinite'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '32px'
    },
    productCard: {
        background: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #E8E8E8',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    imageContainer: {
        height: '240px',
        position: 'relative',
        overflow: 'hidden',
        background: '#FAFAFA'
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease'
    },
    priceBadge: {
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 100%)',
        color: '#1A1A1A',
        padding: '8px 18px',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '15px',
        boxShadow: '0 4px 15px rgba(201, 162, 39, 0.3)',
        fontFamily: "'Poppins', sans-serif"
    },
    productInfo: {
        padding: '28px'
    },
    productName: {
        fontSize: '22px',
        fontWeight: '600',
        marginBottom: '8px',
        color: '#1A1A1A',
        fontFamily: "'Playfair Display', serif"
    },
    productComment: {
        fontSize: '14px',
        color: '#888888',
        fontStyle: 'italic',
        marginBottom: '16px'
    },
    nutritionBox: {
        background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
        padding: '16px',
        borderRadius: '12px',
        border: '1px solid rgba(76, 175, 80, 0.3)',
        marginBottom: '16px'
    },
    nutritionHeader: {
        fontWeight: '600',
        fontSize: '13px',
        color: '#2E7D32',
        marginBottom: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    nutritionGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '12px'
    },
    nutritionItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 12px',
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '8px'
    },
    nutritionLabel: {
        fontSize: '12px',
        color: '#555555',
        fontWeight: '500'
    },
    nutritionValue: {
        fontSize: '13px',
        color: '#2E7D32',
        fontWeight: '700'
    },
    nutritionJoke: {
        fontSize: '12px',
        color: '#558B2F',
        fontStyle: 'italic',
        padding: '10px',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '8px',
        lineHeight: '1.6'
    },
    overthinkingBox: {
        background: 'linear-gradient(135deg, #FFFEF7 0%, #F5E6C8 100%)',
        padding: '20px',
        borderRadius: '14px',
        border: '1px solid rgba(201, 162, 39, 0.2)',
        marginBottom: '24px'
    },
    overthinkingHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '12px'
    },
    overthinkingIcon: {
        fontSize: '18px'
    },
    overthinkingLabel: {
        fontWeight: '600',
        fontSize: '13px',
        color: '#9A7B0A',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    overthinkingText: {
        fontSize: '14px',
        color: '#555555',
        lineHeight: '1.7'
    },
    buttonGroup: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px'
    },
    buyButton: {
        padding: '14px',
        borderRadius: '10px',
        border: 'none',
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 50%, #C9A227 100%)',
        color: '#1A1A1A',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 4px 15px rgba(201, 162, 39, 0.25)',
        transition: 'all 0.2s ease',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    passButton: {
        padding: '14px',
        borderRadius: '10px',
        border: '2px solid #C9A227',
        background: 'transparent',
        color: '#9A7B0A',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: "'Poppins', sans-serif",
        transition: 'all 0.2s ease',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    }
};

export default Browse;
>>>>>>> Stashed changes
