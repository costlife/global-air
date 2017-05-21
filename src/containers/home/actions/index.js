const HomeActions = {
    initHome: (data) => (dispatch, getState) => {
        dispatch({
            type: 'HOME_INIT',
            data: '2222'
        });
    },
};

export default HomeActions;
