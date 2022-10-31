import React, { Component } from 'react';
import _ from 'lodash';
export default class AddNewPerson extends Component {
    constructor(props){
        super(props);

        this.state={
          error:null
        }
      }
    render() {
    return (
        <div className="addNewPerson">
            <form onSubmit={this.handleCreate.bind(this)}>
                <input  type="text"  placeholder="Name" ref="nameInput"></input>
                <input  type="text"  placeholder="Description" ref="description"></input>                
                <input  type="date" placeholder="Manufacturing Date" ref="manufacturingdate"></input>
                <input  type="date" placeholder="Expiry Date" ref="expirydate"></input>
                <button className="btnAddNew"type="submit">Add new</button>
                {this.renderError()}
            </form>
        </div>
        
    );
  }

renderError(){
    if(!this.state.error){return null;}
    return <div className="popup"><span className="popuptext" >{this.state.error}</span></div>;
    // return alert(this.state.error);
}

handleCreate(event){
    event.preventDefault();

    const input = {name :this.refs.nameInput,
                   description:this.refs.description,
                   manufacturingdate: this.refs.manufacturingdate,
                    expirydate: this.refs.expirydate};

   
    this.setState({error:null});
    this.props.addPerson(input.name.value,
                         input.description.value,
                         input.manufacturingdate.value,
                         input.expirydate.value)
    input.name.value='';                         
    input.description.value='';
    input.manufacturingdate.value='';
    input.expirydate.value='';
  }
}
