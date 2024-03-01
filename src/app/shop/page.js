import Link from "next/link";
import AddItems from "./incrementer";

export default function Shop() {
  return (
    <section
      className={`relative min-h-[100vh] py-20 w-full flex sm:flex-row flex-wrap flex-col-reverse gap-10 items-start bg-black overflow-hidden px-10`}
    >
      <div className="w-full text-white gap-10 sm:max-w-4xl mx-auto items-center justify-center flex sm:flex-row flex-wrap flex-col-reverse p-10 rounded-md">
          <div className="w-full sm:w-1/2">
              <h1 className="text-3xl">Get NRG</h1>
              <p className="font-light">Stock up on NRG</p>
              <AddItems />
              <Link className="btn" href="#">Checkout</Link>
          </div>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/nrg-single-320px.webp`}
            width="1024"
            height="1024"
            alt="Ficticious energy drink can NRG Refresh"
            className="w-36 sm:w-42 h-auto rounded-2xl mx-auto"
            srcSet={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/nrg-single-320px.webp 320w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/nrg-single-640px.webp 640w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/nrg-single-1024px.webp 1024w`}
          />
      </div>
    </section>
  );
}