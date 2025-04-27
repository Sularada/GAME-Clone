import React from "react";

const Footer = () => {
  return (
    <footer className="footer pt-4 px-2">
      <div className="footer-content">
        <div className="footer-content d-flex gap-5">
          <div>
            <h6 className="text-primary">Ubisoft+</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/ubisoft/oyunlar"
                >
                  Oyunlar
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/ubisoft/paketler"
                >
                  Paketler
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/ubisoft/indir-ve-oyna"
                >
                  İndir ve Oyna
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/destek#ubisoft"
                >
                  Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-primary">GeForce NOW</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/gfn/oyunlar"
                >
                  Oyunlar
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/gfn/paketler"
                >
                  Paketler
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/gfn/indir-ve-oyna"
                >
                  İndir ve Oyna
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_self"
                  href="/destek#gfn"
                >
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://status.geforcenow.com/"
                >
                  Servis Durumu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-dark">
        <div className="footer-copyright-content p-2 d-flex justify-content-between">
          <div>
            <span className="fs-6 text-light me-4">Kullanıcı Sözleşmesi</span>
            <span className="fs-6 text-light me-4">Aydınlatma Metni</span>
            <span className="fs-6 text-light me-4">Çerez Politikası</span>
          </div>
          <div>
            <a
              className="text-warning fs-6 text-decoration-none"
              href="/hakkimizda"
            >
              Hakkımızda
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
