const baseUrl = "https://run.mocky.io/";

export const fetchListEditorData = (url) => {
  return fetch(`${baseUrl}${url}`).then(handleResponse).catch(handleError);
};

export function handleResponse(data) {
  return data.json();
}

export function handleError(error) {
  throw error;
}
