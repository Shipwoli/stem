import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Bot, Gamepad, Brain } from 'lucide-react';
import { CircuitBoard } from "lucide-react"; // Example alternative





export function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="mx-auto max-w-7xl py-12 sm:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Virtual Tech Lab for Everyone
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Access cutting-edge technology and learn from anywhere. From coding to robotics,
              bring your ideas to life in our virtual laboratory.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                to="/labs"
                className="w-full sm:w-auto rounded-md bg-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </Link>
              <Link
                to="/tutorials"
                className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-gray-900 flex items-center justify-center"
              >
                View Tutorials <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="relative overflow-hidden rounded-lg border p-6 hover:border-blue-100 transition-colors bg-white shadow-sm hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Coding Lab</h3>
            <p className="mt-2 text-gray-600">
              Learn programming with interactive tutorials and real-time collaboration.
            </p>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
              alt="Coding Lab"
              className="mt-4 rounded-md w-full h-32 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg border p-6 hover:border-blue-100 transition-colors bg-white shadow-sm hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <CircuitBoard  className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Electronics Lab</h3>
            <p className="mt-2 text-gray-600">
              Design and simulate electronic circuits with virtual components.
            </p>
            <img
              src="https://images.unsplash.com/photo-1597781914467-a5b93258e748?auto=format&fit=crop&q=80&w=300"
              alt="Electronics Lab"
              className="mt-4 rounded-md w-full h-32 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg border p-6 hover:border-blue-100 transition-colors bg-white shadow-sm hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">3D Modeling</h3>
            <p className="mt-2 text-gray-600">
              Create and visualize 3D models for printing and prototyping.
            </p>
            <img
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?auto=format&fit=crop&q=80&w=300"
              alt="3D Modeling"
              className="mt-4 rounded-md w-full h-32 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg border p-6 hover:border-blue-100 transition-colors bg-white shadow-sm hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Robotics</h3>
            <p className="mt-2 text-gray-600">
              Program and simulate robots in a virtual environment.
            </p>
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300"
              alt="Robotics"
              className="mt-4 rounded-md w-full h-32 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg border p-6 hover:border-blue-100 transition-colors bg-white shadow-sm hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Gamepad className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Game Development</h3>
            <p className="mt-2 text-gray-600">
              Build games using industry-standard tools and frameworks.
            </p>
            <img
              src="https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=300"
              alt="Game Development"
              className="mt-4 rounded-md w-full h-32 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg border p-6 hover:border-blue-100 transition-colors bg-white shadow-sm hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">AI & Machine Learning</h3>
            <p className="mt-2 text-gray-600">
              Experiment with AI models and machine learning algorithms.
            </p>
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300"
              alt="AI & Machine Learning"
              className="mt-4 rounded-md w-full h-32 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}