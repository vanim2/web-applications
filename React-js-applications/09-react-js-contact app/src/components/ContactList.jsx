import React, { Fragment, useState } from "react";
import ContactServices from "../services/ContactServices";

let ContacList = (props) => {
     let [state, setState] = useState({
          contacts: ContactServices.getContactList()
     });
     let clickContact = (contact) => {
          // alert(JSON.stringify(contact));
          props.sendContact(contact);//send data to parent
     };
     let { contacts } = state;
     return (
          <Fragment >
               <table className="table table-hover table-striped text-center border-3">
                    <thead className="bg-dark text-white">
                         <tr>
                              <th>SNO</th>
                              <th>NAME</th>
                              <th>EMAIL</th>
                              <th>PHONE</th>
                              <th>LOCATION</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              contacts.length > 0 && contacts.map((contact) => {
                                   return (
                                        <tr key={contact.login.uuid} onClick={() => clickContact(contact)}>
                                             <td>{contact.login.uuid.substr(contact.login.uuid.length - 5)}</td>
                                             <td>{contact.name.first} {contact.name.last}</td>
                                             <td>{contact.email}</td>
                                             <td>{contact.phone}</td>
                                             <td>{contact.location.city}</td>

                                        </tr>
                                   )
                              })

                         }
                    </tbody>
               </table>
          </Fragment>
     )
};
export default ContacList;