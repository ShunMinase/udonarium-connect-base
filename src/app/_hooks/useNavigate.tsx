import { useRouter } from "next/navigation"
import useTransition from "./useTransition"
import { gsap } from "gsap"

export function useNavigate() {
  const transition = useTransition()
  const router = useRouter()

  function navigate(_href: string) {
    transition.start()

    const tl = gsap.timeline()
    tl.to(".transition_container", {
      x: -10,
      y: 0,
      opacity: 0,
      duration: 0.2,
      ease: "power1.inOut",
      overwrite: true
    })

    // 遷移までの時間を稼ぐ
    setTimeout(() => {
      // 遷移先に遷移
      router.push(_href)
    }, 200)
  }

  return navigate
}
