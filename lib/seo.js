export const generateSEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  twitterHandle,
}) => {
  return {
    metadataBase: new URL(canonical || 'https://example.com'),
    title,
    description,
    canonical,
    openGraph: {
      title,
      description,
      url: canonical,
      type: ogType,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: twitterHandle ? {
      handle: twitterHandle,
      site: twitterHandle,
      cardType: 'summary_large_image',
    } : {},
  };
};

export const createStructuredData = (data) => {
  return {
    __html: JSON.stringify(data),
  };
};
