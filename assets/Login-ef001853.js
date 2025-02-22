import{u as t,a as c,j as e,f as h,g as m,h as f,l as v,n as y,r as u,B as b,i as j,k as w,L,H as E}from"./index-ec6ec530.js";const p=t.form`
  ${r=>r.type==="regular"&&c`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${r=>r.type==="modal"&&c`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;p.defaultProps={type:"regular"};const g=t.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`,S=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,C=t.label`
  font-weight: 500;
`,F=t.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function l({label:r,error:a,children:o}){return e.jsxs(S,{children:[r&&e.jsx(C,{htmlFor:o.props.id,children:r}),o,a&&e.jsx(F,{children:a})]})}function R(){const r=h(),a=m(),{mutate:o,isLoading:d}=f({mutationFn:({email:s,password:n})=>v({email:s,password:n}),onSuccess:s=>{r.setQueryData(["user"],s.user),a("/admin",{replace:!0})},onError:s=>{console.log("ERROR",s),y.error("Provided email or password are incorrect")}});return{login:o,isLoading:d}}function k(){const[r,a]=u.useState(""),[o,d]=u.useState(""),{login:s,isLoading:n}=R();function x(i){i.preventDefault(),!(!r||!o)&&s({email:r,password:o},{onSettled:()=>{a(""),d("")}})}return e.jsxs(p,{onSubmit:x,children:[e.jsx(l,{label:"Email address",children:e.jsx(g,{type:"email",id:"email",autoComplete:"username",value:r,onChange:i=>a(i.target.value),disabled:n})}),e.jsx(l,{label:"Password",children:e.jsx(g,{type:"password",id:"password",autoComplete:"current-password",value:o,onChange:i=>d(i.target.value),disabled:n})}),e.jsx(l,{children:e.jsx(b,{size:"large",disabled:n,children:n?e.jsx(j,{}):"Log in"})})]})}const P=t.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function B(){const{isLoading:r,isAuthenticated:a}=w(),o=m();return u.useEffect(()=>{a&&o("/admin",{replace:!0})},[a,o]),e.jsxs(P,{children:[e.jsx(L,{}),e.jsx(E,{as:"h4",children:"Log in to your account"}),e.jsx(k,{})]})}export{B as default};
