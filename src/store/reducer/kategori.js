const initialState = {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    kategoris: []
}


const Kategori = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_KATEGORI_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'GET_KATEGORI_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case "GET_KATEGORI_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                kategoris: action.payload.data
            }
        default:
            return state
    }
}

export default Kategori;