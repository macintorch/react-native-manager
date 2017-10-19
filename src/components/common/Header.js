// import libararies for making component
import React from 'React'
import { Text, View} from 'react-native'


// make a component

const Header = (props) => {

	const {textStyle, viewStyle} = styles;

 return (
 	<View style={viewStyle}>
 		<Text style={textStyle}>{props.headerText}</Text>
 	</View>
 	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F5B041',
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4},
		shadowOpacity: 0.9,
		elevation: 2,
		position: 'relative'
	},

	textStyle: {
		fontSize: 20
	}
};

// make the component available to other parts of the app
export { Header };

