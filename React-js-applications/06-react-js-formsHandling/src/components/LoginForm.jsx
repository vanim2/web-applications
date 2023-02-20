import React, { Fragment, useState } from "react";

let LoginForm = () => {
     let [state, setState] = useState(
          {
               user: {
                    username: "",
                    password: ""
               }

          }
     );
     let { user } = state;
     // let changeUsername = (event) => {
     //      setState((state) => ({
     //           user: {
     //                ...state.user,
     //                username: event.target.value
     //           }
     //      }))

     // };
     // let changePassword = (event) => {
     //      setState((state) = ({
     //           user: {
     //                ...state.user,
     //                password: event.target.value
     //           }
     //      }))

     // };
     let change = (event) => {
          setState((state) = ({
               user: {
                    ...state.user,
                    [event.target.name]: event.target.value
               }

          }))
     };
     let formSubmit = (event) => {
          event.preventDefault();
          console.log(user);
     };
     return (
          <Fragment >
               <div className="container mt-5">
                    <div className="row">
                         <div className="col-md-3">
                              <div className="card">
                                   <div className="card-header bg-warning text-white text-center">
                                        <p className="h3">Login Here</p>
                                   </div>
                                   <div className="card-body">
                                        <form onSubmit={formSubmit}>
                                             {/* <pre>{JSON.stringify(state)}</pre> */}
                                             <div className="mb-3">
                                                  <input
                                                       name="username" onChange={change} type="text" value={user.username} className="form-control" placeholder="Username" />
                                             </div>
                                             <div className="mb-3">
                                                  <input
                                                       name="password" onChange={change} type="password" value={user.password} className="form-control" placeholder="password" />
                                             </div>
                                             <div className="mb-2">
                                                  <input type="submit" value="login" />
                                             </div>


                                        </form>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>

          </Fragment >
     )
};
export default LoginForm;