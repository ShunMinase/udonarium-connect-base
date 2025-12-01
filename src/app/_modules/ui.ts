import { qs, toggleClass } from "./qs";

export function toggleAccordion(targets: string[]): void {
  for (const target of targets) {
    const elm = qs(target);
    if (elm) {
      toggleClass(elm, "active");
    }
  }
}