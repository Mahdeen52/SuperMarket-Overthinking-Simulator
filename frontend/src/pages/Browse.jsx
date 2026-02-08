import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

function Browse() {
    const { token } = useAuth();
    const { cart, addToCart, removeFromCart, isInCart, checkout } = useCart();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

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

    const handleAddToCart = async (itemId) => {
        const result = await addToCart(itemId);
        if (result.success) {
            showMessage(result.message, 'success');
        } else {
            showMessage(result.message, 'error');
        }
    };

    const handleRemoveFromCart = async (itemId) => {
        const result = await removeFromCart(itemId);
        if (result.success) {
            showMessage(result.message, result.overthinkingTriggered ? 'warning' : 'success');
        } else {
            showMessage(result.message, 'error');
        }
    };

    const handleCheckout = async () => {
        const result = await checkout();
        if (result.success) {
            showMessage(result.message, 'success');
            setShowCheckout(false);
            setShowCart(false);
        } else {
            showMessage(result.message, 'error');
        }
    };

    const showMessage = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    const getMessageColor = (type) => {
        switch (type) {
            case 'success': return '#10b981';
            case 'error': return '#ef4444';
            case 'warning': return '#f59e0b';
            default: return '#3b82f6';
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-page)' }}>
            <Navbar />

            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                    <div>
                        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: 'var(--royal-dark)' }}>
                            Premium Market
                        </h1>
                        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                            Select the finest items for your collection. Quality decisions matter.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowCart(!showCart)}
                        className="btn btn-primary"
                        style={{ position: 'relative' }}
                    >
                        🛒 View Cart ({cart?.items?.length || 0})
                    </button>
                </div>

                {message && (
                    <div style={{
                        position: 'fixed',
                        top: '100px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        padding: '16px 32px',
                        borderRadius: '50px',
                        background: getMessageColor(message.type),
                        color: 'white',
                        zIndex: 200,
                        fontWeight: '600',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        animation: 'slideUp 0.3s ease-out'
                    }}>
                        {message.text}
                    </div>
                )}

                {/* Cart Sidebar */}
                {showCart && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '450px',
                        height: '100vh',
                        background: 'white',
                        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)' }}>Your Cart</h2>
                            <button onClick={() => setShowCart(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            {!cart || cart.items.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
                                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</div>
                                    <p>Your cart is empty</p>
                                </div>
                            ) : (
                                cart.items.map((cartItem) => (
                                    <div key={cartItem.item._id} style={{
                                        display: 'flex',
                                        gap: '16px',
                                        marginBottom: '20px',
                                        padding: '16px',
                                        background: '#f9fafb',
                                        borderRadius: '8px'
                                    }}>
                                        <img src={cartItem.item.image} alt={cartItem.item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{cartItem.item.name}</h3>
                                            <p style={{ fontSize: '14px', color: 'var(--royal-main)', fontWeight: '700' }}>${cartItem.item.price.toFixed(2)}</p>
                                            <button
                                                onClick={() => handleRemoveFromCart(cartItem.item._id)}
                                                style={{
                                                    marginTop: '8px',
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#ef4444',
                                                    fontSize: '13px',
                                                    cursor: 'pointer',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart && cart.items.length > 0 && (
                            <div style={{ padding: '24px', borderTop: '1px solid #e5e7eb' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '18px', fontWeight: '700' }}>
                                    <span>Total:</span>
                                    <span style={{ color: 'var(--royal-main)' }}>${cart.totalPrice?.toFixed(2) || '0.00'}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Backdrop */}
                {showCart && (
                    <div
                        onClick={() => setShowCart(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 999
                        }}
                    />
                )}

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-secondary)' }}>
                        Loading inventory...
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                        {items.map((item, index) => {
                            const inCart = isInCart(item._id);

                            return (
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
                                        {inCart && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '16px',
                                                left: '16px',
                                                background: '#10b981',
                                                color: 'white',
                                                padding: '6px 14px',
                                                borderRadius: '30px',
                                                fontWeight: '700',
                                                fontSize: '12px',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                            }}>
                                                ✓ In Cart
                                            </div>
                                        )}
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
                                            {inCart ? (
                                                <>
                                                    <button
                                                        onClick={() => handleRemoveFromCart(item._id)}
                                                        className="btn btn-secondary"
                                                    >
                                                        Remove
                                                    </button>
                                                    <button
                                                        onClick={() => setShowCart(true)}
                                                        className="btn btn-primary"
                                                    >
                                                        View Cart
                                                    </button>
                                                </>
                                            ) : (
                                                <button
                                                    onClick={() => handleAddToCart(item._id)}
                                                    className="btn btn-primary"
                                                    style={{ gridColumn: '1 / -1' }}
                                                >
                                                    Add to Cart
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Browse;
