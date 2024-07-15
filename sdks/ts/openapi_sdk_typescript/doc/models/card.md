
# Card

A card (debit or credit) to take payment from.

## Structure

`Card`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | [`ObjectEnum \| undefined`](../../doc/models/object-enum.md) | Optional | - |
| `name` | `string` | Required | Cardholder's full name as it appears on the card. |
| `number` | `string` | Required | The card number, as a string without any separators. On read all but the last four digits will be masked for security. |
| `cvc` | `number` | Required | Card security code, 3 or 4 digits usually found on the back of the card. |
| `expMonth` | `bigint` | Required | Two-digit number representing the card's expiration month. |
| `expYear` | `bigint` | Required | Four-digit number representing the card's expiration year. |
| `addressLine1` | `string \| undefined` | Optional | - |
| `addressLine2` | `string \| undefined` | Optional | - |
| `addressCity` | `string \| undefined` | Optional | - |
| `addressCountry` | `string` | Required | - |
| `addressPostCode` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "Francis Bourgeois",
  "number": "4242424242424242",
  "cvc": 123,
  "exp_month": 12,
  "exp_year": 2025,
  "address_country": "address_country2",
  "object": "card",
  "address_line1": "address_line14",
  "address_line2": "address_line22",
  "address_city": "address_city0",
  "address_post_code": "address_post_code6"
}
```

