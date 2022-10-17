export type StringParameters = {
  [key: string]: string;
};

export type UnknownParameters = {
  [key: string]: unknown;
};

export type UnknownPromiseParameters = {
  [key: string]: unknown | Promise<unknown>;
};

export type ObjectParameters = {
  [key: string]: boolean | number | string | Date;
};
