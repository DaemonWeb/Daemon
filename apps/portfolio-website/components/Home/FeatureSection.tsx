import { 
  CreditCardIcon, 
  CloudArrowUpIcon, 
  DevicePhoneMobileIcon, 
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { SubTitle, TitleDescription } from '../Elements'

const features = [
  {
    name: 'Web/App Development',
    description:
      'We build web and mobile apps for startups and enterprises. We can help you build your MVP or scale your business.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Web Hosting',
    description:
      'Let us help you focus on your product, not your infrastructure. We offer a variety of hosting options to fit your needs.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Web Maintenance',
    description:
      'We can help you maintain your website or app. We can help you with updates, bug fixes, and more.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Ecommerce',
    description:
      'We can help you build your online store. We can help you with everything from design to development to marketing.',
    icon: CreditCardIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Get it done!</h2>
          <SubTitle>
            Everything you need to deploy your app
          </SubTitle>
          <TitleDescription>
          We know you&apos;ve done all the hard work, finding the right product for your target market and making sure it&apos;s ready for launch. Now it&apos;s time to let us help you reach that audience and give them the best possible experience.
          </TitleDescription>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
