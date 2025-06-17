import Link from "next/link";
import { usePathname } from "next/navigation";
const NavbarLinks = () => {
  const pathname = usePathname();
  const linkClass = (path: string) =>
    `hover:text-red-500 transition ${pathname === path ? "text-red-500" : ""}`;

  return (
    <nav className="hidden md:flex gap-6 text-white font-medium">
      <Link href="/" className={linkClass("/")}>Trang chủ</Link>
      <Link href="/phim-dang-chieu" className={linkClass("/phim-dang-chieu")}>Đang chiếu</Link>
      <Link href="/phim-sap-chieu" className={linkClass("/phim-sap-chieu")}>Sắp chiếu</Link>
      <Link href="/rap-gan-ban" className={linkClass("/rap-gan-ban")}>Rạp gần bạn</Link>
    </nav>
  );
};

export default NavbarLinks;
