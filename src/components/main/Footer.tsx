// 김헌규 제작
// 이진송 수정 - 타입스크립트에 맞춰서 변경함
// 김헌규 - footer에 플렉스를 이용하여 가운데 정렬 및 높이 조절
const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center h-24 py-2.5 bg-[#282c34] text-white text-center ">
      <div className="container">
        <p className="my-2">&copy; 2024 MyWebsite. All Rights Reserved.</p>
        <ul className="list-none my-2">
          <li className="inline mx-2.5">
            <a
              href="/about"
              className="text-white no-underline hover:underline"
            >
              About
            </a>
          </li>
          <li className="inline mx-2.5">
            <a
              href="/contact"
              className="text-white no-underline hover:underline"
            >
              Contact
            </a>
          </li>
          <li className="inline mx-2.5">
            <a
              href="/privacy"
              className="text-white no-underline hover:underline"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
