
import React, { useEffect, useState } from "react";
import {
    ArrowUpRight,
    ArrowUp,
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Clock3,


  
} from "lucide-react";



const companyLinks = [
    { name: "About Us", url: "/about-us" },
    { name: "Products", url: "/products" },
    { name: "Industries", url: "/industries" },
    { name: "Videos", url: "/videos" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact-us" },
];

const machineryLinks = [
    { name: "Syrup Making Machine", url: "/products/syrup-making-machine" },
    { name: "Tablet Making Machine", url: "/products/tablet-making-machine" },
    { name: "Sanitary Pad Machine", url: "/products/sanitary-pad-machine" },
    { name: "Paper Cup Machine", url: "/products/paper-cup-machine" },
    { name: "PVC Pipe Machine", url: "/products/pvc-pipe-machine" },
    { name: "View All Machines", url: "/products" },
];

const socialLinks = [
    // { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/" },
    // { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/" },
    // { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/" },
];

// Replace placeholder contact details before publishing.
const contact = {
    phone: "+91 XXXXXXXXXX",
    phoneHref: "tel:+91XXXXXXXXXX",
    email: "info@yourdomain.com",
    address: "Your Factory Address, City, State, India",
    hours: "Mon - Sat : 9:30 AM - 6:00 PM",
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

        return () => window.removeEventListener("scroll", handleScroll);
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
                                — LET'S TALK ENGINEERING
                            </p>

                            <h2 className="footer-cta-heading">
                                Have a production challenge?{" "}
                                <em>
                                    We have a machine for it.
                                </em>
                            </h2>
                        </div>

                        <div className="col-lg-4 text-lg-end">
                            <a
                                href="/contact-us"
                                className="btn btn-accent footer-cta-btn"
                            >
                                Start a Conversation
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
                                        alt="Promax Industrial Machinery"
                                    />
                                </a>

                                <p className="footer-description">
                                    Promax is a manufacturer and supplier of
                                    industrial machinery for pharmaceutical,
                                    hygiene, paper, packaging, plastic, and
                                    electrical product manufacturing.
                                    Discover machinery solutions for your
                                    business production needs.
                                </p>

                                <div className="footer-socials">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <a
                                                href={social.url}
                                                key={social.name}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.name}
                                            >
                                                <Icon size={17} />
                                            </a>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>

                        {/* COMPANY LINKS */}
                        <div className="col-lg-2 col-md-6 col-6">

                            <h4 className="footer-title">
                                / COMPANY
                            </h4>

                            <ul className="footer-links">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* MACHINERY LINKS */}
                        <div className="col-lg-3 col-md-6 col-6">

                            <h4 className="footer-title">
                                / MACHINERY
                            </h4>

                            <ul className="footer-links">
                                {machineryLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* CONTACT */}
                        <div className="col-lg-3 col-md-6">

                            <h4 className="footer-title">
                                / GET IN TOUCH
                            </h4>

                            <div className="footer-contact-list">

                                <div className="footer-contact-item">
                                    <span className="footer-contact-icon">
                                        <MapPin size={17} />
                                    </span>

                                    <div>
                                        <small>VISIT</small>
                                        <p>{contact.address}</p>
                                    </div>
                                </div>

                                <div className="footer-contact-item">
                                    <span className="footer-contact-icon">
                                        <Phone size={17} />
                                    </span>

                                    <div>
                                        <small>CALL</small>
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
                                        <small>EMAIL</small>
                                        <a href={`mailto:${contact.email}`}>
                                            {contact.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="footer-contact-item">
                                    <span className="footer-contact-icon">
                                        <Clock3 size={17} />
                                    </span>

                                    <div>
                                        <small>HOURS</small>
                                        <p>{contact.hours}</p>
                                    </div>
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
                                © {new Date().getFullYear()} Promax.
                                All Rights Reserved.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <div className="footer-bottom-links">
                                <a href="/privacy-policy">Privacy Policy</a>
                                <a href="/terms-and-conditions">Terms</a>
                                <a href="/sitemap">Sitemap</a>
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
