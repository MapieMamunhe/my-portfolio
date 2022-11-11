import Link from "next/link";
import Image from "next/image";
import React from "react";
import gt from "../../../assets/images/github.svg";
import gm from "../../../assets/images/gmail.svg";
import lk from "../../../assets/images/linkedin.svg";
import wp from "../../../assets/images/whatsapp.svg";
// import { Container } from './styles';

const Footer: React.FC = () => {
  const styles = {
    svgDefaults: { width: "32px", height: "32px" },
  };
  return (
    <footer>
      <ul className="flex flex-row justify-around px-12 my-6">
        <li>
          <Link href="#">
            <Image src={gt} style={styles.svgDefaults} alt="github svg" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={lk} style={styles.svgDefaults} alt="Linkedin svg" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={gm} style={styles.svgDefaults} alt="Gmail svg" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={wp} style={styles.svgDefaults} alt="Whatsapp svg" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
