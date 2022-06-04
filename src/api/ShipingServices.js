const baseUrl = process.env.REACT_APP_API_BASE_URL;
export async function postData(Data) {
  const URL = baseUrl + `shippingAddress/`;
  return fetch(URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...Data }),
  });
}
