import Head from "next/head";

const Meta = ({ title, keywords, description, ogTitle, ogType, ogUrl, ogImage }: any) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Puzan Sakya",
  keywords: "puzansakya, Pujan Shakya",
  description: "Portfolio for puzansakya.com.np",
  ogTitle: "Puzan Sakya",
};
export default Meta;
