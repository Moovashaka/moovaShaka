import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);




    this.state = {  name: '',
                    email: '',
                    select:''
     };


    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);


  }


  handleSelect(e) {
    this.setState({ select: e.target.value });
  }

  handleName(e) {
    this.setState({ name: e.target.value });
      if this.state.name.length < 2 {
        error = "Must be longer";
      }
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }


  handleSubmit(e) {
    alert('form submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div className="text-center">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="name">
              Name:
            <input type="text" onChange={this.handleName} />
            </label>
          </div>
          <br />
          <h2>{this.state.name}</h2>
          <br />
          <div>
            <label for="email">
              email:
            <input type="text" onChange={this.handleEmail} />
            </label>
            <h2>{this.state.email}</h2>
            <br />
          </div>
          <div>
            <label>
              <i>Talk to ME about:</i>
              <br />
              <br />
            </label>
          </div>
          <select className="text-center" onChange={this.handleSelect}>
            <option value="brochure">A brochure site</option>
            <option value="e-commerce">An e-commerce site</option>
            <option value="content managed">Content-Managed site (like Wordpress)</option>
            <option value="modifying">Modifying an existing App/Site</option>
            <option value="custom">Custom React Components</option>
            <option value="traffic">Traffic generation</option>
            <option value="other">Something else</option>
          </select>
          <br />
          <br />
          <h2>{this.state.select}</h2>

        </form>
      </div>
    );
  }
}
