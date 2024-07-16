const Footer = () => {
  return (
    <footer className="bg-[#282c34] text-white text-center py-2.5">
      <div className="max-w-screen-xl mx-auto">
        <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
        <ul className="list-none p-0">
          <li className="inline mx-2.5">
            <a href="/about" className="text-white no-underline hover:underline">About</a>
          </li>
          <li className="inline mx-2.5">
            <a href="/contact" className="text-white no-underline hover:underline">Contact</a>
          </li>
          <li className="inline mx-2.5">
            <a href="/privacy" className="text-white no-underline hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;