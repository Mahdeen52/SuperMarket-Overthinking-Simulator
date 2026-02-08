import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

function Dashboard() {
    const { token, user } = useAuth();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/dashboard/stats', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setStats(res.data);
            } catch (err) {
                console.error("Failed to fetch stats:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, [token]);

    const StatCard = ({ title, value, subtext, color, icon }) => (
        <div className="card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '80px', opacity: 0.05, transform: 'rotate(15deg)' }}>{icon}</div>
            <h3 style={{ fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px', letterSpacing: '1px' }}>
                {title}
            </h3>
            <div style={{ fontSize: '56px', fontWeight: '800', color: color || 'var(--text-primary)', lineHeight: 1, marginBottom: '12px' }}>
                {value}
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '500' }}>{subtext}</p>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-page)' }}>
            <Navbar />

            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{
                    marginBottom: '50px',
                    padding: '40px',
                    background: 'var(--royal-gradient)',
                    borderRadius: '24px',
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(30, 58, 138, 0.15)'
                }}>
                    <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'white', marginBottom: '8px' }}>Analytics Dashboard</h1>
                    <p style={{ fontSize: '18px', opacity: 0.9 }}>Welcome back, <span style={{ fontWeight: '800' }}>{user?.username}</span>. Here's your shopping behavior analysis.</p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-secondary)' }}>
                        <div style={{ fontSize: '24px', fontWeight: '600' }}>Gathering insights...</div>
                    </div>
                ) : (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '50px' }}>
                            <StatCard
                                title="Total Decisions"
                                value={stats?.decisionsMade}
                                subtext="Items analyzed and processed"
                                color="var(--royal-main)"
                                icon="📈"
                            />
                            <StatCard
                                title="Hesitations"
                                value={stats?.overthinkingCount}
                                subtext="Items removed after selection"
                                color="#f59e0b"
                                icon="🤔"
                            />
                            <StatCard
                                title="Anxiety Level"
                                value={`${stats?.overthinkingScore}%`}
                                subtext={stats?.overthinkingScore > 50 ? "High overthinking detected" : "Decisive mindset confirmed"}
                                color={stats?.overthinkingScore > 50 ? "#ef4444" : "#10b981"}
                                icon="🧠"
                            />
                        </div>

                        <div className="card" style={{ marginBottom: '80px' }}>
                            <div style={{ padding: '32px', background: '#f8fafc', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)' }}>Behavioral Activity Log</h2>
                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '600' }}>Last 10 Actions</span>
                            </div>
                            <div>
                                {stats?.recentActivity.length === 0 ? (
                                    <div style={{ padding: '80px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📝</div>
                                        <p style={{ fontSize: '18px' }}>No recent activity to analyze yet.</p>
                                    </div>
                                ) : (
                                    stats?.recentActivity.map((activity) => (
                                        <div key={activity._id} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '24px 32px',
                                            borderBottom: '1px solid #f1f5f9',
                                            transition: 'background 0.2s',
                                            cursor: 'default'
                                        }} onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                                            <div style={{ width: '60px', height: '60px', marginRight: '24px', position: 'relative' }}>
                                                <img src={activity.item?.image} alt="" style={{ width: '100%', height: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: '-4px',
                                                    right: '-4px',
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    background: activity.action === 'buy' ? 'var(--success)' : 'var(--warning)',
                                                    border: '3px solid white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '12px'
                                                }}>
                                                    {activity.action === 'buy' ? '✓' : '!'}
                                                </div>
                                            </div>

                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '18px', marginBottom: '4px' }}>
                                                    {activity.item?.name}
                                                </div>
                                                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                                                    {activity.action === 'buy' ? (
                                                        <span style={{ color: 'var(--success)' }}>Confirmed Purchase</span>
                                                    ) : (
                                                        <span style={{ color: 'var(--warning)' }}>Reflected & Returned</span>
                                                    )} • {new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                            </div>

                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontWeight: '800', fontSize: '18px', color: activity.action === 'buy' ? 'var(--royal-main)' : 'var(--text-secondary)' }}>
                                                    {activity.action === 'buy' ? '-$' + activity.item?.price.toFixed(2) : '$0.00'}
                                                </div>
                                                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px', textTransform: 'uppercase', fontWeight: '700' }}>
                                                    {activity.action === 'buy' ? 'Debit' : 'No Impact'}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
