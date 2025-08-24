const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="text-gray-500 font-md flex items-center justify-center pb-5 pt-8">
      <div>
        <div className="flex justify-center">
          <h1>
            Made with <span style={{ color: "red;" }}>❤️</span> by cbhere
          </h1>
        </div>
        <div className="justify-center">
          <p>© {getCurrentYear()} cbhere. All rights reserved.</p>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </footer>
  );
};

export default Footer;
