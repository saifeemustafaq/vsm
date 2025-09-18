'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ClipboardDocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathRoundedSquareIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const improvements = [
  {
    id: 'checklist',
    title: 'Interactive Application Checklist',
    description: 'A shared, real-time checklist that tracks application progress and deadlines.',
    benefits: [
      'Clear visibility of requirements and progress',
      'Automated reminders for upcoming deadlines',
      'Document upload status tracking',
      'Integrated with university portals'
    ],
    icon: ClipboardDocumentCheckIcon,
    impact: 'Reduces waiting time and confusion by 40%'
  },
  {
    id: 'templates',
    title: 'Standardized Document Templates',
    description: 'Pre-formatted templates for common application documents and forms.',
    benefits: [
      'Consistent document formatting',
      'Reduced revision cycles',
      'Clear instructions for recommenders',
      'Multi-language support'
    ],
    icon: ChatBubbleBottomCenterTextIcon,
    impact: 'Decreases document preparation time by 60%'
  },
  {
    id: 'automation',
    title: 'Automated Score Submission',
    description: 'Direct integration with testing agencies for automatic score submission.',
    benefits: [
      'Eliminates manual score sending',
      'Instant verification',
      'Reduced processing time',
      'Lower error rates'
    ],
    icon: ArrowPathRoundedSquareIcon,
    impact: 'Cuts score processing time by 70%'
  },
  {
    id: 'dashboard',
    title: 'Real-time Status Dashboard',
    description: 'Centralized dashboard showing application status across all universities.',
    benefits: [
      'Single view of all applications',
      'Real-time status updates',
      'Document tracking',
      'Communication history'
    ],
    icon: ChartBarIcon,
    impact: 'Improves process visibility by 80%'
  }
]

export default function ImprovementProposals() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="improvements" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Improvement Proposals
          </h2>
          <p className="text-lg text-gray-600">
            Strategic solutions to streamline the application process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {improvements.map((improvement, index) => (
            <motion.div
              key={improvement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-primary-50">
                  <improvement.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {improvement.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                {improvement.description}
              </p>

              <ul className="space-y-3 mb-4">
                {improvement.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start"
                  >
                    <svg
                      className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-primary-600">
                  Expected Impact: {improvement.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
