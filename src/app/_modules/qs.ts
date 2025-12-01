"use client";
//queryselectorをはじめとする、DOM操作に関する関数を定義

export function qs(name: string, elm = document): any {
  // documentの存在チェック
  // if (!document) return;
  return elm?.querySelector(name);
}
export function qsAll(name: string, elm: any = document): any {
  // if (!document) return;
  return elm?.querySelectorAll(name);
}
export function hasClass(target: string | HTMLElement | null, name: string): boolean {
  if (target instanceof HTMLElement) {
    return !!target?.className.includes(name); // undefinedの場合はfalseにする
  } else {
    const elm = qs(target ?? "");
    return !!elm?.className.includes(name); // undefinedの場合はfalseにする
  }
}
export function addClass(target: string | HTMLElement | null, name: string): void {
  if (target instanceof HTMLElement) {
    target?.classList.add(name);
  } else {
    const elm = qs(target ?? "");
    elm?.classList.add(name);
  }
}
export function removeClass(target: string | HTMLElement | null, name: string): void {
  if (target instanceof HTMLElement) {
    if (!hasClass(target, name)) return;
    target?.classList.remove(name);
  } else {
    const elm = qs(target ?? "");
    if (!hasClass(elm, name)) return;
    elm?.classList.remove(name);
  }
}
export function addClassAll(elms: Array<HTMLElement>, name: string): void {
  if (elms.length === 0) return;
  for (const elm of elms) {
    elm?.classList.add(name);
  }
}
export function removeClassAll(elms: Array<HTMLElement>, name: string): void {
  if (elms.length === 0) return;
  for (const elm of elms) {
    if (elm && hasClass(elm, name)) {
      elm.classList.remove(name);
    }
  }
}
export function toggleClass(element: any, className: string): void {
  if (element.className.includes(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}