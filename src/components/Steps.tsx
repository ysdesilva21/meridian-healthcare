export default function Steps(){

    return(
        <section className="mb-32">
            <div className="flex justify-start md:justify-end pr-4 md:pr-12 lg:pr-40">
                <h1 className="heading md:text-right">Find Care In Three Simple <br/>Steps</h1>
            </div>

            <div className="md:hidden grid grid-cols-2 mt-10">
                <div className="flex items-center justify-center">
                    <div className="bg-primary-900 flex flex-col justify-center p-5 rounded-[15px] border-2 border-neutral-300 max-w-[200px] h-[250px]">
                        <p className="text-[20px] font-bold text-neutral-400">01</p>
                        <p className="text-[20px] font-medium text-inverse">Search</p>
                        <p className="text-[14px] text-inverse">Enter your  symptoms, specialty, doctor name and location to find the care you need.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-20">
                    <div className="bg-primary-900 flex flex-col justify-center p-5 rounded-[15px] border-2 border-neutral-300 max-w-[200px] h-[250px]">
                        <p className="text-[18px] font-bold text-neutral-400">02</p>
                        <p className="text-[18px] font-medium text-inverse">Compare</p>
                        <p className="text-[12px] text-inverse">Review verified doctors, patient, ratings,availability and accepted insurance</p>
                    </div>
                    <div className="bg-primary-900 flex flex-col justify-center p-5 rounded-[15px] border-2 border-neutral-300 max-w-[200px] h-[250px]">
                        <p className="text-[18px] font-bold text-neutral-400">03</p>
                        <p className="text-[18px] font-medium text-inverse">Book</p>
                        <p className="text-[12px] text-inverse">Choose a convenient time and receive instant confirmation of your appointment.</p>
                    </div>
                </div>
            </div>

            {/* Desktop*/}
            <div className="hidden md:flex justify-between md:mx-15 lg:mx-40 ">
                 <div className="bg-primary-900 flex flex-col items-start justify-center md:mt-10 gap-4 p-5 rounded-[15px] border-2 border-neutral-300 md:max-w-[225px] md:h-[350px] lg:max-w-[350px] lg:h-[350px]">
                        <p className="text-[36px] font-bold text-neutral-400">01</p>
                        <p className="text-[24px] font-medium text-inverse">Search</p>
                        <p className="text-[20px] text-inverse">Enter your  symptoms, specialty, doctor name and location to find the care you need.</p>
                </div>
                <div className="bg-primary-900 flex flex-col items-start justify-center md:mt-30 lg:mt-40 gap-4 p-5 rounded-[15px] border-2 border-neutral-300 md:max-w-[225px] md:h-[350px] lg:max-w-[350px] lg:h-[350px]">
                        <p className="text-[36px] font-bold text-neutral-400">02</p>
                        <p className="text-[24px] font-medium text-inverse">Compare</p>
                        <p className="text-[20px] text-inverse">Review verified doctors, patient, ratings,availability and accepted insurance</p>
                </div>
                <div className="bg-primary-900 flex flex-col items-start justify-center md:mt-50 lg:mt-80 gap-4 p-5 rounded-[15px] border-2 border-neutral-300 md:max-w-[225px] md:h-[350px] lg:max-w-[350px] lg:h-[350px]">
                        <p className="text-[36px] font-bold text-neutral-400">03</p>
                        <p className="text-[25px] font-medium text-inverse">Book</p>
                        <p className="text-[20px] text-inverse">Choose a convenient time and receive instant confirmation of your appointment.</p>
                </div>
                
            </div>

            <div className="flex justify-start pl-4 md:pl-15 lg:pl-40 lg:mt-16 mt-16">
                <p className="sub-heading text-left md:text-left">From finding the right provider to booking your Visit, <br/>without the necessary steps.</p>
            </div>
        </section>
    )
}