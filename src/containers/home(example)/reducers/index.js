/*
@Des: issue的reducers
*/
export default function ( state = {}, { type, data } ) {
    switch (type) {
        case 'HOME_INIT':
            return Object.assign({}, state, {data});
        default:
            return state;
    }
}