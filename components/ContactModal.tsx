'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            }, 3000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease-out'
    };

    const modalStyle: React.CSSProperties = {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        width: '100%',
        maxWidth: '550px',
        padding: '30px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        animation: 'zoomIn 0.3s ease-out',
        color: '#1f2937'
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        backgroundColor: '#f9fafb',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '12px 16px',
        color: '#111827',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.2s',
        marginTop: '6px'
    };

    const labelStyle: React.CSSProperties = {
        display: 'block',
        fontSize: '12px',
        fontWeight: 600,
        color: '#4b5563',
        marginLeft: '4px'
    };

    return createPortal(
        <div style={overlayStyle} onClick={onClose}>
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .contact-input:focus {
            border-color: #3b82f6 !important;
            background-color: #ffffff !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
          .contact-input::placeholder {
            color: #9ca3af;
          }
        `}
            </style>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'transparent',
                        border: 'none',
                        color: '#6b7280',
                        cursor: 'pointer',
                        padding: '5px'
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div style={{ marginBottom: '25px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#111827' }}>Talk to Us</h2>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Fill out the form below and we'll get back to you shortly.</p>
                </div>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <div style={{
                            width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#dcfce7',
                            color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Message Sent!</h3>
                        <p style={{ color: '#6b7280' }}>Check your email for confirmation.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                            <div>
                                <label style={labelStyle}>First Name</label>
                                <input
                                    type="text"
                                    required
                                    className="contact-input"
                                    style={inputStyle}
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Last Name</label>
                                <input
                                    type="text"
                                    required
                                    className="contact-input"
                                    style={inputStyle}
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                            <div>
                                <label style={labelStyle}>Email</label>
                                <input
                                    type="email"
                                    required
                                    className="contact-input"
                                    style={inputStyle}
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Phone</label>
                                <input
                                    type="tel"
                                    required
                                    className="contact-input"
                                    style={inputStyle}
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={labelStyle}>Message</label>
                            <textarea
                                required
                                rows={4}
                                className="contact-input"
                                style={{ ...inputStyle, resize: 'none' }}
                                placeholder="How can we help you?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {status === 'error' && (
                            <p style={{ color: '#f87171', fontSize: '14px', textAlign: 'center', marginBottom: '15px' }}>
                                Something went wrong. Please try again.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            style={{
                                width: '100%',
                                backgroundColor: '#2563eb',
                                color: 'white',
                                fontWeight: 600,
                                padding: '12px',
                                borderRadius: '8px',
                                border: 'none',
                                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                opacity: status === 'loading' ? 0.7 : 1,
                                transition: 'background-color 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>
        </div>,
        document.body
    );
}
