export const isBagFull = (bag) => {
  for (let i = 0; i < bag.length; i++) {
    if (!bag[i]) {
      return false;
    }
  }

  return true;
};
