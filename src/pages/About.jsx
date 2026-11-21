import React, { useState, useEffect, useRef } from "react";
import Breadcrumb from '../components/Breadcrumb';
import {
  ArrowRight,
  Factory,
  Settings,
  Zap,


} from "lucide-react";


// state-counter start




const About = () => {

  const stats = [
    { value: 16, suffix: "+", label: "Machine Types" },
    { value: 6, suffix: "+", label: "Industry Segments" },
    { value: 100, suffix: "%", label: "Customer Focus" },
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 5000, suffix: "+", label: "Happy Customers" },
    { value: 24, suffix: "/7", label: "Customer Support" },
  ];

  const [counts, setCounts] = useState(
    stats.map(() => 0)
  );

  const [hasAnimated, setHasAnimated] = useState(false);

  const statsRef = useRef(null);

  useEffect(() => {
    const element = statsRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800;
    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.round(stat.value * eased)
        )
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated]);

  return (
    <>
      <Breadcrumb title="About Us"/>

      {/* ==========================
    ABOUT US SECTION
========================== */}

      <section className="about-us-section section-padding">
        <div className="container">

          {/* ABOUT CONTENT */}
          <div className="row align-items-center g-5">

            {/* LEFT IMAGE */}
            <div className="col-lg-6">
              <div className="about-us-image">
                <img
                  src="/img/about.png"
                  alt="Promax India - Industrial Machinery Manufacturer and Supplier"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">
              <div className="about-us-content">

                <p className="section-subheading">
                  ABOUT PROMAX INDIA
                </p>

                <h2 className="section-heading">
                  Your Trusted Partner for
                  <span> Industrial Machinery</span>
                </h2>

                <h3 className="about-us-subtitle">
                  Complete Manufacturing Machine Solutions
                  for Growing Businesses
                </h3>

                <p className="section-description">
                  Promax India is a manufacturer and supplier
                  of industrial machinery, offering a wide
                  range of machines for small, medium and
                  growing manufacturing businesses. We provide
                  machinery solutions for paper products,
                  hygiene products, pharmaceuticals, footwear,
                  plastic products, packaging and electrical
                  manufacturing.
                </p>

                <p className="section-description mt-3">
                  Our product range includes paper plate
                  making machines, paper cup making machines,
                  slipper making machines, tissue paper making
                  machines, sanitary pad making machines,
                  syrup making machines, tablet making machines,
                  PVC pipe machines, LED bulb making machines
                  and more. At Promax India, we focus on
                  helping businesses choose suitable machinery
                  for their production needs and future growth.
                </p>

                {/* FEATURE TAGS */}
                <div className="about-us-features d-flex flex-wrap gap-2 mt-4">

                  <span className="about-feature-tag">
                    <Factory size={16} />
                    Wide Range of Machines
                  </span>

                  <span className="about-feature-tag">
                    <Settings size={16} />
                    Manufacturing Solutions
                  </span>

                  <span className="about-feature-tag">
                    <Zap size={16} />
                    Efficient Production
                  </span>

                </div>

                {/* BUTTON */}
                <div className="mt-4">
                  <a
                    href="/contact-us"
                    className="btn btn-primary"
                  >
                    Contact Now
                    <ArrowRight size={18} />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* ANIMATED STATISTICS COUNTERS */}
          <div
            ref={statsRef}
            className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 about-stats-row mt-5"
          >
            {stats.map((stat, index) => (
              <div className="col" key={index}>
                <div className="about-stat-card h-100">

                  <h3>
                    {counts[index]}
                    <sup>{stat.suffix}</sup>
                  </h3>

                  <span className="about-stat-line"></span>

                  <p>{stat.label}</p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT US SECTION END */}


      {/* ==========================
    OUR PROMISE SECTION
========================== */}
      <section className="promise-section section-padding pt-0">
        <div className="container">

          <div className="promise-banner">

            <div className="promise-content">

              <p className="promise-label">
                — THE PROMAX PROMISE —
              </p>

              <h2 className="promise-heading">
                EMPOWERING BUSINESSES WITH
                <br className="d-none d-lg-block" />
                RELIABLE MACHINERY &
                <br className="d-none d-lg-block" />
                <span>SMART MANUFACTURING SOLUTIONS</span>
              </h2>

            </div>

          </div>

        </div>
      </section>


      {/* OUR PROMISE SECTION */}

      {/* MISSION AND VISION SECTION start*/}

      <section className="pro-mission-vision py-5 mb-5">
        <div className="container py-lg-3">
          <div className="row g-4">
            {/* MISSION */}
            <div className="col-md-6">
              <div className="pro-mv-item">
                <div className="pro-mv-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>

                <h3>Our Mission</h3>

                <p>
                  To provide high-quality, reliable, and cost-effective
                  manufacturing machines that help businesses improve
                  production efficiency, reduce operational costs, and
                  grow through advanced machinery solutions.
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className="col-md-6">
              <div className="pro-mv-item pro-mv-vision">
                <div className="pro-mv-icon">
                  <i className="fa-solid fa-eye"></i>
                </div>

                <h3>Our Vision</h3>

                <p>
                  To become a trusted manufacturer and supplier of
                  industrial machinery in India by delivering innovative,
                  efficient, and dependable machines that support
                  businesses across various manufacturing industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION SECTION end*/}

      {/* MANUFACTURING SECTION start*/}
      <section className="manufacturing pb-5">
        <div className="container py-lg-4">
          <div className="row align-items-center g-4 g-lg-5">
            {/* LEFT CONTENT */}

            <div className="col-lg-6">
              <div className="manufacturing-content">
                <span className="section-subheading">
                  Our Manufacturing Approach
                </span>

                <h2 className="section-heading mt-2 mb-3">
                  Advanced Machinery for
                  <span> Modern Manufacturing</span>
                </h2>

                <p>
                  Promax is a manufacturer and supplier of industrial
                  machinery, offering a wide range of solutions for
                  businesses across various industries. Our product range
                  includes Syrup Making Machines, Tablet Making Machines,
                  Sanitary Pad Machines, Paper Cup Machines, Tissue Paper
                  Machines, PVC Pipe Machines, and many more.
                </p>

                <p>
                  We focus on quality, practical machine design, and
                  reliable performance to help businesses improve
                  production efficiency. From small manufacturing units
                  to large-scale industries, Promax provides machinery
                  solutions designed to support different production
                  requirements and business growth.
                </p>

                <div className="pro-manufacturing-points">
                  <div>
                    <i className="fa-solid fa-check"></i>
                    <span>Advanced Manufacturing Technology</span>
                  </div>

                  <div>
                    <i className="fa-solid fa-check"></i>
                    <span>Quality-Focused Machinery Production</span>
                  </div>

                  <div>
                    <i className="fa-solid fa-check"></i>
                    <span>Wide Range of Industrial Machines</span>
                  </div>

                  <div>
                    <i className="fa-solid fa-check"></i>
                    <span>Reliable & Efficient Machinery Solutions</span>
                  </div>
                </div>
              </div>
            </div>


            {/* RIGHT IMAGE */}
          
                {/* LEFT IMAGE */}
                <div className="col-lg-6">
                  <div className="img-box">
                    <img
                      src="/img/manufacturing.png"
                      alt="Promax India - Industrial Machinery Manufacturer and Supplier"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>
           
              
          </div>
        </div>
      </section>


      {/* MANUFACTURING SECTION end*/}



      
    </>
  )
}

export default About
