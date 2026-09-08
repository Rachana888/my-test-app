function main(args) {
  return {
    body: {
      message: "hello from functions",
      you_sent: args.name || null,
    },
  };
}

exports.main = main;
