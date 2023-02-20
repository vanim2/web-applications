import React, { Fragment, useState } from 'react';

let Shopping = () => {
     let [state, setState] = useState({
          products: [
               {
                    sno: 'AA001',
                    image: 'https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense-2/device-360/shadow-grey/prod0.png',
                    name: 'Mi Watch',
                    price: 1500,
                    qty: 1
               },
               {
                    sno: 'AA002',
                    image: 'https://res.garmin.com/en/products/010-02064-05/g/cf-lg-4a2f5ae4-c69c-45e9-bcf9-663f211f49c1.jpg',
                    name: 'LG Watch',
                    price: 1800,
                    qty: 1
               },
               {
                    sno: 'AA003',
                    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-hermes-og-202209?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1663688961009',
                    name: 'Samsung Watch',
                    price: 1700,
                    qty: 1
               },
               {
                    sno: 'AA004',
                    image: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-watch-series-8-cellular-45mm-product-red-aluminum-product-red-sport-band-34fr-screen-usen-mnvu3ll-a?hei=400&fmt=webp',
                    name: 'Apple Watch',
                    price: 1200,
                    qty: 1
               },
               {
                    sno: 'AA005',
                    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPH43ref_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO+watch-face-45-nike7s-desertberry-spruceaura_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660757976267%2C1661968921009%2C1662143432353',
                    name: 'Oppo Watch',
                    price: 1100,
                    qty: 1
               },
          ]
     });
     let { products } = state;
     //increment function
     let increment = (productId) => {
          //filter the data for updating qty
          let items = products.map(product => {
               if (product.sno === productId) {
                    return {
                         ...product,
                         qty: product.qty + 1
                    }
               }
               return product;

          });
          //update the state with new data
          setState((state) => ({
               products: [...items]
          }));

     };
     //decrement function
     let decrement = (productId) => {
          let items = products.map((product) => {
               if (product.sno === productId)
                    return {
                         ...product,
                         qty: product.qty - 1 > 0 ? product.qty - 1 : 1

                    }
               return product;
          });
          setState((state) => ({
               products: [...items]
          }));


     };
     //total function
     let grandTotal = () => {
          let total = 0;
          for (let product of products) {
               total += product.qty * product.price;
               // console.log(total);
          }
          return total;

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
                                                       {
                                                            products.map((product) => {
                                                                 return (
                                                                      <tr key={product.sno}>
                                                                           <td>{product.sno}</td>
                                                                           <td><img src={product.image} alt="" width={50} height={40}></img></td>
                                                                           <td>{product.name}</td>
                                                                           <td>&#8377;{product.price.toFixed(2)}</td>
                                                                           <td>
                                                                                <i onClick={() => decrement(product.sno)} className="fa fa-minus-square mx-1" />
                                                                                {product.qty}
                                                                                <i onClick={() => increment(product.sno)} className="fa fa-plus-square mx-1" />

                                                                           </td>
                                                                           <td>&#8377;{(product.qty * product.price).toFixed(2)}</td>
                                                                      </tr>
                                                                 )
                                                            })

                                                       }<tr>
                                                            <td colSpan={4}></td>
                                                            <td>Grand total</td>
                                                            <td>&#8377;{grandTotal().toFixed(2)}</td>
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
export default Shopping;