// pages/packages.js
import Head from 'next/head';
import FeaturedTrip from '../components/FeaturedTrip';
import ComingSoonSection from '../components/ComingSoonSection';

export default function PackagesPage() {
  return (
    <>
      <Head>
        <title>Trips · Ghumoo With Us</title>
      </Head>

      <FeaturedTrip />
      <ComingSoonSection />
    </>
  );
}
