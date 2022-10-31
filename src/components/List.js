import React, { Component } from 'react';
import _ from 'lodash';
import ParticipantsList from './ParticipantsList';

export default class List extends Component {
  
  
    renderParticipants(){
        const props=_.omit(this.props,'Plists')
        return _.map(this.props.Plists,(Plist,index)=><ParticipantsList key={index}{...Plist} {...props}/>);
    }
    
    render() {
      return (
        <div className="list">
            <div className="tableHeader">
                <h3 >Name</h3>
                <h3 >Description</h3>
                <h3 >Manufacturing Date</h3>
                <h3 className='h3exp'>Expiry Date</h3>
            </div>
          {this.renderParticipants()}
        </div>                  
      )
    }
    

    

}
