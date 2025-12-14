"use client";

import { EventTemplate } from "@/components/sections/event-template";

export default function EmploymentFairsClient() {
  const employmentFairsData = {
    title: "Rojgar Melava - Employment Fairs",
    subtitle: "Bridging the Gap Between Job Seekers and Employers",
    description: "Swami Vivekanand Seva Trust, Hingoli, a well-established and socially committed organization, has always been at the forefront of empowering youth and promoting sustainable livelihood opportunities in the region. As part of its mission to tackle unemployment and strengthen employability among rural youth, the Trust regularly organizes Rojgar Melava (Employment Fairs) to bridge the gap between job seekers and employers.",
    mainImage: "/images/hero/image1.jpg", // Using placeholder since no specific images available
    eventDate: "Regular Monthly Events",
    location: "SVST Campus & District Centers, Hingoli",
    duration: "Full Day Events",
    participants: "500+ Job Seekers per Event",
    category: "Employment & Career Development",
    
    features: [
      {
        icon: "Users",
        title: "Direct Employer Interaction",
        description: "Facilitate direct interaction between job seekers and industries, helping candidates understand industry expectations and requirements."
      },
      {
        icon: "Briefcase",
        title: "Employment Opportunities",
        description: "Promote employment opportunities for unemployed youth from Hingoli and neighboring districts through organized recruitment drives."
      },
      {
        icon: "GraduationCap",
        title: "Career Development Guidance",
        description: "Offer comprehensive guidance on career development and skill enhancement to improve employability of rural youth."
      },
      {
        icon: "Target",
        title: "On-the-spot Interviews",
        description: "Many companies conduct immediate interviews during the event, providing instant employment opportunities for qualified candidates."
      }
    ],

    stats: [
      {
        label: "Job Seekers",
        value: "500+",
        icon: "Users"
      },
      {
        label: "Participating Companies",
        value: "25+",
        icon: "Building"
      },
      {
        label: "Placement Rate",
        value: "75%",
        icon: "Target"
      },
      {
        label: "Districts Covered",
        value: "5+",
        icon: "MapPin"
      }
    ],

    gallery: [],

    highlights: [
      {
        title: "Job Registration & Profile Verification",
        description: "Candidates register their profiles which are verified by Trust staff to ensure authenticity and proper documentation."
      },
      {
        title: "Pre-placement Guidance Sessions",
        description: "Special sessions on resume writing, interview techniques, and personal grooming to prepare candidates for success."
      },
      {
        title: "Direct Employer Interaction",
        description: "Job seekers get opportunity to directly interact with HR representatives and hiring managers of participating companies."
      },
      {
        title: "Skill Development Counseling",
        description: "Candidates who don't match immediate job requirements receive guidance on further skill development opportunities through Trust's training programs."
      }
    ],

    content: {
      overview: "The Rojgar Melava is designed to provide a comprehensive platform where educated and skilled candidates from Hingoli and neighboring districts can meet directly with potential employers, creating sustainable employment opportunities.",
      objectives: [
        "Facilitate direct interaction between job seekers and industries",
        "Promote employment opportunities for unemployed youth",
        "Help candidates understand industry expectations and requirements",
        "Offer guidance on career development and skill enhancement",
        "Bridge the gap between rural talent and urban employment opportunities",
        "Strengthen employability through pre-placement training and guidance"
      ],
      activities: [
        "Job Registration and Profile Verification Process",
        "Pre-placement Guidance Sessions (Resume Writing, Interview Techniques)",
        "Personal Grooming and Professional Development Workshops",
        "Direct Interaction Sessions with HR Representatives",
        "On-the-spot Interview Rounds by Participating Companies",
        "Skill Development Counseling for Career Enhancement",
        "Industry Expectation Awareness Sessions",
        "Career Path Guidance and Planning Workshops"
      ],
      impact: "The Rojgar Melava has become a cornerstone event in SVST's mission to combat unemployment in rural Maharashtra. Through regular employment fairs, the Trust has successfully connected over 1,500 rural youth with stable employment opportunities across various sectors including manufacturing, services, agriculture, and technology. The program has achieved an impressive 75% placement rate, with participants securing positions that significantly improve their socio-economic status. Beyond immediate job placement, the comprehensive pre-placement training has enhanced the overall employability of rural youth, making them more competitive in the job market. The initiative has also strengthened industry-academia partnerships, with many companies now actively seeking talent from rural areas. Most importantly, the success stories from these employment fairs have inspired countless other young people to pursue skill development and education, creating a positive cycle of empowerment and economic growth in the region."
    }
  };

  // Custom gallery component with upload message
  const TextGallery = () => (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Images Will Be Uploaded Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
                We're preparing high-quality photos from our recent Rojgar Melava events. Check back soon to see the gallery showcasing our employment fair activities and success stories.
              </p>
            </div>
          </div>
        </div>


        
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Success Metrics
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,500+</div>
                <div className="text-gray-600 dark:text-gray-400">Youth Employed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                <div className="text-gray-600 dark:text-gray-400">Placement Rate</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-400">Partner Companies</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Districts Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <EventTemplate {...employmentFairsData} />
      <TextGallery />
    </>
  );
}