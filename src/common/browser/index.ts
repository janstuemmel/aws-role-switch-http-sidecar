export const isChrome = () => typeof browser !== 'undefined' ? false : true;

export const getExtensionId = () => isChrome() 
  ? 'mjgccddjodbakimbncbmobdgpmoddalc'
  : '{31f7b254-7ac9-4f3a-ae3c-ef67ea153e4a}';
