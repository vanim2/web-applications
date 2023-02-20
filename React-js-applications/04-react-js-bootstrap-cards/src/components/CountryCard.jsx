import React, { Fragment } from "react";
import image1 from '../ascets/images/Ghora Katora.jpg';
import image2 from '../ascets/images/hawamahal.jpg';
import image3 from '../ascets/images/New Delhi.jpg';
import image4 from '../ascets/images/Taj Mahall.jpg';

let CountryCard = () => {
     return (
          <Fragment >
               <div className="container mt-3">
                    <div className="row">
                         <div className="col-md-3">
                              <div className="card shadow-lg">
                                   <div className="card-header p-0">
                                        <img src={image1} class="img-fluid" alt='' />
                                   </div>
                                   <div className="card-body">
                                        <h3>Ghora Katora</h3>
                                        <p className="text-start">Ghora Katora (Aimee Maganda) which means "Horse Bowl" is a natural lake near the city of Rajgir in the Indian state of Bihar. The shape of the lake is a beautiful spot near Rajgir. It is said that the horses of the kings of Rajgir used to drink water here. The shape of the lake resembles that of a horse and the lake is surrounded by mountains on three of the sides. It is located near World Peace Pagoda. Surrounded by hills, the lake looks picturesque and makes for an ideal trip. Horse carts or tongas and bicycles help tourists reach them. One can enjoy boating here. It is a very relaxing place and all one can hear is the sound of wind and water..</p>
                                        <button type="button" class="btn btn-primary btn-sm">Read more</button>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-3">
                              <div className="card shadow-lg">
                                   <div className="card-header p-0">
                                        <img src={image2} class="img-fluid" alt='' />
                                   </div>
                                   <div className="card-body">
                                        <h3>Hawa Mahal</h3>
                                        <p className="text-start">The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.
                                             The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jaipur, India.[1] He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.</p>
                                        <button type="button" class="btn btn-primary btn-sm">Read more</button>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-3">
                              <div className="card shadow-lg">
                                   <div className="card-header p-0">
                                        <img src={image3} class="img-fluid" alt='' />
                                   </div>
                                   <div className="card-body">
                                        <h3>New Delhi</h3>
                                        <p className="text-start">national capital of India. It is situated in the north-central part of the country on the west bank of the Yamuna River, adjacent to and just south of Delhi city (Old Delhi) and within the Delhi national capital territory.

                                             In December 1911 King George V of Britain decreed that the capital of British India would be moved from Calcutta (now Kolkata) to Delhi..</p>
                                        <button type="button" class="btn btn-primary btn-sm">Read more</button>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-3">
                              <div className="card shadow-lg">
                                   <div className="card-header p-0">
                                        <img src={image4} class="img-fluid" alt='' />
                                   </div>
                                   <div className="card-body">
                                        <h3>Taj Mahal</h3>
                                        <p className="text-start">Taj Mahal, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631, having been the emperor’s inseparable companion since their marriage in 1612. India’s most famous and widely recognized building, it is situated in the eastern part of the city on the southern (right) bank of the Yamuna (Jumna) River. Agra Fort (Red Fort), also on the right bank of the Yamuna, is about 1 mile (1.6 km) west of the Taj Mahal.</p>
                                        <button type="button" class="btn btn-primary btn-sm">Read more</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </Fragment>
     )
};
export default CountryCard;