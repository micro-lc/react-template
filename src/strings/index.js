/*
*  It hanldes `react-int` strings with dynamic import.
*  If your app is not multi-language, use only a language and you can import it directly
*/

const strings = {
  en: () => import('./locales/en.json'),
  it: () => import('./locales/it.json')
}

export default strings
