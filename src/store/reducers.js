
import { routerReducer } from 'react-router-redux';
import home from '../containers/home/reducers';
import booking from '../containers/booking/reducers';

export default {
    home,
    booking,
    routing: routerReducer
}