
import fakeData from '../../../mock/RT.json';

const HomeActions = {
    initBooking: (data) => (dispatch, getState) => {
        dispatch({
            type: 'BOOKING_INIT',
            data: {
                ticketList: fakeData
            }
        });
    },
    checkDirectOnly: (data) => (dispatch, getState) => {
        dispatch({
            type: 'CHECK_DIRECT_ONLY',
        });
    },

    selectTransferCity: (data) => (dispatch, getState) => {
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
};

export default HomeActions;
