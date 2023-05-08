import { Footer, Navbar } from "components/ui";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  metaDescription: string;
  metaKeywords: string;
}

export const MainLayout = ({
  children,
  metaDescription,
  metaKeywords,
}: Props) => {
  return (
    <>
      <Head>
        <title>MF - Propiedades</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        ></link>
        <meta />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  );
};
