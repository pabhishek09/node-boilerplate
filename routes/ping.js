const method = "get";

const path = "/ping";

const handler = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.send({
    data: "API ok",
  });
};

module.exports = {
  path,
  method,
  handler,
};
