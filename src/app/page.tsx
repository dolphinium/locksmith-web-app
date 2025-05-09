import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import {
  KeyIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CpuChipIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  const services = [
    { name: "7/24 Çilingir Hizmeti (Ev, Oto, Kasa)", icon: ClockIcon },
    { name: "Kumandalı Anahtar Yapımı", icon: KeyIcon },
    { name: "Yedek Anahtar Çoğaltma", icon: SparklesIcon },
    { name: "Kilit Sistemleri Montaj ve Tamiri", icon: LockClosedIcon },
    { name: "Kumanda Tamiri (Garaj, Kepenk vb.)", icon: WrenchScrewdriverIcon },
    { name: "Elektronik Anahtar Çözümleri", icon: CpuChipIcon },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 px-4 text-center"> {/* Lighter gradient */}
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-white">Anahtarcı Osman</h1> {/* Ensure contrast */}
            <p className="text-xl mb-2 text-blue-100">Elektronik Anahtar & Çilingirlik Hizmetleri</p> {/* Lighter accent */}
            <p className="text-lg text-blue-200 mb-8">1995'ten Beri Güvenle Hizmetinizdeyiz</p> {/* Lighter accent, escaped apostrophe */}
            <a
              href="tel:+905325862228"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition duration-300" /* Adjusted button */
            >
              Hemen Ara: +90 532 586 22 28
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white px-4"> {/* White background */}
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-blue-600">Hizmetlerimiz</h2> {/* Darker blue accent */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 flex flex-col items-center text-center"> {/* Light gray card bg */}
                  <service.icon className="h-12 w-12 text-blue-500 mb-4" /> {/* Adjusted icon color */}
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.name}</h3> {/* Darker text */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50 px-4"> {/* Light gray background */}
          <div className="container mx-auto text-center md:text-left md:flex md:items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8 flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Anahtarcı Osman Şirket Logosu"
                width={200}
                height={200}
                className="rounded-full shadow-lg object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Hakkımızda</h2> {/* Darker blue accent */}
              <p className="text-lg mb-4 text-gray-700"> {/* Darker text */}
                Osman Levent Kaya yönetimindeki Anahtarcı Osman, 1995 yılından bu yana Erdemli ve çevresinde profesyonel çilingirlik ve anahtar çözümleri sunmaktadır.
                Müşteri memnuniyetini ön planda tutarak, 7 gün 24 saat kesintisiz hizmet vermekteyiz.
              </p>
              <p className="text-lg text-gray-700"> {/* Darker text */}
                Ev, oto, kasa çilingir hizmetlerinin yanı sıra, kumandalı anahtar yapımı, yedek anahtar çoğaltma, kilit sistemleri ve garaj/kepenk kumanda tamiri gibi geniş bir yelpazede hizmet sunuyoruz.
                Teknolojiyi yakından takip ederek elektronik anahtar çözümlerinde de yanınızdayız.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-white px-4"> {/* White background */}
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-blue-600 text-center">Galeri</h2> {/* Darker blue accent */}
            <Gallery />
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 bg-white px-4"> {/* White background */}
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-blue-600">Konumumuz</h2>
            <div className="max-w-4xl mx-auto"> {/* Added max-width wrapper */}
              <div className="aspect-[16/9] rounded-lg shadow-xl overflow-hidden"> {/* Updated aspect ratio class for Tailwind v4 */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d224.58522531998887!2d34.311082638096345!3d36.6066166369151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zTWVya2V6K01haC4rxZ5laGl0K1PDvGxleW1hbivFnmFoaW4rU2suK05vKzQrQStlcmRlbWxpJTJGbWVyc2luJTJDK0VyZGVtbGkrMzM3ODA!5e0!3m2!1sen!2str!4v1746803993925!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true} // allowfullscreen is a boolean attribute
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anahtarcı Osman Konumu"
              ></iframe>
            </div> {/* Closes aspect-[16/9] */}
    </div> {/* Closes max-w-4xl mx-auto */}
          </div> {/* Closes container mx-auto text-center */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50 px-4"> {/* Light gray background */}
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-blue-600">İletişim</h2> {/* Darker blue accent */}
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl"> {/* White card bg */}
              <p className="text-xl font-semibold mb-2 text-gray-800">Osman Levent Kaya</p> {/* Darker text */}
              <p className="text-lg text-gray-600 mb-4"> {/* Darker text */}
                Merkez Mah. Şehit Süleyman Şahin Sk. No:4/A Erdemli/Mersin, 33780
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4"> {/* Darker blue accent for phone */}
                <a href="tel:+905325862228" className="hover:text-blue-500 transition-colors">
                  +90 532 586 22 28
                </a>
              </p>
              <p className="text-lg text-gray-600 mb-6">7/24 Çilingir Hizmeti</p> {/* Darker text */}
              <a
                href="https://www.instagram.com/anahtarciosman/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300" /* Changed Instagram button color */
              >
                Instagram'da Takip Edin
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
