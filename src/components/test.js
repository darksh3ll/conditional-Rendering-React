import React, {Component} from 'react';
import axios from "axios"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Test extends Component {
state = {
    codepostal:"",
    villes:[]
}
    retrieveData = async () => {
        const code = this.state.codepostal
        const url =`https://vicopo.selfbuild.fr/cherche/${code}`;
        const data = await axios.get(`${url}`);
        this.setState({villes:data.data.cities})
      };


      handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    handleClick = () => {
        this.retrieveData()
    }
    render() {
        return (
            <div>
               <form>
               <FormGroup>
          <Label for="exampleEmail">code postal</Label>
          <Input type="test" name="codepostal" id="exampleEmail" onChange={this.handleChange} />
          <Button onClick={this.handleClick} color="primary">valider</Button>{' '}
        </FormGroup>
               <FormGroup>

          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
          {
              this.state.villes.map((ville) => {
                  return(
                      <option>{ville.code}:{ville.city}</option>
                  )
              })
          }
          </Input>
        </FormGroup>
               </form>
            </div>
        );
    }
}

export default Test;