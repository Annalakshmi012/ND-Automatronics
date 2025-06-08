import React, { useState } from 'react';
import './FAQ.css'; // Updated CSS file path remains the same

const faqs = [
  {
    question: "How do I initiate a project with ND Automatroncis?",
    answer: "To initiate a project, please contact us through our official website or email with your project details."
  },
  {
    question: "What industries do you cater to with your 3D printing services?",
    answer: "We cater to automotive, healthcare, education, manufacturing, and more."
  },
  {
    question: "Do you provide training for 3D printing technology?",
    answer: "Yes, we offer comprehensive training programs for all levels of users."
  },
  {
    question: "Are your 3D printers suitable for large-scale projects?",
    answer: "Absolutely. We provide industrial-grade 3D printers suitable for large-scale production."
  },
  {
    question: "Can I get support for my existing 3D printer?",
    answer: "Yes, we offer technical support and maintenance services for most 3D printer brands."
  },
  {
    question: "Do you offer custom 3D printing solutions?",
    answer: "Yes, we specialize in custom 3D printing solutions tailored to your specific needs."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="nd-faq-container">
      <h2 className="nd-faq-title">
        Frequently <span className="nd-highlight">Asked Questions</span>
      </h2>
      <div className="nd-faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="nd-faq-item">
            <button className="nd-faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="nd-faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && <div className="nd-faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
