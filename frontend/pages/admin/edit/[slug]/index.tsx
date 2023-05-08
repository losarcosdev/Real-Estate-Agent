import React from "react";
import { AdminLayout, PropertyForm } from "components";
import { IProperty } from "../../../../state/interfaces/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPropertiesSlug, getPropertyBySlug } from "state";

interface Props {
  property: IProperty;
}

const EditPage = ({ property }: Props) => {
  return (
    <AdminLayout>
      <div className="mt-[25px] flex flex-col">
        <h1 className="text-center font-semibold text-[20px]">
          Editando: {property.title}
        </h1>
        <PropertyForm property={property} />
      </div>
    </AdminLayout>
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

export default EditPage;
