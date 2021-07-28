import React from 'react'

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.handleChange(event.target.value, this.props.name)
	}

	render() {
		// Slider variables
		const minValue = 1;
		const maxValue = 20;
		const step = 1;
		const name = this.props.name;
		const bestOption = this.props.bestOption;
		const worstOption = this.props.worstOption;

		return (
			<div className="slider row">
				<div className="col-1">
					<span>{name}</span>
				</div>
					<div className="text-center col">
						<span className="align-middle">
						<input
							className="form-control-range align-middle"
							type="range"
							value={this.props.value}
							min={minValue}
							max={maxValue}
							step={step}
							disabled={bestOption === name || worstOption === name}
							onChange={this.handleChange}
							list={"tickmarks-"+name}
						/>
				</span>
				</div>
			</div>
		)
	}
}

export default Slider
