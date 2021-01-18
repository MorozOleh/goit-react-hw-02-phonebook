import React, { Component } from 'react';
import shortid from 'shortid';
import Filter from './Components/Filter';
import ContactList from './Components/Contact/ContactList';
import Form from './Components/Form';


class App extends Component {


  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',

  }

  // ---------------------------------------------------------------------
  
  formSubmitHandler = ({name, number}) => {
    
    const person = {
      id: shortid.generate(),
      name: name,
      number: number,
    }
    
    this.setState(({ contacts }) => ({
      contacts: [person, ...contacts]
    }))
  }
  
  // ---------------------------------------------------------------------
  
  deleteContact = (contactId) => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState
      .contacts
      .filter(contact => contact.id !== contactId),
    }));
  };
  
  // ---------------------------------------------------------------------
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }
  
  // ---------------------------------------------------------------------
  
  render() { 

    const { filter } = this.state;
    const { formSubmitHandler, changeFilter, deleteContact } = this;
   
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this
      .state
      .contacts
      .filter(contact => contact
        .name
        .toLowerCase()
        .includes(normalizedFilter));


    return ( 
      <div>

        <h1> Phonebook </h1>
        <Form onSubmit={formSubmitHandler}/>

        <h2> Contacts </h2>

        <Filter value={filter} onChange={changeFilter} />
        
        <ContactList items={filterContacts} onDeleteContact={deleteContact}/>
      </div>
     );
  }
}
 
export default App;
