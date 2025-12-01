// React
import { useEffect } from "react"
// 外部ライブラリ
// 内部ライブラリ

import Image from "next/image"
import { useRouter } from "next/navigation"
import HeadlessLink from "@/app/_components/ui/HeadlessLink"
import { YOUTUBE_URL, X_URL } from "@/app/_config/Constants"
import { useAtom } from "jotai"
import { currentPageAtom } from "@/app/_jotai/GlobalAtom"
// コンポーネント
// 型定義
// 定数

type Props = {
  toggleMenu: any
  isSpMenuOpen: boolean
}

export default function SpMenu(props: Props) {
  const { toggleMenu, isSpMenuOpen } = props

  const router = useRouter()

  const [currentPageName, setCurrentPageName] = useAtom(currentPageAtom)


  /*=======================================
    クリック制御
  =======================================*/
  // 移動先を制御
  function handleClickLink() {
    toggleMenu()
  }

  return (
    <>
      <nav id="sp_menu" className={isSpMenuOpen ? "active" : ""}>
        <div className="menu_inner">

          <HeadlessLink href="/" className="link_wrapper" onClick={() => handleClickLink()} data-gsap-target="sp_menu_elements" defaultHover={false}>トップ
          </HeadlessLink>

          <HeadlessLink href="/#works" className="link_wrapper" onClick={() => handleClickLink()} data-gsap-target="sp_menu_elements" defaultHover={false}>制作実績
          </HeadlessLink>

          <HeadlessLink href="/about" className="link_wrapper" onClick={() => handleClickLink()} data-gsap-target="sp_menu_elements" defaultHover={false}>活動方針
          </HeadlessLink>

          <HeadlessLink href="/contact" className="link_wrapper" onClick={() => handleClickLink()} data-gsap-target="sp_menu_elements" defaultHover={false}>お問い合わせ
          </HeadlessLink>

        </div>
      </nav>
    </>
  )
}
