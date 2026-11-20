
import React, { useState } from "react";

const product = {
  name: "Syrup Making Machine",
  image: "/images/products/syrup-making-machine.png",
  description:
    "The Syrup Making Machine is an industrial processing system designed for the controlled preparation, mixing, and production of liquid syrup formulations. It can be configured for pharmaceutical, food, and beverage manufacturing applications.",
};

const features = [
  {
    icon: "01",
    title: "Hygienic Processing",
    text: "Designed to support clean and consistent syrup production.",
  },
  {
    icon: "02",
    title: "Efficient Mixing",
    text: "Helps achieve uniform blending of liquid ingredients.",
  },
  {
    icon: "03",
    title: "Easy Operation",
    text: "Operator-friendly controls for day-to-day production.",
  },
  {
    icon: "04",
    title: "Durable Construction",
    text: "Built for demanding industrial manufacturing environments.",
  },
  {
    icon: "05",
    title: "Flexible Capacity",
    text: "Available configurations can be selected to suit production needs.",
  },
  {
    icon: "06",
    title: "Process Control",
    text: "Supports controlled mixing and processing operations.",
  },
];

const specifications = [
  ["Product Name", "Syrup Making Machine"],
  ["Brand", "Promax"],
  ["Machine Type", "Industrial Syrup Processing System"],
  ["Production Capacity", "Confirm model capacity"],
  ["Contact Material", "Confirm stainless-steel grade"],
  ["Heating Method", "Confirm available heating system"],
  ["Mixing System", "Confirm agitator configuration"],
  ["Automation", "Confirm available control options"],
  ["Electrical Requirements", "Confirm voltage and power"],
  ["Dimensions", "Confirm model dimensions"],
  ["Warranty", "Confirm warranty terms"],
];

const applications = [
  {
    number: "01",
    title: "Pharmaceutical Industry",
    description:
      "For preparing liquid medicinal and pharmaceutical syrup formulations using an appropriately specified system.",
  },
  {
    number: "02",
    title: "Food Processing",
    description:
      "For producing sugar syrups, concentrates, and other liquid food formulations.",
  },
  {
    number: "03",
    title: "Beverage Manufacturing",
    description:
      "For preparing beverage syrup bases and flavored liquid concentrates.",
  },
  {
    number: "04",
    title: "Herbal Processing",
    description:
      "For preparing compatible herbal liquid formulations and extracts.",
  },
];

const steps = [
  {
    number: "01",
    title: "Ingredient Preparation",
    text: "Measure and prepare the required ingredients.",
  },
  {
    number: "02",
    title: "Material Loading",
    text: "Transfer ingredients into the processing vessel.",
  },
  {
    number: "03",
    title: "Heating & Mixing",
    text: "Mix the ingredients under suitable process conditions.",
  },
  {
    number: "04",
    title: "Process Checking",
    text: "Check product consistency and required quality parameters.",
  },
  {
    number: "05",
    title: "Discharge",
    text: "Transfer the prepared syrup for further processing or filling.",
  },
];

const benefits = [
  "Supports consistent batch preparation",
  "Helps reduce manual mixing effort",
  "Suitable for different processing requirements",
  "Designed for practical industrial operation",
  "Supports organized production workflows",
  "Can be configured according to application needs",
];

const faqs = [
  {
    question: "What is a Syrup Making Machine?",
    answer:
      "A Syrup Making Machine is used to prepare liquid syrup formulations by mixing and processing ingredients under controlled conditions.",
  },
  {
    question: "Where is this machine commonly used?",
    answer:
      "Depending on its construction and configuration, it can be used in pharmaceutical, food processing, herbal product, and beverage manufacturing facilities.",
  },
  {
    question: "Is the machine available in different capacities?",
    answer:
      "Machine capacity depends on the available model and configuration. Contact Promax to confirm production capacity options.",
  },
  {
    question: "Can the system be customized?",
    answer:
      "Customization options should be confirmed with Promax based on the required capacity, product formulation, heating method, and automation needs.",
  },
  {
    question: "How can I get the machine price?",
    answer:
      "Submit your production requirements and required machine capacity to request a quotation from Promax.",
  },
];

export default function SyrupMakingMachine({
  onInquirySubmit,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const submitInquiry = async (event) => {
    event.preventDefault();

    if (!onInquirySubmit) {
      setMessage(
        "Inquiry service is not configured yet. Please connect your backend."
      );
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      await onInquirySubmit({
        ...form,
        product: product.name,
      });

      setMessage("Your inquiry has been submitted successfully.");

      setForm({
        name: "",
        phone: "",
        email: "",
        requirement: "",
      });
    } catch {
      setMessage("Unable to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="promax-product-details">

      {/* PRODUCT INTRODUCTION */}
      <section className="pd-intro">
        <div className="pd-section-label">
          PRODUCT DETAILS
        </div>

        <h1>{product.name}</h1>

        <p className="pd-lead">{product.description}</p>

        <div className="pd-product-image">
          <img
            src={product.image}
            alt="Promax Syrup Making Machine"
            loading="lazy"
          />
        </div>

        <div className="pd-intro-bottom">
          <p>
            The Promax Syrup Making Machine is intended for
            manufacturers who require an efficient and
            organized process for preparing liquid syrup
            products. The system can be selected according to
            production requirements, processing conditions,
            and industry applications.
          </p>

          <a href="#promax-inquiry" className="pd-primary-btn">
            Request a Quotation <span>↗</span>
          </a>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="pd-section">
        <div className="pd-section-heading">
          <span>01 / OVERVIEW</span>
          <h2>Product Overview</h2>
        </div>

        <p>
          A Syrup Making Machine is an important part of
          liquid manufacturing operations. It helps
          manufacturers prepare syrup formulations by
          combining ingredients through controlled mixing
          and other processing stages.
        </p>

        <p>
          Depending on the product formulation and equipment
          configuration, the syrup preparation process may
          involve heating, agitation, dissolving, blending,
          and transfer operations.
        </p>

        <p>
          Promax offers syrup processing solutions for
          businesses looking to establish or improve their
          liquid production facilities. The required machine
          configuration should be selected according to
          product type, batch size, and processing needs.
        </p>
      </section>

      {/* KEY FEATURES */}
      <section className="pd-section pd-features-section">
        <div className="pd-section-heading">
          <span>02 / MACHINE FEATURES</span>
          <h2>Key Features</h2>
          <p>
            Important features and considerations for
            industrial syrup preparation.
          </p>
        </div>

        <div className="pd-feature-grid">
          {features.map((feature) => (
            <div className="pd-feature-card" key={feature.title}>
              <div className="pd-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="pd-section">
        <div className="pd-section-heading">
          <span>03 / TECHNICAL INFORMATION</span>
          <h2>Technical Specifications</h2>
          <p>
            Specifications may vary depending on machine
            model and customer requirements.
          </p>
        </div>

        <div className="pd-table-wrap">
          <table className="pd-spec-table">
            <tbody>
              {specifications.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pd-spec-note">
          Note: Final capacity, construction material, power,
          dimensions, and automation details must be confirmed
          from the actual Promax machine specification sheet.
        </p>
      </section>

      {/* APPLICATIONS */}
      <section className="pd-section">
        <div className="pd-section-heading">
          <span>04 / INDUSTRIES</span>
          <h2>Applications of Syrup Making Machine</h2>
          <p>
            Syrup processing systems can serve a range of
            manufacturing applications.
          </p>
        </div>

        <div className="pd-applications-grid">
          {applications.map((item) => (
            <div className="pd-application-card" key={item.title}>
              <span className="pd-application-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="pd-section">
        <div className="pd-section-heading">
          <span>05 / MANUFACTURING PROCESS</span>
          <h2>How Does a Syrup Making Machine Work?</h2>

          <p>
            A simplified overview of a typical syrup
            preparation workflow.
          </p>
        </div>

        <div className="pd-process-list">
          {steps.map((step) => (
            <div className="pd-process-item" key={step.number}>
              <div className="pd-process-number">
                {step.number}
              </div>

              <div className="pd-process-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="pd-spec-note">
          Actual process stages, filtration, cooling, and
          transfer methods depend on the selected machine and
          syrup formulation.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="pd-section">
        <div className="pd-section-heading">
          <span>06 / ADVANTAGES</span>
          <h2>Benefits of Using This Machine</h2>
        </div>

        <div className="pd-benefits-grid">
          {benefits.map((benefit) => (
            <div className="pd-benefit-item" key={benefit}>
              <span className="pd-check">✓</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="pd-why-choose">
        <div className="pd-section-label">WHY PROMAX</div>

        <h2>Why Choose Promax?</h2>

        <p>
          Selecting the right syrup processing equipment
          depends on understanding production volume,
          formulation requirements, material compatibility,
          and factory conditions.
        </p>

        <p>
          Promax can be contacted to discuss the desired
          machine capacity, process configuration,
          operational requirements, and quotation details
          before making a purchasing decision.
        </p>

        <a href="#promax-inquiry" className="pd-light-btn">
          Discuss Your Requirements ↗
        </a>
      </section>

      {/* FAQ */}
      <section className="pd-section">
        <div className="pd-section-heading">
          <span>07 / FREQUENTLY ASKED QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="pd-faq-list">
          {faqs.map((faq, index) => (
            <details className="pd-faq-item" key={faq.question}>
              <summary>
                <span>
                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>
                  {faq.question}
                </span>

                <span className="pd-faq-plus">+</span>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section className="pd-inquiry" id="promax-inquiry">
        <div className="pd-section-heading">
          <span>08 / GET IN TOUCH</span>
          <h2>Request Product Information</h2>

          <p>
            Share your production requirements with Promax
            to receive more information about this machine.
          </p>
        </div>

        <form onSubmit={submitInquiry} className="pd-inquiry-form">
          <div className="pd-form-grid">
            <div className="pd-field">
              <label htmlFor="pd-name">Full Name *</label>
              <input
                id="pd-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={updateField}
                required
              />
            </div>

            <div className="pd-field">
              <label htmlFor="pd-phone">Phone Number *</label>
              <input
                id="pd-phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={updateField}
                required
              />
            </div>

            <div className="pd-field pd-full-width">
              <label htmlFor="pd-email">Email Address</label>
              <input
                id="pd-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={updateField}
              />
            </div>

            <div className="pd-field pd-full-width">
              <label htmlFor="pd-requirement">
                Your Requirements *
              </label>

              <textarea
                id="pd-requirement"
                name="requirement"
                placeholder="Machine capacity, application, quantity, etc."
                rows="4"
                value={form.requirement}
                onChange={updateField}
                required
              />
            </div>
          </div>

          <button
            className="pd-primary-btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Send Inquiry ↗"}
          </button>

          {message && (
            <p className="pd-form-message" role="status">
              {message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
