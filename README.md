# agro-styled-components
Agrostar styled components

<h4>Why</h4>
<p>Reusing the styled-components across app which maintains uniform theme across all projects. It has flexibility of setting your own theme.</p>

<h4>Bootstrap code</h4>
<p>Add this code while bootstraping you application(app.js)</p>

[![Edit 5xv9q9z7y4](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/5xv9q9z7y4)



```javascript
import {applyTheme} from "agrostar-styled-components";

const theme = applyTheme();

<ThemeProvider theme={theme}> // import {ThemeProvider} from "styled-components";
  <App /> // Your App component
</ThemeProvider>
```
