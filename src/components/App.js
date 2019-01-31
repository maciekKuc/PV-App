import React from 'react';
import Description from './Description';
import Input from './Input';
import Rooftop from './Rooftop';
import Panel from './Panel';

class App extends React.Component {
	render(){
		return (
			<div>
				<Description />
				<Input />
				<Rooftop>
					<Panel />
				</Rooftop>
				
			</div>
			);
	}
}

export default App;