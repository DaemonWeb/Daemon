import CodeExample from '@/components/Home/CodeExample';
import Link from 'next/link';
import { Title, TitleDescription } from '../Elements';

export default function HomeHero() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto max-w-7xl sm:pt-10 sm:pb-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-20 lg:px-8">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <Title className='mt-10'>
                                    Modern Web services for a Modern Business
                                </Title>
                                <TitleDescription>
                                    We&apos;ll design, develop and manage software for your product. From tiny web apps to whole systems. Our job is to make things simpler for you!
                                </TitleDescription>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        href="/projects"
                                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Explore Projects
                                    </Link>
                                    <a 
                                        href="https://github.com/daemonweb/daemon" 
                                        target='_blank'
                                        rel="noreferrer"
                                        className="text-base font-semibold leading-7 text-gray-900">
                                        View on GitHub <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                    <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                        <CodeExample />
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    );
}