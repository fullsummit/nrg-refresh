import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow, faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePageContent() {
  return (
    <>
      <section
        className={`relative min-h-[100vh] py-20 w-full flex flex-wrap gap-10 items-center overflow-hidden px-10 bg-home-cta bg-center bg-cover bg-no-repeat`}
      >
        <div className="flex flex-col items-start justify-start text-center w-fit p-4">
          <div className="flex flex-col max-w-xl">
            <h1 className="text-left -mb-1 text-4xl sm:text-7xl font-light text-white break-words">
              <strong className="font-bold">Refreshingly</strong>{" "}
              Energizing
            </h1>
          </div>
          <div className="flex flex-wrap">
              <Link
                href="/find"
                className="btn"
              >
                <span className="flex w-fit">Find Retailer</span>
                <FontAwesomeIcon icon={faLocationArrow} />
              </Link>
              <Link
                href="/shop"
                className="flex w-full sm:w-fit items-center justify-center gap-4 text-white px-8 py-2 mt-8 hover:text-green-500 transition-all"
              >
                <span className="flex w-fit">Shop Online</span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
