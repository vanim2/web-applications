import React, { Fragment, useState } from "react";

let UserName = () => {
     let [state, setState] = useState({
          input: 'ABCDEFG'
     })
     let updateInput = (event) => {
          setState((state) => ({
               input: event.target.value
          }))
     }
     return (
          <Fragment >
               <div className="container mt-5">
                    <div className="row">
                         <div className="col-md-3">
                              <div className="card">
                                   <div className="card-header bg-warning">
                                        <p className="h3">User Name</p>
                                   </div>
                                   <div className="card-body bg-light">
                                        <form>
                                             <div className="md-3">

                                                  <input value={state.input} onChange={updateInput} type="text" className="form-control" />
                                             </div>
                                             <h3>{state.input}</h3>
                                        </form>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>

          </Fragment>
     )
};
export default UserName;