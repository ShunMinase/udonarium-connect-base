import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { qs, qsAll, hasClass, addClass, removeClass, addClassAll, removeClassAll, toggleClass } from "@/app/_modules/qs";
import { join, nl2br, unEscapeHtmlSpecialCharacters } from '@/app/_modules/string'
import { scrollTo, scrollToScrollTarget, scrollToSelector } from '@/app/_modules/screen'
import { commonAnimationObserver } from '@/app/_modules/ISObserver'
import { getParam } from '@/app/_modules/url'
// React
// 外部ライブラリ
// 内部ライブラリ
// コンポーネント
// 型定義
// 定数
// 画像
// その他
type Props = {
  totalPages: number
  currentPage: number
  setCurrentPage: any
}


export default function Pagenation(props: Props) {

  // 初回のみ、ページングのヒストリー操作にまつわるヒストリーAPIの初期設定を実行
  useEffect(() => {
    window.addEventListener("popstate", back);
    return () => {
      cleanPopstate();
    };
  }, []);
  function cleanPopstate() {
    window.removeEventListener("popstate", back);
  }

  // ブラウザバック時に発動、ひとつ前の履歴のページ番号をセット
  function back(e: any) {
    const current = window.history.state.current ? window.history.state.current : 1
    props.setCurrentPage(current);
  }

  // ページクリック時のイベント
  const handlePaginate = (data: any) => {
    const selected = data.selected;
    props.setCurrentPage(selected + 1);
    const preview_modeQuery = getParam("preview_mode") === "on" ? "&preview_mode=on" : "";
    window.history.pushState({ current: selected + 1 }, '', `?page=${selected + 1 + preview_modeQuery}`);
    scrollToScrollTarget("article_list_top", 200);
  }

  return (
    <ReactPaginate
      forcePage={props.currentPage - 1}
      containerClassName="c__pager" // ul(pagination本体)
      onPageChange={handlePaginate}
      marginPagesDisplayed={1} //終端に表示する件数
      pageRangeDisplayed={1} //現ページ数の周りに表示する件数
      pageCount={props.totalPages}
      renderOnZeroPageCount={() => null}

      previousLabel="< Prev"
      previousClassName="prev" // li
      previousLinkClassName="prev_link"

      nextLabel="Next >"
      nextClassName="next" // li
      nextLinkClassName="next_link"

      pageClassName="" // li
      pageLinkClassName="page_num" // a
      activeClassName="" // active.li
      activeLinkClassName="active" // active.li < a
      disabledClassName="disabled" // 先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくする

      // 中間ページの省略表記関連
      breakLabel="..."
      breakClassName=""
      breakLinkClassName="page_num elipsis"
    />
  );
}
