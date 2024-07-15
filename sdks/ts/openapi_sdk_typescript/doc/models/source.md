
# Source

The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.

## Structure

`Source`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | [`ObjectEnum \| undefined`](../../doc/models/object-enum.md) | Optional | - |
| `name` | `string \| undefined` | Optional | Cardholder's full name as it appears on the card. |
| `number` | `string \| undefined` | Optional | The card number, as a string without any separators. On read all but the last four digits will be masked for security. |
| `cvc` | `number \| undefined` | Optional | Card security code, 3 or 4 digits usually found on the back of the card. |
| `expMonth` | `bigint \| undefined` | Optional | Two-digit number representing the card's expiration month. |
| `expYear` | `bigint \| undefined` | Optional | Four-digit number representing the card's expiration year. |
| `addressLine1` | `string \| undefined` | Optional | - |
| `addressLine2` | `string \| undefined` | Optional | - |
| `addressCity` | `string \| undefined` | Optional | - |
| `addressCountry` | `string \| undefined` | Optional | - |
| `addressPostCode` | `string \| undefined` | Optional | - |
| `sortCode` | `string \| undefined` | Optional | The sort code for the bank account, in string form. Must be a six-digit number. |
| `accountType` | [`AccountTypeEnum \| undefined`](../../doc/models/account-type-enum.md) | Optional | The type of entity that holds the account. This can be either `individual` or `company`. |
| `bankName` | `string \| undefined` | Optional | The name of the bank associated with the routing number. |
| `country` | `string \| undefined` | Optional | Two-letter country code (ISO 3166-1 alpha-2). |

## Example (as JSON)

```json
{
  "name": "Francis Bourgeois",
  "number": "4242424242424242",
  "cvc": 123,
  "exp_month": 12,
  "exp_year": 2025,
  "bank_name": "Starling Bank",
  "object": "card"
}
```

