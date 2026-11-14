
import React, { useEffect, useState } from "react";
import {
    ArrowUpRight,
    ArrowUp,
    MapPin,
    Phone,
    Mail,
    Clock3,
} from "lucide-react";


/* COMPANY LINKS */
const companyLinks = [
    { name: "About Us", url: "/about-us" },
    { name: "Our Products", url: "/products" },
    { name: "Industries", url: "/industries" },
    { name: "Videos", url: "/videos" },
    { name: "Blog", url: "/blog" },
    { name: "FAQs", url: "/faq" },
    { name: "Contact Us", url: "/contact-us" },
];

/* POPULAR MACHINERY */
const machineryLinks = [
    {
        name: "Paper Plate Making Machine",
        url: "/products/paper-plate-machine",
    },
    {
        name: "Paper Cup Making Machine",
        url: "/products/paper-cup-machine",
    },
    {
        name: "Slipper Making Machine",
        url: "/products/slipper-machine",
    },
    {
        name: "Sanitary Pad Making Machine",
        url: "/products/sanitary-pad-machine",
    },
    {
        name: "Tissue Paper Making Machine",
        url: "/products/tissue-paper-making-machine",
    },
    {
        name: "Syrup Making Machine",
        url: "/products/syrup-making-machine",
    },
    {
        name: "PVC Pipe Making Machine",
        url: "/products/pvc-pipe-machine",
    },
    {
        name: "LED Bulb Making Machine",
        url: "/products/led-bulb-machine",
    },
    {
        name: "View All Products",
        url: "/products",
    },
];

/* CONTACT DETAILS */
const contact = {
    phone: "+91 74049 28392",
    phoneHref: "tel:+917404928392",
    email: "info@promax-india.com",
    // Add verified address and working hours when available.
    address: "",
    hours: "",
};

const Footer = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="promax-footer">

            {/* FOOTER TOP CTA */}
            <div className="footer-cta">
                <div className="container">

                    <div className="row align-items-center g-4">

                        <div className="col-lg-8">

                            <p className="footer-eyebrow">
                                — START YOUR MANUFACTURING JOURNEY
                            </p>

                            <h2 className="footer-cta-heading">
                                Looking for the Right Machine?{" "}
                                <strong>
                                    Let's Build Your Business Together.
                                </strong>
                            </h2>

                        </div>

                        <div className="col-lg-4 text-lg-end">

                            <a
                                href="/contact-us"
                                className="btn btn-accent footer-cta-btn"
                            >
                                Get a Machinery Quote
                                <ArrowUpRight size={19} />
                            </a>

                        </div>

                    </div>

                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="footer-main">
                <div className="container">

                    <div className="row g-5">

                        {/* COMPANY INTRO */}
                        <div className="col-lg-4 col-md-6">

                            <div className="footer-brand">

                                <a href="/" className="footer-logo">
                                    <img
                                        src="/img/logo.jpg"
                                        alt="Promax India - Industrial Machinery Manufacturer and Supplier"
                                    />
                                </a>

                                <p className="footer-description">
                                    Promax India is a manufacturer and
                                    supplier of industrial machinery,
                                    offering machines for paper products,
                                    hygiene products, pharmaceuticals,
                                    footwear, plastic products, packaging
                                    and electrical manufacturing.
                                    Our range includes paper plate,
                                    paper cup, slipper, sanitary pad,
                                    tissue paper, syrup making machines
                                    and more. We help businesses explore
                                    suitable machinery for their
                                    production needs.
                                </p>

                            </div>

                        </div>

                        {/* COMPANY LINKS */}
                        <div className="col-lg-2 col-md-6 col-6">

                            <h4 className="footer-title">
                                / QUICK LINKS
                            </h4>

                            <ul className="footer-links">

                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.url}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}

                            </ul>

                        </div>

                        {/* MACHINERY LINKS */}
                        <div className="col-lg-3 col-md-6 col-6">

                            <h4 className="footer-title">
                                / OUR MACHINERY
                            </h4>

                            <ul className="footer-links">

                                {machineryLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.url}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}

                            </ul>

                        </div>

                        {/* CONTACT DETAILS */}
                        <div className="col-lg-3 col-md-6">

                            <h4 className="footer-title">
                                / GET IN TOUCH
                            </h4>

                            <div className="footer-contact-list">

                                {contact.address && (
                                    <div className="footer-contact-item">
                                        <span className="footer-contact-icon">
                                            <MapPin size={17} />
                                        </span>

                                        <div>
                                            <small>VISIT US</small>
                                            <p>{contact.address}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="footer-contact-item">

                                    <span className="footer-contact-icon">
                                        <Phone size={17} />
                                    </span>

                                    <div>
                                        <small>CALL FOR MACHINERY ENQUIRIES</small>

                                        <a href={contact.phoneHref}>
                                            {contact.phone}
                                        </a>
                                    </div>

                                </div>

                                <div className="footer-contact-item">

                                    <span className="footer-contact-icon">
                                        <Mail size={17} />
                                    </span>

                                    <div>
                                        <small>EMAIL US</small>

                                        <a href={`mailto:${contact.email}`}>
                                            {contact.email}
                                        </a>
                                    </div>

                                </div>

                                {contact.hours && (
                                    <div className="footer-contact-item">
                                        <span className="footer-contact-icon">
                                            <Clock3 size={17} />
                                        </span>

                                        <div>
                                            <small>BUSINESS HOURS</small>
                                            <p>{contact.hours}</p>
                                        </div>
                                    </div>
                                )}

                            </div>


                            <div className="footer-contact-item mt-4">
                                <span className="footer-contact-icon">
                                    <MapPin size={17} />
                                </span>

                                <div>
                                    <small> OFFICE ADDRESS</small>
                                    <p>
                                        Unit No 111, 1st Floor, Krishna Apra Business Square, Netaji Subhash Place, Pitampura, Delhi, India, Delhi

                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className="footer-bottom">
                <div className="container">

                    <div className="row align-items-center g-3">

                        <div className="col-md-6">

                            <p className="mb-0">
                                © {new Date().getFullYear()} Promax India.
                                All Rights Reserved.
                            </p>

                        </div>

                        <div className="col-md-6">

                            <div className="footer-bottom-links">

                                <a href="/privacy-policy">
                                    Privacy Policy
                                </a>

                                <a href="/terms-and-conditions">
                                    Terms & Conditions
                                </a>

                                <a href="/sitemap">
                                    Sitemap
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* SCROLL TO TOP */}
            {showTop && (
                <button
                    type="button"
                    className="footer-scroll-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}

        </footer>
    );
};

export default Footer;
