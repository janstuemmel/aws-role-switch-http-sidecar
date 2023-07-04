import { getExtensionId } from "../common/browser";

const EXAMPLE_CONFIG = `
[example-role-from-sidecar]
aws_account_id = 12234234
role_name = ExampleRole
color = red
`.trim();

chrome.runtime.sendMessage(getExtensionId(), { config: EXAMPLE_CONFIG, type: 'pushConfig' })
  .then((resp) => {
    console.log(resp);
  })
  .catch(console.log);
