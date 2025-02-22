import{u as i,j as e,H as R,F as T,b as E,r as s,B as p,c as F,d as H,S as P,e as M}from"./index-ec6ec530.js";import{u as z}from"./useWorks-291558d8.js";const L=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  gap: 3rem;
`,V=i.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: var(--color-blue-100);
  color: var(--color-blue-700);
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;function A({toggleTableVisibility:t,isTableVisible:n,text:o}){return e.jsxs(L,{children:[e.jsx(R,{as:"h1",children:o}),e.jsx(V,{onClick:t,children:n?e.jsx(T,{}):e.jsx(E,{})})]})}const D=i.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`,j=i.div`
  display: grid;
  grid-template-columns: ${t=>t.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,O=i(j)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,$=i(j)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,W=i.section`
  margin: 0.4rem 0;
`,N=i.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,U=i.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,f=s.createContext();function c({columns:t,children:n}){return e.jsx(f.Provider,{value:{columns:t},children:e.jsx(D,{role:"table",children:n})})}function X({children:t}){const{columns:n}=s.useContext(f);return e.jsx(O,{role:"row",columns:n,as:"header",children:t})}function q({children:t}){const{columns:n}=s.useContext(f);return e.jsx($,{role:"row",columns:n,children:t})}function G({data:t,render:n}){return t.length?e.jsx(W,{children:t.map(n)}):e.jsx(U,{children:"No data to show at the moment"})}c.Header=X;c.Body=G;c.Row=q;c.Footer=N;function J({url:t,name:n,handleImageClick:o,handleEditImage:r,handleDeleteImage:a}){return e.jsxs(c.Row,{children:[e.jsx("div",{children:n}),e.jsx("div",{children:e.jsx("img",{src:t,alt:n,style:{width:"50px",height:"50px",borderRadius:"50%"},onClick:()=>o(t)})}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(p,{onClick:()=>r(n),children:"Düzenle"}),e.jsx(p,{onClick:()=>a(n),children:"Sil"})]})]})}function K(t,n=!0){const o=s.useRef();return s.useEffect(function(){function r(a){o.current&&!o.current.contains(a.target)&&t()}return document.addEventListener("click",r,n),()=>document.removeEventListener("click",r,n)},[t,n]),o}const Q=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,Y=i.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,Z=i.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${t=>t.position.x}px;
  top: ${t=>t.position.y}px;
`,_=i.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,h=s.createContext();function m({children:t}){const[n,o]=s.useState(""),[r,a]=s.useState(null),d=()=>o(""),g=o;return e.jsx(h.Provider,{value:{openId:n,close:d,open:g,position:r,setPosition:a},children:t})}function ee({id:t}){const{openId:n,close:o,open:r,setPosition:a}=s.useContext(h);function d(g){g.stopPropagation();const u=g.target.closest("button").getBoundingClientRect();a({x:window.innerWidth-u.width-u.x,y:u.y+u.height+8}),n===""||n!==t?r(t):o()}return e.jsx(Y,{onClick:d,children:e.jsx(F,{})})}function te({id:t,children:n}){const{openId:o,position:r,close:a}=s.useContext(h),d=K(a,!1);return o!==t?null:H.createPortal(e.jsx(Z,{position:r,ref:d,children:n}),document.body)}function ne({children:t,icon:n,onClick:o}){const{close:r}=s.useContext(h);function a(){o==null||o(),r()}return e.jsx("li",{children:e.jsxs(_,{onClick:a,children:[n,e.jsx("span",{children:t})]})})}m.Menu=Q;m.Toggle=ee;m.List=te;m.Button=ne;const oe=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;function ae(){const{works:t,isLoading:n,error:o,addImage:r,editImage:a,deleteImage:d}=z(),[g,u]=s.useState(null),[b,y]=s.useState(!1),[x,v]=s.useState(!1),w=async()=>{await r({name:"New Image",url:"https://example.com/new-image.jpg"})},k=async l=>{await a(l,{name:"Updated Image",url:"https://example.com/updated-image.jpg"})},I=async l=>{await d(l)},C=l=>{u(l),y(!0)},S=()=>{y(!1),u(null)},B=()=>{v(!x)};return n?e.jsx(P,{}):o?e.jsx("div",{children:"Veriyi yüklerken hata yaşandı"}):e.jsxs(e.Fragment,{children:[e.jsxs(oe,{children:[e.jsx(A,{text:"Çalışmalarımız",toggleTableVisibility:B,isTableVisible:x}),x&&e.jsx(p,{onClick:w,children:"Ekle"})]}),x&&e.jsx(m,{children:e.jsxs(c,{columns:"0.6fr 2fr 2.4fr",children:[e.jsxs(c.Header,{children:[e.jsx("div",{children:"İsim"}),e.jsx("div",{children:"Fotoğraf"}),e.jsx("div",{children:"Aksiyonlar"}),e.jsx("div",{})]}),e.jsx(c.Body,{data:t,render:l=>e.jsx(J,{url:l.url,name:l.name,handleImageClick:C,handleEditImage:k,handleDeleteImage:I})})]})}),b&&e.jsx(M,{closeFullscreen:S,link:g,name:"Full Screen"})]})}export{ae as default};
