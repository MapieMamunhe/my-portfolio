import Link from "next/link";
import Image from "next/image";
import React from "react";

const GT = "/assets/images/github.svg";
const GM = "/assets/images/gmail.svg";
const LK = "/assets/images/linkedin.svg";
const WP = "/assets/images/whatsapp.svg";
// import { Container } from './styles';

const Footer: React.FC = () => {
  const styles = {
    svgDefaults: { width: "32px", height: "32px" },
  };
  return (
    <footer>
      <ul className="flex flex-row justify-around px-12 my-6">
        <li className="link">
          <Link href="https://github.com/MapieMamunhe">
            <Image src={GT} width={32} height={32} alt="github svg" />
          </Link>
        </li>
        <li className="link">
          <Link href="#">
            <Image src={LK} width={32} height={32} alt="Linkedin svg" />
          </Link>
        </li>
        <li className="link">
          <Link href="#">
            <Image src={GM} width={32} height={32} alt="Gmail svg" />
          </Link>
        </li>
        <li className="link">
          <Link href="#">
            <Image src={WP} width={32} height={32} alt="Whatsapp svg" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
