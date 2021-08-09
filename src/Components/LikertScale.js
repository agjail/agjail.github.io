import React from 'react'
import Button from 'react-bootstrap/button'
import ButtonGroup from 'react-bootstrap/buttongroup'
import '../App.css'


function LikertScale(props) {
  const handleClick = (event) => {
    props.handleChange(props.type, event.target.id)
  }

  return (
    <div className="likert-scale">
      <h5>{props.question}</h5>

      <ButtonGroup className="d-flex mb-3">
        <Button
          className="w-100 likert-group-text"
          variant={props.selected ===  0 ? "success" : "secondary"}
          size="lg"
          id="0"
          onClick={handleClick}
        >
          Strongly disagree
        </Button>
        <Button
          className="w-100 likert-group-text"
          variant={props.selected ===  1 ? "success" : "secondary"}
          size="lg"
          id="1"
          onClick={handleClick}
        >
          Disagree
        </Button>
        <Button
          className="w-100 likert-group-text"
          variant={props.selected ===  2 ? "success" : "secondary"}
          size="lg"
          id="2"
          onClick={handleClick}
        >
          Somewhat disagree
        </Button>
        <Button
          className="w-100 likert-group-text"
          variant={props.selected ===  3 ? "success" : "secondary"}
          size="lg"
          id="3"
          onClick={handleClick}
        >
          Somewhat agree
        </Button>
        <Button
          className="w-100 likert-group-text"
          variant={props.selected ===  4 ? "success" : "secondary"}
          size="lg"
          id="4"
          onClick={handleClick}
        >
          Agree
        </Button>
        <Button
          className="w-100 likert-group-text"
          variant={props.selected ===  5 ? "success" : "secondary"}
          size="lg"
          id="5"
          onClick={handleClick}
        >
          Strongly agree
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default LikertScale
