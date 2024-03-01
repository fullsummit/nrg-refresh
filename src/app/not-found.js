import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen items-center justify-center flex flex-col text-2xl gap-2 font-light">
      <h1><span className="font-extrabold">404</span> - We lost this page</h1>
      <span className="text-lg">
        Try{" "}
        <Link href={"/"} className="underline">
          going home
        </Link>
      </span>
    </div>
  );
}
