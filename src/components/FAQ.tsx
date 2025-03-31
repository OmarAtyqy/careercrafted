
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How does CareerLift's AI resume optimization work?",
    answer: "Our AI analyzes your resume against industry standards, job descriptions, and ATS requirements. It identifies missing keywords, suggests format improvements, and highlights areas that need strengthening to increase your chances of getting past automated screening systems and impressing recruiters."
  },
  {
    question: "Can I generate a cover letter for any job position?",
    answer: "Yes! Our AI cover letter generator can create personalized, compelling cover letters for any industry or position. Simply input the job description, your key qualifications, and choose a tone that matches the company culture. The system will craft a unique cover letter that highlights your relevant skills and experience."
  },
  {
    question: "How accurate is the job matching feature?",
    answer: "Our job matching algorithm has a 94% accuracy rate in identifying positions that match your skills, experience, and career goals. The system analyzes thousands of job listings and ranks them based on your profile, saving you hours of manual searching and increasing your chances of finding the perfect position."
  },
  {
    question: "Is my personal information secure on CareerLift?",
    answer: "Absolutely. We employ bank-level encryption and strict data protection protocols to ensure your personal information and career documents remain secure. We never share your data with third parties without your explicit consent, and you can delete your information from our system at any time."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of your current billing period, after which it will not renew. We don't believe in long-term contracts or hidden fees."
  },
  {
    question: "Do you offer discounts for students or recent graduates?",
    answer: "Yes! We offer a 50% discount on our Pro plan for students and recent graduates (within 12 months of graduation). Contact our support team with proof of your student status or graduation date to receive your discount code."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about CareerLift.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-brand-blue hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="text-brand-blue font-medium hover:underline">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
