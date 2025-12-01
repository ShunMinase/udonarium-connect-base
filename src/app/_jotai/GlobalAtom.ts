import { atom, PrimitiveAtom } from "jotai";
import type Lenis from "lenis";
export const transitionAtom: PrimitiveAtom<boolean> = atom(false);
export const firstLoadingAtom: PrimitiveAtom<boolean> = atom(true);

// lenisインスタンスを管理するatom
export const lenisAtom: PrimitiveAtom<Lenis | null> = atom<Lenis | null>(null);

// lenisの状態を管理するatom
export const lenisEnabledAtom: PrimitiveAtom<boolean> = atom(true);

export const isCommonHeaderEnabledAtom: PrimitiveAtom<boolean> = atom(true);

export const currentPageAtom: PrimitiveAtom<string> = atom("");

// YouTube API の読み込み状態を管理するatom
export const YTApiAtom: PrimitiveAtom<boolean> = atom(false);
