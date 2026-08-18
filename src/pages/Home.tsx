
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Features from '../components/Features';
import VerifiedProviders from '../components/Doctors';
import Steps from '../components/Steps';
import PatientTestimonials from '../components/Review';
import FAQSection from '../components/FAQ';
import CTASection from '../components/CTA';
import SiteFooter from '../components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <Features/>
        <Steps/>
        <VerifiedProviders/>
        <PatientTestimonials/>
        <FAQSection/>
        <CTASection/>
        <SiteFooter/>
      </main>
    </>
  );
}