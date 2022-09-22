import React from 'react';
import Head from 'next/head';
import siteConfig from "@/config/site.config.json";

const SEO = ({
    metaTitle,
    metaDescription
}) => {
  return (
    <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
    </Head>
  )
}

SEO.defaultProps = {
    metaTitle: siteConfig.metaTitle,
    metaDescription: siteConfig.metaDescription
}

export default SEO