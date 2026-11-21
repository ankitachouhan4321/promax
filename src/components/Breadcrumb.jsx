import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({
    title = "Contact Us",
 
}) => {
    return (
        <section
            className="pro-breadcrumb"
         
        >
            <div className="container pro-breadcrumb-container">
                {/* Page Title */}
                <h1 className="pro-breadcrumb-title">
                    {title}
                </h1>

                {/* Breadcrumb Navigation */}
                <nav
                    className="pro-breadcrumb-nav"
                    aria-label="Breadcrumb"
                >
                    <Link to="/">Home</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span aria-current="page">{title}</span>
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;