import React, { Fragment, useState } from "react";

let Counter = () => {
     let [state, setState] = useState({
          counter: 0
     });
     let incrementCounter = (state) => {
          setState((state) => ({
               counter: state.counter + 1
          }));
     }
     let decrementCounter = (state) => {
          setState((state) => ({
               counter: state.counter - 1

          }));

     }
     return (
          <Fragment >
               <div className="container mt-5">
                    <div className="row">
                         <div className="col-md-4">
                              <div className="card">
                                   <div className="card-header bg-primary text-white text-center">
                                        <h2>Counter</h2>
                                   </div>
                                   <div className="card-body text-center">
                                        <h5 className="display-4">{state.counter}</h5>
                                        <button onClick={incrementCounter} type="button" class="btn btn-warning btn-sm">Increment</button>
                                        <button onClick={decrementCounter} type="button" class="btn btn-danger btn-sm">Decrement</button>
                                   </div>

                              </div>

                         </div>
                    </div>
               </div>
          </Fragment >
     )
};
export default Counter;