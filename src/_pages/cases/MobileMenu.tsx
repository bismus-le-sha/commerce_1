// import classnames from "classnames";
// import cls from "./menu.module.css";
// import "../../components/swiper/swiper.css";
// import { items } from "@/components/menu/items";
// import { useState } from "react";

// const MobileMenu = () => {
//   const [isMedia, setIsMedia] = useState<boolean>(false);
//   return (
//     <div
//       className={classnames(cls.menuContainer, {
//         [cls.mobile]: isMedia,
//       })}
//     >
//       <ul className={cls.menu}>
//         {items.map(({ text, href }) => {
//           return (
//             <li className={cls.menuItem} key={text}>
//               <Link href={href}>
//                 <span
//                   style={{
//                     borderBottom: pathname === href ? "1px solid #000" : "none",
//                     ...whiteStyle,
//                     color: isWhite ? "#000" : "#fff",
//                   }}
//                   className={cls.menuItemText}
//                 >
//                   {text}
//                 </span>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default MobileMenu;

import React from "react";

const MobileMenu = () => {
  return <div>MobileMenu</div>;
};

export default MobileMenu;
