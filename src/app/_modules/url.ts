// import { API_BASE_URL } from "@/app/_config/Constants";


export function getParam(param: string): string {
  try {
    const url = new URL(window.location.href);
    const value = url.searchParams.get(param);
    return value ? value : "";
  }
  catch (e: any) {
    return "";
  }
}
export function getParamFromUrlString(urlString: string, param: string): string {
  try {
    const url = new URL(urlString);
    const value = url.searchParams.get(param);
    return value ? value : "";
  }
  catch (e: any) {
    return "";
  }
}
export function getPath(): string {
  return window.location.pathname;
}
export function getHash(): string {
  return window.location.hash;
}
export function getPathHash(): string {
  return window.location.pathname + window.location.hash;
}


export type apiParamsObj = {
  path: string;
  revalidate?: boolean;
  previewMode?: boolean;
  queryParams?: { [key: string]: string | undefined } | undefined;
};
// export function composeApiUrl(params: apiParamsObj): string {
//   const url = new URL(API_BASE_URL + params.path);
//   if (params.previewMode) {
//     url.searchParams.set("preview_mode", "on");
//   }
//   if (params.queryParams) {
//     for (const [key, value] of Object.entries(params.queryParams)) {
//       if (value) {
//         url.searchParams.set(key, value);
//       }
//     }
//   }
//   return url.toString();
// }