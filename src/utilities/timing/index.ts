export const getRandomResponseDelay = ({
  minimum = 250,
  maximum = 1000,
}: {
  minimum?: number;
  maximum?: number;
} = {}) => {
  return Math.random() * (maximum - minimum) + minimum;
};
