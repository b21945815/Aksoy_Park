import{f as g,m as h,o as p,u as o,r as f,j as e,e as y,S as w}from"./index-ec6ec530.js";const d="/examples.json";function j(){const r=g(),{data:n,isLoading:i,error:s}=h({queryKey:["examples"],queryFn:async()=>{var a,t;try{return(((t=(a=(await p.get(d)).data)==null?void 0:a.examples)==null?void 0:t.example)||[]).map(x=>({name:x.name,url:x.url}))}catch{throw new Error("Error fetching or parsing JSON file")}}});return{examples:n,isLoading:i,error:s,addImage:async a=>{try{const t=await p.post(d,a);return r.invalidateQueries(["examples"]),t.data}catch{throw new Error("Error adding new image")}},editImage:async(a,t)=>{try{const c=await p.put(`${d}/${a}`,t);return r.invalidateQueries(["examples"]),c.data}catch{throw new Error("Error updating image")}},deleteImage:async a=>{try{const t=await p.delete(`${d}/${a}`);return r.invalidateQueries(["examples"]),t.data}catch{throw new Error("Error deleting image")}}}}const u=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,E=o.img`
  width: 350px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid var(--color-grey-300);

  @media (max-width: 800px) {
    max-height: 200px; 
    max-width: 300px; 
  }
`,v=o.h2`
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  text-align: center;

  ${u}:hover & {
    opacity: 1;
  }

  @media (max-width: 800px) {
    font-size: 14px; 
    padding: 3px;
  }
`;function I({name:r,link:n}){const[i,s]=f.useState(!1),l=()=>{s(!0)},m=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{onClick:l,children:[e.jsx(E,{src:n,alt:r}),e.jsx(v,{children:r})]}),i&&e.jsx(y,{closeFullscreen:m,link:n,name:r})]})}const b=o.div`
  padding: 20px;
  overflow-x: hidden;
`,k=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
 
`,F=()=>{const{examples:r,isLoading:n,error:i}=j();return n?e.jsx(w,{}):i?e.jsx("div",{children:"Resimleri yüklerken hata oluştu"}):!r||r.length===0?e.jsx("p",{children:"Sistemde resim bulunmamaktadır"}):e.jsx(b,{children:e.jsx(k,{children:r.map((s,l)=>e.jsx(I,{name:s.name,link:s.url},l))})})};function $(){return e.jsx(F,{})}export{$ as default};
