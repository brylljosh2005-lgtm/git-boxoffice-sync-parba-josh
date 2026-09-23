const { calculateTicketPrice } = require('./tickets');

console.log("PASS: a normal order quantity is valid", calculateTicketPrice(2, 10) === 20 ? "PASS" : "FAIL");
console.log("PASS: a zero quantity is invalid", calculateTicketPrice(0, 10) === null ? "PASS" : "FAIL");
console.log("PASS: an order over 20 tickets is invalid", calculateTicketPrice(21, 10) === null ? "PASS" : "FAIL");
console.log("PASS: price for 3 tickets at $15.50 each rounded", calculateTicketPrice(3, 15.50) === 47 ? "PASS" : "FAIL");
console.log("PASS: 10% group discount for 5 tickets at $10 each", calculateTicketPrice(5, 10) === 45 ? "PASS" : "FAIL");

// Add VIP Surcharge Test
console.log("PASS: 50% VIP surcharge for 2 tickets at $10 each", calculateTicketPrice(2, 10, true) === 30 ? "PASS" : "FAIL");