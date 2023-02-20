import React, { Fragment } from "react";

let ContactCard = (props) => {
     let { contactListData } = props
     return (
          <Fragment >
               {/* console.log({props.contactListData}; */}
               {/* <pre>{JSON.stringify(props.contactListData)}</pre> */}
               {
                    Object.keys(contactListData).length > 0 &&
                    <div className="card">
                         <img src={contactListData.picture.large} alt="" className="img-top-fluid" />
                         <div className="card-body">
                              <ul className="list-group">
                                   <li className="list-group-item">
                                        {contactListData.name.title} {contactListData.name.first} {contactListData.name.last}
                                   </li>
                                   <li className="list-group-item">
                                        {contactListData.email}
                                   </li>
                                   <li className="list-group-item">
                                        {contactListData.age}yrs
                                   </li>
                                   <li className="list-group-item">
                                        {contactListData.location.city}
                                   </li>
                              </ul>
                         </div>

                    </div>

               }

          </Fragment >
     )
};
export default ContactCard;