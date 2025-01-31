import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  //reference to the DOM element in the functional component
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        //ref.current bu fonksiyonun içinde olduğu component
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      } /*
      The standard DOM Events describes 
      3 phases of event propagation: 
      Capturing phase – the event goes down to the element.
       Target phase – the event reached the target element. 
       Bubbling phase – the event bubbles up from the element.
      */
      //true iken fonksiyon yukarı çıkma aşamasında çalışmıyor
      //bu olmadan menüyü açınca kapanır açarken dışarı tıkladığımızdan
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
