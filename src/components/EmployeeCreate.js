import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "./common";
import { employeeUpdate, employeeCreate, resetForm } from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
	componentWillMount() {
		this.props.resetForm();
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || "monday" });
	}

	render() {
		console.log(this.props.employee);

		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button diTekan={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, {
	employeeUpdate,
	employeeCreate,
	resetForm
})(EmployeeCreate);
