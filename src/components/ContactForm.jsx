
import React, { useState } from "react";

// Replace these with official Promax contact details.
const CONTACT_EMAIL = "info@promax-india.com";
const PHONE_NUMBERS = ["+917404928392"];
const COMPANY_ADDRESS = "Unit No 111, 1st Floor, Krishna Apra Business Square, Netaji Subhash Place, Pitampura, Delhi, India, Delhi";
const BUSINESS_HOURS = "10:am to 06:pm";

const initialFormData = {
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
    product: "",
    company: "",
    city: "",
    quantity: "",
    message: "",
    website: "",
};

const enquiryTypes = [
    "Product Enquiry",
    "Request a Quotation",
    "Bulk Machinery Order",
    "Machinery Manufacturing Enquiry",
    "Custom Machinery Requirement",
    "Dealership / Distribution",
    "Technical Support",
    "General Enquiry",
];

const productCategories = [
    "Syrup Making Machine",
    "Tablet Making Machine",
    "Sanitary Pad Making Machine",
    "Mask Making Machine",
    "Tissue Paper Making Machine",
    "Paper Plate Making Machine",
    "Paper Cup Making Machine",
    "Slipper Making Machine",
    "Carry Bag Making Machine",
    "PVC Pipe Making Machine",
    "LED Bulb Making Machine",
    "Bucket Manufacturing Machine",
    "Bottle Making Machine",
    "Mobile Charger Making Machine",
    "Shoe Making Machine",
    "Diaper Making Machine",
    "Other Manufacturing Machinery",
];

const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting || formData.website.trim()) return;

        if (!CONTACT_EMAIL) {
            setStatus({
                type: "danger",
                message: "Contact form is not configured yet.",
            });
            return;
        }

        const cleanPhone = formData.phone.replace(/\D/g, "");

        if (cleanPhone.length < 10 || cleanPhone.length > 15) {
            setStatus({
                type: "danger",
                message: "Please enter a valid phone number.",
            });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name.trim(),
                        email: formData.email.trim(),
                        phone: formData.phone.trim(),
                        enquiryType: formData.enquiryType,
                        product: formData.product || "Not Specified",
                        company: formData.company || "Not Provided",
                        city: formData.city || "Not Provided",
                        quantity: formData.quantity || "Not Specified",
                        message: formData.message.trim(),
                        _subject: `New Promax Machinery Enquiry - ${formData.name}`,
                        _template: "table",
                        _replyto: formData.email.trim(),
                    }),
                }
            );

            const result = await response.json();

            if (
                !response.ok ||
                (result.success !== true && result.success !== "true")
            ) {
                throw new Error(
                    result.message || "Form submission failed."
                );
            }

            setStatus({
                type: "success",
                message:
                    "Thank you! Your machinery enquiry has been submitted successfully. Our team will contact you shortly.",
            });

            setFormData({ ...initialFormData });
        } catch (error) {
            setStatus({
                type: "danger",
                message:
                    error.message ||
                    "Unable to submit your enquiry. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            className="promax-contact-section py-5"
            id="contact"
        >
            <div className="container py-lg-4">
                <div className="row g-4 g-lg-5 align-items-start">

                    {/* LEFT CONTACT INFORMATION */}
                    <div className="col-lg-5">
                        <div className="promax-contact-details">

                            <div className="mb-4">
                                <span className="section-subheading">
                                    Contact Information
                                </span>

                                <h2 className="section-heading mt-2 mb-3">
                                    Get in Touch With
                                    <span> Promax</span>
                                </h2>

                                <p className="promax-contact-description">
                                    Looking for reliable manufacturing machinery?
                                    Connect with Promax for product enquiries,
                                    machinery specifications, pricing, and
                                    solutions for your manufacturing business.
                                </p>
                            </div>

                            {/* PHONE */}
                            {PHONE_NUMBERS.length > 0 && (
                                <div className="promax-contact-info-item">
                                    <div className="promax-contact-info-icon">
                                        <i className="fa-solid fa-phone-volume"></i>
                                    </div>

                                    <div className="promax-contact-info-text">
                                        <h4>Call Us</h4>

                                        {PHONE_NUMBERS.map((phone) => (
                                            <a
                                                key={phone}
                                                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* EMAIL */}
                            {CONTACT_EMAIL && (
                                <div className="promax-contact-info-item">
                                    <div className="promax-contact-info-icon">
                                        <i className="fa-solid fa-envelope-open-text"></i>
                                    </div>

                                    <div className="promax-contact-info-text">
                                        <h4>Email Us</h4>

                                        <a href={`mailto:${CONTACT_EMAIL}`}>
                                            {CONTACT_EMAIL}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* ADDRESS */}
                            {COMPANY_ADDRESS && (
                                <div className="promax-contact-info-item">
                                    <div className="promax-contact-info-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>

                                    <div className="promax-contact-info-text">
                                        <h4>Our Location</h4>
                                        <p>{COMPANY_ADDRESS}</p>
                                    </div>
                                </div>
                            )}

                            {/* BUSINESS HOURS */}
                            {BUSINESS_HOURS && (
                                <div className="promax-contact-info-item">
                                    <div className="promax-contact-info-icon">
                                        <i className="fa-solid fa-clock"></i>
                                    </div>

                                    <div className="promax-contact-info-text">
                                        <h4>Business Hours</h4>
                                        <p>{BUSINESS_HOURS}</p>
                                    </div>
                                </div>
                            )}

                           
                           

                        </div>
                    </div>

                    {/* RIGHT CONTACT FORM */}
                    <div className="col-lg-7">
                        <div className="promax-contact-form">

                            <div className="promax-form-header">
                                <span className="section-subheading">
                                    We're Here to Help
                                </span>

                                <h2 className="section-heading mt-2 mb-3">
                                    Request a
                                    <span> Quote</span>
                                </h2>

                                <p>
                                    Tell us about the manufacturing machine you
                                    need. Fill out the form below to send your
                                    enquiry to Promax.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>

                                {/* HONEYPOT */}
                                <div
                                    className="visually-hidden"
                                    aria-hidden="true"
                                >
                                    <label htmlFor="promax-website">
                                        Leave this field empty
                                    </label>

                                    <input
                                        id="promax-website"
                                        type="text"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="row g-3">

                                    {/* NAME */}
                                    <div className="col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-name"
                                        >
                                            Full Name <span>*</span>
                                        </label>

                                        <input
                                            id="promax-name"
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            autoComplete="name"
                                            maxLength={100}
                                            required
                                        />
                                    </div>

                                    {/* PHONE */}
                                    <div className="col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-phone"
                                        >
                                            Phone Number <span>*</span>
                                        </label>

                                        <input
                                            id="promax-phone"
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your contact number"
                                            autoComplete="tel"
                                            minLength={10}
                                            maxLength={20}
                                            required
                                        />
                                    </div>

                                    {/* EMAIL */}
                                    <div className="col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-email"
                                        >
                                            Email Address <span>*</span>
                                        </label>

                                        <input
                                            id="promax-email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your email address"
                                            autoComplete="email"
                                            maxLength={150}
                                            required
                                        />
                                    </div>

                                    {/* ENQUIRY TYPE */}
                                    <div className="col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-enquiry"
                                        >
                                            Enquiry Type <span>*</span>
                                        </label>

                                        <select
                                            id="promax-enquiry"
                                            className="form-select"
                                            name="enquiryType"
                                            value={formData.enquiryType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">
                                                Select Enquiry Type
                                            </option>

                                            {enquiryTypes.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* PRODUCT */}
                                    <div className="col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-product"
                                        >
                                            Machine Interested In
                                        </label>

                                        <select
                                            id="promax-product"
                                            className="form-select"
                                            name="product"
                                            value={formData.product}
                                            onChange={handleChange}
                                        >
                                            <option value="">
                                                Select Machine
                                            </option>

                                            {productCategories.map((product) => (
                                                <option
                                                    key={product}
                                                    value={product}
                                                >
                                                    {product}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* CITY */}
                                    <div className="col-md-6">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-city"
                                        >
                                            City / Location
                                        </label>

                                        <input
                                            id="promax-city"
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Your city or location"
                                            autoComplete="address-level2"
                                            maxLength={100}
                                        />
                                    </div>

                                    {/* QUANTITY */}
                                    <div className="col-12">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-quantity"
                                        >
                                            Required Quantity
                                        </label>

                                        <input
                                            id="promax-quantity"
                                            type="text"
                                            className="form-control"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            placeholder="e.g. 1 Machine / 5 Machines"
                                            maxLength={100}
                                        />
                                    </div>

                                    {/* MESSAGE */}
                                    <div className="col-12">
                                        <label
                                            className="form-label"
                                            htmlFor="promax-message"
                                        >
                                            Your Requirements <span>*</span>
                                        </label>

                                        <textarea
                                            id="promax-message"
                                            className="form-control"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your machinery requirements, production capacity, quantity, or other details..."
                                            maxLength={3000}
                                            required
                                        />
                                    </div>

                                    {/* FEEDBACK */}
                                    {status.message && (
                                        <div className="col-12">
                                            <div
                                                className={`alert alert-${status.type} mb-0`}
                                                role="status"
                                                aria-live="polite"
                                            >
                                                {status.message}
                                            </div>
                                        </div>
                                    )}

                                    {/* SUBMIT */}
                                    <div className="col-12 mt-4">
                                        <button
                                            type="submit"
                                            className="btn-main"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                                    Sending Enquiry...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Enquiry
                                                    <i className="fa-regular fa-paper-plane"></i>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* PRIVACY */}
                                    <div className="col-12">
                                        <p className="promax-form-privacy">
                                            <i className="fa-solid fa-lock"></i>
                                            Your details will be used to respond to
                                            your machinery enquiry.
                                        </p>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
