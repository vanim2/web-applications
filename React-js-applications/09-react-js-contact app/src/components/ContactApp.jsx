import React, { Fragment, useState } from "react";
import ContactCard from "./ContactCard";
import ContacList from "./ContactList";

let ContacApp = () => {
     let [state, setState] = useState({
          selectedContact: {}
     });
     let { selectedContact } = state;
     //child received function
     let receivedContact = (contact) => {
          setState((state) => ({
               selectedContact: contact
          }))

     };
     return (
          <Fragment >
               <pre>{JSON.stringify(selectedContact)}</pre>
               <div className="container mt-3">
                    <div className="row">
                         <div className="col">
                              <p className="h3 text-success">Contact App</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi alias quia minus natus itaque cumque incidunt? Ad cum nobis sit sunt impedit quaerat architecto delectus, earum pariatur exercitationem quis repellendus!</p>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-md-9">
                              <ContacList sendContact={receivedContact} />
                         </div>
                         <div className="col-3">
                              <ContactCard contactListData={selectedContact} />
                         </div>
                    </div>
               </div>
          </Fragment>
     )
};
export default ContacApp;