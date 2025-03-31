
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, PenTool, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6">
              Elevate Your Career with <span className="gradient-text">AI-Powered</span> Job Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Optimize your resume, create stunning cover letters, and find your perfect job match using advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg rounded-full">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full">
                See How It Works
              </Button>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-10">
              <div className="flex items-center">
                <div className="bg-brand-blue/10 p-2 rounded-full">
                  <FileCheck className="text-brand-blue" size={20} />
                </div>
                <span className="ml-2 text-gray-700">Resume Optimizer</span>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-purple/10 p-2 rounded-full">
                  <PenTool className="text-brand-purple" size={20} />
                </div>
                <span className="ml-2 text-gray-700">Cover Letter Generator</span>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-sky/10 p-2 rounded-full">
                  <Briefcase className="text-brand-sky" size={20} />
                </div>
                <span className="ml-2 text-gray-700">Job Matcher</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="animate-float">
                <div className="bg-white rounded-2xl card-shadow p-6 relative z-10">
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Resume Score: 92%</h3>
                    <div className="bg-gray-200 h-2 rounded-full mb-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white rounded-lg p-2 text-center">
                        <div className="text-sm font-medium text-gray-500">Keywords</div>
                        <div className="text-lg font-semibold text-gray-800">96%</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center">
                        <div className="text-sm font-medium text-gray-500">Format</div>
                        <div className="text-lg font-semibold text-gray-800">89%</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center">
                        <div className="text-sm font-medium text-gray-500">Skills</div>
                        <div className="text-lg font-semibold text-gray-800">94%</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full w-full">
                          <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full w-full">
                          <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full w-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-gradient-to-br from-brand-sky/20 to-brand-indigo/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
