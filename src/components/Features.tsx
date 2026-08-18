import mockup from '../assets/mockups/Feature Mockup Mobile.png'
import F01 from '../assets/F01.webp'
import F02 from '../assets/F02.webp'
import F03 from '../assets/F03.webp'
import F04 from '../assets/F04.webp'

const features = [
    {
        img:F01,
        head:"Book In Minutes",
        tagline:"See real time availability & confirm\nyour appointment online without phone calls."
    },
    {
        img:F02,
        head:"Verified Healthcare\nProfessionals",
        tagline:"You can book with confidence\nknowing you're inn trusted hands."
    },
    {
        img:F03,
        head:"Real Time Availability",
        tagline:"See live appointment slots before\nyou book, no waiting for callbacks."
    },
    {
        img:F04,
        head:"Insurance Made Simple",
        tagline:"Filter doctors by accepted insurance\nplans to avoid unexpected costs."
    },
]

export default function Features() {
    return(
        <section className='max-w-175 xl:max-w-300 mx-auto overflow-hidden mb-32'>
            <div>
                <h1 className='heading self-start'>Why Patients Choose <br/> Meridian</h1>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 mt-16 md:mt-32'>
                <img src={mockup} alt="" className='w-65 md:w-75 lg:w-auto max-w-none h-auto'/>
            </div>
            <div className='relative z-50 flex flex-col items-center py-32 md:py-46 lg:py-64 max-w-[1024px] mx-auto'>
                {
                    features.map((item,index) => (
                        <div
                            key={item.head}
                            className={`bg-neutral-400 flex items-center gap-3.75 py-2 px-3 rounded-[15px] lg:rounded-[30px] text-primary w-full max-w-[225px] md:max-w-[250px] lg:max-w-[400px] h-[75px] md:h-[80px] lg:h-[124px] ${
                                index % 2 === 0 ? "self-end mr-5 md:mr-20 lg:mr-8" : "self-start ml-5 md:ml-20 lg:ml-8"
                            }
                            ${index === 0 || index === 1 ? "mt-5" : "mt-5 md:mt-15 lg:mt-10"}`}
                        >
                            <img src={item.img} alt="" className='h-10 lg:h-auto'/>
                            <div className='flex flex-col  lg:gap-2.75 lg:whitespace-pre-line'>
                                <p className='text-[12px] lg:text-[20px] font-medium'>{item.head}</p>
                                <p className='text-[8px] lg:text-[14px]'>{item.tagline}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-end pr-4'>
                <p className='sub-heading text-right'>Everything you need to find trusted <br/>care with less friction</p>
            </div>
            
        </section>
    )
}