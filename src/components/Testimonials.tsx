
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Manager",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "CareerLift transformed my job search. The AI resume optimization highlighted skills I didn't know were valuable, and I landed interviews at companies that previously ignored my applications.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    position: "Software Engineer",
    company: "DataSphere",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The cover letter generator is a game-changer. It created personalized, compelling letters that perfectly complemented my resume. I secured my dream job within a month!",
    rating: 5
  },
  {
    name: "Emily Wong",
    position: "Project Manager",
    company: "InnovateNow",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "Job matching accuracy is incredible. CareerLift found positions that aligned with my experience and career goals that I hadn't discovered on traditional job boards.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Loved by <span className="gradient-text">Job Seekers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who've accelerated their careers with our AI-powered platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow relative">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to accelerate your career?</h3>
            <p className="text-xl mb-8 text-white/90">
              Join over 40,000 professionals who've found their dream jobs with CareerLift.
            </p>
            <button className="bg-white text-brand-blue font-semibold py-3 px-8 rounded-full hover:bg-white/90 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
