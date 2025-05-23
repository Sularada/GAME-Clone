import { LinkButton } from "../../atoms/Button/Button";
import NextImage from "../../atoms/Img/NextImage";

const Navbar = () => {
  return (
    <div className="d-none d-lg-flex justify-content-between py-3 w-100 ms-auto">
      <div>
        <NextImage
          src={
            "https://gameplus.com.tr/static/media/logo-desktop-dark@2x.0f3b6d94.webp"
          }
          width={214}
          height={40}
          alt={"geforce logo"}
        />
        <LinkButton
          classes={"text-light px-2"}
          href={"/oyunlar"}
          text={"Oyunlar"}
        />
        <LinkButton
          classes={"text-light px-2"}
          href={"/paketler"}
          text={"Paketler"}
        />
        <LinkButton
          classes={"text-light px-2"}
          href={"/indir-ve-oyna"}
          text={"İndir ve Oyna"}
        />
        <LinkButton
          classes={"text-light px-2"}
          href={"/geforce-now-nedir"}
          text={"Nasıl Çalışır?"}
        />
      </div>
      <div>
        <LinkButton
          classes={"btn-outline-primary"}
          href={"/giris"}
          text={"Giriş Yap"}
        />
      </div>
    </div>
  );
};

export default Navbar;
