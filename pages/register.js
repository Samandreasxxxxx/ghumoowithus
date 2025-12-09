// pages/register.js
import Head from 'next/head';
import RegisterSection from '../components/RegisterSection';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register · Ghumoo With Us</title>
      </Head>
      <RegisterSection standalone />
    </>
  );
}
