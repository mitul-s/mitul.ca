const title = 'Mitul Shah | product & photography.'

const description = "Hi, my name is Mitul and I'm still figuring things out.";

const SEO = {
  title,
  description,
  canonical: "https://mitul.ca",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mitul.ca",
    title,
    description,
    images: [
      {
        url: "/media/banner.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@typicalmitul",
    site: "@typicalmitul",
    cardType: "summary_large_image",
  },
};

export default SEO;