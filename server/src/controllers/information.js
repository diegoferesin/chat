function getInfo(req, res) {
  res.send('Hello world!');
}

module.exports = {
  get: getInfo
};
