import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Logo from "./logo";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="text-white bg-black p-4 py-6 w-full">
      <div className="mx-auto flex flex-col flex-wrap justify-start lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 gap-1">
          <Logo />
          <div className="flex gap-4">
            <Link href="#" aria-label="dummy instagram link">
              <FontAwesomeIcon icon={faInstagram} className="text-hover" />
            </Link>
            <Link href="#" aria-label="dummy facebook link">
              <FontAwesomeIcon icon={faFacebook} className="text-hover" />
            </Link>
            <Link href="#" aria-label="dummy twitter link">
              <FontAwesomeIcon icon={faXTwitter} className="text-hover" />
            </Link>
          </div>
        </div>
        {/* Policies and Copyright */}
        <div className="flex flex-col text-center items-center md:items-end mt-4 md:mt-0">
          <p className="mb-2 font-normal text-sm text-center">
            &copy; {new Date().getFullYear()} Full Summit LLC. This site is a demo.
          </p>
        </div>
      </div>
    </footer>
  );
}
