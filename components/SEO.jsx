import React from "react";
import Head from "next/head";
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
            <link rel="canonical" href={siteConfig.baseURL + "/" + slug} />

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

            {/* PWA */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-touch-fullscreen" content="yes" />
            <meta
                name="apple-mobile-web-app-title"
                content="Phone Number Directory"
            />
            <meta name="application-name" content="Phone Number Directory" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <link rel="manifest" href="/site.webmanifest" />

            <meta name="format-detection" content="telephone=no" />
            <meta name="msapplication-TileColor" content="#3F885C" />
            <meta name="msapplication-tap-highlight" content="no" />
            <link rel="theme-color" href="#3F885C" />
            <link rel="background-color" href="#ffffff" />

            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3f885c" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-chrome-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="512x512"
                href="/android-chrome-512x512.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/apple-touch-icon-152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="167x167"
                href="/apple-touch-icon-167.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2048-2732.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2732-2048.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1668-2388.jpg"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2388-1668.jpg"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1536-2048.jpg"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2048-1536.jpg"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1668-2224.jpg"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2224-1668.jpg"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1620-2160.jpg"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2160-1620.jpg"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1290-2796.jpg"
                media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2796-1290.jpg"
                media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1179-2556.jpg"
                media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2556-1179.jpg"
                media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1284-2778.jpg"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2778-1284.jpg"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1170-2532.jpg"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2532-1170.jpg"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1125-2436.jpg"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2436-1125.jpg"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1242-2688.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2688-1242.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-828-1792.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1792-828.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1242-2208.jpg"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-2208-1242.jpg"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-750-1334.jpg"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1334-750.jpg"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-640-1136.jpg"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/splash/apple-splash-1136-640.jpg"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
        </Head>
    );
};

SEO.defaultProps = {
    metaTitle: siteConfig.metaData.title,
    metaDescription: siteConfig.metaData.description,
    metaAuthor: siteConfig.metaData.author,
    metaKeywords: siteConfig.metaData.keywords,
    ogImage: siteConfig.metaData.ogImage,
};

export default SEO;
