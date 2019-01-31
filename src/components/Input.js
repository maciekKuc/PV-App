import React from 'react';

class Input extends React.Component{

	render(){
		return (
				<form>
					<label>Select the parameters</label>
					<input type="number" name="quantity" min="1" max="5">
				</form>
			)
	}
}

export default Input;