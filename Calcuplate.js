/**
 * Find How many plates you need on each side
 * in pairs of two to hit the desired weight
 */

// Barbells can weigh 35, 45, 55 lbs
// Weights can be 2.5, 5, 10, 15, 25, 35, 45 lbs
// EZ Bar weights 15, 25 lbs

const Calcuplate = (
  targetWeight,
  plates = [2.5, 5, 10, 15, 25, 35, 45],
  configuration = "barbell",
  bbWeight = 45,
  ezBarWeight = 25
) => {
  if ((configuration = "barbell")) targetWeight -= bbWeight;
  const plateStack = [];
  plates = plates.map((i) => i * 2);
  for (let i = plates.length; i >= 0; i--) {
    while (targetWeight >= plates[i]) {
      targetWeight -= plates[i];
      plateStack.push([plates[i] / 2, plates[i] / 2]);
    }
  }
  let remainder = targetWeight;
  return [remainder, plateStack];
};

console.log(Calcuplate(250));
