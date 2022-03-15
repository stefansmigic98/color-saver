import { Page, SetPageAction } from "../reducers/pageReducer";

const setPageAction = (page:Page):SetPageAction => {
    return {
        type: "SET_PAGE",
        payload: { page:page }
    }

}

export {setPageAction};

