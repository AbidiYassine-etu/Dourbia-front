export default function Footer() {
    return (
      <footer className="bg-blue-950 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DOURBIA</h3>
              <p className="text-gray-400">
                Lets Discover Tunisia Together .
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                {['Carthage', 'Marsa', 'Benzart'].map((region) => (
                  <li key={region}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {region}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {['About Us', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                  <li  key={social}>
                  <a
                   href="#"
                   className="text-gray-400 hover:text-blue-400 transition-colors"
                 >
                   {social}
                 </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DOURBIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }