import { Component, createRef } from "react";
import { connect } from "react-redux";
import ContactView from "./ContactView";
import { addContact, removeContact } from "./redux/ActionCreators";


class App extends Component {

    emailRef = createRef();
    nameRef = createRef();

    handleClick = () => {
      let contact = {
          email: this.emailRef.current.value,
          name: this.nameRef.current.value
      }
      this.props.addNewContact(contact);
    }
    render() {

      return <div className="center">
        <form >
          <h1>Contact</h1>
          <div>Email : <input type="text" ref={this.emailRef}/> </div><br />
          <div> Name : <input type="text" ref={this.nameRef}/></div><br />
          <button type="button" onClick={this.handleClick}>Add New Contact</button>

        </form>
        <h1>Contact List</h1>
        <ul className="styletype">
          {
            this.props.contacts.map(contact => <ContactView
              key={contact.email}
              contact={contact}
              deleteContact={this.props.deleteContact}/>)
          }
        </ul>
      </div>
    }
}

function mapStateToProps(state){

      return {
        contacts: state.contacts
      }
}

function mapDispatchToProps(dispatch){

    return {
      addNewContact: (contact) => dispatch(addContact(contact)),
      deleteContact : (email) => dispatch(removeContact(email))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);