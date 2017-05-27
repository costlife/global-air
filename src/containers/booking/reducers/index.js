import filterTickets from './filters';

let ticketListStorage = {};

export default function ( state = {}, { type, data } ) {
    var paramsFilter = state.paramsFilter;
    switch (type) {
        case 'BOOKING_INIT':
            ticketListStorage = data.ticketList;
            return Object.assign({}, state, {ticketList: ticketListStorage});
        case 'CHECK_DIRECT_ONLY':
            paramsFilter.isDirect = !paramsFilter.isDirect;
            var ticketList = filterTickets(ticketListStorage, paramsFilter);
            return Object.assign({}, state, {ticketList, paramsFilter});
        case 'SELECT_TRANSFER_CITY':
            paramsFilter.transferCity = data.city;
            var ticketList = filterTickets(ticketListStorage, paramsFilter);
            return Object.assign({}, state, {ticketList, paramsFilter});

        case 'DEPART_HOUR_FILTER':
            paramsFilter.departHourRange = data.departHourRange;
            var ticketList = filterTickets(ticketListStorage, paramsFilter);
            return Object.assign({}, state, {ticketList, paramsFilter});
        default:
            return state;
    }
}