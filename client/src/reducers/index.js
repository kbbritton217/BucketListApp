import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';


//Define the properties of our Application State here
	const rootReducer = combineReducers({
  		bands: BandsReducer,
  		//state: (state = {}) => state
	});

export default rootReducer;
