import {createStore} from 'redux';

const initState = {
    test: 'This is test data'
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGETEST':
            return {
                ...state,
                test: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export function createClientStore() {
    return createStore(reducer, initState)
}