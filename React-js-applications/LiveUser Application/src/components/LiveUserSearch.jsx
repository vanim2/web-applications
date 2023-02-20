import React, { Fragment, useState, useEffect } from "react";
import { UserService } from "../services/UserService";

let LiveUserSearch = () => {

     let [state, setState] = useState({
          loading: false,
          users: [],
          fUsers: [],
          searchKey: '',
          errorMessage: null

     });


     useEffect(() => {

          async function fetchData() {

               try {
                    setState((state) => ({ ...state, loading: true }));
                    let response = await UserService.getAllUsers();
                    let { results } = response.data;
                    // console.log(results);
                    setState((state) => ({
                         ...state,
                         users: results,
                         fUsers: results,
                         loading: false
                    }))
               }
               catch (error) {
                    setState((state) => ({
                         ...state,
                         loading: false,
                         errorMessage: error
                    }))
               }


          }


          fetchData();
     }, []);
     let searchUser = (event) => {

          let filteredUsers = state.fUsers.filter(user => {
               return user.name.first.toLowerCase(user).startsWith(event.target.value.toLowerCase());

          });
          setState(() => ({
               ...state,
               users: filteredUsers,
               searchKey: event.target.value

          }));
     };

     return (
          <Fragment>
               <pre>{state.searchKey}</pre>
               <div className="container mt-4">
                    <div className="row">
                         <div className="col-md-6">
                              <div className="card">
                                   <div className="card-header text-center bg-info p-3">
                                        <h2>Live Users</h2>
                                        <form>

                                             <input
                                                  name="searchKey"
                                                  value={state.searchKey}
                                                  onChange={searchUser}
                                                  type="text" className="form-control" placeholder="Enter UserName" />
                                        </form>
                                   </div>
                                   <div className="card-body bg-light">
                                        {/* <pre>{JSON.stringify(users)}</pre> */}
                                        <ul className="list-group">
                                             {
                                                  state.users.length > 0 &&
                                                  state.users.map(user => {
                                                       return (
                                                            <li key={user.login.uuid} className="list-group-item text-info-emphasis align-content-center ">
                                                                 <div className="row align-content-center">
                                                                      <div className="col-sm-3">
                                                                           <img src={user.picture.thumbnail} alt="" className="img-fluid rounded-circle" />
                                                                      </div>
                                                                      <div className="col-sm-8">
                                                                           <p className="h5">{user.name.title}.{user.name.first}{user.name.last}
                                                                           </p>
                                                                           <small>{user.location.city}{user.location.country}
                                                                           </small>
                                                                      </div>
                                                                 </div>
                                                            </li>
                                                       )
                                                  })
                                             }


                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment >

     )
};
export default LiveUserSearch;
