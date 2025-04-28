import H2 from "../../atoms/H2/H2";
import P from "../../atoms/P/P";
import "./style.scss";
const WhatGeforce = () => {
  return (
    <section className="what-is-geforce">
      <div className="text-content">
        <H2 text="GeForce NOW Nedir?" classes="text-primary text-start" />
        <P
          text="NVIDIA GeForce NOW powered by GAME+, Türkiye’de ilk ve tek bulut tabanlı oyun stream hizmetidir."
          classes="text-light"
        />
        <P
          text="Doğrudan bulut üzerinden gerçek zamanlı oyun deneyimi sunar. Oyun bilgisayarı ve yüksek donanım ihtiyacını ortadan kaldırır. Desteklenen oyunlar için bulut kayıtlarıyla, nerede olursa olsun, oyununu kaldığın yerden, desteklenen herhangi bir cihazda devam ettirilebilirsiniz. Oyunları indirmeden ve güncelleme ihtiyacı olmadan oynayabilirsiniz."
          classes="text-light"
        />
      </div>
    </section>
  );
};

export default WhatGeforce;
