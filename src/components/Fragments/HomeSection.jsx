import { Fragment } from 'react'

const HomeSection = () => {
  return (
      <Fragment>
            <section className='p-5 flex flex-col lg:flex-row lg:gap-x-8 gap-y-8 mt-7 lg:w-3/5 lg:self-center'>
              <div className='bg-[#ECDFCC] shadow-[3px_3px_10px_2px_black,-3px_-3px_0px_0px_red] p-5 flex flex-col gap-y-5' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50">
                <i className='fas fa-utensils text-5xl text-red'></i>
                <h1 className='font-bold text-xl md:text-2xl'>Food Product</h1>
                <p className='md:text-xl'>Kemampuan steak untuk memberikan rasa yang kaya dan tekstur lembut menjadikannya pilihan utama dalam industri kuliner. Kami memastikan setiap steak yang kami sajikan memiliki kualitas premium dan diproses secara higienis untuk memberikan pengalaman kuliner yang tak terlupakan.</p>
              </div>

              <div className='bg-[#ECDFCC] shadow-[3px_3px_10px_2px_black,-3px_-3px_0px_0px_red] p-5 flex flex-col gap-y-5' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="60">
                <i className='fab fa-wordpress-simple text-5xl text-red'></i>
                <h1 className='font-bold text-xl md:text-2xl'>Gourmet Experience</h1>
                <p className='md:text-xl'>Kelezatan steak yang sempurna tidak hanya memuaskan selera, tetapi juga memberikan pengalaman makan yang tak tertandingi. Steak premium yang kami sajikan dimasak dengan teknik terbaik untuk menjaga rasa dan teksturnya.</p>
              </div>

              <div className='bg-[#ECDFCC] shadow-[3px_3px_10px_2px_black,-3px_-3px_0px_0px_red] p-5 flex flex-col gap-y-5' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="70">
                <i className='fas fa-grin-stars text-5xl text-red'></i>
                <h1 className='font-bold text-xl md:text-2xl'>Cosmetic</h1>
                <p className='md:text-xl'>Sama seperti makanan lainnya, kami percaya bahwa estetika penyajian steak memiliki peran penting. Hidangan steak yang disajikan secara menarik akan memperkaya pengalaman Anda. Kami mengutamakan kualitas, mulai dari bahan-bahan hingga penyajian yang memikat.</p>
              </div>
            </section>

            <section className='flex flex-col md:flex-row w-full items-center md:h-fit gap-y-3 lg:self-center lg:w-3/5'>
              <section className="p-3 flex flex-col gap-y-8 mt-7 md:w-1/2">
                <div className='bg-red absolute mt-28 text-white -ms-2 p-5 w-52 md:w-64 flex flex-col gap-y-3 z-20' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="80">
                  <div className='flex items-center gap-x-3'>
                    <i className='fas fa-check md:text-xl'></i>
                    <h2 className='md:text-xl'>Top Quality</h2>
                  </div>

                  <div className='flex items-center gap-x-3'>
                    <i className='fas fa-check md:text-xl'></i>
                    <h2 className='md:text-xl'>Top Quality</h2>
                  </div>

                  <div className='flex items-center gap-x-3'>
                    <i className='fas fa-check md:text-xl'></i>
                    <h2 className='md:text-xl'>Top Quality</h2>
                  </div>
                </div>
                
                <div className='w-11/12 self-end' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="90">
                  <img src="./images/steak.jpg" alt="Steak" className='w-full h-80 md:h-full' />
                </div>
              </section>

              <section className='p-3 flex flex-col gap-y-5 md:w-1/2'>
                <article className='flex flex-col justify-center gap-y-2'>
                  <h1 className='font-bold text-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">About Us</h1>
                  <hr className='border-red w-24 border-2 rounded-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="110" />
                </article>

                <article>
                    <h2 className='w-92 text-2xl md:text-3xl font-bold' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="120">SteakHouse Delight&#39;s Commitment to Culinary Excellence</h2>
                </article>

                <article>
                  <p className='md:text-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="130">Di SteakHouse Delight, kami percaya bahwa setiap steak harus disajikan dengan penuh kesempurnaan. Steak kami dipilih dari daging sapi berkualitas tinggi yang diolah dengan teknik profesional untuk menghasilkan tekstur yang empuk dan cita rasa yang khas. Setiap steak yang kami hidangkan adalah bukti dari komitmen kami terhadap kelezatan dan kualitas.</p>
                </article>

                <article>
                  <p className='md:text-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="140">Kami juga berkomitmen pada keberlanjutan dalam setiap langkah bisnis kami, mulai dari pemilihan bahan baku yang bertanggung jawab hingga proses memasak yang efisien. Kami ingin memastikan bahwa dengan setiap steak yang Anda nikmati, Anda juga berkontribusi pada masa depan yang lebih baik.</p>
                </article>

                <button className='p-3 flex gap-x-3 items-center bg-red rounded-lg w-36 md:w-40 md:py-4 justify-center text-white' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="150">
                  <span>Learn More</span>
                  <i className='fas fa-arrow-right'></i>
                </button>
              </section>
            </section>

            <section className='bg-gray1 p-3 flex flex-col w-full gap-y-5 text-white mt-7'>
              <section className='flex flex-col gap-y-5 lg:w-3/5 lg:self-center'>
                <article className='flex flex-col justify-center gap-y-2'>
                  <h1 className='font-bold text-xl md:text-2xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="160">Testimoni</h1>
                  <hr className='border-red w-24 border-2 rounded-xl md:w-28' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="170" />
                </article>

                <article>
                  <h2 className='w-92 text-2xl md:text-4xl font-semibold' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="180">Juicy and Tender Steak with Passion</h2>
                </article>

                <article>
                  <p className='md:text-xl' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="190">Bekerja sama dengan pemasok daging sapi berkualitas tinggi telah semakin memperkuat komitmen kami terhadap keunggulan kuliner. Transparansi dan ketertelusuran rantai pasokan memberi kami keyakinan bahwa setiap steak yang kami sajikan tidak hanya lezat, tetapi juga dihasilkan secara etis dan berkelanjutan.</p>
                </article>
              </section>

              <section className="flex flex-col md:flex-row gap-5 w-full lg:w-3/5 lg:self-center">
                <div className='bg-[#ECDFCC] rounded-md text-black p-3 text-center flex flex-col gap-y-3 md:w-1/2 md:h-[555px]' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
                  <img src="/images/testimoni1.jpg" alt="Testimoni" className='w-full md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="210" />
                  <h3 className='text-red font-semibold md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="220">David M.</h3>
                  <p className='md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="230">&quot;Sebagai koki di sebuah restoran terkenal, saya harus memastikan setiap steak yang disajikan memenuhi standar tertinggi. SteakHouse Delight tidak pernah mengecewakan. Kualitas daging dan metode memasaknya benar-benar sempurna.&quot;</p>
                </div>

                <div className='bg-[#ECDFCC] rounded-md text-black p-3 text-center flex flex-col gap-y-3 mb-5 md:w-1/2 md:h-[555px]' data-aos="flip-left" data-aos-duration="1000" data-aos-delay="240">
                  <img src="/images/testimoni2.jpg" alt="Testimoni" className='w-full md:h-64' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="250" />
                  <h3 className='text-red font-semibold md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="260">Lisa P.</h3>
                  <p className='md:text-xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="270">&quot;Sebagai CEO dari Gourmet Bites, produsen makanan berkualitas, bekerja sama dengan SteakHouse Delight menunjukkan komitmen kami terhadap kualitas dan kelezatan. Kami senang bekerja dengan pemasok steak yang bertanggung jawab dan selalu memberikan produk terbaik.&quot;</p>
                </div>
              </section>
            </section>
      </Fragment>
  )
}

export default HomeSection
