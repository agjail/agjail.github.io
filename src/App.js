import React from 'react'
import './App.css'

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

class SliderForm extends React.Component {
	constructor(props) {
		super(props);
		var date = new Date()

		this.state = {
			name: "",
			dateBirth: date,
			bestOption: "",
			worstOption: "",
			aValue: 10,
			bValue: 10,
			cValue: 10,
			dValue: 10,
			showOptions: false,
			authenticated: false
		};

		this.handleSliderChange = this.handleSliderChange.bind(this);
		this.selectionChange = this.selectionChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.checkAuth = this.checkAuth.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);

	}

	setSliderValue(sliderName, newValue) {
		switch(sliderName) {
			case "A":
				this.setState({aValue: newValue});
				break;
			case "B":
				this.setState({bValue: newValue});
				break;
			case "C":
				this.setState({cValue: newValue});
				break;
			case "D":
				this.setState({dValue: newValue});
				break;
			default:
				break;
		}
	}

	getSliderValue(sliderName) {
		switch(sliderName) {
			case "A":
				return(this.state.aValue);
			case "B":
				return(this.state.bValue);
			case "C":
				return(this.state.cValue);
			case "D":
				return(this.state.dValue);
			default:
				break;
		}
	}

	setBestOrWorst(type, sliderName) {
		const nameArray = ["A", "B", "C", "D"];

		if (type === "best") {

			// Loop through slider values to set previously selected best to 9
			nameArray.forEach((name) => {
				if (this.getSliderValue(name) === 20) {
					this.setSliderValue(name, 19)
				}
			});

			this.setSliderValue(sliderName, 20) // Set best option

		} else {

			// Similarly set all previous 1s to 2s
			nameArray.forEach((name) => {
				if (this.getSliderValue(name) === 1) {
					this.setSliderValue(name, 2)
				}
			});

			this.setSliderValue(sliderName, 1)

		}


	}

	selectionChange(type, name) {

		this.setBestOrWorst(type, name) //takes care of setting best to 10 worst to 1...

		if (type === "best") {
			this.setState({
				bestOption: name
			});

		} else if (type === "worst") {
			this.setState({
				worstOption: name
			});

		}
	}

	handleSliderChange(value, name) {
		if (value < 20 && value > 1) {
			switch(name) {
				case "A":
					this.setState({aValue: value});
					break;
				case "B":
					this.setState({bValue: value});
					break;
				case "C":
					this.setState({cValue: value});
					break;
				case "D":
					this.setState({dValue: value});
					break;
				default:
					break;
			}
		}
	}

	handleButtonClick() {
		var showOptions = !this.state.showOptions;
		// Important to reset state if back button is clicked
		this.setState({
			bestOption: "",
			worstOption: "",
			aValue: 10,
			bValue: 10,
			cValue: 10,
			dValue: 10,
			showOptions: showOptions
		});
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleDateChange(event, type) {
		this.setState({dateBirth: event.target.value});
	}

	checkAuth() {
		if (this.state.name === "Paul" && this.state.dateBirth === "1991-01-01") {
			this.setState({authenticated: true})
		}
	}

	handleFormSubmit() {
		const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
				mode: 'no-cors'
    };

		var params = {
			'entry.1937885906': this.state.name,
			'entry.366340186': this.state.aValue,
			'entry.913386205': this.state.bValue,
			'entry.1565951474:': this.state.cValue,
			'entry.904094073': this.state.dValue,
		}

		var url = new URL("https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-kQ68XPt_3RsDvl4OwSlXONoIs5GPZYw6YQQIHhKQTXgPqQ/formResponse")

		url.search = new URLSearchParams(params).toString();

		const response = fetch(url, requestOptions)
											.then(data => {
												console.log({'Success': data});
												alert("Submission succesful! Thank you!");
											})
											.catch((error) => {
												console.error({'Error': error});
											});
		console.log(response)
		this.setState({
			name: "",
			dateBirth: '',
			bestOption: "",
			worstOption: "",
			aValue: 10,
			bValue: 10,
			cValue: 10,
			dValue: 10,
			showOptions: false,
			authenticated: false
		});

	}
	render() {
		return (
			<div className="container">
				<div className="row title">
					<div className="col control-group">
						<h1>InformaTV DeepFake Voice Experiment</h1>
					</div>
				</div>
				<div className="row name-check" hidden={this.state.authenticated}>
					<div className="col control-group">
							<form>
								<p>Please enter your name and date of birth to continue</p>
								<div className="row">
									<div className="col">
										<label htmlFor="username">Name</label>
										<input
											id="username"
											type="text"
											className="form-control"
											value={this.state.name}
											onChange={this.handleNameChange}
										/>
									</div>
									<div className="col">
										<label htmlFor="dateofbirth">Date of Birth</label>
										<input
											id="dateofbirth"
											type="date"
											className="form-control"
											value={this.state.dateBirth}
											onChange={this.handleDateChange}
										/>
									</div>

								</div>
								<div className="row pt-3">
									<div className="col">
										<button
											type="button"
											className="btn btn-block btn-primary"
											onClick={this.checkAuth}
											>
											Continue
										</button>
									</div>
								</div>
							</form>

					</div>
				</div>
				<div id="auth" hidden={!this.state.authenticated}>

					<div className="row audio-container">
						<div className="col control-group">
							<div className="row audio-row">

								<div className="col audio-col">
									<span className="align-middle">Recording A, Trusted person, real voice:</span>
								</div>

								<div className="col audio-col">
									<audio controls>
										<source src="./try2.flac"/>
										Your browser does not support the audio element.
									</audio>
								</div>
							</div>

							<hr/>

							<div className="row audio-row">

								<div className="col audio-col">
									<span className="align-middle">Recording B, Trusted person, generated voice:</span>
								</div>

								<div className="col audio-col">
									<audio controls>
										<source src="./try2.flac"/>
										Your browser does not support the audio element.
									</audio>
								</div>
							</div>

							<hr/>
							<div className="row audio-row">

								<div className="col audio-col">
									<span className="align-middle">Recording C, Unknown person, real voice:</span>
								</div>

								<div className="col audio-col">
									<audio controls>
										<source src="./try2.flac"/>
										Your browser does not support the audio element.
									</audio>
								</div>
							</div>

							<hr/>
							<div className="row audio-row">

								<div className="col audio-col">
									<span className="align-middle">Recording D, Unknown person, generated voice:</span>
								</div>

								<div className="col audio-col">
									<audio controls>
										<source src="./try2.flac"/>
										Your browser does not support the audio element.
									</audio>
								</div>
							</div>
						</div>
					</div>

					<div className="slider-form" hidden={!this.state.showOptions}>

						<div className="options row">

							<div className="best-option col control-group">
								<h3>Best Option</h3>
								<div className="radio-buttons">
									<RadioButton
										name="A"
										type="best"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
									<RadioButton
										name="B"
										type="best"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
									<RadioButton
										name="C"
										type="best"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
									<RadioButton
										name="D"
										type="best"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
								</div>
							</div>

							<div className="worst-option col control-group">

								<h3>Worst Option</h3>
								<div className="radio-buttons ">
									<RadioButton
										name="A"
										type="worst"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
									<RadioButton
										name="B"
										type="worst"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
									<RadioButton
										name="C"
										type="worst"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
									<RadioButton
										name="D"
										type="worst"
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										onChange={this.selectionChange}
									/>
								</div>

							</div>
						</div>

						<div className="row sliders-row">
								<div className="col control-group">
									<Slider
										value={this.state.aValue}
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										handleChange={this.handleSliderChange}
										name="A"
									/>
									<Slider
										value={this.state.bValue}
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										handleChange={this.handleSliderChange}
										name="B"
									/>
									<Slider
										value={this.state.cValue}
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										handleChange={this.handleSliderChange}
										name="C"
									/>
									<Slider
										value={this.state.dValue}
										bestOption={this.state.bestOption}
										worstOption={this.state.worstOption}
										handleChange={this.handleSliderChange}
										name="D"
									/>

								</div>
							</div>
						</div>

						<div className="row decision-row">
							<div className="col control-group">
								<div className="row button-row text-center">
									<div className="col">
										<button
											type="button"
											className="btn btn-block btn-secondary"
											hidden={this.state.showOptions}
											onClick={this.handleFormSubmit}>
											These 4 recordings are equally suitable
										</button>
									</div>

									<div className="col">
										<button
											type="button"
											className="btn btn-block btn-primary"
											hidden={this.state.showOptions}
											onClick={this.handleButtonClick}>
											Some versions are more suitable than others
										</button>
									</div>

								</div>
								<div className="button-row row text-center">
									<div className="col">
										<button
											type="button"
											className="btn btn-block btn-secondary"
											hidden={!this.state.showOptions}
											onClick={this.handleButtonClick}>
											Back
										</button>
									</div>

									<div className="col">
										<button
											type="button"
											className="btn btn-block btn-primary"
											hidden={!this.state.showOptions}
											onClick={this.handleFormSubmit}>
											Submit
										</button>
									</div>
								</div>
							</div>
					</div>
				</div>
			</div>
		);
	}
}

function App() {
	return (
		<div className="App">
			<SliderForm/>
		</div>
	);
}

export default App;
