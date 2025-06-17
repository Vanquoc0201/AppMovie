import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <img src="/images/logo.jpg" alt="Logo" className="h-8 w-auto rounded" />
    <span className="font-bold text-lg text-red-500">MOVIEZONE</span>
  </Link>
);

export default Logo;
