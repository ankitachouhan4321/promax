
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
        question: "What types of machines does Promax India manufacture and supply?",
        answer:
            "Promax India is a manufacturer and supplier of industrial machinery. Our product range includes paper plate making machines, paper cup making machines, slipper making machines, sanitary pad making machines, tissue paper making machines, syrup making machines, tablet making machines, PVC pipe machines, LED bulb making machines, and other production equipment.",
    },
    {
        id: 2,
        category: "PRODUCTS",
        question: "Which machine is suitable for starting a small manufacturing business?",
        answer:
            "The right machine depends on the product you want to manufacture, your budget, available space, and production requirements. Promax India offers machinery for paper plates, paper cups, slippers, tissue paper, hygiene products, and other manufacturing businesses. You can contact our team to discuss suitable machine options.",
    },
    {
        id: 3,
        category: "PAPER MACHINERY",
        question: "Does Promax India offer paper plate and paper cup making machines?",
        answer:
            "Yes, Promax India offers paper plate making machines and paper cup making machines. These machines are used to manufacture disposable paper products. You can enquire about available machine models, specifications, production capacity, and pricing.",
    },
    {
        id: 4,
        category: "FOOTWEAR MACHINERY",
        question: "Can I purchase a slipper making machine from Promax India?",
        answer:
            "Yes, Promax India supplies slipper making machines for footwear manufacturing businesses. Contact our team to discuss available machinery, production requirements, and suitable machine options for your business.",
    },
    {
        id: 5,
        category: "HYGIENE MACHINERY",
        question: "Does Promax India provide sanitary pad and diaper making machines?",
        answer:
            "Yes, Promax India offers sanitary pad making machines and diaper making machines as part of its hygiene product machinery range. You can contact us for information about machine options, features, and production requirements.",
    },
    {
        id: 6,
        category: "INDUSTRIES",
        question: "Which industries does Promax India serve?",
        answer:
            "Promax India offers machinery for pharmaceutical, hygiene, paper, packaging, plastic, footwear, and electrical product manufacturing. Our range includes syrup making machines, tablet making machines, tissue paper machines, PVC pipe machines, LED bulb machines, and more.",
    },
    {
        id: 7,
        category: "PRICING",
        question: "What is the price of a manufacturing machine at Promax India?",
        answer:
            "Machine prices depend on the product type, model, production capacity, automation level, and technical specifications. To receive an accurate quotation, contact Promax India with the machine name and your production requirements.",
    },
    {
        id: 8,
        category: "ENQUIRY",
        question: "How can I get a quotation for industrial machinery?",
        answer:
            "You can request a quotation by calling Promax India at +91 74049 28392 or sending an enquiry through our website. Share the machine name, required production capacity, and other important details so our team can assist you.",
    },
    {
        id: 9,
        category: "SUPPORT",
        question: "Can I get machine installation and after-sales support?",
        answer:
            "You can discuss installation, machine operation guidance, maintenance, and after-sales support with the Promax India team before purchasing. The availability and scope of these services should be confirmed for your selected machine.",
    },
    {
        id: 10,
        category: "CONTACT",
        question: "How can I contact Promax India for machine details?",
        answer:
            "You can contact Promax India by phone at +91 74049 28392 or email at info@promax-india.com. Our team can help you with machinery enquiries, product information, and quotation requests.",
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

                    {/* LEFT COLUMN */}
                    <div className="col-lg-5">

                        <div className="faq-left-content">

                            <p className="section-subheading">
                                Frequently Asked Questions
                            </p>

                            <h1 className="section-heading faq-main-heading">
                                Have Questions About
                                <br />
                                <span>Our Machinery?</span>
                            </h1>

                            <p className="section-description">
                                Looking for the right manufacturing machine
                                for your business? Find answers to common
                                questions about Promax India's industrial
                                machinery, product range, machine prices,
                                production requirements, and enquiries.
                            </p>

                            {/* CONTACT CARD */}
                            <div className="faq-contact-card">

                                <div className="faq-contact-icon">
                                    <CircleHelp size={22} />
                                </div>

                                <h3>Need Help Choosing a Machine?</h3>

                                <p>
                                    Not sure which machine is right for your
                                    business? Contact Promax India to discuss
                                    your product, production needs, and
                                    machinery requirements.
                                </p>

                                <div className="faq-contact-buttons">

                                    <a
                                        href="/contact-us"
                                        className="btn btn-accent"
                                    >
                                        <MessageCircle size={16} />
                                        Enquire Now
                                    </a>

                                    <a
                                        href="tel:+917404928392"
                                        className="btn faq-call-btn"
                                    >
                                        <Phone size={16} />
                                        Call Us
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
