"use client";

import "./style.scss";
import Link from "../../atoms/Link/Link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => (pathname === path ? "active" : "");

  return (
    <div className="navbar-comp d-none d-lg-flex justify-content-between py-3 w-100 ms-auto">
      <div className="d-flex align-items-center">
        <Link
          href="/"
          classes={`navbar-link mr-21 p-0 ${isActive("/")}`}
          leftIcon={
            "https://gameplus.com.tr/static/media/logo-desktop-dark@2x.0f3b6d94.webp"
          }
          iconWidth={214}
          iconHeight={40}
        />
        <Link
          classes={`nav-link mr-21 p-0 ${isActive("/oyunlar")}`}
          href="/oyunlar"
          text="Oyunlar"
        />
        <Link
          classes={`nav-link mr-21 p-0 ${isActive("/paketler")}`}
          href="/paketler"
          text="Paketler"
        />
        <Link
          classes={`nav-link mr-21 p-0 ${isActive("/indir-ve-oyna")}`}
          href="/indir-ve-oyna"
          text="İndir ve Oyna"
        />
        <Link
          classes={`nav-link mr-21 p-0 ${isActive("/geforce-now-nedir")}`}
          href="/geforce-now-nedir"
          text="Nasıl Çalışır?"
        />
      </div>
      <div>
        <Link
          classes={`btn btn-outline-primary d-flex justify-content-center fw-bold login-btn ${isActive(
            "/giris"
          )}`}
          href="/giris"
          text="Giriş Yap"
        />
      </div>
    </div>
  );
};

export default Navbar;
