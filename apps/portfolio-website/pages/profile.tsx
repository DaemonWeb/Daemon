import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { Profile, ProfileFields } from '@/lib/types';
import joshPic from '@/public/images/joshy.jpg';
import mistyMountains from '@/public/images/misty-mountains-sunrise.jpg';
import githubLogo from '@/public/images/social/github_logo.svg';
import linkedinLogo from '@/public/images/social/linkedin_logo.svg';
import twitterLogo from '@/public/images/social/twitter_logo.svg';
import facebookLogo from '@/public/images/social/facebook_logo.svg';
import discordLogo from '@/public/images/social/discord_logo.svg';
import Head from 'next/head';


const profile: Profile = {
    name: 'Josh Elias',
    about: `
        <p>I have been developing software for over 12 years in various industries. Originally going into Video Game Development in 2010, I got an internship that turned into a full time job after graduating top of my class in 2013. It was at this job where I discovered the different aspects of what is needed to launch a software product and gravitated towards Backend Development. Developing tools and APIs to enable other developers do their jobs better.</p>
        <p>While there I also started to notice the growing industry of online streaming and Esports as a legitimate business and began looking for opportunities. After submitting my resume as a donation message to one of my favourite streamers at the time, I moved from Ontario to British Columbia to become the lead backend developer for Tempostorm's website and internal tools. This content website received thousand of daily viewers and almost 10k concurrent users when we'd release our competitive "meta snapshot" for the game Hearthstone. One of my highlights while working there was developing a tournament platform and drafting tool for a Hearthstone tournament sponsored by Redbull that was viewed by almost 100,000 people on Twitch.</p>
        <p>My next position was back in my hometown of Ottawa where over the course of 4 years I ending up filling the role of CTO and co-founding a tech company, Autocorp.ai. Originally a simple lead generation and marketing company, we soon got an exclusive partnership with Equifax Canada becoming the first company in Canada to offer users their full credit reports for free for the purpose of finanicial education and empowering them to get the best deal on their next vehicle.</p>
        <p>These days I’ve moved away from management to focus more on software development and collaborating with talented people all around the world to create the best products I can using cutting edge frameworks and techniques.</p>
    `,
    fields: {
        Phone: '(343) 961-8935',
        Email: 'josh@daemonweb.tools',
        Title: 'Senior Full Stack Developer',
        Location: 'Ottawa, ON Canada',
        Birthday: 'July 24, 1989',
        Hobbies: 'Gaming, Jiu Jitsu, Hiking, Skiing, Hydroponics'
    },
    social: [
        {
            icon: githubLogo,
            url: 'https://github.com/JoshElias',
            alt: 'Github Logo'
        },
        {
            icon: linkedinLogo,
            url: 'https://www.linkedin.com/in/joshgelias/',
            alt: 'LinkedIn Logo'
        },
        {
            icon: twitterLogo,
            url: 'https://twitter.com/DaemonWebDev',
            alt: 'Twitter Logo'
        },
        {
            icon: facebookLogo,
            url: 'https://www.facebook.com/joshgelias',
            alt: 'Facebook Logo'
        },
        {
            icon: discordLogo,
            url: 'https://join.slack.com/t/daemonorg/shared_invite/zt-1ow5bexj4-iztHkFrHz15RSVoFXZvg2A',
            alt: 'Discord Logo'
        },
    ]
}

export default function ProfilePage() {
  return (
    <>
        <Head>
            <title>Profile - Daemon Web Tools</title>
            <meta name="description" content="Profile for Josh Elias" />
        </Head>
        <div className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            <Image className="h-32 w-full object-cover object-top lg:h-48" src={mistyMountains} alt="Profile background" />
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                        <Image
                            className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                            src={joshPic}
                            alt="Josh Elias profile picture"
                        />
                    </div>
                    <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                            <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                        </div>
                        <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a
                                href={`mailto: ${profile.fields.Email}`}
                                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <EnvelopeIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span>Message</span>
                            </a>
                            <a
                                href={`tel: ${profile.fields.Phone}`}
                                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span>Call</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                    <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                </div>
            </div>

            {/* Description list */}
            <div className="mx-auto my-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {Object.keys(profile.fields).map((field) => (
                        <div key={field} className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">{field}</dt>
                            <dd className="mt-1 text-sm text-gray-900">{profile.fields[field as keyof ProfileFields]}</dd>
                        </div>
                    ))}
                    <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Social</dt>
                        <dd className='flex gap-3 mt-1'>
                            {profile.social.map((social) => (
                                <a 
                                    key={social.alt} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href={social.url}
                                >
                                    <Image 
                                        src={social.icon} 
                                        alt={social.alt} 
                                        width={32}
                                        height={32}
                                    />
                                </a>
                            ))}
                        </dd>
                    </div>
                    <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd
                            className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                            dangerouslySetInnerHTML={{ __html: profile.about }}
                        />
                    </div>
                </dl>
            </div>
        </div>
    </>
  )
}
