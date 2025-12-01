import { useCallback } from "react"
// import { useSetRecoilState, useRecoilValue } from "recoil"

import { useAtom } from "jotai"
import { isCommonHeaderEnabledAtom } from "../_jotai/GlobalAtom"

// 背景のstateを管理
type CommonHeader = State & {
  disable: () => void
  enable: () => void
}

type State = {
  enabled: boolean
}

export default function useCommonHeader(): CommonHeader {
  const [enabled, setEnabled] = useAtom(isCommonHeaderEnabledAtom)

  const enable = () => setEnabled(true)
  const disable = () => setEnabled(false)

  return {
    enabled,
    disable,
    enable
  }
}
