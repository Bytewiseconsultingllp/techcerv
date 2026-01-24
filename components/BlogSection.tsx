'use client';

import Image from 'next/image';

export default function BlogSection() {
  const posts = [
    {
      image: '/images/post-1.jpg',
      title: 'The Linux Threat You Need to Know',
      delay: ''
    },
    {
      image: '/images/post-2.jpg',
      title: 'Closing Security Gaps with Innovation',
      delay: '0.2s'
    },
    {
      image: '/images/post-3.jpg',
      title: 'BianLian Focuses on Data Extortion',
      delay: '0.4s'
    }
  ];

  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">latest post</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Our latest <span>insight blog</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay={post.delay}>
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <a href="#!" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        width={400}
                        height={300}
                      />
                    </figure>
                  </a>
                </div>
                {/* Post Featured Image End */}

                {/* post Item Content Start */}
                <div className="post-item-content">
                  {/* post Item Body Start */}
                  <div className="post-item-body">
                    <h2><a href="#!">{post.title}</a></h2>
                  </div>
                  {/* Post Item Body End */}

                  {/* Post Item Button Start */}
                  <div className="post-item-btn">
                    <a href="#!" className="post-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                  {/* Post Item Button End */}
                </div>
                {/* post Item Content End */}
              </div>
              {/* Post Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
