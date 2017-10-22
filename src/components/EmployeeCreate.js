import React, { Component } from "react";
import { connect } from "react-redux";
import { Picker, Text } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { employeeUpdate } from "../actions";

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						value={this.props.name}
						onChangeText={text =>
							this.props.employeeUpdate({
								prop: "name",
								value: text
							})}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="5555-5555-555"
						value={this.props.phone}
						onChangeText={text =>
							this.props.employeeUpdate({
								prop: "phone",
								value: text
							})}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: "column" }}>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={value =>
							this.props.employeeUpdate({ prop: "shift", value })}
					>
						<Picker.Item label="Monday" value="monday" />
						<Picker.Item label="Tuesday" value="tuesday" />
						<Picker.Item label="Wednesday" value="wednesday" />
						<Picker.Item label="Thursday" value="thursday" />
						<Picker.Item label="Friday" value="friday" />
						<Picker.Item label="Saturday" value="saturday" />
						<Picker.Item label="Sunday" value="sunday" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button>Create</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
