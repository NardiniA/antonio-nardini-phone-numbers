import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";

export default function DownloadPage() {
    return (
        <Layout>
            <Banner
                section={{
                    title: "An Amazing App <br> That Does It All.",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lacus interdum dictum dolor sit amet lectus ornare nunc non.",
                }}
            />
            <Contact />
        </Layout>
    );
}
