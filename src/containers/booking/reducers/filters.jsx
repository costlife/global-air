
function filterTickets(ticketListStorage, paramsFilter) {
    let newTicketList = Object.assign({}, ticketListStorage);
    let newAvFlightList = newTicketList.avFlightList;

    if (paramsFilter.isDirect) {
        newAvFlightList = directFilter(newAvFlightList);
    } else if (paramsFilter.transferCity) {
        newAvFlightList = transferFilter(newAvFlightList, paramsFilter.transferCity);
    }
    if (paramsFilter.departHourRange) {
        newAvFlightList = departHourFilter(newAvFlightList, paramsFilter.departHourRange);
    }
    newTicketList.avFlightList = newAvFlightList;
    return newTicketList;
}

function directFilter(flightList) {
    let nextFlightList = [];
    flightList.map((flight) => {
        if (flight.transfer == 0){
            nextFlightList.push(flight);
        }
    });
    return nextFlightList;
}

function transferFilter(flightList, transferCity) {
    let nextFlightList = [];
    flightList.map((flight) => {
        if (flight.transferCitySet.indexOf(transferCity) >= 0){
            nextFlightList.push(flight);
        }
    });
    return nextFlightList;
}

function departHourFilter(flightList, departHourRange) {
    let nextFlightList = [];
    let depart = JSON.parse(departHourRange);
    flightList.map((flight) => {
        if (flight.departHour < depart[1] && flight.departHour > depart[0]){
            nextFlightList.push(flight);
        }
    });
    return nextFlightList;
}

export default filterTickets