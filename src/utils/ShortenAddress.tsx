export const shortenAddress = (address: string) => {
  let shortAddress = `${address.slice(0, 5)}...${address.slice(-4)}`;
  return shortAddress;
};
