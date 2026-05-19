import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 3-5 business days across India. We also offer express shipping (1-2 days) in metro cities."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 15-day return and exchange policy. Items must be unworn, unwashed, and have original tags attached."
        },
        {
            question: "Do you ship internationally?",
            answer: "Currently, we only ship within India. We are working on expanding our logistics to support international orders soon!"
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive an email and SMS with the tracking link. You can also track it from your Profile dashboard."
        },
        {
            question: "What material are your tees made of?",
            answer: "Our t-shirts are made from 100% premium, high-density cotton blends designed for maximum comfort, breathability, and durability."
        }
    ];

    const toggleFaq = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>Help Center & FAQ</h1>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px' }}>
                Find answers to common questions about Nexwear.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            border: '1px solid #eee', 
                            borderRadius: '10px', 
                            overflow: 'hidden',
                            background: '#fff'
                        }}
                    >
                        <button 
                            onClick={() => toggleFaq(index)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '20px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                textAlign: 'left'
                            }}
                        >
                            {faq.question}
                            <span>{openIndex === index ? '−' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <div style={{ padding: '0 20px 20px', color: '#555', lineHeight: 1.6 }}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
