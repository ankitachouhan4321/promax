
import React, { useState, useEffect, useRef } from "react";
import Faq from '../components/Faq';
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
    Check,
    Factory,
    Settings,
    Zap,
    ShieldCheck,
} from "lucide-react";


// HERO BANNER DATA

const slides = [
    {
        id: 1,
        tag: "PROMAX INDIA | PAPER PLATE MACHINERY",
        title: "Paper Plate",
        highlight: "Making Machine",
        description:
            "Start or expand your paper plate manufacturing business with reliable machinery designed for smooth production and everyday business needs.",
        image: "/img/banner1.png",
        link: "/products/paper-plate-machine",
    },
    {
        id: 2,
        tag: "PAPER CUP MANUFACTURING SOLUTIONS",
        title: "Paper Cup",
        highlight: "Making Machine",
        description:
            "Explore paper cup making machines for manufacturing disposable cups. Find suitable machinery solutions to support your production requirements.",
        image: "/img/banner2.png",
        link: "/products/paper-cup-machine",
    },
    {
        id: 3,
        tag: "FOOTWEAR MANUFACTURING MACHINERY",
        title: "Slipper",
        highlight: "Making Machine",
        description:
            "Planning to start a slipper manufacturing business? Discover practical machinery solutions for footwear production and business growth.",
        image: "/img/banner3.png",
        link: "/products/slipper-machine",
    },
    {
        id: 4,
        tag: "HYGIENE PRODUCT MANUFACTURING",
        title: "Sanitary Pad",
        highlight: "Making Machine",
        description:
            "Explore sanitary pad making machinery for hygiene product manufacturing. Find equipment options suited to your business and production needs.",
        image: "/img/banner4.png",
        link: "/products/sanitary-pad-machine",
    },
    {
        id: 5,
        tag: "TISSUE PAPER PRODUCTION MACHINERY",
        title: "Tissue Paper",
        highlight: "Making Machine",
        description:
            "Discover tissue paper making machines for businesses entering or expanding in the paper products industry. Explore machinery for efficient production.",
        image: "/img/banner5.png",
        link: "/products/tissue-paper-making-machine",
    },
];



const products = [
    {
        id: 1,
        category: "PAPER MACHINERY",
        name: "Paper Plate Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Disposable paper plate production",
            "Suitable for paper product manufacturing"
        ],
        link: "/products/paper-plate-machine",
    },
    {
        id: 2,
        category: "PAPER MACHINERY",
        name: "Paper Cup Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Disposable paper cup production",
            "Suitable for paper cup manufacturing"
        ],
        link: "/products/paper-cup-machine",
    },
    {
        id: 3,
        category: "FOOTWEAR MACHINERY",
        name: "Slipper Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Machinery for slipper manufacturing",
            "Suitable for footwear production"
        ],
        link: "/products/slipper-machine",
    },
    {
        id: 4,
        category: "HYGIENE MACHINERY",
        name: "Sanitary Pad Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Sanitary pad production solutions",
            "Suitable for hygiene product manufacturing"
        ],
        link: "/products/sanitary-pad-machine",
    },
    {
        id: 5,
        category: "PAPER MACHINERY",
        name: "Tissue Paper Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Machinery for tissue paper products",
            "Suitable for tissue manufacturing businesses"
        ],
        link: "/products/tissue-paper-making-machine",
    },
    {
        id: 6,
        category: "PHARMACEUTICAL MACHINERY",
        name: "Syrup Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Machinery for syrup preparation",
            "Suitable for liquid formulation production"
        ],
        link: "/products/syrup-making-machine",
    },
    {
        id: 7,
        category: "PLASTIC MACHINERY",
        name: "PVC Pipe Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Machinery for PVC pipe manufacturing",
            "Suitable for plastic pipe production"
        ],
        link: "/products/pvc-pipe-machine",
    },
    {
        id: 8,
        category: "ELECTRICAL MACHINERY",
        name: "LED Bulb Making Machine",
        image: "/img/prod/1.webp",
        features: [
            "Machinery for LED bulb production",
            "Suitable for electrical product manufacturing"
        ],
        link: "/products/led-bulb-machine",
    },
];




const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // NEXT SLIDE
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // PREVIOUS SLIDE
    const prevSlide = () => {
        setCurrentSlide((prev) =>
            (prev - 1 + slides.length) % slides.length
        );
    };

    // AUTOMATIC SLIDER
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5500);

        return () => clearInterval(interval);
    }, []);

    // state-counter start



    const stats = [
        { value: 16, suffix: "+", label: "Machine Types" },
        { value: 6, suffix: "+", label: "Industry Segments" },
        { value: 100, suffix: "%", label: "Customer Focus" },
        { value: 10, suffix: "+", label: "Years of Experience" },
        { value: 500, suffix: "+", label: "Happy Customers" },
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

            {/* ==========================
          HERO BANNER SECTION
      ========================== */}
            <section className="hero-banner">

                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === currentSlide ? "active" : ""
                            }`}
                        aria-hidden={index !== currentSlide}
                        inert={index !== currentSlide}
                    >
                        {/* Background Image */}
                        <div
                            className="hero-background"
                            style={{
                                backgroundImage: `url("${slide.image}")`,
                            }}
                        />

                        {/* Overlay */}
                        <div className="hero-overlay" />

                        {/* Banner Content */}
                        <div className="container hero-container">
                            <div className="hero-content">

                                <span className="hero-tag">
                                    <span className="hero-tag-line" />
                                    {slide.tag}
                                </span>

                                <h1 className="hero-title">
                                    {slide.title}
                                    <span>{slide.highlight}</span>
                                </h1>

                                <p className="hero-description">
                                    {slide.description}
                                </p>

                                <div className="hero-buttons">
                                    <a
                                        href={slide.link}
                                        className="btn-sec"
                                    >
                                        Explore Machine
                                        <ArrowRight size={18} />
                                    </a>

                                    <a
                                        href="/contact-us"
                                        className="btn-main"
                                    >
                                        Get a Quote
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <div className="hero-pagination">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            className={`hero-dot ${index === currentSlide ? "active" : ""
                                }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={
                                index === currentSlide ? "true" : undefined
                            }
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="hero-navigation">
                    <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>

                {/* Slide Counter */}
                <div className="hero-counter">
                    <strong>
                        {String(currentSlide + 1).padStart(2, "0")}
                    </strong>
                    <span>/</span>
                    <span>
                        {String(slides.length).padStart(2, "0")}
                    </span>
                </div>

            </section>
            {/* HERO BANNER END */}

            {/* ===============================
    ABOUT US SECTION START
================================ */}


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
                                        href="/about-us"
                                        className="btn btn-primary"
                                    >
                                        Know More About Us
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


            {/* OUR PROMISE SECTION */}
            <section className="promise-section section-padding">
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
            {/* OUR PROMISE SECTION END */}


            {/* OUR PROMISE SECTION END */}


            {/* ==============================
    WHY CHOOSE US SECTION START
============================== */}


            {/* WHY CHOOSE US SECTION START */}

            <section
                id="why-choose-sec"
                className="why-choose-section py-lg-5 py-4"
            >
                <div className="container">

                    <div className="row align-items-center">

                        {/* LEFT CONTENT - 7 COLUMNS */}
                        <div className="col-lg-8 col-md-12">

                            <div className="why-choose-content">

                                <p className="section-subheading">
                                    WHY CHOOSE PROMAX INDIA
                                </p>

                                <h2 className="section-heading">
                                    The Right Machinery for
                                    <span> Your Manufacturing Business</span>
                                </h2>

                                <p className="section-description mb-4">
                                    At Promax India, we understand that every
                                    manufacturing business has different needs.
                                    As an industrial machinery manufacturer and
                                    supplier, we offer machines for paper products,
                                    hygiene products, pharmaceuticals, footwear,
                                    plastic products and electrical manufacturing.
                                    Our goal is to help businesses find suitable
                                    machines for their production requirements.
                                </p>

                                {/* POINT 1 */}
                                <div className="why-choose-item d-flex align-items-start">

                                    <div className="why-icon-box">
                                        01
                                    </div>

                                    <div className="why-item-content">
                                        <p>
                                            <strong>Wide Range of Manufacturing Machines: </strong>
                                            From paper plate and paper cup making machines
                                            to slipper, sanitary pad, tissue paper, syrup,
                                            tablet and PVC pipe machines, we offer
                                            different machinery solutions under one roof.
                                        </p>
                                    </div>

                                </div>

                                {/* POINT 2 */}
                                <div className="why-choose-item d-flex align-items-start">

                                    <div className="why-icon-box">
                                        02
                                    </div>

                                    <div className="why-item-content">
                                        <p>
                                            <strong>Machinery for Different Industries: </strong>
                                            Whether you want to manufacture disposable
                                            paper products, hygiene products, footwear,
                                            plastic items or electrical goods, we help
                                            you explore machines suited to your
                                            business and production goals.
                                        </p>
                                    </div>

                                </div>

                                {/* POINT 3 */}
                                <div className="why-choose-item d-flex align-items-start">

                                    <div className="why-icon-box">
                                        03
                                    </div>

                                    <div className="why-item-content">
                                        <p>
                                            <strong>Focus on Efficient Production: </strong>
                                            We offer manufacturing machinery designed
                                            to support smooth production processes,
                                            consistent output and practical daily
                                            operations, helping businesses improve
                                            their manufacturing workflow.
                                        </p>
                                    </div>

                                </div>

                                {/* POINT 4 */}
                                <div className="why-choose-item d-flex align-items-start">

                                    <div className="why-icon-box">
                                        04
                                    </div>

                                    <div className="why-item-content">
                                        <p>
                                            <strong>Customer-Focused Machinery Solutions: </strong>
                                            We focus on understanding your product type,
                                            production capacity, available space and
                                            business requirements. Our team helps you
                                            explore suitable machine options so you
                                            can make a more informed buying decision.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE - BACKGROUND IMAGE SPACE */}
                        <div className="col-lg-5 d-none d-lg-block"></div>

                    </div>

                </div>
            </section>

            {/* WHY CHOOSE US SECTION END */}


            {/* WHY CHOOSE US SECTION END */}


            {/* ==========================
    PRODUCTS SECTION START
========================== */}


            {/* PRODUCTS SECTION START */}

            <section className="products-section section-padding">
                <div className="container">

                    {/* Section Heading */}
                    <div className="row align-items-end mb-5 g-4">

                        <div className="col-lg-9">

                            <p className="section-subheading">
                                EXPLORE OUR PRODUCTS
                            </p>

                            <h2 className="section-heading">
                                Manufacturing Machines for
                                <br />
                                <span>Every Business Need.</span>
                            </h2>

                            <p className="section-description">
                                Explore Promax India's range of industrial
                                manufacturing machines, including paper plate,
                                paper cup, slipper, sanitary pad, tissue paper,
                                pharmaceutical, plastic and electrical machinery.
                                Find suitable machines to start, manage or
                                expand your manufacturing business.
                            </p>

                        </div>

                        <div className="col-lg-3 text-lg-end">

                            <a href="/products" className="products-view-all">
                                View All Products
                                <ArrowUpRight size={17} />
                            </a>

                        </div>

                    </div>

                    {/* Product Cards */}
                    <div className="row g-4">

                        {products.map((product) => (

                            <div
                                className="col-xl-3 col-lg-4 col-md-6"
                                key={product.id}
                            >

                                <div className="product-card h-100">

                                    {/* Product Image */}
                                    <div className="product-image-wrap">

                                        <span className="product-category">
                                            {product.category}
                                        </span>

                                        <a href={product.link}>
                                            <img
                                                src={product.image}
                                                alt={`${product.name} - Promax India`}
                                                className="product-image img-fluid"
                                                loading="lazy"
                                            />
                                        </a>

                                    </div>

                                    {/* Product Details */}
                                    <div className="product-card-body">

                                        <h3 className="product-name">
                                            <a href={product.link}>
                                                {product.name}
                                            </a>
                                        </h3>

                                        <ul className="product-features">

                                            {product.features.map((feature, index) => (
                                                <li key={index}>
                                                    <Check size={15} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}

                                        </ul>

                                        {/* Buttons */}
                                        <div className="product-card-actions">

                                            <a
                                                href={product.link}
                                                className="btn btn-outline"
                                            >
                                                View Details
                                            </a>

                                            <a
                                                href="/contact-us"
                                                className="btn btn-accent"
                                            >
                                                Get Quote
                                                <ArrowRight size={14} />
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* PRODUCTS SECTION END */}

            {/* PRODUCTS SECTION END */}


{/* faq start */}
<Faq/>

{/* faq end */}
           

         



        </>
    );
};

export default Home;
