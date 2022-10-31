import React, { Component } from 'react';
import AddNewPerson from './AddNewPerson';
import myData from './ParticipantsList.json';
import List from './List';
import _ from 'lodash';

import './style/style.css';
var Plists=myData.Participants;
var toggle=1;
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      Plists
    }
  }

  render() {
    return (
      <div className="App">

        <main className="App-main">
          <h2>Admin Portal</h2>        
          <AddNewPerson addPerson={this.addPerson.bind(this)}
                        Plists={this.state.Plists}/>        
          <List Plists={this.state.Plists}
                savePerson={this.savePerson.bind(this)}
                deletePerson={this.deletePerson.bind(this)}            
                />        
        </main>
      </div>
    );
  }

  addPerson(name,description,manufacturingdate,expirydate){
    this.state.Plists.unshift({
      name,
      description,
      manufacturingdate,
      expirydate
    });
    this.setState({ Plists:this.state.Plists})
  }
  
  savePerson(oldPerson,newPerson){
    const findPerson =_.find(this.state.Plists, Plist =>Plist.name === oldPerson);
    findPerson.name = newPerson.name;
    findPerson.description= newPerson.description;
    findPerson.manufacturingdate=newPerson.manufacturingdate;
    findPerson.expirydate=newPerson.expirydate;
    this.setState({Plists: this.state.Plists});
  }

  deletePerson(personToDelete){
    _.remove(this.state.Plists,Plist=>Plist.name ===personToDelete);
    this.setState({Plists:this.state.Plists});
  }
    /*
  sortByName(){    
    if (toggle===1){
      this.setState({Plists: _.orderBy(this.state.Plists,['name'],['asc'])});      
      toggle*=-1;}
    else {
      this.setState({Plists: _.orderBy(this.state.Plists,['name'],['desc'])});
      toggle*=-1;}
    }
    

  sortBydescription(){
    if (toggle===1){
      this.setState({Plists: _.orderBy(this.state.Plists,['description'],['asc'])});      
      toggle*=-1;}
    else {
      this.setState({Plists: _.orderBy(this.state.Plists,['description'],['desc'])});
      toggle*=-1;}
  }
  sortByPhone(){
    if (toggle===1){
      this.setState({Plists: _.orderBy(this.state.Plists,['manufacturingdate'],['asc'])});      
      toggle*=-1;}
    else {
      this.setState({Plists: _.orderBy(this.state.Plists,['manufacturingdate'],['desc'])});
      toggle*=-1;}
  }
  */
}
