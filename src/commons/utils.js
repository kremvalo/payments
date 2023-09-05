export default function hideCardDigits(number) {

  if (number.length < 4) {
    return 'Número de tarjeta inválido';
  }

  const lastFourDigit = number.slice(-4);

  const hidedDigits = '0'.repeat(number.length - 4) + lastFourDigit;

  return hidedDigits;
}
