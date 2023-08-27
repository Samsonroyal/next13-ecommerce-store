const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 <a href="https://taasa.app" target="_blank" rel="noopener noreferrer">Taasa Marketplace,</a> built with {" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by the people at <a href="https://taasa.app" target="_blank" rel="noopener noreferrer">Taasa</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
