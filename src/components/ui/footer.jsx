export const Footer = () => (
  <footer className="bg-gray-900 text-white">
    {/* Upper Dark Banner */}
    <div className="bg-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          "Let's Shop <span className="text-blue-400">Beyond Boundaries</span>"
        </h2>
      </div>
    </div>

    {/* Main Footer Links */}
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 border-b border-gray-700 pb-8">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-blue-400">BeliBeli.com</h3>
          <p className="text-sm text-gray-400 max-w-full sm:max-w-xs">
            "Let's Shop Beyond Boundaries" is our mantra. Discover endless products.
          </p>
          <div className="flex mt-4 space-x-3 text-gray-400">
            <span>F</span>
            <span>T</span>
            <span>I</span>
            <span>L</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Returns</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Partnership</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400">Seller Login</a></li>
            <li><a href="#" className="hover:text-blue-400">Affiliate Program</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="font-semibold mb-4">Download App</h4>
          <div className="flex space-x-2">
            <img
              src="https://placehold.co/120x40/FFFFFF/000000?text=App+Store"
              alt="App Store"
              className="w-full max-w-[120px] rounded-lg"
            />
            <img
              src="https://placehold.co/120x40/FFFFFF/000000?text=Google+Play"
              alt="Google Play"
              className="w-full max-w-[120px] rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 text-center text-sm text-gray-500">
        &copy; 2024 BeliBeli.com. All Rights Reserved.
      </div>
    </div>
  </footer>
);