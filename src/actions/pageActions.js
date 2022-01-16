const setPageAction = (page) => {
    return {
        type: "SET_PAGE",
        payload: { ...page }
    }

}

export {setPageAction};

