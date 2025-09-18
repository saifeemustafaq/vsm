'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExclamationCircleIcon, ClockIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    id: 1,
    title: 'Decision to Apply',
    waitTime: '1-2 months',
    painPoints: [
      'Information overload',
      'Program selection confusion',
      'Cost uncertainty'
    ],
    isBottleneck: false
  },
  {
    id: 2,
    title: 'Test Preparation & Documents',
    waitTime: '2-4 months',
    painPoints: [
      'Long test preparation time',
      'Multiple test attempts',
      'Document collection delays'
    ],
    isBottleneck: true
  },
  {
    id: 3,
    title: 'Application Submission',
    waitTime: '2-3 weeks',
    painPoints: [
      'Multiple application portals',
      'Repetitive data entry',
      'Recommendation letter coordination'
    ],
    isBottleneck: false
  },
  {
    id: 4,
    title: 'Visa Process',
    waitTime: '1-3 months',
    painPoints: [
      'Complex documentation',
      'Interview scheduling',
      'Long processing times'
    ],
    isBottleneck: true
  },
  {
    id: 5,
    title: 'Arrive & Register',
    waitTime: '2-4 weeks',
    painPoints: [
      'Housing arrangements',
      'Course registration timing',
      'Orientation scheduling'
    ],
    isBottleneck: false
  }
]

export default function VSMTimeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Value Stream Map
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the journey from application to enrollment
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative p-6 bg-white rounded-lg shadow-lg border-2 ${
                  step.isBottleneck ? 'border-red-400' : 'border-primary-400'
                }`}
              >
                {/* Step Number */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white ${
                  step.isBottleneck ? 'bg-red-500' : 'bg-primary-500'
                }`}>
                  {step.id}
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Wait Time */}
                  <div className="flex items-center text-gray-600 mb-3">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">{step.waitTime}</span>
                  </div>

                  {/* Pain Points */}
                  <div className="space-y-2">
                    {step.painPoints.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start text-sm"
                      >
                        <ExclamationCircleIcon className={`h-4 w-4 mr-2 mt-0.5 ${
                          step.isBottleneck ? 'text-red-500' : 'text-yellow-500'
                        }`} />
                        <span className="text-gray-600">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottleneck Indicator */}
                {step.isBottleneck && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium border border-red-300 shadow-sm">
                      Bottleneck
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm"
        >
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-500 rounded-full mr-2" />
            <span>Normal Step</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2" />
            <span>Bottleneck Step</span>
          </div>
          <div className="flex items-center">
            <ExclamationCircleIcon className="h-4 w-4 text-yellow-500 mr-2" />
            <span>Pain Point</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
