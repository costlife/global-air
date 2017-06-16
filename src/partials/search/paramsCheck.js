// let searchParams = {
//     journeyType: journeyType,
//     segmentList: [{
//         departureDate: 1498406400000,
//         desCode : "BOS",
//         oriCode : "IZM"
//     }, {
//         departureDate: 1498406400000,
//         desCode : "BOS",
//         oriCode : "IZM"
//     }],
//     passengerType: [{
//         passgerType: "ADT",  /*成人人数*/
//         passgerNumber: adtCount
//     }, {
//         passgerType: "CHD",/*儿童人数*/
//         passgerNumber: chdCount
//     }, {
//         passgerType: "INF",/*婴儿人数*/
//         passgerNumber: infCount
//     }],
//     cabinClass: cabinClass,
//     airline: airline,
//     directFlightsOnly: false,  /*是否仅查直飞,默认是false*/
//     debug: false,
// };

const paramsCheck = {
    OW(segmentList, RTType) {
        let seg = segmentList[0];
        let dest = segmentList[1];
        if (seg.oriCode == '') {
            return {
                code: 1,
                text: '请选择出发城市'
            };
        } else if (seg.desCode == '') {
            return {
                code: 2,
                text: '请选择到达城市'
            };
        } else if (seg.departureDate == '') {
            return {
                code: 3,
                text: '请选择出发时间'
            };
        } else if (RTType && dest.departureDate == '') {
            return {
                code: 4,
                text: '请选择返程时间'
            };
        } else {
            return {
                code: 0
            };
        }
    },
    RT(segmentList) {
        return paramsCheck.OW(segmentList, true);
    },
    MS(segmentList) {

    }
}

function checkPassenger(passengerType) {
    let adt = parseInt(passengerType[0].passgerNumber, 10);
    let chd = parseInt(passengerType[1].passgerNumber, 10);
    let inf = parseInt(passengerType[2].passgerNumber, 10);
    if (adt + chd + inf === 0) {
        return {
            code: 9,
            text: '请选择实际出行人数。'
        };
    }
    if (adt === 0) {
        if (chd > 0 && inf === 0) {
            return {
                code: 9,
                text: '请确认儿童有同舱等的成人陪伴乘机，儿童单独乘机需直接向航空公司购票'
            };
        } else if (chd > 0 && inf > 0) {
            return {
                code: 9,
                text: '儿童婴儿须有成人陪伴乘机。'
            };
        } else {
            return {
                code: 9,
                text: '如需单独预订婴儿票，请致电51book'
            };
        }
    }
    return true;
}

export default (params) => {
    console.log(params)
    const {segmentList, passengerType, journeyType} = params;
    let journeyCheck = paramsCheck[journeyType](segmentList);
    let passengerCheck = checkPassenger(passengerType);
    if (journeyCheck.code !== 0) {
        return journeyCheck;
    }
    if (passengerCheck.code !== 0) {
        return passengerCheck;
    }
};