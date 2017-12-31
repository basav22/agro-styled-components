# agro-styled-components

Agrostar styled components

<h4>Why</h4>
<p>Reusing the styled-components which maintains uniform theme across all projects. It has flexibility of setting your own theme</p>

Bootstrap code

<p>Add this code while bootstraping you application(app.js)</p>

```javascript
import { applyTheme } from "agrostar-styled-components";

const theme = applyTheme();

<ThemeProvider theme={theme}>
  {" "}
  // import {ThemeProvider} from "styled-components";
  <App /> // Your App component
</ThemeProvider>;
```

> The applyTheme() fn can take optional config theme which can be used to override the [default](https://github.com/basav22/agro-styled-components/blob/master/newtheme.js#L14) theme.

### Different Components

* AgroButton
* AgroLabel
* AgroHeading
* AgroInputText
* AgroInputTextArea
* AgroSelectInput
* AgroCheckBox
* AgroRadio
* AgroList
* AgroPanel
* AgroTable

## AgroButton

* Allowed Props-

  | Props  | Prop Value         | Desc                    |
  | ------ | ------------------ | ----------------------- |
  | agType | "primary\|default" | Primary/ Default Button |

* Varients - Inherited from AgroButton
  ### AgroIconBtn
  It is special button with no-margin/padding to use icon as a button
  ### AgroBtnLink
  It is button displayed as a link which is underlined
  |Props | Prop Value | Desc|
  |---|---|---|
  |agType| "primary\|default"| Primary/ Default Button|
  |decorated| "true\| false" | underlined or not|

## AgroLabel

* Allowed Props-
  |Props | Prop Value | Desc|
  |---|---|---|
  |agWeight| "bold \| normal"| font-weight in css| 
  |agStyle| "italic \| normal"| font-style in css|
  |agType | "primary \| inherit"| color/background in css|
  |agSize| "xs \| sm \| md \| lg \| xl \|xxl"|  font-size in css|

### AgroHeading
Same as AgroLabel except they are bold by default

## AgroInputText
* Allowed Props-
  |Props | Prop Value | Desc|
  |---|---|---|
  |error| true/false | invalid input(red bg)|
  |hidden| true/false | show/hide |
* Varients 
  ### AgroInputTextArea
* Allowed Props-
  |Props | Prop Value | Desc|
  |---|---|---|
  |error| true/false | invalid input(red bg)|

  ### AgroSelectInput
  * Allowed Props-
  
  |Props | Prop Value | Desc|
  |---|---|---|
  |inherit| true/false | inherits wrapper Bgcolor|

  ### AgroCheckBox
  Custom checkbox which has primary color for selected things and default color for unselected.

  ### AgroRadio
  Custom Radio button to select from set of choices

## AgroPanel 
  Custom ```section``` element
  * Allowed Props-
  
  |Props | Prop Value | Desc|
  |---|---|---|
  |align| left/right | text-align in css|

## AgroList
  Custom ```ul``` element with no default styling
## AgroTable
  Custom ```table``` element but with underlying ```ul```

  ### AgroTableRow
  Custom ```tr``` element
  * Allowed Props-
  
  |Props | Prop Value | Desc|
  |---|---|---|
  |bold|true/false| bold text or not|

  ### AgroTableItem
  Custom ```td``` element with ```display: flex```
  * Allowed Props-
  
  |Props | Prop Value | Desc|
  |---|---|---|
  |agSize|1/2/3| flex value in css|




