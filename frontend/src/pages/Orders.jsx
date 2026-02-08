import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

function Orders() {
    const { token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/orders', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setOrders(res.data);
            } catch (err) {
                console.error("Failed to fetch orders:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, [token]);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-page)' }}>
            <Navbar />

            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{ marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: 'var(--royal-dark)' }}>
                        Order History
                    </h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
                        View all your past purchases
                    </p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-secondary)' }}>
                        Loading orders...
                    </div>
                ) : orders.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
                        <div style={{ fontSize: '64px', marginBottom: '16px' }}>📦</div>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>
                            No orders yet
                        </h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Start shopping to see your orders here
                        </p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {orders.map((order) => (
                            <div key={order._id} className="card">
                                <div style={{ padding: '24px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                                            Order #{order._id.slice(-8)}
                                        </h3>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--royal-main)' }}>
                                            ${order.totalPrice.toFixed(2)}
                                        </div>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            background: order.status === 'completed' ? '#dcfce7' : '#fef3c7',
                                            color: order.status === 'completed' ? '#166534' : '#92400e',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            marginTop: '8px'
                                        }}>
                                            {order.status.toUpperCase()}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '24px' }}>
                                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '16px', textTransform: 'uppercase' }}>
                                        Items ({order.items.length})
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {order.items.map((orderItem, index) => (
                                            <div key={index} style={{
                                                display: 'flex',
                                                gap: '16px',
                                                padding: '12px',
                                                background: '#f9fafb',
                                                borderRadius: '8px'
                                            }}>
                                                {orderItem.item?.image && (
                                                    <img
                                                        src={orderItem.item.image}
                                                        alt={orderItem.name}
                                                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                                                    />
                                                )}
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                        {orderItem.name}
                                                    </div>
                                                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                                        Quantity: {orderItem.quantity}
                                                    </div>
                                                </div>
                                                <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--royal-main)' }}>
                                                    ${(orderItem.price * orderItem.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {order.shippingAddress && (
                                        <div style={{ marginTop: '20px', padding: '16px', background: '#f1f5f9', borderRadius: '8px' }}>
                                            <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                                                Shipping Address
                                            </h4>
                                            <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                                                {order.shippingAddress.street}<br />
                                                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
                                                {order.shippingAddress.country}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orders;
