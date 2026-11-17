

import React, { useState } from "react";
import {
    Phone,
    Mail,
    ChevronDown,
    Menu,
    X,
    ArrowRight,
    Factory,
    Package,
    Settings,
    Zap,
} from "lucide-react";



const productCategories = [
    {
        title: "Pharmaceutical & Hygiene Machines",
        icon: Factory,
        products: [
            "Syrup Making Machine",
            "Tablet Making Machine",
            "Sanitary Pad Machine",
            "Mask Making Machine",
            "Diaper Making Machine",
        ],
    },
    {
        title: "Paper & Packaging Machines",
        icon: Package,
        products: [
            "Tissue Paper Making Machine",
            "Paper Plate Machine",
            "Paper Cup Machine",
            "Carry Bag Machine",
        ],
    },
    {
        title: "Plastic Manufacturing Machines",
        icon: Settings,
        products: [
            "PVC Pipe Machine",
            "Bucket Manufacturing Machine",
            "Bottle Making Machine",
        ],
    },
    {
        title: "Electrical & Footwear Machines",
        icon: Zap,
        products: [
            "LED Bulb Machine",
            "Mobile Charger Making Machine",
            "Slipper Machine",
            "Shoe Making Machine",
        ],
    },
];


const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setProductsOpen(false);
    };

    return (
        <header className="site-header">
            {/* Top Header */}
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="top-contact">
                        <a href="tel:+917404928392">
                            <Phone size={14} className="fa-beat" />
                            +91 74049 28392
                        </a>

                        <a href="mailto:info@promax-india.com">
                            <Mail size={14} className="fa-beat" />
                            info@promax-india.com
                        </a>
                    </div>

                    <span className="top-message">
                        Your Trusted Partner for Industrial Machinery Solutions
                    </span>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="main-navbar">
                <div className="container navbar-inner">
                    {/* Replace with your logo image when available */}
                    <a href="/" className="brand-logo" onClick={closeMenu}>
                        <img src="./img/logo.jpg" alt="Promax Logo" className="navbar-logo" />
                    </a>

                    <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <a href="/" onClick={closeMenu}>Home</a>
                        <a href="/about-us" onClick={closeMenu}>About Us</a>

                        <div
                            className={`nav-dropdown ${productsOpen ? "open" : ""}`}
                            onMouseEnter={() => setProductsOpen(true)}
                        >
                            <button
                                type="button"
                                className="nav-dropdown-trigger"
                                onClick={() => setProductsOpen((prev) => !prev)}
                                aria-expanded={productsOpen}
                            >
                                Our Machines
                                <ChevronDown size={15} />
                            </button>

                            {productsOpen && (
                                <div className="mega-menu">
                                    <div className="mega-grid">
                                        {productCategories.map((category) => {
                                            const Icon = category.icon;

                                            return (
                                                <div className="mega-column" key={category.title}>
                                                    <h4>
                                                        <Icon size={19} />
                                                        {category.title}
                                                    </h4>

                                                    {category.products.map((product) => (
                                                        <a
                                                            href={`/products/${slugify(product)}`}
                                                            key={product}
                                                            onClick={closeMenu}
                                                        >
                                                            <ArrowRight size={13} />
                                                            {product}
                                                        </a>
                                                    ))}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mega-footer">
                                        <span>
                                            Explore machinery solutions for your business
                                        </span>
                                        <a href="/products" onClick={closeMenu}>
                                            View All Machines <ArrowRight size={15} />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>


                        <a href="/blog" onClick={closeMenu}>Blog</a>
                        <a href="/contact-us" onClick={closeMenu}>Contact Us</a>

                        {/* MOBILE CALL & QUOTE BUTTONS */}
                        <div className="mobile-nav-actions">

                            <a
                                href="tel:+917404928392"
                                className="nav-phone-btn"
                                onClick={closeMenu}
                            >
                                <i className="fa-solid fa-phone-volume"></i>
                                <span>+91 74049 28392</span>
                            </a>

                            <a
                                href="/contact-us"
                                className="btn-main nav-quote"
                                onClick={closeMenu}
                            >
                                Get a Quote
                                <ArrowRight size={16} />
                            </a>

                        </div>


                    </nav>

                    <div className="nav-actions ">

                        <a href="tel:+917404928392" className="nav-phone-btn">
                            <i className="fa-solid fa-phone-volume fa-shake"></i>
                            <span>+91 74049 28392</span>
                        </a>                        <a href="/contact-us" className="btn-main nav-quote">
                            Get a Quote <ArrowRight size={16} />
                        </a>

                        <button
                            className="mobile-toggle"
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <X size={25} /> : <Menu size={25} />}
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
