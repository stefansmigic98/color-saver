export default (page = { page: "colors" }, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.payload;

        default:
            return page;
    }
}