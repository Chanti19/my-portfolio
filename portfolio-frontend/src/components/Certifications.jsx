<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';

const Certifications = ({ theme, certificates }) => {
  if (!certificates) return null;

  return (
    <section id="certifications" className="snap-section" style={{ 
      minHeight: '80vh', 
      padding: '5rem 10% 4rem', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-start' 
    }}>
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Certifications</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {certificates.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ 
              background: theme.cardBackground, 
              border: `1px solid ${theme.border}`,
              borderRadius: '12px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '350px'
            }}
          >
            <div style={{ position: 'relative', marginBottom: '1.5rem', borderRadius: '16px', overflow: 'hidden', background: '#fff', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${theme.border}` }}>
               <img 
                 src={cert.image} 
                 alt={cert.title} 
                 style={{ width: '100%', height: '250px', objectFit: 'contain' }}
               />
                <div style={{ position: 'absolute', top: '10px', left: '10px', opacity: 0.1, fontSize: '1.5rem', fontWeight: 900 }}>
                   {(idx + 1).toString().padStart(2, '0')}
                </div>
            </div>

            <div style={{ flex: 1, marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.6rem', color: theme.text, lineHeight: '1.4' }}>{cert.title}</h3>
              <p style={{ color: theme.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{cert.issuer}</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 500, letterSpacing: '0.05em' }}>{cert.date}</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <a 
                  href={cert.certificateUrl || cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', flex: 1 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: theme.accent, color: '#fff', borderColor: theme.accent }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            width: '100%',
                            padding: '1.1rem',
                            background: 'transparent',
                            color: theme.accent,
                            border: `1.5px solid ${theme.accent}`,
                            borderRadius: '0',
                            cursor: 'pointer',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        View
                    </motion.button>
                </a>
                <a 
                  href={cert.image} 
                  style={{ textDecoration: 'none', flex: 1 }}
                  download={`Certificate_${cert.title.replace(/\s+/g, '_')}`}
                >
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: theme.accent, color: '#fff', borderColor: theme.accent }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            width: '100%',
                            padding: '1.1rem',
                            background: 'transparent',
                            color: theme.accent,
                            border: `1.5px solid ${theme.accent}`,
                            borderRadius: '0',
                            cursor: 'pointer',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download
                    </motion.button>
                </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
=======
import React from 'react';
import { motion } from 'framer-motion';

const Certifications = ({ theme, certificates }) => {
  if (!certificates) return null;

  return (
    <section id="certifications" className="snap-section" style={{ 
      minHeight: '80vh', 
      padding: '5rem 10% 4rem', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-start' 
    }}>
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Certifications</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {certificates.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ 
              background: theme.cardBackground, 
              border: `1px solid ${theme.border}`,
              borderRadius: '12px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '350px'
            }}
          >
            <div style={{ position: 'relative', marginBottom: '1.5rem', borderRadius: '16px', overflow: 'hidden', background: '#fff', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${theme.border}` }}>
               <img 
                 src={cert.image} 
                 alt={cert.title} 
                 style={{ width: '100%', height: '250px', objectFit: 'contain' }}
               />
                <div style={{ position: 'absolute', top: '10px', left: '10px', opacity: 0.1, fontSize: '1.5rem', fontWeight: 900 }}>
                   {(idx + 1).toString().padStart(2, '0')}
                </div>
            </div>

            <div style={{ flex: 1, marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.6rem', color: theme.text, lineHeight: '1.4' }}>{cert.title}</h3>
              <p style={{ color: theme.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{cert.issuer}</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 500, letterSpacing: '0.05em' }}>{cert.date}</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <a 
                  href={cert.certificateUrl || cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', flex: 1 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: theme.accent, color: '#fff', borderColor: theme.accent }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            width: '100%',
                            padding: '1.1rem',
                            background: 'transparent',
                            color: theme.accent,
                            border: `1.5px solid ${theme.accent}`,
                            borderRadius: '0',
                            cursor: 'pointer',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        View
                    </motion.button>
                </a>
                <a 
                  href={cert.image} 
                  style={{ textDecoration: 'none', flex: 1 }}
                  download={`Certificate_${cert.title.replace(/\s+/g, '_')}`}
                >
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: theme.accent, color: '#fff', borderColor: theme.accent }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            width: '100%',
                            padding: '1.1rem',
                            background: 'transparent',
                            color: theme.accent,
                            border: `1.5px solid ${theme.accent}`,
                            borderRadius: '0',
                            cursor: 'pointer',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download
                    </motion.button>
                </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
>>>>>>> 2922de6 (Updated portfolio content and fixed images)
