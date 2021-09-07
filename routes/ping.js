const method = "get";

const path = "/ping";

const handler = async (req, res) => {
  res.send({
    data: "ok",
  });
};

module.exports = {
  path,
  method,
  handler,
};
