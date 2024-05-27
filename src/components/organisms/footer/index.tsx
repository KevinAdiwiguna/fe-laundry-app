export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a company dedicated to providing the best services to our customers. Our goal is to make your experience with us unforgettable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2 text-gray-400">
                <span className="font-semibold">Email:</span> support@example.com
              </li>
              <li className="mb-2 text-gray-400">
                <span className="font-semibold">Phone:</span> +123 456 7890
              </li>
              <li className="mb-2 text-gray-400">
                <span className="font-semibold">Address:</span> 123 Street, City, Country
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22.54 6.42c.01.17.01.34.01.51 0 5.18-3.94 11.15-11.15 11.15-2.21 0-4.27-.65-6-1.76.3.04.6.06.91.06 1.84 0 3.54-.63 4.88-1.69a3.92 3.92 0 01-3.65-2.71c.24.04.48.07.73.07.35 0 .68-.05 1-.13a3.91 3.91 0 01-3.14-3.83v-.05c.52.29 1.1.46 1.72.48a3.91 3.91 0 01-1.74-3.26c0-.72.2-1.39.54-1.97a11.11 11.11 0 008.07 4.09c-.06-.29-.09-.6-.09-.91a3.91 3.91 0 013.91-3.91c1.13 0 2.14.48 2.85 1.25a7.82 7.82 0 002.48-.95 3.91 3.91 0 01-1.72 2.15 7.8 7.8 0 002.25-.62 8.04 8.04 0 01-1.96 2.04z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 2.87 8.13 6.84 9.46.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.02a9.59 9.59 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.44.1 2.7.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48 3.97-1.33 6.84-5.05 6.84-9.46 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24H12v-9.34H9.39v-3.64H12V8.36c0-2.63 1.56-4.06 3.93-4.06 1.13 0 2.1.08 2.38.12v2.75h-1.63c-1.28 0-1.53.6-1.53 1.48v1.94h3.06l-.4 3.64h-2.66V24h5.23c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
