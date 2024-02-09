import React from 'react'

function Cardetail() {
  return (
    <div>
        {/*car-details start */}
<section id="car-details" className="car-details">
    <div className="container">
        <div className="section-header">
            <h2>Car Details</h2>
        </div>{/*/.section-header*/}
        <div className="car-details-content">
            <div className="owl-carousel owl-theme" id="car-details-carousel">
                {/* Car Details Item 1 */}
                <div className="car-details-item">
                    <div className="single-car-details-item">
                        <div className="row">
                            <div className="col-md-7 col-sm-12">
                                <div className="car-details-img">
                                    <img src="assets/images/car-details-model/cdm1.png" alt="Car"></img>
                                </div>{/*/.car-details-img*/}
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <div className="car-details-txt">
                                    <h2><a href="index.html">Chevrolet Camaro <span>ZA100</span></a></h2>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p className="car-details-para2">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                    <button className="welcome-btn car-details-btn" onClick="window.location.href='index.html'">
                                        View Details
                                    </button>
                                </div>{/*/.car-details-txt*/}
                            </div>{/*/.col*/}
                        </div>{/*/.row*/}
                    </div>{/*/.single-car-details-item*/}
                </div>{/*/.car-details-item*/}

                {/* Car Details Item 2 */}
                {/* Add more items as needed */}

            </div>{/*/#car-details-carousel*/}
        </div>{/*/.car-details-content*/}
    </div>{/*/.container*/}
</section>{/*/.car-details*/}
{/*car-details end */}

    </div>
  )
}

export default Cardetail