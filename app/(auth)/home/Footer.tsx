export default function Footer() {
    return (
      <footer className="relative bg-primary-500 text-white p-8 font-sans overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative pt-8 lg:pt-16 lg:mt-16">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30 -lg:!opacity-0"></div>
            <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="w-full shrink-0 lg:w-1/3 mb-6 lg:mb-0 relative z-10">
                <div className="text-3xl lg:text-4xl font-normal">
                  <span className="italic font-bold text-dark-2">Savor, Share, Socialize: </span>
                  <span className="italic font-bold text-dark-2">Your Culinary Community.</span>
                </div>
              </div>
  
              <div className="w-full pt-6 lg:pt-3">
                <div className="grid grid-cols-2 w-full">
                  <div>
                    <nav>
                      <ul className="flex flex-col justify-start items-start gap-y-2 relative z-10">
                        <li><a className="text-dark-2 font-semibold" href="#">Vacancies</a></li>
                        <li><a className="text-dark-2 font-semibold" href="#">About us</a></li>
                        <li><a className="text-dark-2 font-semibold" href="#">Magazine</a></li>
                        <li><a className="text-dark-2 font-semibold" href="#">Food book</a></li>
                      </ul>
                    </nav>
  
                    <div className="mt-6 lg:mt-11 relative z-10">
                      <div className="text-dark-2 font-semibold">Address</div>
                      <a className="text-dark-2 flex flex-col items-start justify-start mt-3" href="#" target="_blank" rel="noopener noreferrer">
                        <span className="block">Narayanaguda</span>
                        <span className="block">Hyderabad, Telangana</span>
                      </a>
                    </div>
                  </div>
      
                  <div>
                    <nav>
                      <ul className="flex flex-col justify-start items-start gap-y-2 relative z-10">
                        <li><a className="text-dark-2 font-semibold" href="#">Featured</a></li>
                        <li><a className="text-dark-2 font-semibold" href="#">Foundation</a></li>
                        <li><a className="text-dark-2 font-semibold" href="#">Privacy</a></li>
                        <li><a className="text-dark-2 font-semibold" href="#">Cookies</a></li>
                      </ul>
                    </nav>
  
                    <div className="mt-6 lg:mt-11 relative z-10">
                      <div className="text-dark-2 font-semibold">Contact</div>
                      <div className="text-dark-2 flex flex-col items-start justify-start mt-3">
                        <a className="hover:text-white/60 transition block" href="tel:+31 (0)20 330 06 70">+91 9441253385</a>
                        <a className="hover:text-white/60 transition block" href="mailto:info@tobacco.nl">vallabh.dasari@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden w-full md:top-auto md:bottom-1/4 mt-12">
            <div className="max-w-full mx-auto">
              <div className="flex justify-center text-[100px] sm:text-[150px] md:text-[200px] lg:text-[275px] font-bold opacity-40 -mb-16 sm:-mb-20 md:-mb-16 lg:-mb-20">
                {'AMBROSIA'.split('').map((letter, index) => (
                  <span 
                    key={index}
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:opacity-70 cursor-default"
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }