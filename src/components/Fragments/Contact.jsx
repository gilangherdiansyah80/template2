import { Fragment } from "react";

/* eslint-disable react/prop-types */
const ContactUs = () => {
    const heroStyle = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/contact.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };
  
    return (
        <Fragment>
          <section id='about' className='flex flex-col p-3 gap-y-5 justify-center text-white mt-24 md:mt-20 h-[50vh] md:h-[30vh] lg:h-[50vh]' style={heroStyle}>
              <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50" className="text-2xl font-bold font-briem md:text-4xl lg:text-5xl text-center">Contact Us</h1>
              <p data-aos='fade-down' data-aos-duration="1000" data-aos-delay="60" className='md:text-xl text-center lg:w-1/3 lg:self-center'>Meskipun industri kuliner terus berkembang, kami di SteakHouse Delight selalu berpegang teguh pada prinsip kualitas dan keunggulan. Kami percaya bahwa sajian steak terbaik berasal dari daging berkualitas yang diproses dengan teknik masak sempurna.</p>
          </section>
  
          <section className='p-5 flex flex-col gap-y-5 mt-7 lg:w-3/5 lg:self-center'>
              <article className='flex flex-col justify-center gap-y-2'>
                  <h1 className='font-bold text-xl md:text-2xl' data-aos='fade-down' data-aos-duration="1000" data-aos-delay="70">Pemesanan</h1>
                  <hr className='border-red w-24 md:w-32 border-2 rounded-xl' data-aos='fade-down' data-aos-duration="1000" data-aos-delay="80" />
              </article>
  
              <article>
                  <h2 className='w-92 text-2xl md:text-4xl font-bold' data-aos='fade-down' data-aos-duration="1000" data-aos-delay="90">Contact Us</h2>
              </article>
  
              <article>
                  <p className="md:text-xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="100">Demi menjaga standar tinggi dalam setiap sajian, kami bekerja sama dengan peternakan yang menerapkan praktik peternakan berkelanjutan. Kami memastikan bahwa setiap steak yang sampai ke meja Anda tidak hanya lezat, tetapi juga diproduksi secara etis dan bertanggung jawab terhadap lingkungan.</p>
              </article>
  
              <article>
                  <p className="md:text-xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="110">Melalui rantai pasokan yang transparan dan terjamin, kami berkomitmen untuk menjaga kualitas daging terbaik dan metode memasak yang presisi, sehingga setiap steak yang disajikan tetap segar, juicy, dan penuh rasa.</p>
              </article>
  
              <div className="w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5">
                  <div className="flex flex-col gap-y-3 md:w-1/2">
                      <article className="flex flex-col gap-y-3">
                          <div className="flex flex-col gap-y-1">
                              <h3 className="font-bold text-xl md:text-2xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="120">Restaurant</h3>
                              <hr className="border-red w-32 border-2 rounded-xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="130" />
                              <h4 className="md:text-xl font-semibold" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="140">Alamat SteakHouse Delight</h4>
                          </div>
                          <p className="md:text-xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="150">Tubagus ismail dalam no 28/153B RT 0/3 RW 07 sekeloa coblong Gang 3 (Kos Ibu Uceu) COBLONG, 40134NG, Kota Bandung, Jawa Barat 40134</p>
                      </article>
  
                      <article className="flex flex-col gap-y-3">
                          <div className="flex flex-col gap-y-1">
                              <h3 className="font-bold text-xl md:text-2xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="160">Follow Us</h3>
                              <hr className="border-red w-20 md:w-28 border-2 rounded-xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="170" />
                          </div>
                          <ul className="flex gap-x-3">
                              <li className="fab fa-instagram md:text-xl" data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="180"></li>
                              <li className="fab fa-youtube md:text-xl" data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="190"></li>
                              <li className="fab fa-facebook md:text-xl" data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="200"></li>
                          </ul>
                      </article>
                  </div>
  
                  <div className="md:w-1/2 bg-gray1 p-3 rounded-lg">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0312722109497!2d107.61420767573907!3d-6.886857667391647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7002c9ac3d9%3A0x319031a21ec4a344!2sKost%20Ade%2086!5e0!3m2!1sid!2sid!4v1726869927860!5m2!1sid!2sid"
                          className="rounded-xl w-full h-[300px]"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Maps - Restaurant SteakHouse Delight"
                          data-aos='zoom-in'
                          data-aos-duration="1000"
                          data-aos-delay="210"
                      ></iframe>
                  </div>
              </div>
          </section>
        </Fragment>
    );
  };
  
  export default ContactUs;