import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class RadioButton extends Component {
    state = {
        choice: "",
        on: false

    }

    handleChange = (e) => {
        this.setState({choice: e.target.value})
        console.log(e.target.name);
    }

    boucle = () => {
        let option = []
        for ( let i = 1; i <= 101; i++ ) {
            option.push({i})
        }
     const select = Object.keys(option).map(key => <option>{key}</option>)
     return select
    };

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
                                name="radio"
                                value="GR"
                                onChange={this.handleChange}
                            />{' '}
                            GR
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="radio"
                                value="KG"
                                onClick={this.handleChange}
                            />{' '}
                            KG
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="radio"
                                value="Poids"
                                onClick={this.handleChange}/>{' '}
                            POIDS
                        </Label>
                        <FormGroup/>
                        <FormGroup>
                            <Input  type="select" name="select" id="exampleSelect">
                                {
                                     this.boucle()
                                }

                            </Input>
                        </FormGroup>
                    </FormGroup>
                </FormGroup>
                <Button>Submit</Button>


            </div>
        );
    }
}

export default RadioButton;