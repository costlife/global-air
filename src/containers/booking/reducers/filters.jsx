
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

    if (paramsFilter.rtDepartHourRange) {
        newAvFlightList = departHourFilter(newAvFlightList, paramsFilter.rtDepartHourRange);
    }

    if (paramsFilter.sort) {
        newAvFlightList = sortFilter(newAvFlightList, paramsFilter.sort);
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

function rtDepartHourFilter(flightList, rtDepartHourRange) {
    let nextFlightList = [];
    let depart = JSON.parse(rtDepartHourRange);
    flightList.map((flight) => {
        if (flight.rtDepartHour < depart[1] && flight.rtDepartHour > depart[0]){
            nextFlightList.push(flight);
        }
    });
    return nextFlightList;
}

function sortFilter(flightList, sort) {
    flightList.sort((a, b) => {
        switch(sort.value) {
            case 'departHour':
                return a.departHour - b.departHour;
            case 'rtDepartHour':
                return a.rtDepartHour - b.rtDepartHour;
            case 'duration':
                return (a.rtDepartHour - a.departHour) - (b.rtDepartHour - b.departHour);
            case 'price':
                return a.totalPrice - b.totalPrice;
            default:
                return;
        }
    });
    return flightList;
}

export default filterTickets