import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Podkarpacie" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 4rem', maxWidth: '860px' }}>
        <Link to="/blog" style={{ fontSize: '0.85rem', color: 'var(--teal)', display: 'block', marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif" }}>← Powrót do artykułów</Link>
        <header style={{ marginBottom: '2.5rem' }}>
          {tags && tags.map(t => (
            <span key={t} style={{ display: 'inline-block', background: 'var(--teal-pale)', color: 'var(--teal-dark)', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 4, marginRight: '0.4rem', textTransform: 'uppercase', fontFamily: "'Poppins', sans-serif" }}>{t}</span>
          ))}
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', margin: '0.75rem 0 0.5rem', color: 'var(--teal-dark)' }}>{title}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '0.75rem' }}>{date} · {author}</p>
          {description && (
            <p style={{ fontSize: '1rem', background: 'var(--teal-pale)', borderLeft: '4px solid var(--teal)', padding: '1rem', color: 'var(--teal-dark)', borderRadius: '0 6px 6px 0', marginTop: '0.75rem' }}>{description}</p>
          )}
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="post-content" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
