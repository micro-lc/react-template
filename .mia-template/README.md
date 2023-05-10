# mia_template_service_name_placeholder

## Summary

%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%

## Local development

First thing you need to do is install the dependencies. Enable Yarn running 

```sh
corepack enable
```

(or install it as a global dependency with `npm i -g yarn` for Node < 16.9.0), and run 

```sh
yarn install
```

Once you have the dependencies in place, run

```sh
yarn start
```

to spin up the application.

Tests can be run with

```sh
yarn coverage
```

## Use in micro-lc

Applications build with this template can be used as-is in micro-lc as [parcels](https://micro-lc.io/docs/guides/applications/parcels).

An example configuration may be:

```json5
{
  "applications": {
    "react-parcel": {
      "integrationMode": "parcel",
      "route": "./react-parcel/", // <-- must have the ending "/", should have the starting "."
      "entry": "/my-micro-lc-react-parcel/", // <-- must have the ending "/"
      "injectBase": true // <-- must be "true" if browser router is used
    }
  }
}
```

### Internal routing

The internal routing of the application is already set up to work in micro-lc, meaning that the base url of the internal routes is dynamically
computed on the bases of micro-lc `<base>`, as explained in the [official documentation](https://micro-lc.io/docs/guides/applications/parcels/#injectbase).

> **Note**
>
> The application is shipped with a [browser router](https://reactrouter.com/en/6.11.1/router-components/browser-router).
> If you whish to use a [hash router](https://reactrouter.com/en/6.11.1/router-components/hash-router) instead, change
> `index.jsx` file as such:
> 
> ```diff
> - 21 import {BrowserRouter as Router} from 'react-router-dom'
> + 21 import {HashRouter as Router} from 'react-router-dom'
> 
> - 28 <Router basename={pathname}>
> + 28 <Router>
> ````
