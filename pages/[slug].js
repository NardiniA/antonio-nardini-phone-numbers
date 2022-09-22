import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Layout, { BlockZone } from "@/components/Layout";

export default function Slug({ slug, frontMatter }) {
    return (
        <Layout>
            <BlockZone sections={frontMatter?.sections} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const pageDirFiles = fs.readdirSync(join("content/pages"));
    const pages = pageDirFiles.filter((f) => f.includes(".md"));

    const paths = pages.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileContents = fs.readFileSync(
        join("content/pages", slug + ".md")
    );

    const { data: frontMatter } = matter(fileContents);

    return {
        props: {
            slug: slug === "home" ? "index" : slug,
            frontMatter,
        },
    };
}
