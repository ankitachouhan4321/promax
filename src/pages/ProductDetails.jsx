
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";

import { products } from "../data/products";
import ProductSidebar from "../components/ProductSidebar";

import Breadcrumb from '../components/Breadcrumb';

const ProductDetails = () => {
    const { slug } = useParams();

    const product = products[slug];

    if (!product) {
        return (
            <div className="container py-5">
                <h1 className="section-heading">
                    Product Not Found
                </h1>

                <p>
                    This product page has not been added yet.
                </p>

                <Link to="/">Back to Home</Link>
            </div>
        );
    }

    return (

        <>
            <Breadcrumb title={product.name} className="product-bread"/>
        <section className="promax-details-wrapper">
            <div className="container">

                <div className="row g-4">


                    {/* LEFT - PRODUCT CONTENT */}
                    <div className="col-lg-9">
                        <div className="promax-product-content">

                            {/* PRODUCT IMAGE */}
                            <div className="promax-product-image">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="img-fluid"
                                />
                            </div>

                            {/* PRODUCT INTRODUCTION */}
                            <div className="promax-content-section">
                                {/* <span className="promax-section-label">
                                    01 THE PRODUCT
                                </span> */}

                                <h1 className="section-heading">
                                    {product.name}
                                </h1>

                                <p>{product.description}</p>
                                    <p>{product.description2}</p>
                            </div>

                            {/* KEY FEATURES */}
                            <div className="promax-content-section">
                                {/* <span className="promax-section-label">
                                    02 PRODUCT FEATURES
                                </span> */}

                                <h2 className="section-heading">
                                    Key Features
                                </h2>

                                <div className="row g-3">
                                    {product.features.map((feature) => (
                                        <div
                                            className="col-md-6"
                                            key={feature}
                                        >
                                            <div className="promax-feature-item">
                                                <Check size={18} />
                                                <span>{feature}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* APPLICATIONS */}
                            <div className="promax-content-section">
                                {/* <span className="promax-section-label">
                                    03 APPLICATIONS
                                </span> */}

                                <h2 className="section-heading">
                                    Applications
                                </h2>

                                <div className="promax-application-list">
                                    {product.applications.map(
                                        (application, index) => (
                                            <div
                                                className="promax-application-item"
                                                key={application}
                                            >
                                                <span>
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                <p>{application}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* SPECIFICATIONS */}
                            <div className="promax-content-section">
                                {/* <span className="promax-section-label">
                                    04 TECHNICAL INFORMATION
                                </span> */}

                                <h2 className="section-heading">
                                    Technical Specifications
                                </h2>

                                <div className="table-responsive">
                                    <table className="table promax-spec-table">
                                        <tbody>
                                            {product.specifications.map(
                                                ([label, value]) => (
                                                    <tr key={label}>
                                                        <th scope="row">{label}</th>
                                                        <td>{value}</td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* QUOTATION */}
                            <div className="promax-product-cta">
                                <h2 className="section-heading">
                                    Interested in {product.name}?
                                </h2>

                                <p>
                                    Contact Promax for product information,
                                    specifications, and a quotation.
                                </p>

                                <Link
                                    to="/contact-us"
                                    className="promax-quote-btn"
                                >
                                    Request a Quote
                                    <ArrowUpRight size={18} />
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT - CATEGORY SIDEBAR */}
                    <div className="col-lg-3">
                        <ProductSidebar />
                    </div>

                </div>
            </div>
        </section>
        </>
    );
};

export default ProductDetails;
