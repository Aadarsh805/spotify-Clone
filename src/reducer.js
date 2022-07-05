export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    item: null,
    token:"BQBagM1rRpDe367duE4oCrY_7TPFvgu3AevSHnehVLJoGm3wc_QmOkTPDUGvQB-uz6_EvZU0qJCLXOdWXLeWjD96Fc4Op6VSxVnxWzt5byNtmCcJRo1smLRLsf0WAPgCsT6XHXbvAca848eZdz3ae3MqqZ8q1tx_VVkzUy4ggPjS8k-TrbbglN55boplnYa8v48HJ0JGNQoboJfDprXJ",
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default: 
            return state;   
    }
}

export default reducer;