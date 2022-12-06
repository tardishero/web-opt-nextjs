import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { DesignCollection, SingleDesign } from '../../types';

export const getFetchAllServerSideProps: GetServerSideProps<
  DesignCollection
> = async (_: GetServerSidePropsContext) => {
  const data = await fetch(`https://apimocha.com/designs/list`).then((res) =>
    res.json()
  );

  return {
    props: {
      designs: data,
    },
  };
};

export const getFetchItemServerSideProps: GetServerSideProps<
  SingleDesign
> = async (context: GetServerSidePropsContext) => {
  const data = await fetch(
    `https://apimocha.com/designs/${context.params?.tag}`
  ).then((res) => res.json());

  return {
    props: {
      design: data,
    },
  };
};
