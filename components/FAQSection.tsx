'use client';

export default function FAQSection() {
  return (
    <div className="our-faqs home-our-faqs" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            {/* FAQ Accordion Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">faq</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                You have questions. We have answers.
              </h2>
            </div>
            <div className="faq-accordion" id="accordion">
              {/* FAQ Item Start */}
              <div className="accordion-item wow fadeInUp">
                <h2 className="accordion-header" id="heading1">
                  <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapse1" 
                    aria-expanded="true" 
                    aria-controls="collapse1"
                  >
                    What makes Techcerv different as a Microsoft Partner?
                  </button>
                </h2>
                <div 
                  id="collapse1" 
                  className="accordion-collapse collapse show" 
                  aria-labelledby="heading1" 
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      The cloud is global network of remote servers that allows users access to their 
                      data and apps from their personal devices, regardless of their location. The cloud 
                      can also refer to cloud computing, the delivery of computing resources (databases, 
                      servers, networks) that are accessed over the internet.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ Item End */}

              {/* FAQ Item Start */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="accordion-header" id="heading2">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapse2" 
                    aria-expanded="false" 
                    aria-controls="collapse2"
                  >
                    What are the benefits of migrating to the cloud?
                  </button>
                </h2>
                <div 
                  id="collapse2" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="heading2" 
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      A cloud migration is when an enterprise partially or completely moves their digital 
                      assets and apps, services, and IT resources onto the cloud. Enterprises often migrate 
                      to the cloud step away from their older legacy infrastructure, such as aging servers 
                      or software or hardware solutions that are performing poorly, helping an enterprise 
                      to improve their performance and efficiency.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ Item End */}
            </div>
            {/* FAQ Accordion End */}
          </div>
        </div>
      </div>
    </div>
  );
}
