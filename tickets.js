function calculateTicketPrice(quantity, pricePerTicket, isVIP = false) {
  if (quantity <= 0 || quantity > 20) {
    return null;
  }

  let total = quantity * pricePerTicket;

  // Apply 10% group discount for 5+ tickets
  if (quantity >= 5) {
    total = total * 0.9;
  }

  // Apply 50% VIP surcharge if VIP seating
  if (isVIP) {
    total = total * 1.5;
  }

  return Math.round(total);
}

module.exports = { calculateTicketPrice };