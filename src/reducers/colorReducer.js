const initialState = {
    color: {
        hex: "#d61919",
        rgb: {
            r: 214,
            g: 25,
            b: 25,
            a: 1
        }
    }, savedColors: []
};

export default (c = initialState, action) => {
    switch (action.type) {
        case 'SET_COLOR':
            return { ...c, ...action.payload }
        case 'SET_SAVED_COLORS':
            return { ...c, ...action.payload }
        case "DELETE_SAVED_COLOR":
            console.log(action.payload.id);
            const newArr = c.savedColors.filter((item)=>item.id!=action.payload.id);
            return {...c, ...{savedColors:newArr}}
        default:
            return c;
    }
}