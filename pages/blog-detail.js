import BlogBanner from "@/components/Blog/BlogBanner";
import BlogDetails from "@/components/Blog/BlogDetails";
import Layout from "@/components/Layout";

const data = {
    title: "Understanding and Using Negative Space.",
    description:
        "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam.",
    image: "https://res.cloudinary.com/antonio-nardini/image/upload/v1662367342/standard-2400_idxlby.jpg",
    meta: {
        author: {
            name: "Antonio Nardini",
            image: "https://res.cloudinary.com/antonio-nardini/image/upload/v1662383031/user-06_1_zgxuhb.jpg",
            description:
                "Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat.",
        },
        date: "22 Sept 2022",
        tags: ["Inspiration", "Design"],
    },
    content: `Eligendi quam at quis. Sit vel neque quam consequuntur expedita quisquam. Incidunt quae qui error. Rerum non facere mollitia ut magnam laboriosam. Quisquam neque quia ex eligendi repellat illum quibusdam aut. Architecto quam consequuntur totam ratione reprehenderit est praesentium impedit maiores incididunt adipisicing veniam velit .

Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.

![This is alternative text for screen readers.](https://res.cloudinary.com/antonio-nardini/image/upload/v1662367407/sample-2400_fu649l.jpg "This is an image title.")

Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.

## Large Heading

Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus [omnis voluptas assumenda est](http:/#) id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.

> For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.
>
> John 3:16-17 ESV

Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..

### Smaller Heading

Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

    code {
        font-size: 1.4rem;
        margin: 0 .2rem;
        padding: .2rem .6rem;
        white-space: nowrap;
        background: #F1F1F1;
        border: 1px solid #E1E1E1;	
        border-radius: 3px;
    }

Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.

* Donec nulla non metus auctor fringilla.
* Lorem ipsum dolor sit amet.
* Lorem ipsum dolor sit amet.
* Lorem ipsum dolor sit amet.
* Donec nulla non metus auctor fringilla.
* Donec nulla non metus auctor fringilla.

Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.`,
};

export default function BlogPage() {
    return (
        <Layout metaTitle={data.title + " | Antonio Nardini Virtual Tours"} metaDescription={data.description}>
            <BlogBanner
                section={{
                    title: data.title,
                    meta: data?.meta
                }}
            />
            <BlogDetails data={data} />
        </Layout>
    );
}
