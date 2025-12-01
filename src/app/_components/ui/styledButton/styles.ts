/**
 * Link/Button コンポーネント用のスタイルユーティリティ
 */

import { clsx } from "clsx";

export type Size = "xs" | "sm" | "md" | "lg";
export type Variant =
  | "solidPrimary"
  | "solidSecondary"
  | "outline"
  | "text"
  | "ghost";
export type ColorScheme = "white" | "orange";

// サイズクラス定義
export const sizeClasses = {
  xs: ["px-6", "py-2", "text-xs", "sm:px-5", "sm:py-1.5", "sm:text-xs"], // 12px base: x24px, y12px
  sm: ["px-8", "py-3", "text-sm", "sm:px-6", "sm:py-2", "sm:text-xs"], // 14px base: x28px, y14px
  md: ["px-12", "py-4", "text-base", "sm:px-10", "sm:py-3", "sm:text-sm"], // 16px base: x50px, y16px
  lg: ["px-16", "py-5", "text-lg", "sm:px-12", "sm:py-4", "sm:text-base"], // 18px base: x56px, y18px
};

// バリアントクラス定義（colorScheme対応）
export const getVariantClasses = (
  variant: Variant,
  colorScheme: ColorScheme = "white"
) => {
  // solidPrimaryは常にグラデーション
  if (variant === "solidPrimary") {
    return [
      "bg-gradient-to-r",
      "from-[var(--color-brand-gradient-start)]",
      "to-[var(--color-brand-gradient-end)]",
      "text-white",
      "border-transparent",
      "hover:shadow-[var(--elevation-3)]",
      "duration-300",
      "focus:ring-2",
      "focus:ring-offset-2",
      "focus:ring-[var(--color-brand-orange)]",
    ];
  }

  // solidSecondary: 白ベース or オレンジベース
  if (variant === "solidSecondary") {
    if (colorScheme === "white") {
      return [
        "bg-white",
        "text-[var(--color-brand-orange)]",
        "border-[var(--color-brand-orange)]",
        "hover:shadow-[var(--elevation-2)]",
        "duration-300",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-[var(--color-brand-orange)]",
      ];
    } else {
      return [
        "bg-[var(--color-brand-orange)]",
        "text-white",
        "border-transparent",
        "hover:shadow-[var(--elevation-2)]",
        "duration-300",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-white",
      ];
    }
  }

  // outline: 白ベース or オレンジベース
  if (variant === "outline") {
    if (colorScheme === "white") {
      return [
        "bg-transparent",
        "text-[var(--color-brand-orange)]",
        "border-[var(--color-brand-orange)]",
        "hover:bg-[var(--color-brand-orange-50)]",
        "hover:shadow-[var(--elevation-1)]",
        "duration-300",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-[var(--color-brand-orange)]",
      ];
    } else {
      return [
        "bg-transparent",
        "text-white",
        "border-white",
        "hover:bg-white/10",
        "hover:shadow-[var(--elevation-1)]",
        "duration-300",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-white",
      ];
    }
  }

  // text: 白ベース or オレンジベース
  if (variant === "text") {
    if (colorScheme === "white") {
      return [
        "text-[var(--color-brand-orange)]",
        "border-transparent",
        "bg-transparent",
        "hover:opacity-80",
        "hover:shadow-[var(--elevation-1)]",
        "duration-300",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-[var(--color-brand-orange)]",
      ];
    } else {
      return [
        "text-white",
        "border-transparent",
        "bg-transparent",
        "hover:opacity-80",
        "hover:shadow-[var(--elevation-1)]",
        "duration-300",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-white",
      ];
    }
  }

  // ghost（変更なし）
  return [
    "text-black",
    "border-transparent",
    "bg-transparent",
    "focus:ring-black",
  ];
};

// ベースクラス定義
export const getBaseClasses = (isDisabledOrLoading: boolean) => [
  "inline-flex",
  "items-center",
  "justify-center",
  "font-bold",
  "rounded-[var(--radius-md)]",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
  // !isDisabledOrLoading && 'hover:scale-105',
  !isDisabledOrLoading && "focus:outline-none focus:ring-2 focus:ring-offset-2",
  isDisabledOrLoading && "pointer-events-none",
];

// 幅指定の処理
export const getWidthClasses = (width: string | number | undefined) => {
  if (!width) return "";
  return "truncate"; // テキストの省略を可能にする
};

// インラインスタイルでの幅指定（レスポンシブ対応）
export const getWidthStyle = (
  width: string | number | undefined
): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    transition: "all 0.3s cubic-bezier(0.24, 1.8, 0.61, 1)",
  };

  if (!width) return baseStyle;

  const widthValue = typeof width === "number" ? `${width}px` : width;
  return {
    ...baseStyle,
    width: widthValue,
    minWidth: "0",
    // レスポンシブ対応
    "--tw-width-base": widthValue,
    "--tw-width-sm": `calc(${widthValue} * 0.9)`,
    "--tw-width-xs": `calc(${widthValue} * 0.8)`,
  } as React.CSSProperties;
};

// 統合されたクラス生成関数
export const getStyledClasses = (
  variant: Variant,
  size: Size,
  width: string | number | undefined,
  isDisabledOrLoading: boolean,
  colorScheme: ColorScheme = "white",
  className?: string
) => {
  return clsx(
    getBaseClasses(isDisabledOrLoading),
    getVariantClasses(variant, colorScheme),
    sizeClasses[size],
    getWidthClasses(width),
    className
  );
};
