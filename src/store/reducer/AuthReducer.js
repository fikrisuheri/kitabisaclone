const initialState = {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    user: []
}


const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'GET_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case "GET_USER_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                user: action.payload.data.user
            }
        default:
            return state
    }
}

export default Auth;