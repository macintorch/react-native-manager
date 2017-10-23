import React, { Component } from "react";
import _ from "lodash";
import EmployeeForm from "./EmployeeForm";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "./common";
import { employeeUpdate, employeeSave } from "../actions";
import Communications from "react-native-communications";

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onTextPress() {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeSave({
			name,
			phone,
			shift,
			uid: this.props.employee.uid
		});
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button diTekan={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button diTekan={this.onTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapsStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapsStateToProps, { employeeUpdate, employeeSave })(
	EmployeeEdit
);
