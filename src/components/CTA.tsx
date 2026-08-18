
import mockup from '../assets/mockups/mockup2.webp'


export default function CTASection() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* Background card — clipped separately so the phone can bleed outside it on tablet/desktop */}
        <div className="absolute inset-0 rounded-3xl bg-neutral-200" />

        <div className="relative flex flex-col items-center gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10 sm:py-12 lg:px-14 lg:py-0">
          {/* Text + buttons */}
          <div className="text-center sm:text-left">
            <h2 className="heading">
              Ready to Take Control<br/>of Your Healthcare?
            </h2>
            <p className=" pl-4 mt-6 sub-heading">
              Find verified doctors, compare providers, and book
              appointments in minutes, whether you're at home or on the go.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start pl-4">
              <button
                type="button"
                className="button"
              >
                Book appointment
              </button>
              <button
                type="button"
                className="sec-button"
              >
                Download App
              </button>
            </div>
          </div>

          <div>
            <img src={mockup} alt="" className='h-auto w-125'/>
          </div>
      
        </div>
      </div>
    </section>
  );
}