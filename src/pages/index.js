import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Strona główna" description="OZE Podkarpacie — nowoczesny portal o energii odnawialnej w regionie" siteName="OZE Podkarpacie" />
      <div style={{ background: 'linear-gradient(135deg, var(--teal-pale), #fff)', borderBottom: '2px solid var(--border)', padding: '3.5rem 0 3rem', marginBottom: '3rem' }}>
        <div className="container">
          <span style={{ background: 'var(--teal)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.7rem', borderRadius: 4, fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>Portal OZE</span>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--teal-dark)', margin: '0.75rem 0 1rem', lineHeight: 1.2 }}>
            Energia odnawialna<br/>na Podkarpaciu
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '560px', marginBottom: '1.5rem' }}>
            Aktualne informacje o fotowoltaice, wietrze, biogazie i transformacji energetycznej Podkarpacia.
          </p>
          <Link to="/blog" style={{ background: 'var(--teal)', color: '#fff', padding: '0.65rem 1.5rem', fontWeight: 600, borderRadius: 6, display: 'inline-block', textDecoration: 'none', fontFamily: "'Poppins', sans-serif" }}>
            Przeglądaj artykuły
          </Link>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: '3rem' }}>
        {posts.length > 0 ? (
          <>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.25rem', color: 'var(--text)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: 4, height: '1.4rem', background: 'var(--teal)', display: 'inline-block', borderRadius: 2 }}></span>
              Najnowsze artykuły
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {posts.slice(0, 6).map(post => (
                <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
              ))}
            </div>
            {posts.length > 6 && (
              <div style={{ textAlign: 'center' }}>
                <Link to="/blog" style={{ background: 'var(--teal-pale)', color: 'var(--teal-dark)', padding: '0.6rem 1.5rem', fontWeight: 700, borderRadius: 6, display: 'inline-block', textDecoration: 'none', border: '1px solid var(--border)', fontFamily: "'Poppins', sans-serif" }}>
                  Wszystkie artykuły ({posts.length}) →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <span style={{ fontSize: '3rem' }}>💧</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--teal)', marginTop: '0.75rem' }}>Artykuły wkrótce</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Przygotowujemy treści o OZE na Podkarpaciu.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields { slug }
        excerpt(pruneLength: 160)
        frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags }
      }
    }
  }
`;

export default IndexPage;
