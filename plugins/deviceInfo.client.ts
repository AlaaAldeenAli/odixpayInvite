import {UAParser} from 'ua-parser-js';

export default defineNuxtPlugin(() => {
  const parser = new UAParser();
  const userAgent = process.client ? navigator.userAgent : '';
  const result = process.client ? parser.setUA(userAgent).getResult() : {};

  return {
    provide: {
      uaParser: result
    }
  };
});