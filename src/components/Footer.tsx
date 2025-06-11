
const Footer = () => {
  return (
    <footer className="hidden md:block bg-streaming-dark text-white mt-16">
      <div className="container px-4 md:px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-lg gradient-kenya"></div>
            <h3 className="text-lg font-bold">TechView TV</h3>
          </div>
          <p className="text-gray-300 text-sm">
            © 2024 TechView Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
