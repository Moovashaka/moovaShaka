import React from 'react';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: '',
      inputEmail: '',
      select: '',
      lockSubmit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = e => {
     this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    alert('form submitted: ' +  e.target.name );

  }



  render() {

    return (
      <div className="text-center">
        <form onSubmit={this.handleSubmit}>
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
          <span>{this.state.inputName}</span>
          <br />
          <div>
            <label> email:</label>
            <input name="inputEmail" type="text" onChange={this.handleChange} required />
            <h2>{this.state.inputEmail}</h2>
            <br />
          </div>
          <div>
            <label>
              <i>Talk to ME about:</i>
              <br />
              <br />
            </label>
          </div>
          <select name="select" className="text-center" onChange={this.handleChange}>
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
        <button id="submit" type="submit" name="dataSubmit" disabled={this.state.lockSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
