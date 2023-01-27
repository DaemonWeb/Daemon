export default function CodeExample() {
    return (
        <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
            <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">
                            ActiveLink.tsx
                        </div>
                        <div className="border-r border-gray-600/10 py-2 px-4">MobileNav.tsx</div>
                    </div>
                </div>
                <div className="px-6 pt-6 pb-6">
                    <pre className="text-[0.8125rem] leading-6 text-gray-300">
                        <code>
                            import &#123; <span className="text-[#7dd3fc]">useRouter</span> &#125; from <span className="text-emerald-300">&apos;next/router&apos;</span>;<br />
                            import <span className="text-[#7dd3fc]">Link</span> from <span className="text-emerald-300">&apos;next/link&apos;</span>;<br />
                            import <span className="text-[#7dd3fc]">React</span>, &#123; <span className="text-[#7dd3fc]">useState</span>, <span className="text-[#7dd3fc]">PropsWithChildren</span>, <span className="text-[#7dd3fc]">useEffect</span> &#125; from <span className="text-emerald-300">&apos;react&apos;</span>;<br />
                            import &#123; <span className="text-[#7dd3fc]">ActiveLinkProps</span> &#125; from <span className="text-emerald-300">&apos;@/lib/types&apos;</span>;<br />
                            import &#123; <span className="text-[#7dd3fc]">combineClasses</span> &#125; from <span className="text-emerald-300">&apos;@/lib/utils&apos;</span>;<br />
                            <br />
                            export default <span className="text-indigo-400">function</span> <span className="text-yellow-300">ActiveLink</span>&#40;&#123;<br />
                            &emsp;&emsp;<span className="text-[#7dd3fc]">children</span>,<br />   
                            &emsp;&emsp;<span className="text-[#7dd3fc]">className</span> = <span className="text-emerald-300">&quot;&quot;</span>,<br />
                            &emsp;&emsp;<span className="text-[#7dd3fc]">activeClassName</span> = <span className="text-emerald-300">&quot;&quot;</span>,<br />
                            &emsp;&emsp;<span className="text-[#7dd3fc]">inactiveClassName</span> = <span className="text-emerald-300">&quot;&quot;</span>,<br />
                            &emsp;&emsp;...<span className="text-[#7dd3fc]">props</span>,<br />
                            &#125;: <span className="text-[#ca8647]">PropsWithChildren</span>&#60;<span className="text-[#ca8647]">ActiveLinkProps</span>&#62;&#41; &#123;<br />
                            &emsp;&emsp;<span className="text-indigo-400">const</span> &#123; <span className="text-blue-500">asPath</span>, <span className="text-blue-500">isReady</span> &#125; = <span className="text-yellow-300">useRouter</span>&#40;&#41;;<br />
                            &emsp;&emsp;<span className="text-indigo-400">const</span> &#91;<span className="text-blue-500">computedClassName</span>, <span className="text-yellow-300">setComputedClassName</span>&#93; = <span className="text-yellow-300">useState</span>&#40;<span className="text-[#7dd3fc]">className</span>&#41;;<br />
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}