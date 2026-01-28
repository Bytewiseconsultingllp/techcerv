'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Copilot Enablement & Studio Customization',
      description: 'Unleash productivity with Microsoft Copilot across Teams, Word, Excel, Outlook & more. We help you deploy, adopt, and customize Copilot experiences using Copilot Studio—no code, just results. From tailored workflows to AI agents trained on your data, we make Copilot work for your business.',
      delay: '0.6s'
    },
    {
      title: 'Enterprise AI Solutions',
      description: 'Turn your data into decisions. Our Enterprise AI solutions include GenAI chatbots, document automation, AI-powered search, and smart workflows—integrated with your CRM, ERP, and core systems. Built with responsible AI, secured for scale, and tuned for real impact.',
      delay: '0.8s'
    },
    {
      title: 'Azure AI Foundry Innovation',
      description: 'Accelerate AI innovation with Azure AI Foundry. We build and deploy intelligent agents, custom copilots, and multi-agent workflows powered by Azure OpenAI, Cognitive Services, and Power Platform. From prototype to production—we make enterprise AI real.',
      delay: '1s'
    },
    {
      title: 'Microsoft 365 Services',
      description: 'Boost productivity and collaboration with Microsoft 365 solutions. We help businesses optimize workflows with cloud-based tools like Teams, Outlook, and SharePoint. Enhance security, efficiency, and remote work capabilities with expert integration and support.',
      delay: ''
    },
    {
      title: 'Public Cloud Services',
      description: 'Leverage the power of scalable and cost-effective public cloud solutions. We provide secure infrastructure, storage, and computing resources from leading providers like AWS, Azure, and Google Cloud. Optimize performance and flexibility with our expert cloud management services.',
      delay: '0.2s',
      active: true
    },
    {
      title: 'Google Workspace',
      description: 'Empower your team with seamless collaboration using Google Workspace tools like Gmail, Drive, Meet, and Docs. We provide expert setup, migration, and management to enhance productivity, security, and efficiency in a cloud-powered work environment.',
      delay: '0.4s'
    },
    {
      title: 'Zoho Workplace',
      description: 'Boost productivity with Zoho Workplace\'s suite of collaboration tools, including Mail, Drive, and Cliq. We help businesses integrate, manage, and optimize Zoho for seamless communication and workflow efficiency.',
      delay: '0.6s'
    },
    {
      title: 'Managed Services',
      description: 'Ensure seamless operations with expert management of Microsoft 365, cloud platforms, and collaboration tools. We provide security, updates, and optimization to enhance productivity and efficiency. Focus on your business while we handle the complexities of cloud management.',
      delay: '0.8s'
    },
    {
      title: 'App Development',
      description: 'Create dynamic, scalable, and secure applications using the latest cloud technologies. We specialize in designing and developing custom web solutions that enhance user experience, performance, and business growth. From frontend to backend, we ensure seamless integration and cloud optimization.',
      delay: '1s'
    }
  ];

  return (
    <div className="our-services">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title text-center">
              <h3 className="wow fadeInUp">our services</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                AI,Cloud & Digital Transformation Services
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              {/* Service Item Start */}
              <div
                className={`service-item ${service.active ? 'active' : ''} wow fadeInUp`}
                data-wow-delay={service.delay}
              >
                <div className="service-title-box">
                  <div className="service-title">
                    <h3><a href="#!">{service.title}</a></h3>
                  </div>
                  <div className="service-btn">
                    <a href="#!">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="line"></div>
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
              </div>
              {/* Service Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
