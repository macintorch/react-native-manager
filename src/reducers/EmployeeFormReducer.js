import{ EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default ( state= INITIAL_STATE, action )=> {
	swich (action.type) {

		case EMPLOYEE_UPDATE:
		// keyinterporlation
		return {...state, [action.payload.prop]: action.payload.value }

		default:
		return state;
	}
}; 