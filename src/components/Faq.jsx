
import React, { useState } from "react";
import {
    Plus,
    X,
    ArrowUpRight,
    MessageCircle,
    Phone,
    CircleHelp,
} from "lucide-react";



const faqData = [
    {
        id: 1,
        category: "GENERAL",
        question: "What types of machines does Promax offer?",
        answer:
            "Promax offers a wide range of industrial machinery, including syrup making machines, tablet making machines, sanitary pad machines, paper cup machines, tissue paper machines, PVC pipe machines, slipper making machines, LED bulb machines, and more.",
    },
    {
        id: 2,
        category: "MACHINERY",
        question: "Which industries can use Promax machinery?",
        answer:
            "Our machinery range serves different manufacturing sectors, including pharmaceutical, hygiene, paper products, packaging, plastic products, footwear, and electrical products. The suitable machine depends on your production requirements.",
    },
    {
        id: 3,
        category: "PRODUCTS",
        question: "How can I choose the right machine for my business?",
        answer:
            "You can share your product type, required production capacity, available space, and budget with our team. This information can help identify machinery options that suit your manufacturing requirements.",
    },
    {
        id: 4,
        category: "QUOTATION",
        question: "How can I get a quotation for a machine?",
        answer:
            "You can contact Promax through the website enquiry form or phone number. Mention the machine you are interested in and your requirements to request product details and pricing.",
    },
    {
        id: 5,
        category: "GENERAL",
        question: "Does Promax manufacture sanitary pad making machines?",
        answer:
            "Yes, sanitary pad making machines are part of the Promax machinery range. You can contact the team to discuss available machine options and your production needs.",
    },
    {
        id: 6,
        category: "PRODUCTS",
        question: "Does Promax offer paper cup and paper plate machines?",
        answer:
            "Yes, Promax offers paper cup making machines and paper plate making machines for businesses planning to manufacture disposable paper products.",
    },
    {
        id: 7,
        category: "SUPPORT",
        question: "Can I request installation and technical support?",
        answer:
            "You can discuss installation, training, maintenance, and after-sales support requirements with the Promax team before purchasing. The availability and scope of these services should be confirmed with your quotation.",
    },
];

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState(0);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className="faq-section section-padding">

            <div className="container">

                <div className="row g-5">

                    {/* LEFT COLUMN */}
                    <div className="col-lg-5">

                        <div className="faq-left-content">

                            <p className="section-subheading">
                                Frequently Asked Questions
                            </p>

                            <h1 className="section-heading faq-main-heading">
                                Got questions?
                                <br />
                                <span>
                                    We've got answers.</span>
                            </h1>

                            <p className="section-description">
                                Find quick answers to common questions
                                about Promax machinery, manufacturing
                                solutions, product enquiries and more.
                                Need more information? Our team is
                                ready to help.
                            </p>

                            {/* CONTACT CARD */}
                            <div className="faq-contact-card">

                                <div className="faq-contact-icon">
                                    <CircleHelp size={22} />
                                </div>

                                <h3>Still have questions?</h3>

                                <p>
                                    Can't find the answer you're looking
                                    for? Get in touch with our team to
                                    discuss your machinery requirements.
                                </p>

                                <div className="faq-contact-buttons">

                                    <a
                                        href="/contact-us"
                                        className="btn btn-accent"
                                    >
                                        <MessageCircle size={16} />
                                        Ask Us
                                    </a>

                                    <a
                                        href="tel:+91XXXXXXXXXX"
                                        className="btn faq-call-btn"
                                    >
                                        <Phone size={16} />
                                        Call
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-7">

                        <div className="faq-accordion">

                            {faqData.map((faq, index) => {

                                const isOpen = activeFaq === index;

                                return (
                                    <div
                                        className={`faq-item ${isOpen ? "active" : ""
                                            }`}
                                        key={faq.id}
                                    >

                                        {/* QUESTION */}
                                        <button
                                            type="button"
                                            className="faq-question"
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-answer-${faq.id}`}
                                        >

                                            <div className="faq-question-content">

                                                <div className="faq-meta">
                                                  
                                                   
                                                </div>

                                                <h3>   <span className="faq-number">
                                                    /{String(faq.id).padStart(2, "0")}
                                                </span> {faq.question}</h3>

                                            </div>

                                            <span className="faq-toggle-icon">
                                                {isOpen ? (
                                                    <X size={19} />
                                                ) : (
                                                    <Plus size={19} />
                                                )}
                                            </span>

                                        </button>

                                        {/* ANSWER */}
                                        {isOpen && (
                                            <div
                                                className="faq-answer"
                                                id={`faq-answer-${faq.id}`}
                                            >
                                                <p>{faq.answer}</p>

                                              
                                              
                                            </div>
                                        )}

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Faq;
