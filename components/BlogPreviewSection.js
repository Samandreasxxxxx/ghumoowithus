// components/BlogPreviewSection.js
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export default function BlogPreviewSection() {
  const top3 = blogPosts.slice(0, 3);

  return (
    <section>
      <div className="container">
        <p className="section-kicker">From the journal</p>
        <h2 className="section-heading">Travel notes & how‑tos.</h2>
        <p className="section-subtitle">
          Use this blog to share packing lists, roadtrip playlists, money‑saving
          hacks and behind‑the‑scenes stories from every ride.
        </p>

        <div className="blog-grid">
          {top3.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="blog-meta">{post.date}</div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/blog" className="btn btn-secondary">
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
