import React from 'react';

export default class ParticipantsList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isEditing:false
    }
  }

  renderParticipants(){
    const {name, description, manufacturingdate,expirydate} = this.props;
    if (this.state.isEditing){
      return(        
          <form className="formItem"onSubmit={this.onSaveClick.bind(this) }>
            <input type="text" defaultValue={name} ref="editNameInput"/>
            <input type="text" defaultValue={description} ref="editdescription"/>
            <input type="date" defaultValue={manufacturingdate} ref="ufacturingdate"/>
            <input type="date" defaultValue={expirydate} ref="editexpirydate"/>
          </form>
      );
    }

    return(      
      <div>
        <span className="name">{name}</span>
        <span className="description">{description}</span>
        <span className="manufacturingdate">{manufacturingdate}</span>
        <span className="expirydate">{expirydate}</span>
      </div>
    );

  }

  renderActionSection(){
    if (this.state.isEditing){
      return(
        <span className="icons spanItem">
          <button className="btnCancel" onClick={this.onCancelClick.bind(this)} >❌</button>
          <button className="btnSave" onClick={this.onSaveClick.bind(this)}>✔️</button>
      </span>
      );
    }
    return(
      <span className="icons">
        <i className="material-icons" onClick={this.onEditClick.bind(this)}>create</i>
        <i className="material-icons" onClick={this.props.deletePerson.bind(this,this.props.name)}>delete</i>
      </span>
    );
  }

onEditClick() {
  this.setState({ isEditing: true });
}

onCancelClick() {
  this.setState({ isEditing: false });
}


onSaveClick(event){
  event.preventDefault();
  const oldPerson=this.props.name;
  const newPerson={name:this.refs.editNameInput.value,
                   description:this.refs.editdescription.value,
                   manufacturingdate:this.refs.editmanufacturingdate.value,
                  expirydate:this.refs.editexpirydate.value};
  this.props.savePerson(oldPerson,newPerson);
  this.setState({isEditing:false});
}

  render() {
    return (
      <div className="items">
        <div className="item">
          {this.renderParticipants()}
          {this.renderActionSection()}
        </div>        
      </div>
    );
  }  
}