const noop = () => {};

export const copyToClipboard = (data, { onSuccess = noop, onFailure = noop} = {}) => {
  navigator.clipboard.writeText(data).then(() => {
    onSuccess();
  }, () => {
    onFailure();
  });
}

export const createCopyToClipboardHandler  = (data) => (_event) => copyToClipboard(data);
