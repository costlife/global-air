import filterTickets from './filters';

let ticketListStorage = {};

function newState(state, paramsFilter) {
    var ticketList = filterTickets(ticketListStorage, paramsFilter)
    return Object.assign({}, state, {ticketList: ticketList});
}

export default function ( state = {}, { type, data } ) {
    var paramsFilter = state.paramsFilter;
    switch (type) {
        case 'BOOKING_INIT':
            ticketListStorage = data.ticketList;
            return newState(state, paramsFilter);

        case 'CHECK_DIRECT_ONLY':
            paramsFilter.isDirect = !paramsFilter.isDirect;
            return newState(state, paramsFilter);

        case 'SELECT_TRANSFER_CITY':
            paramsFilter.transferCity = data.city;
            return newState(state, paramsFilter);

        case 'DEPART_HOUR_FILTER':
            paramsFilter.departHourRange = data.departHourRange;
            return newState(state, paramsFilter);

        case 'RTDEPART_HOUR_FILTER':
            paramsFilter.rtDepartHourRange = data.rtDepartHourRange;
            return newState(state, paramsFilter);
            
        case 'SORT_CHANGE':
            paramsFilter.sort = data.sort;
            return newState(state, paramsFilter);

        default:
            return state;
    }
}