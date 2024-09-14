'use client'
import { Fragment, useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { SquaresPlusIcon, CursorArrowRaysIcon } from '@heroicons/react/24/solid'
import { useModalSearchContext } from '@/context/ModalSearchContext';

const categories = [
  { 
    name: 'Tutorials', 
    href: '#', 
    description: 'Guides on Python and AI for different skill levels.',
    subcategories: [
      { name: 'Beginner', description: 'Introductory guides for Python and AI.', href: '#' },
      { name: 'Intermediate', description: 'Tutorials covering topics like neural networks and reinforcement learning.', href: '#' },
      { name: 'Advanced', description: 'In-depth guides on complex AI models and optimization techniques.', href: '#' }
    ],
    icon: CursorArrowRaysIcon 
  },
  { 
    name: 'Premium Code', 
    href: '#', 
    description: 'A section for selling or providing downloadable code snippets, scripts, and projects.',
    subcategories: [
      { name: 'Preprocessing', description: 'Code for data cleaning, transformations, etc.', href: '#' },
      { name: 'Modeling', description: 'Prebuilt models for classification, regression, etc.', href: '#' },
      { name: 'Deployment', description: 'Code for deploying AI models on platforms like Flask or AWS.', href: '#' }
    ],
    icon: CursorArrowRaysIcon 
  },
  { 
    name: 'Projects', 
    href: '#', 
    description: 'Real-world projects with end-to-end AI system guides.',
    subcategories: [
      { name: 'Computer Vision', description: 'Projects like image classification and GANs for image generation.', href: '#' },
      { name: 'Natural Language Processing (NLP)', description: 'Projects like text generation, sentiment analysis.', href: '#' },
      { 
        name: 'Generative Models', 
        href: '#', 
        description: 'Projects on GANs and VANs.',
        subcategories: [
          { name: 'GANs', description: 'Projects on generating realistic images, deepfakes, etc.', href: '#' },
          { name: 'VANs', description: 'Projects on anomaly detection, data compression using VANs.', href: '#' }
        ]
      },
      { name: 'Reinforcement Learning', description: 'Projects on AI agents, autonomous driving, and robotics.', href: '#' },
      { name: 'Time Series Analysis', description: 'Stock price prediction, demand forecasting projects.', href: '#' }
    ],
    icon: CursorArrowRaysIcon 
  },
  { 
    name: 'AI Tools', 
    href: '#', 
    description: 'Tutorials focused on AI libraries and tools.',
    subcategories: [
      { name: 'TensorFlow', description: 'Guides on TensorFlow usage.', href: '#' },
      { name: 'PyTorch', description: 'Tutorials for building models in PyTorch.', href: '#' },
      { name: 'Scikit-Learn', description: 'Guides for classical ML models in Scikit-Learn.', href: '#' },
      { name: 'Keras', description: 'Projects using Keras for model building.', href: '#' },
      { name: 'Other Libraries', description: 'Other useful AI libraries and tools.', href: '#' }
    ],
    icon: CursorArrowRaysIcon 
  },
  { 
    name: 'Blog', 
    href: '#', 
    description: 'Posts on AI trends, research, industry news, and insights.',
    subcategories: [
      { name: 'Research', description: 'Latest research insights on AI.', href: '#' },
      { name: 'AI Trends', description: 'Current trends and advancements in AI.', href: '#' },
      { name: 'Industry News', description: 'News on AI innovations across industries.', href: '#' }
    ],
    icon: CursorArrowRaysIcon 
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openModalSearch } = useModalSearchContext()

  return (
    <header className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
      <nav className="mx-auto flex max-w-auto items-center text-black justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Logo - centered on mobile, left-aligned on desktop */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link href={'/'}>
            <img
              className="h-14 w-auto"
              src={'/images/Logo/logos.png'}
              alt="Crypto-Logo"
            />
          </Link>
        </div>
 
        <Popover.Group className="hidden lg:flex lg:gap-x-7">
          {categories.map((item) => (
            <Popover key={item.name} className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-black">
                {item.name}
                {item.subcategories && <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />}
              </Popover.Button>

              {item.subcategories && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {item.subcategories.map((subitem) => (
                        <div
                          key={subitem.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <SquaresPlusIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={subitem.href} className="block font-semibold text-gray-900">
                              {subitem.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{subitem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              )}
            </Popover>
          ))}
        </Popover.Group>

          {/* Search icon and Get Started button */}
          <div className="flex items-center">
          <div className="mr-4 lg:mr-8 lg:ml-8">
            <Icon.MagnifyingGlass size={24} color='black' onClick={openModalSearch} className="cursor-pointer" />
          </div>
          <div className="hidden lg:block">
            <a href="/signin" className="text-sm font-semibold leading-6 text-black">
              <button className='text-sm font-semibold text-white py-4 px-6 lg:px-12 navbutton'>
                Get Started <span aria-hidden="true">&rarr;</span>
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Pythonicai</span>
              <img className="h-8" src={'/images/Logo/logos.png'} alt="Pythonicai-Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {categories.map((item) => (
                  <Disclosure key={item.name} as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black hover:bg-gray-50">
                          {item.name}
                          {item.subcategories && (
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'rotate-180' : '',
                                'h-5 w-5 flex-none text-black'
                              )}
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>

                        {item.subcategories && (
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {item.subcategories.map((subitem) => (
                              <Disclosure.Button
                                key={subitem.name}
                                as="a"
                                href={subitem.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                              >
                                {subitem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        )}
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>

              <div className="py-6">
              <a href="/signin" className="text-sm font-semibold leading-6 text-black">
                <div className='flex align-middle justify-center md:justify-start'>
                  <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>
                    Get Started <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
