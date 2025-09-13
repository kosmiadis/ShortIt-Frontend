import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import Input from "@components/ui/Input";
import { BarChart, DollarSign, Link } from "lucide-react";

const PRICING_PLANS = [
    {title: 'Starter', description: 'Perfect for individuals who just need to shorten a few links and track basic usage.', features: ['500 links/month', 'Basic link shortening', 'Minimal analytics (click count only)', 'Access to dashboard & "Your Links" section'], price: 'Free'},
    
    {title: 'Professional', description: 'Ideal for freelancers, creators, and small teams who need advanced control and insights.', features: ['5,000 links/month', 'Detailed Analytics (geography, referrers)', 'Edit & delete links anytime', 'Export links as CSV', 'Priority Support'], price: 15},
    
    {title: 'Business', description: 'For businesses that need powerful link management at scale with full analytics.', features: ['50,000 links/month', 'Advanced analytics dashboard (device type, conversion tracking)', 'API access for programmatic link generation', 'Dedicated support'], price: 49},
    
]

export default function Home () {
    
    function handleCTAUrlShorten () {
        //action
    }
    
    return <div className="flex flex-col items-center gap-xxl justify-center w-full min-h-full p-md">
        <article id="" className="flex flex-col gap-4">
            <div className="text-center ">
                <h1 className="text-6xl font-bold text-gradient">Quick, Easy and Modern</h1>
                <h1 className="text-5xl font-bold ">Url Shortening</h1>
            </div>
            
            <Input type="url" placeholder="Enter a Long Url..." withActionButton actionBtnText={"Shorten"} actionFn={handleCTAUrlShorten} />
        </article>

        <article id="features" className="flex flex-col gap-md items-center">

            <div className="text-center">
                <h2 className="text-3xl text-text-primary font-bold font-accent">Features</h2>
                <p className="text-lg text-text-secondary">A few of the features that make our services exceptional.</p>
            </div>

            <section className="flex flex-wrap justify-center items-center gap-4"> 
                <Card icon={<Link />} body="A clean modern interface that is easy to use" title="Simple UI"></Card>
                <Card icon={<BarChart />} body="Get detailed insights on your shortened URLs" title="Advanced Statistics"></Card>
                <Card icon={<DollarSign />} body="We provide the best services with the lowest possible cost. " title="Low Cost"></Card>
            </section>
        </article>  

        <article id="pricing" className="flex flex-col gap-md items-center">

            <div className="text-center">
                <h2 className="text-3xl text-text-primary font-bold font-accent">Pricing</h2>
                <p className="text-lg text-text-secondary">We cover all your needs with User-first Pricing Plans</p>
            </div>

            <section className="flex flex-wrap justify-center items-center  gap-12 laptop:gap-8"> 

                {PRICING_PLANS.map((pricingPlan, index) => <Card featured={{isFeatured: pricingPlan.title === 'Professional', featuredText: 'Most Popular Plan'}} title={pricingPlan.title} key={pricingPlan.title+'-'+index}
                    body={
                        <div className="flex flex-col gap-sm">
                            <p className="text-text-secondary">{pricingPlan.description}</p>

                            <ul>
                                {pricingPlan.features.map((feature, index) => <li key={feature+index}>
                                    - {feature}
                                </li>)}
                            </ul>

                            {typeof pricingPlan.price === 'string' 
                                ? <p className="text-2xl font-bold text-accent-muted">{pricingPlan.price}</p> 
                                : <p className="">$ <span className="text-accent-muted font-bold text-4xl">{pricingPlan.price}</span> <span className="text-sm">/month</span></p>
                            }

                            <Button important>Get Started</Button>
                        </div>
                    }
                />)}
            </section>
        </article>  


    </div>
}