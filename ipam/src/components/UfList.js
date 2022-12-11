import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as ufActions from '../actions/AttUf'

export class UfList extends Component {

constructor(props){
    super(props);
   console.log(props);
}

state = {
    newUf:""
};
addNewUf =() =>{
    this.props.addNewUf(this.state.newUf);
    this.setState({newUf:""})

}

    render(){
        return (
            <div>
            <input type ="text"
            value={this.state.newUf}
            onChange = {(e) =>this.setState({newTodoText: e.target.value})
            }/>
            <button onClick={this.addUf}>Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(ufActions, dispatch);

export default connect (null, mapDispatchToProps(UfList))