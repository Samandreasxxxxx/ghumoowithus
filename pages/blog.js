// pages/blog.js
import Head from 'next/head';
import { blogPosts } from '../lib/data';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog · Ghumoo With Us</title>
      </Head>

      <section>
        <div className="container">
          <p className="section-kicker">Blog</p>
          <h1 className="section-heading">Travel tips, stories & nerdy details.</h1>
          <p className="section-subtitle">
            Replace these placeholders with real posts – weekend plans from
            Odisha, long‑form guides for each state and behind‑the‑scenes from
            your trips.
          </p>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-meta">{post.date}</div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
