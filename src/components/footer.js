import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--teal-dark)', color: '#e6faf9', padding: '2.5rem 0 1.5rem', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Poppins', sans-serif", color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem', borderBottom: 'none' }}>OZE Podkarpacie</h3>
          <p style={{ fontSize: '0.88rem', color: 'rgba(230,250,249,0.7)', lineHeight: 1.7 }}>Nowoczesny portal o energii odnawialnej na Podkarpaciu.</p>
        </div>
        <div>
          <h4 style={{ color: 'var(--teal-light)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: "'Poppins', sans-serif" }}>Menu</h4>
          <Link to="/" style={{ display: 'block', color: 'rgba(230,250,249,0.7)', fontSize: '0.88rem', marginBottom: '0.4rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'rgba(230,250,249,0.7)', fontSize: '0.88rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ color: 'var(--teal-light)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: "'Poppins', sans-serif" }}>Partner</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-light)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app →</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(230,250,249,0.15)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(230,250,249,0.4)' }}>© {year} OZE Podkarpacie</p>
      </div>
    </footer>
  );
};

export default Footer;
