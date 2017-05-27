const HomeActions = {
    initHome: (data) => (dispatch, getState) => {
        dispatch({
            type: 'HOME_INIT',
            data: '2222'
        });
    },
    checkDirectOnly: (data) => (dispatch, getState) => {
        dispatch({
            type: 'CHECK_DIRECT_ONLY',
            data: {
            	directOnly: true
            }
        });
    },
};

export default HomeActions;
