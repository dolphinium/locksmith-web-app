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
        <section className="py-20 px-4 text-center"> {/* Removed background gradient */}
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-[var(--accent-green)]">Anahtarcı Osman</h1> {/* Use accent green */}
            <p className="text-xl mb-2 text-[var(--foreground)]">Elektronik Anahtar & Çilingirlik Hizmetleri</p> {/* Use foreground color */}
            <p className="text-lg text-[var(--foreground)] mb-8">1995`ten Beri Güvenle Hizmetinizdeyiz</p> {/* Use foreground color, escaped apostrophe */}
            <a
              href="tel:+905325862228"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 text-base sm:py-3 sm:px-6 sm:text-lg rounded-lg transition duration-300" /* Even darker green button, white text */
            >
              Hemen Ara: +90 532 586 22 28
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4"> {/* Removed white background */}
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-[var(--accent-green)]">Hizmetlerimiz</h2> {/* Use accent green */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_var(--accent-green)] transition-shadow duration-300 flex flex-col items-center text-center"> {/* Darker card bg, green shadow */}
                  <service.icon className="h-12 w-12 text-[var(--accent-green)] mb-4" /> {/* Use accent green for icon */}
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{service.name}</h3> {/* Use foreground color */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-neutral-800 px-4"> {/* Darker background */}
          <div className="container mx-auto text-center md:text-left md:flex md:items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8 flex justify-center md:justify-start">
              <div className="bg-gray-100 p-2 rounded-full inline-block">
                <Image
                  src="/logo.png"
                  alt="Anahtarcı Osman Şirket Logosu"
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-[var(--accent-green)]">Hakkımızda</h2> {/* Use accent green */}
              <p className="text-lg mb-4 text-[var(--foreground)]"> {/* Use foreground color */}
                Osman Levent Kaya yönetimindeki Anahtarcı Osman, 1995 yılından bu yana Erdemli ve çevresinde profesyonel çilingirlik ve anahtar çözümleri sunmaktadır.
                Müşteri memnuniyetini ön planda tutarak, 7 gün 24 saat kesintisiz hizmet vermekteyiz.
              </p>
              <p className="text-lg text-[var(--foreground)]"> {/* Use foreground color */}
                Ev, oto, kasa çilingir hizmetlerinin yanı sıra, kumandalı anahtar yapımı, yedek anahtar çoğaltma, kilit sistemleri ve garaj/kepenk kumanda tamiri gibi geniş bir yelpazede hizmet sunuyoruz.
                Teknolojiyi yakından takip ederek elektronik anahtar çözümlerinde de yanınızdayız.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 px-4"> {/* Removed white background */}
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-[var(--accent-green)] text-center">Galeri</h2> {/* Use accent green */}
            <Gallery />
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 px-4"> {/* Removed white background */}
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-[var(--accent-green)]">Konumumuz</h2> {/* Use accent green */}
            <div className="max-w-4xl mx-auto"> {/* Added max-width wrapper */}
              <div className="aspect-[16/9] rounded-lg shadow-xl overflow-hidden"> {/* Updated aspect ratio class for Tailwind v4 */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.17609471438988!2d34.31102568639799!3d36.60670384873761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d8632251fe2be7%3A0xb7eb0ba290c1fe28!2zQWsgUGFydGktZXJkZW1saSBCZWxkZSDEsGzDp2UgQmHFn2thbmzEscSfxLE!5e0!3m2!1sen!2str!4v1746806081207!5m2!1sen!2str"
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
        <section id="contact" className="py-16 bg-neutral-800 px-4"> {/* Darker background */}
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-[var(--accent-green)]">İletişim</h2> {/* Use accent green */}
            <div className="max-w-lg mx-auto bg-neutral-700 p-8 rounded-lg shadow-xl"> {/* Darker card bg */}
              <p className="text-xl font-semibold mb-2 text-[var(--foreground)]">Osman Levent Kaya</p> {/* Use foreground color */}
              <p className="text-lg text-[var(--foreground)] mb-4"> {/* Use foreground color */}
                Merkez Mah. Şehit Süleyman Şahin Sk. No:4/A Erdemli/Mersin, 33780
              </p>
              <p className="text-2xl font-bold text-[var(--accent-green)] mb-4"> {/* Use accent green for phone */}
                <a href="tel:+905325862228" className="hover:text-green-700 transition-colors">
                  +90 532 586 22 28
                </a>
              </p>
              <p className="text-lg text-[var(--foreground)] mb-6">7/24 Çilingir Hizmeti</p> {/* Use foreground color */}
              <a
                href="https://www.instagram.com/anahtarciosman/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 hover:bg-green-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300" /* Even darker green button, white text */
              >
                Instagramda Takip Edin
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
