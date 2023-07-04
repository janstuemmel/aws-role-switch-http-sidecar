
// Is changing in dev mode
// https://developer.chrome.com/docs/extensions/mv3/manifest/key/
const CHROME_EXT_ID = '';

const EXAMPLE_CONFIG = `
  [example-role-from-sidecar]
  aws_account_id = 12234234
  role_name = ExampleRole
  color = red
`.trim();

chrome.runtime.sendMessage(CHROME_EXT_ID, { config: EXAMPLE_CONFIG })
  .then((resp) => {
    console.log(resp);
  })
  .catch(console.log);
