
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Free",
    description: "Basic tools to start your job search",
    price: "$0",
    period: "forever",
    features: [
      "Basic resume scan",
      "1 cover letter template",
      "Limited job matching",
      "Email support"
    ],
    highlighted: false,
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    description: "Advanced tools for serious job seekers",
    price: "$19",
    period: "per month",
    features: [
      "Advanced resume optimization",
      "Unlimited cover letter generation",
      "Priority job matching",
      "Interview preparation",
      "Priority email support",
      "Performance tracking"
    ],
    highlighted: true,
    buttonText: "Get Started",
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    description: "Complete solution for career advancement",
    price: "$49",
    period: "per month",
    features: [
      "Everything in Pro",
      "Career coaching sessions",
      "LinkedIn profile optimization",
      "Salary negotiation tools",
      "Priority phone support",
      "Custom job search strategy"
    ],
    highlighted: false,
    buttonText: "Contact Us"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your career goals and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden ${
                plan.highlighted 
                  ? 'bg-white ring-2 ring-brand-blue shadow-xl scale-105 z-10' 
                  : 'bg-white card-shadow'
              }`}
            >
              {plan.highlighted && plan.badge && (
                <div className="bg-brand-blue text-white text-center py-2 text-sm font-medium">
                  {plan.badge}
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 ${
                    plan.highlighted 
                      ? 'bg-brand-blue hover:bg-brand-blue/90' 
                      : 'bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your organization?
          </p>
          <Button variant="outline" className="font-medium">
            Contact our sales team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
