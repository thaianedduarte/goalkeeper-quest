export function calculateContributionBoxes(targetAmount: number): number[] {
  const boxes: number[] = [];
  let currentSum = 0;
  let currentValue = 1;

  while (currentSum < targetAmount) {
    if (currentSum + currentValue > targetAmount) {
      // Add the remaining amount as the last box
      boxes.push(targetAmount - currentSum);
      break;
    }
    boxes.push(currentValue);
    currentSum += currentValue;
    currentValue++;
  }

  return boxes;
}

export function calculateTotalAmount(boxes: number[]): number {
  return boxes.reduce((sum, value) => sum + value, 0);
}