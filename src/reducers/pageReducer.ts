import { Action } from "redux";

interface PageState {
  page: string;
}

const SET_PAGE = "SET_PAGE";

export type Page = 'colors' | 'collections';

export interface SetPageAction extends Action<typeof SET_PAGE> {
  payload: {
      page: Page
  };
}

type PageAction = SetPageAction

export default (page = { page: "colors" }, action: PageAction) => {
  switch (action.type) {
    case "SET_PAGE":
      return {...page, ...action.payload }
    default:
      return page;
  }
};
