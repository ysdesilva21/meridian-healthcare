
export default function Trust(){
    const trust = [
        {
            head:"10+ Years",
            tagline:"Connecting Patients\nWith Care"
        },
        {
            head:"24/7",
            tagline:"Secure Online Banking\nAccess"
        },
        {
            head:"5000+",
            tagline:"Verified Healthcare\nProviders"
        },
        {
            head:"120,000+",
            tagline:"Appointments Successfully\nBooked"
        },
    ]
    return(
     <>
        <section className="hidden md:block my-32 w-full">
            <div className="bg-neutral-300">
                <div className="flex items-center justify-center">
                    {
                        trust.map((item) => (
                            <div
                                key={item.head}
                                className="flex flex-col gap-1 lg:gap-2.5 p-8 lg:p-10"
                            >
                                <p className="text-[24px] lg:text-[32px] text-primary self-start">{item.head}</p>
                                <p className="text-[12px] text-primary self-start whitespace-pre-line">{item.tagline}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        <section className="md:hidden">
            <div className="flex flex-col py-16">
                {
                    trust.map((item,index) => (
                    <div
                        key={item.head}
                        className={`flex flex-col gap-1 lg:gap-2.5 py-4 lg:p-10 ${
                            index % 2 === 0 ? "self-start pl-12" : "self-end pr-12"
                        }`}
                    >
                        <p className={`text-[24px] lg:text-[32px] text-primary ${
                            index % 2 === 0 ? "self-start" : "self-end"
                        }`}>{item.head}</p>
                        <p className={`text-[12px] text-primary self-start whitespace-pre-line ${
                            index % 2 === 0 ? "text-left" : "text-right"
                        }`}>{item.tagline}</p>
                    </div>
                    ))
                }
            </div>
        </section>
     </>
    )
}