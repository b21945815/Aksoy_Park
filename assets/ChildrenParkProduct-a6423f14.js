import{u as i,j as e,p as v,r as m,q as C,S as T}from"./index-ec6ec530.js";const z=i.div`
  background-color: var(--color-grey-100);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
`,P=i.h2`
  color: var(--color-grey-800);
  border-bottom: 2px solid var(color-grey-100); 
  padding-bottom: 5px;
  margin-bottom: 15px;
`,l=i.p`
  color: var(--color-grey-700);
  line-height: 1.5;
`,x=i.span`
  font-weight: bold;
`,S=({otherMessage:t})=>e.jsxs(z,{children:[!t&&e.jsx(l,{children:"-Oyun grubu taşıyıcı direkleri Ø114 x 2,5 mm TSE’li borulardan imal edilmektedir."}),t&&e.jsx(l,{children:"- Tüm Ahşap Aksamlar 1. Sınıf Emprenyeli Sarı Çamdan İmal Edilmektedir."}),e.jsxs(l,{children:["Tüm metal aksama elektrostatik toz boya öncesi ",e.jsx(x,{children:"kumlama"})," yapılmaktadır."]}),e.jsx(P,{children:"Kumlama Nedir?"}),e.jsxs(l,{children:["Tüm metal aksamlarda imalat bittikten sonra kaynak bölgelerindeki gerilmeyi almak, yüzeyde boyanın daha iyi tutunmasını sağlamak, boyamaya engel olacak yağ, kir tabakası ile paslardan arındırmak amacıyla yapılan işleme"," ",e.jsx(x,{children:"kumlama"})," denir. ",e.jsx(x,{children:"Kumlama"}),", ürün ömrünü uzatarak metal yüzeyde oluşabilecek korozyon riskini azaltır."]})]}),I=i.div`
  background-color: #eef5fc;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
`,g=i.h2`
  color: #2c3e50;
  border-bottom: 2px solid #2980b9;
  padding-bottom: 5px;
  margin-bottom: 15px;
`,f=i.p`
  color: #34495e;
  line-height: 1.5;
`,$=i.ul`
  color: #34495e;
  line-height: 1.5;
`,E=({item:t})=>{const a=t.sizeData,s=t.listData;return e.jsxs(I,{children:[e.jsx(g,{children:"Özellikler"}),e.jsxs(f,{children:["Oturum Alanı: ",a[0]," Metre x ",a[1]," Metre"]}),e.jsxs(f,{children:["Güvenli Kullanım Alanı: ",a[2]," Metre x ",a[3]," Metre"]}),e.jsx(g,{children:"Aktiviteler"}),e.jsx($,{children:s.map((d,o)=>e.jsx("li",{children:d},o))})]})},M=i.div`
  display: flex;
  flex-direction: ${({isMobile:t})=>t?"column":"row"};
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--color-grey-200);
  border-radius: 12px;
`,A=({item:t,isMobile:a})=>e.jsxs(M,{isMobile:a,children:[e.jsx(S,{otherMessage:t.isWood}),e.jsx(E,{item:t})]}),L=i.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
`,R=i.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`,K=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,N=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
  margin: 0;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`,D=i.img`
  max-width: 100%;
  max-height: 500px;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    max-width: 70%;
    margin-left: 20px;
  }
`,O=i.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  overflow-x: auto;
  margin-top: 10px;
  width: 100%;
  max-height: 400px;
  padding-top: 10px;

  @media (min-width: 800px) {
    flex-direction: column;
    margin-top: 0;
    overflow-y: auto;
    width: 100px;
  }
`,W=i.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid ${t=>t.isSelected?"#007bff":"transparent"};
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 800px) {
    width: 60px;
    height: 60px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`,q=i.p`
  font-size: 1.2rem;
  margin-top: 10px;
  text-align: left;
  max-width: 100%;

  @media (min-width: 800px) {
    text-align: left;
    margin-left: 40px;
    margin-top: 0;
    max-width: 600px;
  }
`;function G(){var p;const{categoryName:t,itemName:a}=v(),[s,d]=m.useState(!1),{products:o,isLoading:b,error:y}=C(),[j,k]=m.useState(""),c=o==null?void 0:o.find(n=>n.category===t),r=c==null?void 0:c.items.find(n=>n.name===a),h=j||(r==null?void 0:r.url),w=n=>{k(n)};return m.useEffect(()=>{const n=()=>{d(window.innerWidth<=800)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),b?e.jsx(T,{}):y?e.jsx("div",{children:"Resimleri yüklerken hata oluştu"}):e.jsx(L,{children:r?e.jsx(K,{children:e.jsxs(R,{children:[e.jsxs(N,{children:[e.jsx(O,{children:(p=r.subUrls)==null?void 0:p.map((n,u)=>e.jsx(W,{src:n,alt:`Thumbnail ${u+1}`,isSelected:h===n,onClick:()=>w(n)},u))}),e.jsx(D,{src:h,alt:r.name})]}),e.jsx(A,{item:r,isMobile:s})]})}):e.jsx(q,{children:"Ürün bulunamadı."})})}export{G as default};
