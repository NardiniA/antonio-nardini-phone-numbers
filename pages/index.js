import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Slug from "./[slug]";

export async function getStaticProps() {
    const fileContents = fs.readFileSync(join("content/pages",  "home.md"));

    const { data: frontMatter } = matter(fileContents);

    return {
        props: {
            slug: "home",
            frontMatter,
        },
    };
}

export default Slug;