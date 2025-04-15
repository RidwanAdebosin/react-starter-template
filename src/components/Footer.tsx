const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} React starter pack. All rights
          reserved.
        </p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/RidwanAdebosin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Ridwan_Adebosin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            Twitter
          </a>
          <a href="/privacy" className="hover:text-blue-600 transition">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
