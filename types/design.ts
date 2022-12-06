export type Design = {
  key: string;
  label: string;
  img: string;
  link: string;
};

export type DesignCollection = {
  designs: Design[];
};

export type SingleDesign = {
  design: Design;
};
