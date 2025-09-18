'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ClockIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'

const wasteCategories = [
  {
    id: 'waiting',
    title: 'Waiting',
    icon: ClockIcon,
    description: 'Experiencing long lead times while awaiting documents or decisions',
    examples: [
      'Waiting 2-3 weeks for recommendation letters',
      'Test score processing delays (2-3 weeks)',
      'Visa interview scheduling delays (1-2 months)',
      'University admission decisions (2-3 months)'
    ],
    color: 'blue'
  },
  {
    id: 'rework',
    title: 'Rework',
    icon: ArrowPathIcon,
    description: 'Fixing missing documents, re-sending forms',
    examples: [
      'Resubmitting incomplete applications',
      'Retaking standardized tests',
      'Correcting visa application errors',
      'Re-uploading wrong format documents'
    ],
    color: 'red'
  },
  {
    id: 'overprocessing',
    title: 'Overprocessing',
    icon: DocumentDuplicateIcon,
    description: 'Providing the same information multiple times',
    examples: [
      'Entering personal details in multiple portals',
      'Submitting transcripts to different offices',
      'Duplicate financial documentation requests',
      'Multiple copies of the same certificates'
    ],
    color: 'amber'
  },
  {
    id: 'complexity',
    title: 'Complexity',
    icon: PuzzlePieceIcon,
    description: 'Too many systems/logins, unclear steps',
    examples: [
      'Multiple application portal logins',
      'Complex visa application procedures',
      'Unclear document requirements',
      'Inconsistent process instructions'
    ],
    color: 'purple'
  }
]

const colorVariants = {
  blue: {
    light: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    icon: 'text-blue-500',
    hover: 'hover:border-blue-300',
  },
  red: {
    light: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    icon: 'text-red-500',
    hover: 'hover:border-red-300',
  },
  amber: {
    light: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    icon: 'text-amber-500',
    hover: 'hover:border-amber-300',
  },
  purple: {
    light: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    icon: 'text-purple-500',
    hover: 'hover:border-purple-300',
  },
}

export default function WasteCategories() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Understanding Process Waste
          </h2>
          <p className="text-lg text-gray-600">
            Identifying and eliminating inefficiencies in the application journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wasteCategories.map((category, index) => {
            const colors = colorVariants[category.color as keyof typeof colorVariants]
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative p-6 rounded-xl border-2 ${colors.border} ${colors.hover} ${colors.light} transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${colors.light}`}>
                    <category.icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h3 className={`ml-3 text-xl font-semibold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Examples */}
                <ul className="space-y-3">
                  {category.examples.map((example, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className={`h-5 w-5 ${colors.icon} mr-2 mt-1 flex-shrink-0`}
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
                      <span className="text-gray-600">{example}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Summary Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center text-gray-600"
        >
          <p className="max-w-2xl mx-auto">
            By identifying these types of waste in the application process, we can focus on streamlining
            the journey and creating a more efficient experience for international students.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
