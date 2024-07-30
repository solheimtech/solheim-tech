import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar"
import SpinningModel from "@/app/components/SeachIconSpinning"
import Image from "next/image"

export function LocalSeoPro() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute right-0 top-[-60%] w-1/2 h-[150%] hidden lg:block z-20 pointer-events-auto">
          <SpinningModel url="/assets/3d/scene.gltf" />
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="max-w-[50%]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Dominate Local Search with Our SEO Expertise
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Our local SEO services help businesses like yours increase their online visibility, drive more
                    targeted traffic, and generate more qualified leads in your local market.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/meeting/free-consultation"
                    prefetch={false}
                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2 text-lg font-medium text-black border-2 border-black shadow transition-colors hover:bg-black hover:text-white hover:border-white focus-visible:outline-none"
                  >
                      Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unleash Your Local SEO Potential</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our local SEO services are tailored to help your business dominate your local market and drive more
                  qualified leads.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Enhanced Local Search Visibility</h3>
                      <p className="text-muted-foreground">
                        Optimize your website and online listings to rank higher in local search results.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Boosted Website Traffic</h3>
                      <p className="text-muted-foreground">
                        Drive more targeted, high-intent traffic to your website from local searches.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Increased Qualified Leads</h3>
                      <p className="text-muted-foreground">
                        Convert more website visitors into leads and customers with our proven strategies.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/assets/images/unlock-potential.png"
                width="500"
                height="500"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}