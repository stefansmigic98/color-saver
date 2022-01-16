const setUserAction = (usser) => {
    return {
        type: "SET_USER",
        payload: { ...usser }
    }

}

const removeUserAction = () => {
    return {
        type: "REMOVE_USER"
    }
}

export { setUserAction,removeUserAction }