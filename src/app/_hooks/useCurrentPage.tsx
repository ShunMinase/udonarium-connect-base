// import { usePathname } from "next/navigation";
// import { useState, useEffect } from 'react';

// export default function useCurrentPage(): string {

//   // const location = useRouter();
//   // router.pathnamelocation.pathname;

//   const [currentPageName, setCurrentPageName] = useState('');
//   const pathname = usePathname();
  
//   useEffect(() => {
//     // console.log("router", pathname)
//     page(pathname);
//   }, [pathname]);

//   function page(path: string) {
//     if (path === "/") {
//       setCurrentPageName("home")
//     } else if (path.includes("creations")) {
//       setCurrentPageName("creations")
//     } else if (path.includes("topics")) {
//       setCurrentPageName("topics")
//     } else if (path.includes("about")) {
//       setCurrentPageName("about")
//     }  else if (path.includes("contact")) {
//       setCurrentPageName("contact")
//     } else if (path.includes("terms")) {
//       setCurrentPageName("terms")
//     } else {
//       setCurrentPageName("others")
//     }
//   }

//   return currentPageName;

// }