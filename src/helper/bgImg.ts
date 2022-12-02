type TBgImg = {
  web1x: string;
  web2x: string;
  web3x: string;
  jpg1x: string;
  jpg2x: string;
  jpg3x: string;
};

export const bgImg = (obj: TBgImg) => {
  const width = window.innerWidth;

  const { web1x, web2x, web3x, jpg1x, jpg2x, jpg3x } = obj;

  return width > 1920
    ? `image-set(
    url(${web2x}) 1x,
    url(${web3x}) 2x,
    url(${jpg2x}) 1x,
    url(${jpg3x}) 2x
  );`
    : `image-set(
    url(${web1x}) 1x,
    url(${web2x}) 2x,
    url(${jpg1x}) 1x,
    url(${jpg2x}) 2x
  );`;
};
