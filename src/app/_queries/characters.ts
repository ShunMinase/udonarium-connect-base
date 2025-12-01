// Temporarily disabled for build
import { WorkContent } from "../_modules/microcms";

export const getWorks = () => {
  return { contents: [], isLoading: false, errorInfo: null };
};

export const getWork = (id: string) => {
  return { contents: null, isLoading: false, errorInfo: null };
};

export const getPickupWorks = () => {
  return { contents: [], isLoading: false, errorInfo: null };
};
