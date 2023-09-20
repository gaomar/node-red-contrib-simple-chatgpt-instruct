module.exports = (RED) => {
  const OpenAI = require("openai");
  const main = function (config) {
    RED.nodes.createNode(this, config);
    this.Token = config.Token || "";
    this.maxLength = config.maxLength || 256;
    this.lengthType = config.lengthType || "num";
    const node = this;

    const openai = new OpenAI({
      apiKey: node.Token,
    });

    node.on("input", async (msg) => {
      node.status({ fill: "green", shape: "dot", text: "処理中..." });
      try {
        const prompt = msg.payload;
        var maxLength = 256;
        RED.util.evaluateNodeProperty(
          node.maxLength,
          node.lengthType,
          node,
          msg,
          (err, value) => {
            if (err) {
              return;
            } else {
              maxLength = value;
            }
          }
        );
  
        const resp = await openai.completions.create({
          model: config.Model.length == 0 ? "gpt-3.5-turbo-instruct" : config.Model,
          prompt,
          max_tokens: maxLength,
        })
        msg.payload = resp.choices[0].text.trim();
        node.status({});
      } catch (error) {
        if (error.response) {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.response.status}, ${JSON.stringify(
              error.response.data.error.message
            )}`,
          });
          msg.payload = `${error.response.status}, ${JSON.stringify(
            error.response.data.error.message
          )}`;
        } else {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.type}, ${error.message}`,
          });
          msg.payload = `${error.type}, ${error.message}`;
        }
      }
      node.send(msg);
    });
  };

  RED.nodes.registerType("simple-gpt-instruct", main);
};
