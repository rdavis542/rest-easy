const express = require('express');
const math = express.Router();

function parseOperands(query) {
  const n1 = parseFloat(query.num1);
  const n2 = parseFloat(query.num2);
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error('num1 and num2 must be valid numbers');
  }
  return { n1, n2 };
}

math.get('/add', (req, res) => {
  try {
    const { n1, n2 } = parseOperands(req.query);
    res.json({ result: n1 + n2 });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

math.get('/sub', (req, res) => {
  try {
    const { n1, n2 } = parseOperands(req.query);
    res.json({ result: n1 - n2 });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

math.get('/mult', (req, res) => {
  try {
    const { n1, n2 } = parseOperands(req.query);
    res.json({ result: n1 * n2 });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

math.get('/div', (req, res) => {
  try {
    const { n1, n2 } = parseOperands(req.query);
    if (n2 === 0) return res.status(400).json({ error: 'Division by zero' });
    res.json({ result: n1 / n2 });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = math;
