import "./style.scss";
import H2 from "../../atoms/H2/H2";
import TechCard from "../../molecules/TechCard/TechCard";

const TechSection = () => {
  return (
    <section className=" my-5">
      <H2
        text={"NVIDIA Teknolojileri"}
        classes={"text-primary text-center line pb-4 mb-4"}
      />
      <div className="tech-cards">
        <TechCard
          classes="reflex"
          title={"NVIDIA Reflex"}
          texts={[
            "NVIDIA Reflex, oyunlarda düşük gecikme süresi ve daha hızlı tepki süresi sağlamak için geliştirilmiş bir teknolojidir.",
            "Reflex, fare hareketleri ile ekranda görülen tepki arasındaki zaman farkını azaltarak daha hassas ve akıcı bir oyun deneyimi sunar.",
            "Bu teknoloji, özellikle rekabetçi oyunlarda avantaj sağlar, çünkü oyuncular daha hızlı tepki verebilir ve daha hassas kontrol elde edebilirler.",
          ]}
        />
        <TechCard
          classes="rtx"
          title={"NVIDIA RTX (Işın izleme)"}
          texts={[
            "NVIDIA'nın RTX teknolojisi, ışın izleme (ray tracing) kullanarak oyunlarda gerçekçi ışık, gölge ve yansıma efektleri oluşturur. Bu teknoloji, ışığın yüzeylerle etkileşimini simüle ederek daha doğal ve detaylı görseller sağlar. RTX, özellikle görsel kaliteyi ön planda tutan modern oyunlarda büyük fark yaratır.",
          ]}
        />
        <TechCard
          classes="dlss"
          title={"DLSS"}
          texts={[
            "NVIDIA DLSS, yapay zeka kullanarak performansı artırır ve görüntü kalitesini iyileştirir. DLSS Kare Oluşturma; daha fazla kare üretir, Işın Yeniden Oluşturma; ışın izleme sahnelerinde kaliteyi artırır, Süper Çözünürlük; düşük çözünürlükten yüksek çözünürlük oluşturur, DLAA ise kenarları yumuşatarak kaliteyi yükseltir.",
          ]}
        />
        <TechCard
          classes="gsync"
          title={"Cloud G-SYNC"}
          texts={[
            "NVIDIA Cloud G-Sync, bulut oyunlarında ekran yırtılmalarını önleyerek, görüntüleri senkronize eder ve akıcı bir oyun deneyimi sağlar. Bu teknoloji, internet gecikmesine rağmen kesintisiz bir performans sunar.",
          ]}
        />
      </div>
    </section>
  );
};

export default TechSection;
