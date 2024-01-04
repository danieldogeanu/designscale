
/**
 * Hook that generates the numbers scale.
 * @param {number} size The size of numbers array (how many items to contain).
 * @param {number} scale The scale at which to generate the numbers array.
 * @returns Returns generated numbers array at selected scale.
 */
export default function useNumbersScale(size = 1000, scale = 4) {
  const generateNumbers = (size) => {
    let numbers = [];
  
    for (let i=0; i<size; i++) {
      numbers.push(i);
    }
  
    return numbers;
  }

  return generateNumbers(size).filter((number) => (number % scale === 0));  
}
