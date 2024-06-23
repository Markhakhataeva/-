const initialState = {
    users:[],
    loading:false,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load/users/start':
            return {
                ...state,
                loading:true
            }

            case "load/users/complete":
                return {
                    ...state,
                    loading:false,
                    users:action.payload

                }

        default:
            return state;
    }

}