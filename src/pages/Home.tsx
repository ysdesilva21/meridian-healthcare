
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Features from '../components/Features';
import VerifiedProviders from '../components/VerifiedProviders';
import PatientTestimonials from '../components/PatientReviews';
import FAQSection from '../components/FAQ';
import CTASection from '../components/CTA';
import SiteFooter from '../components/Footer';
import HowItWorks from '../components/HowITWorks';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <Features/>
        <HowItWorks/>
        <VerifiedProviders/>
        <PatientTestimonials/>
        <FAQSection/>
        <CTASection/>
        <SiteFooter/>
      </main>
      <BackToTop/>
    </>
  );
}