const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 pt-16 pb-12 mt-auto border-t-4 border-amber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Craftsmanship Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-cursive text-amber-300">Qincraft</h3>
            <p className="leading-relaxed">
              Preserving the art of handmade woodcraft since 1998. 
              Each piece tells a story of tradition, sustainability, 
              and meticulous craftsmanship.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm text-amber-400">ECO-Friendly Certified</span>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Collections</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Furniture Masterpieces</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Decorative Carvings</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Kitchenware Series</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Custom Commissions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Client Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Custom Order Process</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Wood Preservation Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Workshop Visits</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">Artisan Updates</h4>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-lg bg-amber-800 border border-amber-700 text-amber-100 placeholder-amber-300 focus:outline-none focus:border-amber-400"
                />
                <button 
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-amber-900 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">Follow the Workshop</h4>
              <div className="flex space-x-4">
                {/* Add actual icons or keep as is */}
                <a href="#" className="text-amber-300 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" />
                </a>
                <a href="#" className="text-amber-300 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Pinterest</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" />
                </a>
                <a href="#" className="text-amber-300 hover:text-amber-400 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-amber-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-amber-400 text-sm">
            <span>Member of International Woodcraft Association</span>
            <span className="hidden md:block">•</span>
            <span>Certified Sustainable Forestry Partner</span>
            <span className="hidden md:block">•</span>
            <span>Recipient of 2023 Craft Excellence Award</span>
          </div>
          <p className="mt-4 text-amber-500">
            &copy; {new Date().getFullYear()} Qincraft Woodcrafting Atelier. 
            Handmade with patience and precision in every chip and chisel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
