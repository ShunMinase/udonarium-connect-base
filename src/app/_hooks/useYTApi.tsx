import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { YTApiAtom } from '@/app/_jotai/GlobalAtom'

// YouTube API の state を管理
type YTApiState = State & {
  loaded: () => void;
  // deactivate: () => void;
};

type State = {
  isLoaded: boolean;
};

const useYTApi = (): YTApiState => {
  const [isLoaded, setIsLoaded] = useAtom(YTApiAtom);

  const loaded = useCallback(() => setIsLoaded(true), [setIsLoaded]);
  // const deactivate = useCallback(() => setIsLoaded(false), [setIsLoaded]);

  return {
    isLoaded,
    loaded,
    // deactivate,
  };
}
export default useYTApi;