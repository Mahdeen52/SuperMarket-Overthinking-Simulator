import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { OverthinkingService } from '../api/services';
import { useCart } from '../context/CartContext';
import mascotImg from '../assets/mascot.png';

function TheCritic() {
    const { cart } = useCart();
    const [comment, setComment] = useState("Scan the items! I'm watching your every choice...");
    const [isAnimating, setIsAnimating] = useState(false);
    const [loading, setLoading] = useState(false);

    const categories = ['Fresh Produce', 'Dairy & Eggs', 'Meat & Seafood', 'Bakery', 'Beverages', 'Snacks & Confectionery', 'Grocery', 'Frozen Foods'];

    const getNewComment = async () => {
        setLoading(true);
        setIsAnimating(false);
        try {
            let category;
            if (!cart || !cart.items || cart.items.length === 0) {
                category = 'Budget';
            } else {
                category = categories[Math.floor(Math.random() * categories.length)];
            }

            const res = await OverthinkingService.getComment(category);

            // Trigger animation after a small delay
            setTimeout(() => {
                setComment(res.comment);
                setIsAnimating(true);
                setLoading(false);
            }, 300);
        } catch (error) {
            console.error("Failed to get comment:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        setIsAnimating(true);
    }, []);

    return (
        <div style={styles.pageWrapper}>
            <Navbar />

            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    {/* The Critic Title */}
                    <div style={styles.header}>
                        <h1 style={styles.title}>The Overthinker's Corner</h1>
                        <p style={styles.subtitle}>Meet your inner critic. He's got opinions on everything you (might) buy.</p>
                    </div>

                    <div style={styles.criticSection}>
                        {/* Speech Bubble */}
                        <div style={{
                            ...styles.speechBubble,
                            opacity: isAnimating ? 1 : 0,
                            transform: isAnimating ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                        }}>
                            <div style={styles.bubbleText}>
                                {loading ? "Thinking..." : comment}
                            </div>
                            <div style={styles.bubbleTail}></div>
                        </div>

                        {/* Mascot Character */}
                        <div style={styles.mascotContainer}>
                            <img
                                src={mascotImg}
                                alt="The Overthinking Critic"
                                style={{
                                    ...styles.mascot,
                                    animation: isAnimating ? 'float 3s ease-in-out infinite' : 'none'
                                }}
                            />
                            <div style={styles.mascotShadow}></div>
                        </div>

                        {/* Interaction Button */}
                        <button
                            onClick={getNewComment}
                            style={styles.actionBtn}
                            disabled={loading}
                        >
                            {loading ? "Consulting the Gears..." : "What are you overthinking?"}
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes pulse-gold {
                    0% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0.4); }
                    70% { box-shadow: 0 0 0 20px rgba(201, 162, 39, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0); }
                }
            `}</style>
        </div>
    );
}

const styles = {
    pageWrapper: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
        color: '#fff',
        overflow: 'hidden'
    },
    container: {
        padding: '60px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
    },
    header: {
        textAlign: 'center'
    },
    title: {
        fontSize: '48px',
        fontFamily: "'Playfair Display', serif",
        background: 'linear-gradient(135deg, #FFFFFF 0%, #C9A227 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '15px'
    },
    subtitle: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: '18px',
        maxWidth: '600px',
        margin: '0 auto'
    },
    criticSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
        position: 'relative',
        width: '100%'
    },
    speechBubble: {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        border: '2px solid rgba(201, 162, 39, 0.3)',
        borderRadius: '30px',
        padding: '30px 40px',
        maxWidth: '80%',
        position: 'relative',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.1)'
    },
    bubbleText: {
        fontSize: '22px',
        fontStyle: 'italic',
        textAlign: 'center',
        lineHeight: '1.5',
        color: '#E8D48A'
    },
    bubbleTail: {
        position: 'absolute',
        bottom: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0',
        height: '0',
        borderLeft: '20px solid transparent',
        borderRight: '20px solid transparent',
        borderTop: '20px solid rgba(201, 162, 39, 0.3)'
    },
    mascotContainer: {
        position: 'relative',
        width: '300px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mascot: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        zIndex: 2,
        filter: 'drop-shadow(0 0 30px rgba(201, 162, 39, 0.3))'
    },
    mascotShadow: {
        position: 'absolute',
        bottom: '-20px',
        width: '150px',
        height: '30px',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '50%',
        filter: 'blur(10px)',
        zIndex: 1
    },
    actionBtn: {
        padding: '18px 36px',
        borderRadius: '50px',
        border: 'none',
        background: 'linear-gradient(135deg, #C9A227 0%, #E8D48A 50%, #C9A227 100%)',
        backgroundSize: '200% 200%',
        color: '#0f0f1a',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(201, 162, 39, 0.4)',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        animation: 'pulse-gold 2s infinite'
    }
};

export default TheCritic;
