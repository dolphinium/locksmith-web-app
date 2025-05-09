const Footer = () => {
  return (
    <footer className="bg-gray-200 p-6 text-center text-sm text-gray-600 border-t border-gray-300"> {/* Adjusted colors */}
      <p>&copy; {new Date().getFullYear()} Anahtarcı Osman Elektronik Anahtar Çilingirlik Hizmetleri.</p>
      <p>Tüm Hakları Saklıdır. Erdemli / Mersin.</p>
      <p className="mt-2">
        Web Tasarım: <a href="https://cline.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors">Cline</a> {/* Adjusted link color */}
      </p>
    </footer>
  );
};

export default Footer;
