import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [status, setStatus] = useState('Checking backend...');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/status')
            .then(res => setStatus(res.data.message))
            .catch(err => {
                setError('Backend Connection Failed');
                setStatus('Offline');
            });
    }, []);

    return (
        <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
            <h1>🛒 Supermarket Overthinking Simulator</h1>
            <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h2>System Status</h2>
                <p style={{ color: error ? 'red' : 'green', fontWeight: 'bold' }}>
                    {error || status}
                </p>
            </div>
        </div>
    );
}

export default App;
