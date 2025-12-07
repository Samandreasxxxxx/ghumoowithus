// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';
import FeaturedTrip from '../components/FeaturedTrip';
import ComingSoonSection from '../components/ComingSoonSection';
import DoodleStrip from '../components/DoodleStrip';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogPreviewSection from '../components/BlogPreviewSection';
import NewsletterSection from '../components/NewsletterSection';
import RegisterSection from '../components/RegisterSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ghumoo With Us · Cinematic Indian travel experiences</title>
        <meta
          name="description"
          content="Ghumoo With Us – modern, cinematic travel agency based in India. One live trip from Cuttack to Kendrapada, with many more Indian and international routes coming soon."
        />
      </Head>

      <Hero />
      <FeaturedTrip />
      <ComingSoonSection />
      <DoodleStrip />
      <TestimonialsSection />
      <BlogPreviewSection />
      <NewsletterSection />
      <RegisterSection />
    </>
  );
}
