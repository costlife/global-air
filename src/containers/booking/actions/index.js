import $ from 'jquery';
import fakeData from '../../../mock/Test_search_MS.json';

const HomeActions = {
    initBooking: (params) => (dispatch, getState) => {
        // dispatch({
        //     type: 'BOOKING_INIT',
        //     data: {
        //         ticketList: fakeData
        //     }
        // })
        dispatch({
            type: 'BOOKING_LOADING',
        });
        $.ajax({
            url: '/flight/query.in',
            type: 'POST',
            contentType: 'application/json; charset=utf-8', // 很重要
            traditional: true,
            data: JSON.stringify(params), // {"name":"zhangsan", "age": 28}
            success: function(res, status, xhr) {
                dispatch({
                    type: 'BOOKING_INIT',
                    data: {
                        ticketList: JSON.parse(res)
                    }
                });
            }
        });
    },

    pageChange: (value) => (dispatch, getState) => {
        dispatch({
            type: 'BOOKING_PAGE_CHANGE',
            data: {value}
        });
    },

    checkDirectOnly: (data) => (dispatch, getState) => {
        dispatch({
            type: 'CHECK_DIRECT_ONLY',
        });
    },

    airlineChange: (data) => (dispatch, getState) => {
        dispatch({
            type: 'SELECT_AIRLINE',
            data: {
                airline: data
            }
        });
    },

    transferCityChange: (data) => (dispatch, getState) => {
        dispatch({
            type: 'SELECT_TRANSFER_CITY',
            data: {
                city: data
            }
        });
    },

    departHourRange: (data) => (dispatch, getState) => {
        dispatch({
            type: 'DEPART_HOUR_FILTER',
            data: {
                departHourRange: data
            }
        });
    },

    rtDepartHourRange: (data) => (dispatch, getState) => {
        dispatch({
            type: 'RTDEPART_HOUR_FILTER',
            data: {
                rtDepartHourRange: data
            }
        });
    },

    sortChange: (data) => (dispatch, getState) => {
        dispatch({
            type: 'SORT_CHANGE',
            data: {
                sort: data
            }
        });
    },

};

export default HomeActions;
