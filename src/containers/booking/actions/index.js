import $ from 'jquery';
import fakeData from '../../../mock/RT.json';

const HomeActions = {
    initBooking: (params) => (dispatch, getState) => {
        dispatch({
            type: 'BOOKING_LOADING',
        });
        $.post('/flight/query.in', params).done((resp) => {
            dispatch({
                type: 'BOOKING_INIT',
                data: {
                    ticketList: JSON.parse(resp)
                }
            });
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
