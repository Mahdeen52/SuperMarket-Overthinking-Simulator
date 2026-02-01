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

    const StatCard = ({ title, value, subtext, color }) => (
        <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '12px' }}>
                {title}
            </h3>
            <div style={{ fontSize: '48px', fontWeight: '800', color: color || 'var(--text-primary)', lineHeight: 1, marginBottom: '8px' }}>
                {value}
            </div>
            <p style={{ fontSize: '14px', color: '#64748b' }}>{subtext}</p>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-page)' }}>
            <Navbar />

            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--royal-dark)' }}>Dashboard Overview</h1>
                    <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginTop: '4px' }}>Welcome back, {user?.username}. Here is your analysis.</p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '60px' }}>Loading analytics...</div>
                ) : (
                    <>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                            <StatCard
                                title="Total Decisions"
                                value={stats?.decisionsMade}
                                subtext="Items processed"
                                color="var(--royal-main)"
                            />
                            <StatCard
                                title="Hesitations"
                                value={stats?.overthinkingCount}
                                subtext="Items put back on shelf"
                                color="#f59e0b"
                            />
                            <StatCard
                                title="Analysis Paralysis"
                                value={`${stats?.overthinkingScore}%`}
                                subtext={stats?.overthinkingScore > 50 ? "High anxiety detected" : "Within normal limits"}
                                color={stats?.overthinkingScore > 50 ? "#dc2626" : "#059669"}
                            />
                        </div>

                        <div className="card">
                            <div style={{ padding: '24px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>Recent Activity Log</h2>
                            </div>
                            <div>
                                {stats?.recentActivity.length === 0 ? (
                                    <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>No recent activity found.</div>
                                ) : (
                                    stats?.recentActivity.map((activity) => (
                                        <div key={activity._id} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '20px 24px',
                                            borderBottom: '1px solid #f1f5f9',
                                            transition: 'background 0.2s'
                                        }}>
                                            <div style={{ width: '48px', height: '48px', marginRight: '20px', position: 'relative' }}>
                                                <img src={activity.item?.image} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: '-5px',
                                                    right: '-5px',
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    background: activity.action === 'buy' ? '#10b981' : '#f59e0b',
                                                    border: '2px solid white'
                                                }}></div>
                                            </div>

                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>
                                                    {activity.item?.name}
                                                </div>
                                                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                    {activity.action === 'buy' ? 'Purchased' : 'Returned to shelf'} • {new Date(activity.date).toLocaleDateString()}
                                                </div>
                                            </div>

                                            <div style={{ fontWeight: '700', color: activity.action === 'buy' ? 'var(--royal-main)' : 'var(--text-secondary)' }}>
                                                {activity.action === 'buy' ? '-$' + activity.item?.price.toFixed(2) : '$0.00'}
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
