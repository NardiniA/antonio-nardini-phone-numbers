import React from "react";
import { marked } from "marked";
import Link from "next/link";

const BlogDetails = ({ data }) => {
    return (
        <section className="s-styles">
            <div className="row content-wrap">
                <div className="column lg-12">
                    <article className="content">
                        <div className="entry__media">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className="content-primary">
                            {data.content && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked.parse(data.content),
                                    }}
                                />
                            )}
                            {data?.meta.tags && (
                                <p className="content-tags">
                                    <strong>Tags:</strong>
                                    <span className="tags-list">
                                        {data?.meta.tags.map((tag, index) => (
                                            <a href="#0" key={tag + "content_tag_key" + index}>{tag}</a>
                                        ))}
                                    </span>
                                </p>
                            )}
                            {data?.meta.author && (
                                <div className="content-author">
                                    <img
                                        src={data?.meta?.author.image}
                                        alt={data?.meta?.author.name}
                                        className="avatar"
                                    />
                                    <div className="content-author__info">
                                        <h5 className="content-author__name">
                                            <Link href="#0">
                                                <a>{data?.meta?.author.name}</a>
                                            </Link>
                                        </h5>
                                        <p>{data?.meta?.author.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
