import { useCallback } from 'react'
// import { useSetRecoilState, useRecoilValue } from "recoil"

import { useAtom } from 'jotai';
import { transitionAtom } from '../_jotai/GlobalAtom';

// 背景のstateを管理
type Transition = State & {
  start: () => void;
  end: () => void;
};

type State = {
  isAnimating: boolean;
};

const useTransition = (): Transition => {

  const [isAnimating, setIsAnimating] = useAtom(transitionAtom)

  const start = () => setIsAnimating(true);

  const end = function () {
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return {
    isAnimating,
    start,
    end,
  };
}

export default useTransition;