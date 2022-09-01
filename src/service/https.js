export async function resolveBankData({
  url = "https://fitted-staging-api.herokuapp.com/api/v1/bank/resolveAccount",
  data = {},
}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err, "err");
      throw new Error(err);
    });
  return response;
}
