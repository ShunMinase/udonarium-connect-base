'use client';

import React from 'react';
import { isProduction } from '@/app/_modules/projectModules';

interface DevOnlyGuardProps {
  children: React.ReactNode;
}

/**
 * 開発環境でのみ子コンポーネントを表示するガードコンポーネント
 */
export default function DevOnlyGuard({ children }: DevOnlyGuardProps) {
  // 本番環境の場合はなにも返却しない
  if (isProduction()) {
    return <></>
  }

  // 開発環境では通常通り子コンポーネントを表示
  return <>{children}</>;
}