import{ EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {};

export default ( state= INITIAL_STATE, action )=> {
	swich (action.type) {
		default:
		return state;
	}
};