// import React,{ useEffect, useState } from "react";

// export function useIsVisible (ref) {
//     //** Function to detect viewport appearance/disappearance */
//     const [isIntersecting, setIntersecting] = useState(false);
  
//     useEffect(() => {
//       const observer = new IntersectionObserver(([entry]) => {
//           setIntersecting(entry.isIntersecting)
//       } 
//       );
      
//       observer.observe(ref.current);
//       return () => {
//         observer.disconnect();
//       };
//     }, [ref]);
  
//     return isIntersecting;
// }

export function getHiddenAndVisible () {
    return ({
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      },
    })
};