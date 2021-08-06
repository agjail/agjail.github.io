import React from 'react'
import './App.css'

import Slider from './Components/Slider.js'
import RadioButton from './Components/RadioButton.js'

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
			eValue: 10,
			message: "",
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

	resetState() {
		var showOptions = !this.state.showOptions;

		this.setState({
			bestOption: "",
			worstOption: "",
			aValue: 10,
			bValue: 10,
			cValue: 10,
			dValue: 10,
			eValue: 10,
			trust: 0,
			utility: 0,
			message: "",
			showOptions: showOptions
		});
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
			case "E":
				this.setState({eValue: newValue});
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
			case "E":
				return(this.state.eValue);
			default:
				break;
		}
	}

	setBestOrWorst(type, sliderName) {
		const nameArray = ["A", "B", "C", "D", "E"];

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
			this.setSliderValue(value, name)
		}
	}

	handleButtonClick() {
		this.resetState()
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleDateChange(event, type) {
		this.setState({dateBirth: event.target.value});
	}

	checkAuth() {
		const auth_names = [
			"Paul",
			"Conor",
			"Lucy"
		]

		if (auth_names.includes(this.state.name)) {
			fetch(this.state.name  + ".txt")
				.then((r) => r.text())
				.then(text  => {
					this.setState({message: text,
												 authenticated: true})
				})
		}
	}

	handleFormSubmit() {
		const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
				mode: 'no-cors'
    };

		var params = {
			'entry.366340186': this.state.aValue,
			'entry.913386205': this.state.bValue,
			'entry.1565951474': this.state.cValue,
			'entry.904094073': this.state.dValue,
			'entry.1954231844': this.state.eValue,
			'entry.1650545957': this.state.name,
			'entry.646847081': this.state.trust,
			'entry.779562745': this.state.utility,
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
		this.resetState()
	}

	render() {
		if (this.state.authenticated) {
			return (

				<div className="container">
					<div className="row title">
						<div className="col control-group">
							<h1>InformaTV DeepFake Voice Experiment</h1>
						</div>
					</div>
					<div id="auth" hidden={!this.state.authenticated}>

						<div className="row audio-container">
							<div className="col control-group">
								<div className="row audio-row">

									<div className="col audio-col">
										<span className="align-middle">Recording A, high end computer generated voice:</span>
									</div>

									<div className="col audio-col">
										<audio controls>
											<source src={this.state.name + "Real.flac"}/>
											Your browser does not support the audio element.
										</audio>
									</div>
								</div>

								<hr/>

								<div className="row audio-row">

									<div className="col audio-col">
										<span className="align-middle">Recording B, low end computer generated voice:</span>
									</div>

									<div className="col audio-col">
										<audio controls>
											<source src={this.state.name + "CompGen.flac"}/>
											Your browser does not support the audio element.
										</audio>
									</div>
								</div>

								<hr/>
								<div className="row audio-row">

									<div className="col audio-col">
										<span className="align-middle">Recording C, InformaTV newscaster, high end computer generated voice:</span>
									</div>

									<div className="col audio-col">
										<audio controls>
											<source src={this.state.name + "ITVReal.m4a"}/>
											Your browser does not support the audio element.
										</audio>
									</div>
								</div>

								<hr/>
								<div className="row audio-row">

									<div className="col audio-col">
										<span className="align-middle">Recording D, InformaTV newscaster, low end computer generated voice:</span>
									</div>

									<div className="col audio-col">
										<audio controls>
											<source src={this.state.name + "ITVCompGen.flac"}/>
											Your browser does not support the audio element.
										</audio>
									</div>
								</div>

								<hr/>
								<div className="row audio-row">

									<div className="col audio-col">
										<span className="align-middle">Text message:</span>
									</div>

									<div className="col audio-col">
										<h3>
											{this.state.message}
										</h3>
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
										<RadioButton
											name="E"
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
										<RadioButton
											name="E"
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
										<Slider
											value={this.state.eValue}
											bestOption={this.state.bestOption}
											worstOption={this.state.worstOption}
											handleChange={this.handleSliderChange}
											name="E"
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
												These 5 options are equally suitable
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
		)
	} else {
		return (// If not authenticated display
			<div className="container">
				<div className="row title">
					<div className="col control-group">
						<h1>InformaTV DeepFake Voice Experiment</h1>
					</div>
				</div>
				<div className="row name-check">
					<div className="col control-group">
							<form>
								<p>Please enter the name of the person sending the message (ie. 'Conor')</p>
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
			</div>
		)
		}
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
