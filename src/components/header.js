import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header style={{ background: 'var(--bg)', borderBottom: '2px solid var(--teal)', boxShadow: '0 2px 10px rgba(14,165,160,0.08)', position: 'sticky', top: 0, zIndex: 100 }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.5rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
        <div style={{ width: 38, height: 38, borderRadius: 8, background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem' }}>💧</div>
        <div>
          <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: 'var(--teal-dark)' }}>OZE Podkarpacie</span>
          <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)' }}>Energia odnawialna regionu podkarpackiego</span>
        </div>
      </Link>
      <nav style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', fontFamily: "'Poppins', sans-serif" }}>Główna</Link>
        <Link to="/blog" style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', fontFamily: "'Poppins', sans-serif" }}>Artykuły</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ background: 'var(--teal)', color: '#fff', padding: '0.4rem 1rem', borderRadius: 6, fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Poppins', sans-serif", textDecoration: 'none' }}>
          Audyt →
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
