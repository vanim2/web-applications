import { selectOptions } from "@testing-library/user-event/dist/select-options";
import React, { Fragment, useState } from "react";

let RegistationForm = () => {
     let [state, setState] = useState({
          user: {
               username: '',
               Email: '',
               Password: '',
               Designation: '',
               Bio: '',
               Terms: true
          }

     });
     let { user } = state;
     let changeInput = (event) => {
          setState((state) = ({
               user: {
                    ...state.user,
                    [event.target.name]: event.target.value
               }

          }))

     };
     let checked = (event) => {
          setState((state) = ({
               user: {
                    ...state.user,
                    [event.target.name]: event.target.checked
               }
          }))

     };
     let formSubmit = (event) => {
          event.preventDefault();
          console.log(user);
     };
     return (
          <Fragment >
               <h2>Welcome to RegistationForm</h2>
               <pre>{JSON.stringify(user)}</pre>
               <div className="container mt-5">
                    <div className="row">
                         <div className="col-md-3">
                              <div className="card">
                                   <div className="card-header bg-warning">
                                        <p className="h4">Register Here</p>
                                   </div>
                                   <div className="card-body">
                                        <form onSubmit={formSubmit}>
                                             <div className="mb-3">
                                                  <input
                                                       name="username"
                                                       value={user.username}
                                                       onChange={changeInput}
                                                       type="text" className="form-control" placeholder="Username" />
                                             </div>
                                             <div className="mb-3">
                                                  <input
                                                       name="Email"
                                                       value={user.Email}
                                                       onChange={changeInput}
                                                       type="Email" className="form-control" placeholder="Email" />
                                             </div>
                                             <div className="mb-3">
                                                  <input
                                                       name="Password"
                                                       value={user.Password}
                                                       onChange={changeInput}
                                                       type="password" className="form-control" placeholder="Password" />
                                             </div>
                                             <div className="mb-3">
                                                  <select
                                                       name="Designation"
                                                       value={user.Designation}
                                                       onChange={changeInput}
                                                       className="form-control">
                                                       <option value="">Select Designation</option>
                                                       <option value="Software Engineer">Software Engineer</option>
                                                       <option value="Senior Software Engineer">Senior Software Engineer</option>
                                                       <option value="Tech Lead">Tech Lead</option>
                                                       <option value="Project Manager">Project Manager</option>
                                                       <option value="Director">Director</option>
                                                  </select>
                                             </div>
                                             <div className="mb-3">
                                                  <textarea
                                                       name="Bio"
                                                       value={user.Bio}
                                                       onChange={changeInput}
                                                       rows={4} className="form-control" placeholder="Bio" />
                                             </div>
                                             <div className="mb-3">
                                                  <input
                                                       name="Terms"
                                                       onChange={checked}
                                                       type="checkbox" className="form-check-input" />Accept Terms
                                             </div>
                                             <div className="mb-3">
                                                  <input type="submit" className="btn btn-sm btn-primary" value="Register" />

                                             </div>

                                        </form>
                                   </div>

                              </div>

                         </div>
                    </div>
               </div >
          </Fragment >
     )
};
export default RegistationForm;