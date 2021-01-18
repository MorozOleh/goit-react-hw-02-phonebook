import React, { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {

  state = { 
    name: '',
    number: '',
  }

  // ----------------------------------------------------

  handleChange = e => {
    const { name, value } = e.currentTarget;
    
    this.setState({
      [name]: value,
    })
  }
  
  // ----------------------------------------------------
  
  handleSubmit = e => {
    e.preventDefault();
    
    this.props.onSubmit(this.state);
    //We call this function for reset all values in form;
    this.reset();
  }
  
  // ----------------------------------------------------
  
  reset = () => (
    this.setState ({ name: "", number: ""})
    )
    
    // ----------------------------------------------------
  render() { 

    return ( 
        <form className={s.form} onSubmit={this.handleSubmit}>

          <label className={s.label}>
          Name
           <input
              className={s.input}
              type="text"
              name="name"
              placeholder="type your name"
              value={this.state.name}
              onChange={this.handleChange}
              />
          </label>


          <label className={s.label}>
            Phone number
           <input
              className={s.input}
              type="tel"
              name="number"
              placeholder="type your number"
              value={this.state.number}
              onChange={this.handleChange}/>
          </label>

          <button className={s.button} type="submit">Add contact</button>
        </form>
     );
  }
}
 
export default Form;