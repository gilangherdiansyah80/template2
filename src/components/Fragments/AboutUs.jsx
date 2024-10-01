import { Fragment } from "react";

/* eslint-disable react/prop-types */
const AboutUs = () => {
    const heroStyle = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/about1.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };
  
    return (
        <Fragment>
          <section id='about' className='flex flex-col p-3 gap-y-5 justify-center text-white mt-24 md:mt-20 h-[50vh] md:h-[30vh] lg:h-[50vh]' style={heroStyle}>
              <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" className="text-2xl font-bold font-briem md:text-4xl lg:text-5xl text-center lg:w-3/5 lg:self-center">About Us</h1>
              <p data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="60" className='md:text-xl text-center lg:w-1/3 lg:self-center'>Meskipun industri kuliner terus berkembang, kami di SteakHouse Delight selalu berpegang teguh pada prinsip kualitas dan keunggulan. Kami percaya bahwa sajian steak terbaik berasal dari daging berkualitas yang diproses dengan teknik masak sempurna.</p>
          </section>
  
          <section className="p-5 flex flex-col md:flex-row lg:flex-col w-full md:gap-x-10 lg:w-3/5 lg:h-fit lg:self-center"> 
              <section className="flex flex-col gap-y-5 mt-7 md:w-1/2 lg:flex-row lg:gap-x-5 lg:w-full">
                  <img src="/images/about4.jpg" alt="SteakHouse Delight" className="lg:w-full lg:h-96 rounded-lg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="70" />
                  <img src="/images/about3.jpg" alt="SteakHouse Delight" className="lg:w-full lg:h-96 rounded-lg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="80" />
              </section>
  
              <section className='flex flex-col gap-y-5 mt-7 md:w-1/2 lg:w-full'>
                  <article className='flex flex-col justify-center gap-y-2'>
                      <h1 className='font-bold text-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="90">About Us</h1>
                      <hr className='border-red w-24 border-2 rounded-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" />
                  </article>
  
                  <article>
                      <h2 className='w-92 text-2xl font-semibold md:text-4xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="110">Our Story</h2>
                  </article>
  
                  <article>
                      <p className="md:text-xl" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="120">Demi menjaga standar tinggi dalam setiap sajian, kami bekerja sama dengan peternakan yang menerapkan praktik peternakan berkelanjutan. Kami memastikan bahwa setiap steak yang sampai ke meja Anda tidak hanya lezat, tetapi juga diproduksi secara etis dan bertanggung jawab terhadap lingkungan.</p>
                  </article>
  
                  <article>
                      <p className="md:text-xl" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="130">Melalui rantai pasokan yang transparan dan terjamin, kami berkomitmen untuk menjaga kualitas daging terbaik dan metode memasak yang presisi, sehingga setiap steak yang disajikan tetap segar, juicy, dan penuh rasa.</p>
                  </article>
  
                  <div className="flex flex-col gap-y-3 w-full lg:flex-row lg:gap-x-5">
                      <img src="/images/founder.jpg" alt="Founder" className="rounded-lg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="140" />
                      <div className="flex flex-col gap-y-3">
                          <article className="flex flex-col gap-y-1">
                              <h3 className="font-bold text-xl md:text-2xl" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="150">Aditya Sofyan</h3>
                              <hr className="border-red w-32 md:w-40 border-2 rounded-xl" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="160" />
                              <h4 className="text-xl" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="170">Ceo of SteakHouse Delight</h4>
                          </article>
  
                          <article>
                              <p className="md:text-xl" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="180">Menciptakan rantai pasokan yang transparan dan terjamin untuk memastikan bahwa setiap steak yang kami sajikan tidak hanya enak, tetapi juga diproduksi secara bertanggung jawab</p>
                          </article>
                      </div>
                  </div>
              </section>
          </section>
        </Fragment>
    );
  };
  
  export default AboutUs;