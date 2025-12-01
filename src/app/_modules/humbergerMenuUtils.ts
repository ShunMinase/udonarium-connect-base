import { qs, hasClass, addClass, removeClass } from "./qs";
import { preventScroll, allowScroll, setDvh } from "./screen"

// /*=======================================
//   ハンバーガーメニューまわり
// =======================================*/
// export function toggleMenu() {
//   const toggle = qs("#header_toggle");
//   if (hasClass(toggle, "active")) {
//     closeMenu()
//   } else {
//     openMenu()
//   }
// }
// function openMenu() {
//   const toggle = qs("#header_toggle");
//   const spMenu = qs("#sp_menu");
//   setDvh();
//   addClass(toggle, "active");
//   addClass(spMenu, "active");
//   preventScroll();
// }
// function closeMenu() {
//   const toggle = qs("#header_toggle");
//   const spMenu = qs("#sp_menu");
//   removeClass(toggle, "active");
//   removeClass(spMenu, "active");
//   allowScroll();
// }

