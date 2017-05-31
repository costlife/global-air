
function filterTickets(ticketListStorage, paramsFilter) {
    let newTicketList = Object.assign({}, ticketListStorage);
    let newAvFlightList = newTicketList.avFlightList;

    if (paramsFilter.isDirect) {
        newAvFlightList = directFilter(newAvFlightList);
    } else if (paramsFilter.transferCity) {
        newAvFlightList = transferFilter(newAvFlightList, paramsFilter.transferCity);
    }

    if (paramsFilter.airline) {
        newAvFlightList = airlineFilter(newAvFlightList, paramsFilter.airline);
    }

    if (paramsFilter.departHourRange) {
        newAvFlightList = departHourFilter(newAvFlightList, paramsFilter.departHourRange);
    }

    if (paramsFilter.rtDepartHourRange) {
        newAvFlightList = rtDepartHourFilter(newAvFlightList, paramsFilter.rtDepartHourRange);
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
    if (transferCity.length > 0) {
        flightList.map((flight) => {
            if (transferCity.indexOf(flight.transferCitySet.split(';')[0]) >= 0){
                nextFlightList.push(flight);
            }
        });
    } else {
        nextFlightList = flightList;
    }

    return nextFlightList;
}

function airlineFilter(flightList, airline) {
    let nextFlightList = [];
    if (airline.length > 0) {
        flightList.map((flight) => {
            for (let i = 0; i < airline.length; i++) {
                if (flight.airlineSet.indexOf(airline[i]) >= 0) {
                    nextFlightList.push(flight);
                    break;
                }
            }
        });
    } else {
        nextFlightList = flightList;
    }

    return nextFlightList;
}

function departHourFilter(flightList, departHourRange) {
    let nextFlightList = [];
    departHourRange = departHourRange.map(item => JSON.parse(item));
    if (departHourRange.length > 0) {
        flightList.map((flight) => {
            departHourRange.map((depart) => {
                if (flight.departHour < depart[1] && flight.departHour > depart[0]){
                    nextFlightList.push(flight);
                }
            })
        });
    } else {
        nextFlightList = flightList;
    }

    return nextFlightList;
}

function rtDepartHourFilter(flightList, rtDepartHourRange) {
    let nextFlightList = [];
    rtDepartHourRange = rtDepartHourRange.map(item => JSON.parse(item));
    if (rtDepartHourRange.length > 0) {
        flightList.map((flight) => {
            rtDepartHourRange.map((depart) => {
                if (flight.rtDepartHour < depart[1] && flight.rtDepartHour > depart[0]){
                    nextFlightList.push(flight);
                }
            })
        });
    } else {
        nextFlightList = flightList;
    }

    return nextFlightList;
}

function sortFilter(flightList, sort) {
    console.log(sort)

    flightList.sort((a, b) => {
        switch(sort.value) {
            case 'departHour':
                return desc(sort.desc, a.departHour, b.departHour);
            case 'rtDepartHour':
                return desc(sort.desc, a.rtDepartHour, b.rtDepartHour);
            case 'duration':
                return desc(sort.desc, a.rtDepartHour - a.departHour, b.rtDepartHour - b.departHour);
            case 'price':
                return desc(sort.desc, a.avgSettlementPriceWithTax, b.avgSettlementPriceWithTax);
            default:
                return;
        }
    });
    return flightList;
}

function desc(desc, a, b) {
    return desc ? b - a : a - b;
}

export default filterTickets