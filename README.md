# sales-app-localization

A set of configs and React hooks to help building forms for several countries.

## Configuration

The configuration files of each country are located on `src/country/`

| Config  |                | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input   | type           | The type of input. Can be `text`, `select` or `dynamic-input`                                                                                                                                                                                                                                                                                                                                                           |
| input   | enabled        | Should show the input or not                                                                                                                                                                                                                                                                                                                                                                                            |
| input   | required       | It specifies that an input field must be filled or not                                                                                                                                                                                                                                                                                                                                                                  |
| input   | placeholder    | The placeholder of the input. Only applicable when type is `text`                                                                                                                                                                                                                                                                                                                                                       |
| input   | maxLength      | It specifies the maximum number of characters allowed. Only applicable when type is `text`                                                                                                                                                                                                                                                                                                                              |
| input   | validate       | A function that receive the value of the input as parameter and return if the value is valid or not. Only applicable when type is `text`                                                                                                                                                                                                                                                                                |
| input   | format         | A function that receive the value of the input as parameter and return the value formatted with the mask. Only applicable when type is `text`                                                                                                                                                                                                                                                                           |
| input   | unformat       | A function that receive the value of the input as parameter and return the value excluding the mask characters. Only applicable when type is `text`                                                                                                                                                                                                                                                                     |
| input   | inputMode      | - `text`: Standard input keyboard for the user's current locale. <br />- `decimal `: Fractional numeric input keyboard containing the digits and decimal separator for the user's locale (typically . or ,). Devices may or may not show a minus key (-)<br />- `numeric `: Numeric input keyboard, but only requires the digits 0–9. Devices may or may not show a minus key.<br/> Only applicable when type is `text` |
| input   | options        | The options of the select. The type can be `string[]` if is the root select, and `Record<string, string[]>` if is a child select. Only applicable when type is `select`                                                                                                                                                                                                                                                 |
| input   | parent         | The input field that is parent of the current type. If parent child is present, set to `null`. Only applicable when type is `select`                                                                                                                                                                                                                                                                                    |
| input   | transform      | A function that return either a `text` or a `select` type. Only applicable when type is `dynamic-input`                                                                                                                                                                                                                                                                                                                 |
| address | postalCodeMode | - `postalcode-api`: The postal code should be got from an API<br />- `state`: The postal code should be got from the state field<br />- `state-city`: The postal code should be got from the state and city fields<br />- `state-neighborhood`: The postal code should be got from the state and neighborhood fields                                                                                                    |

## Usage

Wrap your app within the `LocalizationProvider`, use the `useLocalizationState` hook to pass the value to the provider. You will need to pass the localization config of a country to the hook. The supported country codes are BRA, MEX, ARG, CHL, COL, ECU.

```typescript
import {
  LocalizationProvider,
  useLocalizationState,
  BRA,
} from '@vtexlab/sales-app-localization'

const App = () => {
  const localizationState = useLocalizationState({ localizationConfig: BRA })

  return (
    <LocalizationProvider value={localizationState}>...</LocalizationProvider>
  )
}
```

### useLocalization

To get the country config, use the `useLocalization` hook

```typescript
import { useLocalization } from '@vtexlab/sales-app-localization'

const App = () => {
  const { localizationConfig } = useLocalization()

  return (
    <>Document: {localizationConfig.input.document.format('50307089444')}</>
  )
}
```

### useLocalizationInput

To configure an input you can use the `useLocalizationInput`. You need to pass the `inputField` parameter. It can return a `text` or `select` input based on the configuration.

```typescript
import { useLocalizationInput } from '@vtexlab/sales-app-localization'

const App = () => {
  const cityInput = useLocalizationInput({
    inputField: 'city',
  })

  return (
    <>
      <label>City:</label>
      {cityInput.type === 'text' && (
        <input type="text" {...cityInput.inputAttrs} />
      )}
      {cityInput.type === 'select' && (
        <select>
          {Array.isArray(cityInput.options) &&
            cityInput.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      )}
    </>
  )
}
```

### Testing locally

Run `yarn dev` and access `http://localhost:3000/`