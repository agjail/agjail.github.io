import React from 'react'

class RadioButton extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event, type, name) {
		this.props.onChange(this.props.type, this.props.name)
	}

	render() {
		const name = this.props.name;
		const bestOption = this.props.bestOption;
		const worstOption = this.props.worstOption;
		const hiddenName = ((this.props.type === "best") ? worstOption : bestOption)
		const checkedName = ((this.props.type === "best") ? bestOption : worstOption)

		return (
			<div className="radio">
				<label>
					<input
						type="radio"
						value={name}
						checked={checkedName === name}
						onChange={this.handleChange}
						disabled={hiddenName === name}
					/>
				<span className={(hiddenName === name) ? "italic-disabled" : ""}> {name}</span>
				</label>
			</div>
		)
	}
}

export default RadioButton
