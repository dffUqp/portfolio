const getFadeInUpAnimation = (
  order: number,
  startPosition: string | number = 16,
) => {
  return {
    initial: { y: startPosition, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: order * 0.07 },
  };
};

export { getFadeInUpAnimation };
