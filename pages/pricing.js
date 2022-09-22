import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";
import Gallery from "@/components/Gallery";
import Info from "@/components/Info";
import Layout from "@/components/Layout";
import Pricing from "@/components/Pricing";
import VideoCTA from "@/components/VideoCTA";

export default function PricingPage() {
    return (
        <Layout>
            <Banner
                section={{
                    title: "An Amazing App <br> That Does It All.",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lacus interdum dictum dolor sit amet lectus ornare nunc non.",
                    bg: "/hero-bg-3000.jpg"
                }}
            />
            <Pricing />
            <FeatureGrid />
            <Gallery />
            <VideoCTA />
            <FAQ />
        </Layout>
    );
}
