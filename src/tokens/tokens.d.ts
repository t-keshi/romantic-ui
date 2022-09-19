/**
 * Do not edit directly
 * Generated on Mon, 19 Sep 2022 19:19:47 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "tokenSetOrder": {
    "0": DesignToken
  },
  "Heading1": DesignToken,
  "default": {
    "background": DesignToken
  }
}