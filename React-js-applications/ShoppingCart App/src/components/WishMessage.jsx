import React, { Fragment, useState } from "react";

let WishMessage = () => {
     let [state, setState] = useState({
          message: 'Hello'
     });
     let Update1 = (state) => {
          setState((state) = ({
               message: state.message = "Good Morning"
          }));
     }
     let Update2 = (value) => {
          setState((value) = ({
               message: value
          }));

     };

     return (
          <Fragment >
               <div className="container mt-5">
                    <div className="row">
                         <div className="col-md-6">
                              <div className="card">
                                   <div className="card-header text-white bg-warning">
                                        <p className="h3">WishMessage</p>
                                   </div>
                                   <div className="card-body bg-light">
                                        <h3 className="display3 text-primary">{state.message}</h3>
                                        <button onClick={Update1} className="btn btn-sm btn-success">Good Morning</button>
                                        <button onClick={() => Update2('Good Afternoon')} className="btn btn-sm btn-danger">Good Afternoon</button>
                                        <button onClick={() => { setState((state) => ({ message: 'Good Evening' })) }} className="btn btn-sm btn-warning">Good Evening</button>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div >          </Fragment >
     )
};
export default WishMessage;