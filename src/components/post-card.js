import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: 'var(--bg)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(14,165,160,0.05)' }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,165,160,0.15)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 8px rgba(14,165,160,0.05)'; }}>
    <div style={{ height: 4, background: 'linear-gradient(90deg, var(--teal-dark), var(--teal-light))' }}></div>
    <div style={{ padding: '1.4rem' }}>
      {tags && tags[0] && (
        <span style={{ background: 'var(--teal-pale)', color: 'var(--teal-dark)', fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: 4, marginBottom: '0.5rem', display: 'inline-block', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Poppins', sans-serif" }}>{tags[0]}</span>
      )}
      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.05rem', fontWeight: 600, margin: '0.4rem 0 0.5rem', lineHeight: 1.35 }}>
        <Link to={`/blog${slug}`} style={{ color: 'var(--text)', textDecoration: 'none' }}>{title}</Link>
      </h2>
      {excerpt && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{excerpt}</p>}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <time style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{date}</time>
        <Link to={`/blog${slug}`} style={{ background: 'var(--teal)', color: '#fff', fontSize: '0.78rem', fontWeight: 600, padding: '0.25rem 0.7rem', borderRadius: 4, textDecoration: 'none', fontFamily: "'Poppins', sans-serif" }}>Czytaj →</Link>
      </div>
    </div>
  </article>
);

export default PostCard;
