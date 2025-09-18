'use client'

import { motion } from 'framer-motion'
import { ArrowPathIcon, AcademicCapIcon, ClockIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import Navbar from './components/Navbar'
import VSMTimeline from './components/VSMTimeline'
import WasteCategories from './components/WasteCategories'
import ImprovementProposals from './components/ImprovementProposals'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="section-padding">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Streamlining Your Journey to
                <span className="gradient-text"> U.S. Graduate Programs</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Understanding and optimizing the international student application process
                through Value Stream Mapping
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  icon: AcademicCapIcon,
                  title: 'Clear Goals',
                  description: 'Successfully enroll in your dream U.S. graduate program',
                },
                {
                  icon: ArrowPathIcon,
                  title: 'Process Mapping',
                  description: 'Visualize and understand each step of your journey',
                },
                {
                  icon: ClockIcon,
                  title: 'Time Optimization',
                  description: 'Identify and eliminate delays in your application process',
                },
                {
                  icon: DocumentCheckIcon,
                  title: 'Guided Support',
                  description: 'Expert mentorship throughout your application journey',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 mx-auto">
                    <feature.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-center text-lg font-semibold leading-8 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VSM Timeline Section */}
      <div id="vsm">
        <VSMTimeline />
      </div>

      <div id="waste">
        <WasteCategories />
      </div>

      <div id="improvements">
        <ImprovementProposals />
      </div>
    </main>
  )
}