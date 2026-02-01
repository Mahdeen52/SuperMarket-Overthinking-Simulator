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

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
                <Navbar />
                <div style={styles.loading}>Loading your overthinking data...</div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
            <Navbar />

            <main style={styles.main}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Your Neurosis Dashboard</h1>
                    <p style={styles.subtitle}>Welcome back, {user?.username}. Let's look at the numbers.</p>
                </div>

                <div style={styles.statsGrid}>
                    {/* Decisions Made Card */}
                    <div style={styles.statCard}>
                        <h3 style={styles.statTitle}>Decisions Made</h3>
                        <div style={styles.statValue}>{stats?.decisionsMade}</div>
                        <p style={styles.statDesc}>Times you actually did something.</p>
                    </div>

                    {/* Overthinking Count Card */}
                    <div style={styles.statCard}>
                        <h3 style={styles.statTitle}>Overthinking Count</h3>
                        <div style={{ ...styles.statValue, color: '#f59e0b' }}>{stats?.overthinkingCount}</div>
                        <p style={styles.statDesc}>Times you bailed out.</p>
                    </div>

                    {/* Score Card */}
                    <div style={styles.statCard}>
                        <h3 style={styles.statTitle}>Overthinking Score</h3>
                        <div style={{ ...styles.statValue, color: '#ef4444' }}>
                            {stats?.overthinkingScore}%
                        </div>
                        <p style={styles.statDesc}>
                            {stats?.overthinkingScore > 50
                                ? "You hesitate more than you act."
                                : "Surprisingly decisive!"}
                        </p>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Recent Choices</h2>
                    <div style={styles.activityList}>
                        {stats?.recentActivity.length === 0 ? (
                            <p style={{ color: '#64748b' }}>No activity yet. Go browse some items!</p>
                        ) : (
                            stats?.recentActivity.map((activity) => (
                                <div key={activity._id} style={styles.activityItem}>
                                    <img src={activity.item?.image} alt="" style={styles.activityImg} />
                                    <div style={styles.activityContent}>
                                        <p style={styles.activityText}>
                                            You <span style={{
                                                fontWeight: 'bold',
                                                color: activity.action === 'buy' ? '#166534' : '#991b1b'
                                            }}>
                                                {activity.action === 'buy' ? 'BOUGHT' : 'REJECTED'}
                                            </span>
                                            {' '}{activity.item?.name}
                                        </p>
                                        <span style={styles.date}>
                                            {new Date(activity.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
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
        marginBottom: '40px',
    },
    title: {
        fontSize: '36px',
        color: '#1e293b',
        marginBottom: '10px'
    },
    subtitle: {
        fontSize: '18px',
        color: '#64748b'
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
    },
    statCard: {
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        textAlign: 'center'
    },
    statTitle: {
        fontSize: '16px',
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '10px'
    },
    statValue: {
        fontSize: '48px',
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: '5px'
    },
    statDesc: {
        fontSize: '14px',
        color: '#94a3b8'
    },
    section: {
        background: 'white',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)'
    },
    sectionTitle: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#1e293b'
    },
    activityList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    activityItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '10px',
        borderBottom: '1px solid #f1f5f9'
    },
    activityImg: {
        width: '50px',
        height: '50px',
        borderRadius: '8px',
        objectFit: 'cover'
    },
    activityContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    activityText: {
        fontSize: '16px',
        color: '#334155'
    },
    date: {
        fontSize: '12px',
        color: '#94a3b8'
    },
    loading: {
        textAlign: 'center',
        padding: '100px',
        fontSize: '24px',
        color: '#64748b'
    }
};

export default Dashboard;
