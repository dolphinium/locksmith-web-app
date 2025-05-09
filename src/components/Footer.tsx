const Footer = () => {
  return (
    <footer className="bg-[var(--background)] p-6 text-center text-sm text-[var(--foreground)] border-t border-neutral-700"> {/* Adjusted colors */}
      <p>&copy; {new Date().getFullYear()} Anahtarcı Osman Elektronik Anahtar Çilingirlik Hizmetleri.</p>
      <p>Tüm Hakları Saklıdır. Erdemli / Mersin.</p>
    </footer>
  );
};

export default Footer;
