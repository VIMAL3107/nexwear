import React, { useState } from 'react';

const AIStudio = () => {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImage, setGeneratedImage] = useState(null);

    const handleGenerate = () => {
        setIsGenerating(true);
        // Mock AI generation
        setTimeout(() => {
            setGeneratedImage('https://via.placeholder.com/500?text=AI+Generated+Design');
            setIsGenerating(false);
        }, 3000);
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>Nexwear AI Studio</h1>
                <p>Describe your vision, and our AI will create a unique design for your premium tee.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '16px' }}>
                    <h3>1. Describe your design</h3>
                    <textarea 
                        rows="5"
                        placeholder="E.g. A futuristic cyberpunk tiger with neon blue highlights, minimalist style..."
                        style={{ width: '100%', marginTop: '15px', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    ></textarea>
                    
                    <div style={{ marginTop: '20px' }}>
                        <h3>2. Choose Style</h3>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <button className="btn" style={{ background: '#eee' }}>Cyberpunk</button>
                            <button className="btn" style={{ background: '#eee' }}>Vintage</button>
                            <button className="btn" style={{ background: '#eee' }}>Minimalist</button>
                        </div>
                    </div>

                    <button 
                        className="btn-primary" 
                        style={{ width: '100%', marginTop: '30px', padding: '15px' }}
                        onClick={handleGenerate}
                        disabled={isGenerating}
                    >
                        {isGenerating ? 'AI is thinking...' : 'Generate Design'}
                    </button>
                </div>

                <div style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    background: '#fff',
                    position: 'relative'
                }}>
                    {generatedImage ? (
                        <div style={{ textAlign: 'center' }}>
                            <img src={generatedImage} alt="AI Result" style={{ maxWidth: '100%', borderRadius: '12px' }} />
                            <button className="btn-primary" style={{ marginTop: '20px' }}>Use this Design</button>
                        </div>
                    ) : (
                        <p style={{ color: '#999' }}>{isGenerating ? 'Creating magic...' : 'Your design will appear here'}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIStudio;
