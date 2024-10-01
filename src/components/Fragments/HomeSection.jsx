import { Fragment } from 'react'

const HomeSection = () => {
  return (
      <Fragment>
            <section className='w-full flex'>
                <aside className='bg-baseColor2 w-3/6' />
                <main className='flex flex-col justify-center items-center relative self-center mt-28 p-5 gap-y-5'>
                    <section className='w-full flex flex-col gap-y-3'>
                      <img src="/images/tech1.jpg" alt="Apex Tech Solutions" className='w-full h-64 rounded-xl' />
                      <div className='flex gap-x-3 w-full flex-wrap'>
                        <button className='flex-1'>
                          <img src="/images/tech1.jpg" alt="Apex Tech Solutions" className='h-full' />
                        </button>
                        <button className='flex-1'>
                          <img src="/images/tech2.jpg" alt="Apex Tech Solutions" className='h-full' />
                        </button>
                        <button className='flex-1'>
                          <img src="/images/tech3.jpg" alt="Apex Tech Solutions" className='h-full' />
                        </button>
                      </div>
                    </section>

                    <article className='flex flex-col gap-y-5'>
                      <h1 className='font-bold text-3xl w-5/6'>Selamat Datang di Apex Tech Solutions</h1>
                      <p className='text-gray-700'>Di Apex Tech Solutions, kami mengkhususkan diri dalam menyediakan solusi teknologi dan perangkat lunak berkualitas tinggi yang mendorong inovasi di berbagai industri. Dengan fokus pada kualitas dan pengalaman bertahun-tahun, kami adalah mitra terpercaya Anda dalam mentransformasi bisnis dengan teknologi terdepan dan sistem perangkat lunak yang andal.</p>
                      <section className='flex justify-between'>
                        <div className='flex flex-col items-center'>
                          <h2 className='font-semibold text-xl'>Proyek</h2>
                          <p className='text-lg'>200</p>
                        </div>
                        <div className='flex flex-col items-center'>
                          <h2 className='font-semibold text-xl'>Klien</h2>
                          <p className='text-lg'>500</p>
                        </div>
                        <div className='flex flex-col items-center'>
                          <h2 className='font-semibold text-xl'>Tim</h2>
                          <p className='text-lg'>300</p>
                        </div>
                      </section>
                    </article>
                </main>
            </section>

            <section className='p-5 w-full flex flex-col lg:flex-row lg:gap-x-8 gap-y-8 lg:w-3/5 lg:self-center'>
              <article className='w-full'>
                <div className='flex flex-col gap-y-5'>
                  <div className='flex flex-col gap-y-3'>
                    <img src="/images/tech4.jpg" alt="Apex Tech Solutions" className='rounded-xl' />
                    <h2 className='font-bold text-xl'>Teknologi Terdepan</h2>
                    <p className='text-gray-600'>Tim kami memanfaatkan inovasi terbaru untuk menciptakan sistem teknologi dan perangkat lunak yang tidak hanya memenuhi kebutuhan saat ini, tetapi juga mempersiapkan tantangan masa depan. Kami berfokus pada solusi yang tahan lama untuk memastikan bisnis Anda tetap unggul.</p>
                  </div>
                  <div className='flex flex-col gap-y-3'>
                    <h2 className='font-bold text-xl'>Dukungan Tanpa Batas</h2>
                    <p className='text-gray-600'>Kami tidak hanya memberikan solusi, kami membangun kemitraan. Apex Tech Solutions berkomitmen untuk memberikan dukungan berkelanjutan, mulai dari implementasi hingga pemeliharaan sistem, memastikan operasi Anda berjalan lancar dan efisien.</p>
                  </div>
                </div>
              </article>

              <article className='w-full'>
                <div className='flex flex-col gap-y-5'>
                  <div className='flex flex-col gap-y-3'>
                    <img src="/images/tech5.jpg" alt="Apex Tech Solutions" className='rounded-xl' />
                    <h2 className='font-bold text-xl'>Kualitas yang Terjamin</h2>
                    <p className='text-gray-600'>Di Apex Tech Solutions, kualitas adalah prioritas utama. Kami mematuhi standar tertinggi dalam pengembangan perangkat lunak, memastikan setiap produk yang kami hasilkan dapat diandalkan, aman, dan dirancang untuk performa maksimal. Anda bisa mengandalkan kami untuk sistem yang meningkatkan produktivitas dan kesuksesan bisnis Anda.</p>
                  </div>
                </div>
              </article>
            </section>

            <section>
              <section className='bg-baseColor2'>
                <article className='p-5 flex flex-col md:flex-row w-full md:h-fit gap-y-5'>
                  <h2 className='font-bold text-3xl'>Inovasi Berkelanjutan</h2>
                  <p className='text-gray-600 mb-12'>Kami berkomitmen untuk mengintegrasikan keberlanjutan dalam solusi kami. Teknologi yang kami kembangkan dirancang agar hemat energi dan ramah lingkungan, membantu Anda mencapai tujuan keberlanjutan tanpa mengorbankan efisiensi bisnis.</p>
                </article>
              </section>

              <section className='bg-baseColor4 p-3 flex flex-col w-full gap-y-5 text-white'>
                <section className='flex flex-col gap-y-5 lg:w-3/5 lg:self-center'>
                  <article className='flex flex-col justify-center gap-y-2'>
                    <h1 className='font-bold text-xl md:text-2xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="160">Produk</h1>
                    <hr className='border-red w-24 border-2 rounded-xl md:w-28' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="170" />
                  </article>

                  <article>
                    <h2 className='w-80 text-2xl md:text-4xl font-semibold' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="180">Solusi Canggih untuk Tantangan Kompleks</h2>
                  </article>

                  <article>
                    <p className='md:text-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="190">Di Apex Tech Solutions, kami menyediakan sistem teknologi yang komprehensif untuk menyelesaikan tantangan bisnis yang paling rumit. Mulai dari analitik berbasis AI hingga infrastruktur cloud yang skalabel, solusi kami disesuaikan dengan kebutuhan unik Anda.</p>
                  </article>
                </section>

                <section className="flex flex-col md:flex-row gap-5 w-full lg:w-3/5 lg:self-center">
                  <div className='bg-baseColor2 rounded-md text-black p-3 flex flex-col gap-y-3 md:w-1/2 md:h-[555px]' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="/images/tech6.jpg" alt="Produk" className='w-full rounded-xl md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                    <h3 className='text-red font-semibold text-xl md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">Solusi Cloud Computing</h3>
                    <p className='md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">Maksimalkan efisiensi bisnis Anda dengan platform cloud yang skalabel dan aman, dirancang untuk pertumbuhan.</p>
                  </div>

                  <div className='bg-baseColor2 rounded-md text-black p-3 flex flex-col gap-y-3 md:w-1/2 md:h-[555px]' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="/images/tech7.jpg" alt="Produk" className='w-full rounded-xl md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                    <h3 className='text-red font-semibold text-xl md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">Pengembangan Perangkat Lunak Kustom</h3>
                    <p className='md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">Dapatkan solusi perangkat lunak yang disesuaikan untuk mengatasi tantangan spesifik bisnis Anda dan mengoptimalkan operasional.</p>
                  </div>

                  <div className='bg-baseColor2 rounded-md text-black p-3 flex flex-col gap-y-3 md:w-1/2 md:h-[555px]' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="/images/tech8.jpg" alt="Produk" className='w-full rounded-xl md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                    <h3 className='text-red font-semibold text-xl md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">Analitik Data & Integrasi AI</h3>
                    <p className='md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">Manfaatkan kekuatan big data dengan solusi analitik canggih kami, memungkinkan Anda membuat keputusan bisnis yang berbasis data.</p>
                  </div>

                  <div className='bg-baseColor2 rounded-md text-black p-3 flex flex-col gap-y-3 md:w-1/2 md:h-[555px] mb-12' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="/images/tech9.jpg" alt="Produk" className='w-full rounded-xl md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                    <h3 className='text-red font-semibold text-xl md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">Solusi Keamanan Siber</h3>
                    <p className='md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">Lindungi aset digital Anda dengan sistem keamanan siber terdepan kami, memastikan operasi Anda tetap aman dan tangguh.</p>
                  </div>
                </section>
              </section>

              <section className='bg-baseColor3 p-3 flex flex-col w-full gap-y-5 text-white'>
                <section className='flex flex-col gap-y-5 lg:w-3/5 lg:self-center'>
                  <article className='flex flex-col justify-center gap-y-2'>
                    <h1 className='font-bold w-80 text-2xl md:text-2xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="160">Temui Tim Kami</h1>
                    <hr className='border-red w-24 border-2 rounded-xl md:w-28' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="170" />
                  </article>
                </section>

                <section className="flex flex-col md:flex-row gap-5 w-full lg:w-3/5 lg:self-center">
                  <div className='bg-baseColor2 rounded-md text-black text-center p-3 flex flex-col gap-y-3 md:w-1/2 md:h-[555px]' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="/images/people1.jpg" alt="Produk" className='w-full rounded-xl md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                    <h3 className='text-red font-semibold text-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">Jessica Turner</h3>
                    <p className='text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">Co-Founder</p>
                    <div className='flex gap-x-3 justify-center'>
                      <a href="">
                        <i className='fab fa-tiktok text-2xl'></i>
                      </a>
                      <a href="">
                        <i className='fab fa-linkedin text-2xl'></i>
                      </a>
                      <a href="">
                        <i className='fab fa-instagram text-2xl'></i>
                      </a>
                    </div>
                  </div>

                  <div className='bg-baseColor2 rounded-md text-center text-black p-3 flex flex-col gap-y-3 md:w-1/2 md:h-[555px]' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="/images/people2.jpg" alt="Produk" className='w-full rounded-xl md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                    <h3 className='text-red font-semibold text-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">Michael Davis</h3>
                    <p className='text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">Chief Technology Officer</p>
                    <div className='flex gap-x-3 justify-center'>
                      <a href="">
                        <i className='fab fa-tiktok text-2xl'></i>
                      </a>
                      <a href="">
                        <i className='fab fa-linkedin text-2xl'></i>
                      </a>
                      <a href="">
                        <i className='fab fa-instagram text-2xl'></i>
                      </a>
                    </div>
                  </div>

                  <div className='bg-baseColor2 rounded-md text-center text-black p-3 flex flex-col gap-y-3 md:w-1/2 md:h-[555px] mb-12' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                    <img src="/images/people3.jpg" alt="Produk" className='w-full rounded-xl md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                    <h3 className='text-red font-semibold text-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">Rachel Patel</h3>
                    <p className='text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">Lead Developer</p>
                    <div className='flex gap-x-3 justify-center'>
                      <a href="">
                        <i className='fab fa-tiktok text-2xl'></i>
                      </a>
                      <a href="">
                        <i className='fab fa-linkedin text-2xl'></i>
                      </a>
                      <a href="">
                        <i className='fab fa-instagram text-2xl'></i>
                      </a>
                    </div>
                  </div>
                </section>

              <section className='p-5 flex flex-col gap-y-5 mt-7 lg:w-3/5 lg:self-center bg-baseColor4 rounded-xl mb-12'>
                <article className='flex flex-col justify-center gap-y-2'>
                    <h1 className='font-bold w-92 text-2xl md:text-4xl' data-aos='fade-down' data-aos-duration="1000" data-aos-delay="70">Hubungi Kami</h1>
                    <hr className='border-red w-24 md:w-32 border-2 rounded-xl' data-aos='fade-down' data-aos-duration="1000" data-aos-delay="80" />
                </article>
    
                <article>
                    <p className="md:text-xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="100">Mari Bicarakan Bagaimana Kami Bisa Membantu Anda
                    Siap untuk membawa bisnis Anda ke tingkat berikutnya? Hubungi kami hari ini untuk konsultasi dan temukan bagaimana solusi kami dapat mendukung tujuan bisnis Anda.</p>
                </article>
    
                <article>
                    <p className="md:text-xl" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="110">Jl. Tech Street, No. 25, Kawasan Inovasi, 67890, Jakarta, Indonesia</p>
                </article>
    
                <div className="w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5">
                    <article className="flex flex-col gap-y-3">
                        <ul className="flex gap-x-3 items-center">
                            <li className="fab fa-instagram text-xl" data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="180"></li>
                            <li className="fab fa-youtube text-xl" data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="190"></li>
                            <li className="fab fa-facebook text-xl" data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="200"></li>
                        </ul>
                    </article>
    
                    <div className="md:w-1/2 bg-gray1 rounded-lg">
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
            </section>
            </section>
      </Fragment>
  )
}

export default HomeSection
