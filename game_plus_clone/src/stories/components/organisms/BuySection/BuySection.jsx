import "./style.scss";
import Gift from "../../molecules/Gift/Gift";

const BuySection = () => {
  return (
    <section className="buy-section">
      <Gift
        data={{
          title: "Sevdiklerinize GeForce NOW hediye edin!",
          text: "Daha fazla seçeneği keşfedin! GeForce NOW Performance kodu satın alarak sevdiklerinize hediye edin.",
          btn_link: "https://gameplus.com.tr/gfn/hediye-kartlari",
          btn_text: "Şimdi Satın Al",
        }}
      />
    </section>
  );
};

export default BuySection;
