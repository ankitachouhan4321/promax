import React, { useEffect, useRef, useState } from "react";
import {
    Package,
    Factory,
    Settings,
    Users,
    BadgeCheck,
    TrendingUp,
    Handshake,
    Headset,
} from "lucide-react";

const AnimatedCounter = ({ value, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = counterRef.current;
        if (!element) return;

        let frameId;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasAnimated.current) {
                    return;
                }

                hasAnimated.current = true;

                const duration = 1400;
                let startTime = null;

                const animate = (timestamp) => {
                    if (startTime === null) startTime = timestamp;

                    const progress = Math.min(
                        (timestamp - startTime) / duration,
                        1
                    );

                    const eased = 1 - Math.pow(1 - progress, 3);

                    setCount(Math.round(value * eased));

                    if (progress < 1) {
                        frameId = requestAnimationFrame(animate);
                    }
                };

                frameId = requestAnimationFrame(animate);
                observer.disconnect();
            },
            { threshold: 0.3 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frameId);
        };
    }, [value]);

    return (
        <span ref={counterRef}>
            {count.toLocaleString("en-IN")}
            {suffix}
        </span>
    );
};



const promaxStats = [
    {
        value: 16,
        suffix: "+",
        label: "Manufacturing Machine Types",
    },
    {
        value: 7,
        suffix: "",
        label: "Industry Groups",
    },
    {
        value: 16,
        suffix: "+",
        label: "Machinery Solutions",
    },
];


const promaxBenefits = [
    {
        icon: Package,
        title: "Wide Product Range",
    },
    {
        icon: Settings,
        title: "Production Efficiency",
    },
    {
        icon: Factory,
        title: "Industry-Focused Solutions",
    },
    {
        icon: Handshake,
        title: "Machinery Buying Guidance",
    },
    {
        icon: BadgeCheck,
        title: "Production-Oriented Machines",
    },
    {
        icon: TrendingUp,
        title: "Business Growth Support",
    },
];


const Counter = () => {
  return (
    <>

          {/* PROMAX BENEFITS SECTION START */}


          <section className="promax-benefits section-padding">
              <div className="container">

                  {/* MAIN HAPPY CLIENTS COUNTER */}
                  <div className="promax-main-stat text-center mb-5">

                      <p className="section-subheading">
                          THE PROMAX ADVANTAGE
                      </p>

                      <h3 className="promax-client-count">
                          <AnimatedCounter value={20000} suffix="+" />
                      </h3>

                      <h4>Happy Clients</h4>

                      <p>
                          Helping businesses explore reliable machinery
                          solutions for their manufacturing needs.
                      </p>

                  </div>

                  {/* STATISTICS */}
                  <div className="row g-4 text-center justify-content-center mb-3">

                      {promaxStats.map((stat, index) => (
                          <div
                              className="col-lg-4 col-md-4 col-6"
                              key={index}
                          >
                              <div className="promax-stat-item">

                                  <h3>
                                      <AnimatedCounter
                                          value={stat.value}
                                          suffix={stat.suffix}
                                      />
                                  </h3>

                                  <p>{stat.label}</p>

                              </div>
                          </div>
                      ))}

                  </div>

                  {/* BENEFIT CARDS */}
                  <div className="row g-3">

                      {promaxBenefits.map((benefit, index) => {

                          const Icon = benefit.icon;

                          return (
                              <div
                                  className="col-xl-2 col-lg-4 col-md-4 col-6"
                                  key={index}
                              >

                                  <div className="promax-benefit-card h-100">

                                      <div className="promax-benefit-icon">
                                          <Icon size={25} strokeWidth={1.7} />
                                      </div>

                                      <h4>{benefit.title}</h4>

                                  </div>

                              </div>
                          );
                      })}

                  </div>

              </div>
          </section>



          {/* PROMAX BENEFITS SECTION END */}

    </>
  )
}

export default Counter
