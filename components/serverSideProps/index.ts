import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { apiHost } from '../../config';
import { DesignCollection, SingleDesign } from '../../types';

export const getFetchAllServerSideProps: GetServerSideProps<
  DesignCollection
> = async (_: GetServerSidePropsContext) => {
  const data = await fetch(`${apiHost()}/designs/list`).then((res) =>
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
  const data = await fetch(`${apiHost()}/designs/${context.params?.tag}`).then(
    (res) => res.json()
  );

  return {
    props: {
      design: data,
    },
  };
};
