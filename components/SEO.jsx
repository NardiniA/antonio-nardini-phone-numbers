import React from 'react';
import Head from 'next/head';
import siteConfig from "@/config/site.config.json";

const SEO = ({
    metaTitle,
    metaDescription,
    metaAuthor,
    metaKeywords,
    ogImage,
    slug,
}) => {
  return (
      <Head>
          <meta charSet="utf-8" />
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=5"
          />
          <title>{metaTitle}</title>

          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="keyword" content={metaKeywords} />
          <meta name="author" content={metaAuthor} />
          <meta name="description" content={metaDescription} />
          <link rel="canonical" href={slug} />

          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:width" content="1200" />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={metaDescription} />

          <link
              rel="shortcut icon"
              href={siteConfig.favicon}
              type="image/x-icon"
          />
      </Head>
  );
}

SEO.defaultProps = {
    metaTitle: siteConfig.metaData.title,
    metaDescription: siteConfig.metaData.description,
    metaAuthor: siteConfig.metaData.author,
    metaKeywords: siteConfig.metaData.keywords,
    ogImage: siteConfig.metaData.ogImage,
    slug: siteConfig.baseURL,
}

export default SEO