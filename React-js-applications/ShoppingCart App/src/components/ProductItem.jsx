import React, { Fragment, useState } from "react";

let ProductItem = () => {
     let [state, setState] = useState({
          product: {
               sno: 'AA001',
               image: 'https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense-2/device-360/shadow-grey/prod0.png',
               name: 'Mi Watch',
               price: 1500,
               qty: 1
          }

     });
     let { product } = state;
     let incriment = () => {
          // alert('hi');
          setState((state) => ({
               product: {
                    ...state.product,
                    qty: state.product.qty + 1
               }
          }));

     }
     let decrement = () => {
          // alert('hi');
          setState((state) => ({
               product: {
                    ...state.product,
                    qty: state.product.qty - 1 > 0 ? state.product.qty - 1 : 1
               }
          }));


     }
     return (
          <Fragment >
               <div className="container mt-3 center">
                    <div className="row">
                         <div className="col">
                              <div className="card border-0">
                                   <div className="card-header">
                                        <p className="h3 text-primary">Product Item</p>
                                   </div>
                                   <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid quo provident cumque quasi blanditiis fugiat. Necessitatibus ab reiciendis recusandae repudiandae alias voluptatem quo eum molestiae, iusto adipisci culpa neque.</p>
                                   </div>
                              </div>
                              <div className="container">
                                   <div className="row">
                                        <div className="col">
                                             <table className="table tabl-striped text-center table-hover">
                                                  <thead className="theader bg-dark text-white">
                                                       <tr>
                                                            <th>SNO</th>
                                                            <th>Image</th>
                                                            <th>name</th>
                                                            <th>Price</th>
                                                            <th>Qty</th>
                                                            <th>total</th>
                                                       </tr>
                                                  </thead>
                                                  <tbody className="tbody bg-light">
                                                       <tr>
                                                            <td>{product.sno}</td>
                                                            <td><img src={product.image} alt="" width={50} height={40}></img></td>
                                                            <td>{product.name}</td>
                                                            <td>{product.price}</td>
                                                            <td>
                                                                 <i onClick={decrement} className="fa fa-minus-square mx-1" />
                                                                 {product.qty}
                                                                 <i onClick={incriment} className="fa fa-plus-square mx-1" />

                                                            </td>
                                                            <td>{product.qty * product.price}</td>
                                                       </tr>
                                                  </tbody>
                                             </table>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </Fragment>
     )
};
export default ProductItem;