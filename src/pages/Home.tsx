import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Features from '../components/Features';
import Steps from '../components/Steps';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <Features/>
        <Steps/>
      </main>
    </>
  );
}