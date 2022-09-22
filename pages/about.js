import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import HowTo from "@/components/HowTo";
import Features from "@/components/Features";

export default function AboutPage() {
    return (
        <Layout>
            <Banner
                section={{
                    title: "An Amazing App <br> That Does It All.",
                }}
            />
            <About />
            <HowTo />
            <Features />
            <Testimonials />
            <Pricing />
        </Layout>
    );
}
