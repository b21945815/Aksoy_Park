import { useState, useEffect } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Logo from '../ui/Logo';

function Information() {
  const [logoSize, setLogoSize] = useState("30rem");

  useEffect(() => {
    const handleResize = () => {
      setLogoSize(window.innerWidth <= 800 ? "18rem" : "30rem");
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Heading style={{ textAlign: "center" }} as="h1">Aksoy Park ve Kent Ekipmanları</Heading>

      <Row>
        <p style={{ textAlign: "center" }}>
          <strong>
            Aksoy Park ve Kent Ekipmanları, peyzaj, oyun grubu ve tadilat çalışmalarında uzmanlaşmış bir firmadır. Kaliteli hizmet anlayışıyla sektörde güvenilir bir konuma sahiptir. 
          </strong>
        </p>
        <p style={{ textAlign: "center" }}>
          Şirketimiz, çocuk oyun gruplarının tadilatı ve peyzaj düzenlemeleri konusunda deneyimli bir ekibe sahiptir. Modern hizmet anlayışımızla, projelerimizi titizlikle yürütmekteyiz.
        </p>
        <p style={{ textAlign: "center" }}>
          Müşteri memnuniyetini ön planda tutarak, projelerimizi zamanında ve eksiksiz teslim etmeyi hedeflemekteyiz. Kalite ve güvenilirlik, hizmetlerimizin temelini oluşturmaktadır.
        </p>
        <p style={{ textAlign: "center" }}>
          Aksoy Park ve Kent Ekipmanları olarak, sektördeki yenilikleri takip ederek, en güncel ve etkili çözümleri sunmaktayız. Peyzaj, oyun grubu ve tadilat ihtiyaçlarınız için profesyonel hizmetler sunuyoruz.
        </p>
      </Row>
      <Logo size={logoSize} />
    </>
  );
}

export default Information;
