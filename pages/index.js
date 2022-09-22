import CTA from "@/components/CTA"
import Intro from "@/components/Intro"
import Layout from "@/components/Layout"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Steps from "@/components/Steps"

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Steps />
      <Testimonials />
      <Pricing />
      <CTA />
    </Layout>
  )
}
