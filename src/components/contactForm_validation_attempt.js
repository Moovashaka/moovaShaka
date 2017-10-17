import React from 'react';


export class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: '',
      inputNameError: '',
      inputEmail: '',
      inputEmailError: '',
      inputCompany: '',
      select: 'other',
      lockSubmit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange = e => {
      this.props.onChange({ [e.target.name]: e.target.value })
      this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let isError = false;
    const errors = {};
    if (this.state.inputName.length < 2) {
      isError = true;
      errors.inputNameError = ('Name should be 2 or more letters');
    }

    if (!this.state.inputEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isError = true;
      errors.inputEmailError = ('Needs Valid email address');
    }

    if (isError) {
      this.setState(errors)
      };

    return isError;
  }

  handleSubmit = e => {
      e.preventDefault();
      const err = this.validate();

      if (!err) {
        const formData = 'Name: ' + this.state.inputName + ' Email: ' + this.state.inputEmail;
        console.log(formData);
      {/* Clear Form */}
          this.setState({
          inputName: '',
          inputNameError: '',
          inputEmail: '',
          inputEmailError: '',
          inputCompany: '',
          select: '',
          lockSubmit: false,
        });
        this.props.onChange({
        inputName: '',
        inputEmail: '',
        select: '',
        lockSubmit: false,
      });
      }
    }



  render() {

    return (
      <div className="text-center">
        <form name="contactForm" onSubmit={ this.handleSubmit }>
          <div>
            <label>Name:  </label>
            <input
              value={this.state.inputName}
              name="inputName"
              type="text"
              onChange={this.handleChange}
              required />
          </div>
          <br />
          <span>{this.state.inputNameError}</span>
          <br />
          <div>
            <label> email:</label>
            <input
              value={this.state.inputEmail}
              name="inputEmail" type="text"
              onChange={this.handleChange}
              required />
            <br />
          </div>
          <span>{this.state.inputEmailError}</span>
          <br />
          <div>
            <label> Company:</label>
            <input
              value={this.state.inputCompany}
              name="inputCompany" type="text"
              onChange={this.handleChange}
               />
            <br />
          </div>
          <div>
            <label>
              <i>Talk to ME about:</i>
              <br />
              <br />
            </label>
          </div>
          <select value={this.state.value} name="select" className="text-center" onChange={this.handleChange}>
            <option value='Brochure'>A brochure site</option>
            <option value="e-commerce">An e-commerce site</option>
            <option value="content managed">Content-Managed site (like Wordpress)</option>
            <option value="modifying">Modifying an existing App/Site</option>
            <option value="custom">Custom React Components</option>
            <option value="traffic">Traffic generation</option>
            <option selected value="other">Something else</option>
          </select>
          <br />
          <br />
        <button id="submit" type="submit" name="dataSubmit" disabled={this.state.lockSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
