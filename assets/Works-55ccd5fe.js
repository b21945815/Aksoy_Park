import{u as t,j as e,r as l,e as u,S as f}from"./index-ec6ec530.js";import{u as h}from"./useWorks-291558d8.js";const m=t.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,v=t.select`
  padding: 12px;
  border-radius: 8px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-800);
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: 1px solid var(--color-grey-400);
  transition: all 0.3s ease-in-out;
  appearance: none; 
  font-weight: 500;
  position: relative;
  width: 250px;

  &:hover {
    background-color: var(--color-grey-200);
  }

  &:focus {
    border-color: var(--color-blue-300);
    box-shadow: 0px 0px 8px rgba(35, 140, 197, 0.5);
  }
  
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23374151' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 18px;

  option {
    background-color: var(--color-grey-100);
    color: var(--color-grey-800);
    font-size: 16px;
    padding: 10px;
  }

  option:hover {
    background-color: var(--color-grey-300);
  }

  option:checked {
    background-color: var(--color-blue-100);
    color: var(--color-blue-700);
    font-weight: bold;
  }
`,y=({categories:r,selectedCategory:n,onChange:s})=>e.jsx(m,{children:e.jsx(v,{value:n,onChange:s,children:r.map((o,a)=>e.jsx("option",{value:o,children:o},a))})}),p=t.div`
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
`,b=t.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid var(--color-grey-300); 

  @media (max-width: 800px) {
    max-height: 200px; 
  }
`,j=t.h2`
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

  ${p}:hover & {
    opacity: 1;
  }

  @media (max-width: 800px) {
    font-size: 14px; 
    padding: 3px;
  }
`;function w({name:r,link:n}){const[s,o]=l.useState(!1),a=()=>{o(!0)},c=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(p,{onClick:a,children:[e.jsx(b,{src:n,alt:r}),e.jsx(j,{children:r})]}),s&&e.jsx(u,{closeFullscreen:c,link:n,name:r})]})}const k=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`,S=t.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`,W=t.div`
  flex: 1;
  padding: 20px;
  overflow-x: hidden;
  width: 100%;
  max-width: 1200px;
`,z=t.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`,C=()=>{var d;const{works:r,isLoading:n,error:s}=h(),[o,a]=l.useState(null);if(l.useEffect(()=>{!n&&r.length>0&&a(r[0].category)},[r,n]),n)return e.jsx(f,{});if(s)return e.jsx("div",{children:"Resimleri yüklerken hata oluştu"});const c=r.map(i=>i.category),x=o?((d=r.find(i=>i.category===o))==null?void 0:d.items)||[]:[];return e.jsxs(k,{children:[e.jsx(S,{children:e.jsx(y,{categories:c,selectedCategory:o,onChange:i=>a(i.target.value)})}),e.jsx(W,{children:e.jsx(z,{children:x.map((i,g)=>e.jsx(w,{name:i.name,link:i.url},g))})})]})};function F(){return e.jsx(C,{})}export{F as default};
