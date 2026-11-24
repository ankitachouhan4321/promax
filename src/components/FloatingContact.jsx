import React, { useState } from "react";
import {
    MessageCircle,
    Phone,
    Mail,
    Plus,
} from "lucide-react";

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Add Promax India's actual contact details
    const phone = "917404928392";
    const email = "info@promax-india.com";

    const whatsappMessage = encodeURIComponent(
        "Hello Promax India, I would like to enquire about your industrial machinery and equipment."
    );

    return (
        <div className="promax-floating-wrapper">

            <div
                id="promax-contact-options"
                className={`promax-contact-options ${isOpen ? "active" : ""}`}
                aria-hidden={!isOpen}
            >
                <a
                    href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="promax-contact-item whatsapp"
                    aria-label="Chat on WhatsApp"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <span>WhatsApp</span>
                    <MessageCircle size={20} />
                </a>

                <a
                    href={`tel:+${phone}`}
                    className="promax-contact-item call"
                    aria-label="Call Promax India"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <span>Call Now</span>
                    <Phone size={20} />
                </a>

                <a
                    href={`mailto:${email}`}
                    className="promax-contact-item enquiry"
                    aria-label="Email Promax India"
                    tabIndex={isOpen ? 0 : -1}
                >
                    <span>Enquire Now</span>
                    <Mail size={20} />
                </a>
            </div>

            <div className={`promax-floating-motion ${isOpen ? "paused" : ""}`}>
                <button
                    type="button"
                    className={`promax-main-contact ${isOpen ? "opened" : ""}`}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={
                        isOpen
                            ? "Close contact options"
                            : "Open contact options"
                    }
                    aria-expanded={isOpen}
                    aria-controls="promax-contact-options"
                >
                    <span className="promax-pulse"></span>
                    <Plus size={27} strokeWidth={2.5} />
                </button>
            </div>

        </div>
    );
};

export default FloatingContact;