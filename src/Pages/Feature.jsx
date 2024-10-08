import React  from "react";
function Feature() {
    return (
  <div>
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Feature</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Feature</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Feature Start */}
  <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{margin: '6rem 0'}}>
    <div className="container feature px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
          <div className="p-lg-5 ps-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">Why Choose Us</h1>
            </div>
            <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
            <div className="row g-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: 60, height: 60}}>
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Quality</p>
                    <h5 className="mb-0">Services</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: 60, height: 60}}>
                    <i className="fa fa-user-check fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Creative</p>
                    <h5 className="mb-0">Designers</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: 60, height: 60}}>
                    <i className="fa fa-drafting-compass fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Free</p>
                    <h5 className="mb-0">Consultation</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: 60, height: 60}}>
                    <i className="fa fa-headphones fa-2x text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Customer</p>
                    <h5 className="mb-0">Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pe-lg-0" style={{minHeight: 400}}>
          <div className="position-relative h-100">
            <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{objectFit: 'cover'}} alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    )  
}
export default Feature