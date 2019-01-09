import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class RadioButton extends Component {
    state = {
        choice:"",
        on:false
    }

    handleChange = (e) => {
       this.setState({choice:e.target.value})
       console.log(e.target.name);
    }
    render() {

        return (
            <div>

                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <p>{this.state.choice}</p>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name ="radio"
                                value="GR"
                                onChange={this.handleChange} />{' '}
                                GR
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="radio"
                                value="KG"
                                onClick={this.handleChange} />{' '}
                                KG
                        </Label>
                    </FormGroup>

                    <div className="formInput">
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="radio"
                                value="Poids"
                                onClick={this.handleChange} />{' '}
                            POIDS
                        </Label>
                        <FormGroup/>
                        <Input disabled type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    </div>
                </FormGroup>
                <Button>Submit</Button>



            </div>
        );
    }
}

export default RadioButton;