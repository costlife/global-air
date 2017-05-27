/*
@Des: issue的reducers
*/
export default function ( state = {}, { type, data } ) {
    switch (type) {
        case 'HOME_INIT':
            return Object.assign({}, state, {data});
        case 'CHECK_DIRECT_ONLY':
        	let directOnly = data.directOnly;
        	let avFlightList = [];
        	state.ticketList.avFlightList.map((ticket) => {
        		if (ticket.transfer == 0) {
        			avFlightList.push(ticket);
        		}
        	})
        	state.ticketList.avFlightList = avFlightList
            return Object.assign({}, state);
        default:
            return state;
    }
}