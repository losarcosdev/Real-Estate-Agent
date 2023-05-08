import { Contact } from "components";
import ImageGallery from "components/properties/ImageGallery";
import PropertiesList from "components/properties/PropertiesList";
import PropertyDetails from "components/properties/PropertyDetails";
import { useCustomSelector } from "hooks";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProperty } from "../../state/interfaces/interfaces";
import { MainLayout } from "../../components/layouts/MainLayout";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import { getPropertiesSlug, getPropertyBySlug } from "state";

interface Props {
  property: IProperty;
}

const PropertyPage = ({ property }: Props) => {
  const { properties } = useCustomSelector((state) => state);
  const { fetchProperties } = useActions();

  useEffect(() => {
    if (!properties.properties.length) {
      fetchProperties("");
    }
  }, [fetchProperties, properties.properties]);

  return (
    <MainLayout
      metaDescription={property.metaDescription}
      metaKeywords={property.metaKeywords}
    >
      {/* Images */}
      <ImageGallery property={property} />
      {/* Property Details */}
      <PropertyDetails property={property} />
      <Contact />
      <div className="p-5">
        <h3 className="font-semibold gradient-title text-center text-[35px] md:text-[50px] mb-[100px]">
          Éstas propiedades te pueden interesar
        </h3>
        <PropertiesList properties={properties.properties} />
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = (await getPropertiesSlug()) || [];

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking", // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const property = await getPropertyBySlug(slug);
  if (!property) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    // Passed to the page component as props
    props: { property },
    revalidate: 60 * 60 * 24,
  };
};

export default PropertyPage;
