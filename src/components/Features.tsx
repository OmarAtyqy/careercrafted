
import React from 'react';
import { FileText, PenLine, Search, Star, Check, Zap, Award, TrendingUp } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            <span className="gradient-text">AI-Powered</span> Career Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent platform uses cutting-edge AI to help you stand out, get noticed, and land your dream job.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Resume Optimization */}
          <div className="feature-card">
            <div className="h-14 w-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6">
              <FileText className="text-brand-blue" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Resume Optimization</h3>
            <p className="text-gray-600 mb-6">
              Get your resume noticed by recruiters with our AI-powered resume analysis and optimization.
            </p>
            <ul className="space-y-3">
              {['ATS Compatibility Check', 'Keyword Optimization', 'Format Enhancement', 'Skills Gap Analysis'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Cover Letter Generation */}
          <div className="feature-card">
            <div className="h-14 w-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6">
              <PenLine className="text-brand-purple" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Cover Letter Generation</h3>
            <p className="text-gray-600 mb-6">
              Create personalized, compelling cover letters tailored to each job application in seconds.
            </p>
            <ul className="space-y-3">
              {['Job-Specific Tailoring', 'Professional Tone', 'Achievement Highlighting', 'Multiple Templates'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Job Matching */}
          <div className="feature-card">
            <div className="h-14 w-14 rounded-2xl bg-brand-sky/10 flex items-center justify-center mb-6">
              <Search className="text-brand-sky" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Job Matching</h3>
            <p className="text-gray-600 mb-6">
              Discover job opportunities that perfectly match your skills, experience, and career goals.
            </p>
            <ul className="space-y-3">
              {['Skills-Based Matching', 'Company Culture Fit', 'Salary Insights', 'Application Tracking'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-sky mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-20 bg-white rounded-2xl p-8 card-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                <Star className="text-brand-blue" size={28} />
              </div>
              <h4 className="text-4xl font-bold mb-2">94%</h4>
              <p className="text-gray-600">Improved Interview Rate</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                <Zap className="text-brand-purple" size={28} />
              </div>
              <h4 className="text-4xl font-bold mb-2">3x</h4>
              <p className="text-gray-600">Faster Job Search</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-brand-sky/10 flex items-center justify-center mb-4">
                <Award className="text-brand-sky" size={28} />
              </div>
              <h4 className="text-4xl font-bold mb-2">89%</h4>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-brand-indigo/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-brand-indigo" size={28} />
              </div>
              <h4 className="text-4xl font-bold mb-2">40K+</h4>
              <p className="text-gray-600">Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
