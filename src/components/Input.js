import React from 'react';
import '../css/Input.css';
import panelBase from '../data/panelList';

class Input extends React.Component{
	constructor(props){
		super(props);

		this.state = { 
			roofTopWidth: 100,
			rooftopDepth: 167,
			manufacturer: '',
			panels: 0
		}


	}


	render(){
		return (
			<div>
				<form>
				<label>Enter your rooftop size:</label>
					<input 
					type="number" 
					name="quantity" 
					min="500" 
					max="20000" 
					className="input" 
					placeholder="Width"
					onChange={(e) => this.setState({roofTopWidth: e.target.value})} />
					<input type="number" 
					name="quantity" 
					min="500" 
					max="20000" 
					className="input" 
					placeholder="Depth"
					onChange={(e) => this.setState({rooftopDepth: e.target.value})} />
				</form>

				<form>
					<label>Select the parameters</label>
					<input type="number" name="quantity" min="0" max={Math.floor(this.state.roofTopWidth / 100) * Math.floor(this.state.roofTopWidth / 167)} className="input" placeholder="Enter the number of panels" />
					<select 
					name="location" 
					className="input input-selection" 
					onChange={(e) => this.setState({manufacturer: e.target.value})}>
						<option>Hanwha Q-cells</option>
						<option>Sunpower</option>
						<option>LG</option>
						<option>Sharp</option>
						<option>JA Solar</option>
					</select>
					<select name="location" id="" className="input input-selection">
						{this.state.manufacturer === '' ? 
							(
								<option disabled>Select a manufacturer first</option>
							) : (
								panelBase.forEach((item) => {
									if(item.manufacturer === this.state.manufacturer){
										item.list.map((panel) => {
											return <option>{panel.name} {panel.power}</option>;
										});
									}
								})
							)
						}
					</select>

				</form>
			</div>
			)
	}
}

export default Input;