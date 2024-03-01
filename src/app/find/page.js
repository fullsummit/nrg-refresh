import Link from "next/link";

export default function Find() {
  return (
    <section
      className={`relative min-h-[100vh] py-20 w-full flex sm:flex-row flex-wrap flex-col-reverse gap-10 items-start bg-black bg-center bg-cover bg-no-repeat bg-map overflow-hidden px-10`}
    >
      <div className="w-fit p-6 sm:px-20 py-6 sm:py-10 text-white gap-4 sm:max-w-4xl mx-auto items-start justify-center flex flex-col flex-wrap rounded-md shadow-green-500 shadow bg-black bg-opacity-75 mb-auto sm:my-auto">
          <h1 className="text-3xl">Find NRG near you</h1>
          <label htmlFor="zip" className="font-light">
            Enter your ZIP code
          </label>
          <input
            type="text"
            id="zip"
            maxLength={5}
            className="px6 w-28 flex items-center justify-center py-2 px-6 text-xl bg-transparent border-b-white border-b text-white outline-none focus:border-b-green-600 transition-all"
          />
          <Link className="btn" href="#">Search</Link>
      </div>
    </section>
  );
}
