import React from 'react';
import { LabCard } from '../components/lab-card';
import { 
  GraduationCap, 
  User, 
  Building2, 
  School, 
  BookOpen,
  Briefcase
} from 'lucide-react';

export function LabsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Choose Your Lab Environment
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Select the lab that best fits your needs and start experimenting today
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <LabCard
          title="Student Lab"
          description="Perfect for students learning new technologies with guided tutorials and exercises."
          icon={<GraduationCap />}
          to="/labs/student"
        />
        <LabCard
          title="Personal Lab"
          description="Individual workspace for hobbyists and self-learners to experiment freely."
          icon={<User />}
          to="/labs/personal"
        />
        <LabCard
          title="Company Lab"
          description="Enterprise solutions for team collaboration and professional development."
          icon={<Building2 />}
          to="/labs/company"
        />
        <LabCard
          title="Institution Lab"
          description="Comprehensive tools for schools and educational institutions."
          icon={<School />}
          to="/labs/institution"
        />
        <LabCard
          title="Educators Lab"
          description="Create and manage courses, live sessions, and student progress."
          icon={<BookOpen />}
          to="/labs/educators"
        />
        <LabCard
          title="Professional Lab"
          description="Advanced tools and resources for industry professionals."
          icon={<Briefcase />}
          to="/labs/professional"
        />
      </div>
    </div>
  );
}