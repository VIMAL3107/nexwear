import React, { useState } from 'react';

const SizingAssistant = () => {
    const [stats, setStats] = useState({ height: '', weight: '', fit: 'Regular' });
    const [recommendation, setRecommendation] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        // Mock AI logic
        if (stats.weight > 80) setRecommendation('XL');
        else if (stats.weight > 70) setRecommendation('L');
        else if (stats.weight > 60) setRecommendation('M');
        else setRecommendation('S');
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '600px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>AI Sizing Assistant</h1>
                <p>Not sure about your size? Our AI analyzes your physical attributes to recommend the perfect fit.</p>
            </div>

            <form onSubmit={handleCalculate} style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Height (cm)</label>
                    <input 
                        type="number" 
                        placeholder="e.g. 175"
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setStats({...stats, height: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Weight (kg)</label>
                    <input 
                        type="number" 
                        placeholder="e.g. 75"
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setStats({...stats, weight: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Preferred Fit</label>
                    <select 
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                        onChange={(e) => setStats({...stats, fit: e.target.value})}
                    >
                        <option>Regular</option>
                        <option>Slim Fit</option>
                        <option>Oversized</option>
                    </select>
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '15px' }}>Get My Size</button>
            </form>

            {recommendation && (
                <div style={{ marginTop: '40px', padding: '30px', background: '#e6f4ea', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ color: '#1e7e34' }}>Your Recommended Size: {recommendation}</h2>
                    <p style={{ marginTop: '10px' }}>Based on your {stats.height}cm height and {stats.weight}kg weight, an <strong>{recommendation} ({stats.fit})</strong> will fit you best.</p>
                    <button className="btn-primary" style={{ marginTop: '20px' }}>Add {recommendation} to Cart</button>
                </div>
            )}
        </div>
    );
};

export default SizingAssistant;
