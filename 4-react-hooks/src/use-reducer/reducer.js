



const countReducer = (state, action) => {
    let { type, v } = action;
    switch (type) {
        case 'INCREMENT': {
            return { count: state.count + v }
        }
        case 'DECREMENT': {
            return { count: state.count - v }
        }
        default:
            return state;
    }
}

export { countReducer }