
export function unEscapeHtmlSpecialCharacters(escapedText: string) {

  //ブラウザ実行時のみ
  if (typeof window === 'undefined') return "";

  // 参考リンクhttps://blog.kimizuka.org/entry/2022/02/28/214035
  // &nbsp;があると扱いがやっかいになるため、通常の半角スペースに変換しておく
  escapedText = escapedText.replace(/&nbsp;/g, '');

  const textarea = document.createElement('textarea');
  textarea.innerHTML = escapedText;

  return textarea.value;
}

export function removeHtmlTag(html: string) {
  return html?.replace(/(<([^>]+)>)/gi, '');
}

// デフォルトのjoinが空を考慮してくれないので自作
export function join(array: string[] | number[] | undefined | null, separator: string): string {
  if (array && array.length) {
    return array.join(separator);
  } else {
    return "";
  }
}

// 改行コードをbrタグに変換し、jsxにする関数
export function nl2br(text: string): React.ReactElement | string {
  if (!text) return "";
  const regex = /(\n)/g;
  const result = text.split(regex).map((line, index) => {
    if (line.match(regex)) {
      return <br key={index} />;
    } else {
      return line;
    }
  });
  return result[0];
}

// stringかどうか判定する
export function isString(value: any): boolean {
  return typeof value === "string" || value instanceof String;
}

export function nodeListToArray(elms: NodeListOf<HTMLElement>): Array<HTMLElement> {
  return [...elms];
}

export function html2excerpt(html: any): string {
  const escaped = unEscapeHtmlSpecialCharacters(html)
  const fullText = removeHtmlTag(escaped);
  const text = removeLineBreaks(removeWhiteSpace(fullText))

  // 200文字に省略する
  if (text?.length > 200) {
    return text.slice(0, 200) + "...";
  } else {
    return text;
  }
}

// 改行文字を取り除く
export function removeLineBreaks(str: string): string {
  return str?.replace(/(\n|\r)/g, "");
}

// 全ホワイトスペースを取り除く
export function removeWhiteSpace(str: string): string {
  return str?.replace(/\s+/g, "");
}

// capitalizeFirstLetter関数の定義
export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateRandomStringArray(length = 6) {
  // 見間違い防止のためIとOと0は除外
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
  let identifier = '';
  for (let i = 0; i < length; i++) {
    identifier += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return identifier;
}



// テキストを一文字ずつ分割してspanタグで囲む
export function splitText(text: string): React.ReactElement {
  return (
    <>
      {text.split("").map((char, index) => {
        return <span className="char" key={index}>{char}</span>
      })}
    </>
  )
}