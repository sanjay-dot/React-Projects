// import logo from './logo.svg';
import "./App.css";
import Header from "./component/Header";
import AddContact from "./component/AddContacts";
import ContactList from "./component/ContactList";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  console.log(contacts);

  return (
    <div>
      <Header />
      <AddContact  setContacts={setContacts} />
      <div className="container-fluid">
        <div className="container-fluid col-6 mt-4">
          <div>
            <table className="table">
              
                {contacts.map((contacts, i) => {
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{contacts.Name}</td>contacts={contacts}
                    <td>{contacts.Email}</td>
                    <td>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </td>
                  </tr>;
                })}
              
            </table>
          </div>
        </div>

        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}


export default App
