import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

function Browse() {
    const { token } = useAuth();
    const { cart, addToCart, removeFromCart, isInCart, checkout } = useCart();
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/items', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setItems(res.data);
                setFilteredItems(res.data);
            } catch (err) {
                console.error("Failed to fetch items:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, [token]);

    useEffect(() => {
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.comment.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
    }, [searchTerm, items]);

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
            showMessage("Order Placed Successfully! Decisions recorded.", 'success');
            setShowCart(false);
        } else {
            showMessage(result.message, 'error');
        }
    };

    const showMessage = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 4000);
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

            {/* Hero Section */}
            <div style={{
                background: 'var(--royal-gradient)',
                padding: '80px 0',
                color: 'white',
                textAlign: 'center',
                marginBottom: '40px',
                boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.1)'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: '800',
                        marginBottom: '16px',
                        color: 'rgba(25, 123, 180, 0.94)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                        Premium Market Collection
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        opacity: 0.9,
                        maxWidth: '700px',
                        margin: '0 auto 32px',
                        color: 'rgba(25, 123, 180, 0.94)'
                    }}>
                        Curated selections for the decisive shopper. High-quality items, minimal stress.
                    </p>

                    {/* Search Bar */}
                    <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Search items by name or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px 24px',
                                paddingLeft: '48px',
                                borderRadius: '50px',
                                border: 'none',
                                fontSize: '16px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                outline: 'none'
                            }}
                        />
                        <span style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>🔍</span>
                    </div>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '80px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '700' }}>
                        {searchTerm ? `Search Results (${filteredItems.length})` : `All Products (${items.length})`}
                    </h2>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={() => setShowCart(!showCart)}
                            className="btn btn-primary"
                        >
                            🛒 Open Cart ({cart?.items?.length || 0})
                        </button>
                    </div>
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
                        zIndex: 2000,
                        fontWeight: '700',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                        animation: 'fadeIn 0.3s ease-out'
                    }}>
                        {message.text}
                    </div>
                )}

                {/* Cart Sidebar */}
                {showCart && (
                    <div className="glass" style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '450px',
                        height: '100vh',
                        background: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        animation: 'fadeIn 0.3s ease-out'
                    }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '24px', color: 'var(--text-primary)' }}>Your Cart</h2>
                            <button onClick={() => setShowCart(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--text-primary)' }}>×</button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            {!cart || cart.items.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
                                    <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛒</div>
                                    <h3 style={{ marginBottom: '8px' }}>Your cart is empty</h3>
                                    <p>Select some premium items to get started.</p>
                                </div>
                            ) : (
                                cart.items.map((cartItem) => (
                                    <div key={cartItem.item._id} className="fade-in" style={{
                                        display: 'flex',
                                        gap: '16px',
                                        marginBottom: '20px',
                                        padding: '16px',
                                        background: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        <img src={cartItem.item.image} alt={cartItem.item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{cartItem.item.name}</h3>
                                            <p style={{ fontSize: '15px', color: 'var(--royal-main)', fontWeight: '800' }}>${cartItem.item.price.toFixed(2)}</p>
                                            <button
                                                onClick={() => handleRemoveFromCart(cartItem.item._id)}
                                                className="btn-danger"
                                                style={{
                                                    marginTop: '12px',
                                                    padding: '4px 12px',
                                                    fontSize: '12px',
                                                    borderRadius: '6px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontWeight: '700'
                                                }}
                                            >
                                                Remove Selection
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart && cart.items.length > 0 && (
                            <div style={{ padding: '24px', background: 'white', borderTop: '2px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <span style={{ fontSize: '18px', fontWeight: '600' }}>Subtotal:</span>
                                    <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--royal-main)' }}>${cart.totalPrice?.toFixed(2) || '0.00'}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="btn btn-primary"
                                    style={{ width: '100%', padding: '16px', fontSize: '18px' }}
                                >
                                    Confirm Purchase
                                </button>
                                <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '12px', color: 'var(--text-secondary)' }}>
                                    By clicking purchase, you agree to our Terms of Shopping.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Backdrop */}
                {showCart && (
                    <div
                        onClick={() => setShowCart(false)}
                        style={{
                            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
                            zIndex: 999
                        }}
                    />
                )}

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0' }}>
                        <div style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-secondary)' }}>Loading inventory...</div>
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '100px 0' }}>
                        <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔍</div>
                        <h2 style={{ color: 'var(--text-secondary)' }}>No items found matching your search.</h2>
                        <button onClick={() => setSearchTerm('')} className="btn btn-secondary" style={{ marginTop: '20px' }}>Clear Search</button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                        {filteredItems.map((item, index) => {
                            const inCart = isInCart(item._id);

                            return (
                                <div key={item._id} className="card fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                                    <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        />
                                        <div style={{
                                            position: 'absolute', top: '16px', right: '16px',
                                            background: '#fff', color: 'var(--royal-dark)',
                                            padding: '8px 16px', borderRadius: '50px',
                                            fontWeight: '800', fontSize: '16px',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                        }}>
                                            ${item.price.toFixed(2)}
                                        </div>
                                        {inCart && (
                                            <div style={{
                                                position: 'absolute', top: '16px', left: '16px',
                                                background: 'var(--success)', color: 'white',
                                                padding: '8px 16px', borderRadius: '50px',
                                                fontWeight: '800', fontSize: '12px',
                                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                            }}>
                                                ✓ SELECTED
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ padding: '30px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>
                                            {item.name}
                                        </h3>
                                        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 2.5 }}>
                                            {item.comment}
                                        </p>

                                        <div style={{
                                            background: '#f8fafc', padding: '20px',
                                            borderRadius: '12px', borderLeft: '4px solid var(--royal-main)',
                                            fontSize: '16px', color: '#171b20ff',
                                            marginBottom: '24px', lineHeight: 2,
                                            fontStyle: 'none'
                                        }}>
                                            " {item.overthinkingComment} "
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                                            {inCart ? (
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                                    <button onClick={() => handleRemoveFromCart(item._id)} className="btn btn-secondary">
                                                        Remove from Cart
                                                    </button>
                                                    <button onClick={() => setShowCart(true)} className="btn btn-primary">
                                                        View Cart
                                                    </button>
                                                </div>
                                            ) : (
                                                <button onClick={() => handleAddToCart(item._id)} className="btn btn-primary">
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
