import { Fragment, useState } from "react";
import Product from "../../utils/product";

const ProductMenu = () => {
    const [isOpen, setIsOpen] = useState([]);

    const handleIsOpen = (id) => {
        if (isOpen.includes(id))  {
            setIsOpen(isOpen.filter((item) => item !== id));
        } else {
            setIsOpen([...isOpen, id]);
        }
    }

    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/product.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      };
    

    return (
        <Fragment>
            <section id='about' className='flex flex-col p-3 gap-y-5 justify-center text-white mt-24 md:mt-20 h-[50vh] md:h-[30vh] lg:h-[50vh]' style={heroStyle}>
                <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50" className="text-2xl font-bold font-briem md:text-4xl text-center lg:w-3/5 lg:text-5xl lg:self-center">Product List</h1>
                <p data-aos='fade-down' data-aos-duration="1000" data-aos-delay="60" className='md:text-xl text-center lg:w-1/3 lg:self-center'>Kami dengan senang hati akan menyajikan steak terbaik untuk Anda dan menciptakan pengalaman makan yang tak terlupakan! Terima kasih telah memilih SteakHouse Delight.</p>
            </section>

            <article className="p-3 flex flex-col gap-y-3 mt-7 lg:w-3/5 lg:self-center">
                <h2 className="text-xl font-bold md:text-2xl">Menu List - SteakHouse Delight</h2>
                <hr className="border-red w-72 md:w-[46%] lg:w-80 border-2 rounded-xl" />
            </article>

            <section className='p-3 flex flex-col gap-y-5 mb-7 lg:w-3/5 lg:self-center'>
                {Product.map((product) => (
                    <div className="flex flex-col gap-y-3" key={product.id}>
                        <article className="flex justify-between items-center" onClick={() => handleIsOpen(product.id)}>
                            <h3 className="text-lg font-semibold md:text-xl">{product.menu}</h3>
                            {isOpen.includes(product.id) ? (
                                <i className="fas fa-chevron-down"></i>
                            ) : (
                                <i className="fas fa-chevron-up"></i>
                            )}
                        </article>
                        <div className="md:grid md:grid-cols-2 gap-3 lg:grid lg:grid-cols-3">
                            {isOpen.includes(product.id) && (
                                product.list.map((item) => (
                                    <div className="bg-gray1 p-3 rounded-lg text-white flex flex-col gap-y-3" key={item.id}>
                                        <img src={item.image} alt="Garlic Bread" className="w-full h-96 md:h-72 rounded-lg" />
                                        <article className="flex flex-col gap-y-3">
                                            <div className="flex justify-between gap-y-3">
                                                <h4 className="text-red font-semibold md:text-xl">{item.name}</h4>
                                                <p className="md:text-xl">Rp. {item.price.toLocaleString('id-ID', {styles: 'currency', currrency: 'IDR'})}</p>
                                            </div>
                                            <p className="md:text-xl">{item.desc}</p>
                                        </article>
                                    </div>
                                ))
                            )}
                        </div>

                        <hr className="border-red border-2" />
                    </div>
                ))}
            </section>
        </Fragment>
    )
}

export default ProductMenu;