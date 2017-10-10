import React from 'react';

class validateForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        validName: false,
        validEmail: false
      }
    }
    validName = (handledName) => {
     if (handledName) {
       console.log({handledName});
       return true;
     }
   }


   validEmail = (handledEmail) => {
     console.log({handledEmail});
     const emailRegex = /^\S+@\S+\.\S+$/;
     if (handledEmail !== emailRegex) {
       this.setState({handledEmail: false});
       } else {
       this.setState({handledEmail: true});
     }
   }

}

class lockSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lockSubmit: true;
    }
  }

  lockButton = (validEmail, validName) => {}
    if (validEmail && validName){
       this.setstate({lockSubmit: false});
    } else {
      this.setstate({lockSubmit: true});
}
  render(){
    <button id="submit" type="submit" name="dataSubmit" disabled={this.state.lockSubmit}>Submit</button>
    return(

    );
   }
  }
