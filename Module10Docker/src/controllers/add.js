const addition = async (req, res) => {
  try {
    const { num1, num2 } = req.query;

    const add = Number(num1) + Number(num2);

    res.json({ message: add });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addition,
};
