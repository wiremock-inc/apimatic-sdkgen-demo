
# Bank Account

A bank account to take payment from. Must be able to make payments in the currency specified in the payment.

## Structure

`BankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | [`Object1Enum \| undefined`](../../doc/models/object-1-enum.md) | Optional | - |
| `name` | `string` | Required | - |
| `number` | `string` | Required | The account number for the bank account, in string form. Must be a current account. |
| `sortCode` | `string \| undefined` | Optional | The sort code for the bank account, in string form. Must be a six-digit number. |
| `accountType` | [`AccountTypeEnum`](../../doc/models/account-type-enum.md) | Required | The type of entity that holds the account. This can be either `individual` or `company`. |
| `bankName` | `string` | Required | The name of the bank associated with the routing number. |
| `country` | `string` | Required | Two-letter country code (ISO 3166-1 alpha-2). |

## Example (as JSON)

```json
{
  "name": "name2",
  "number": "number0",
  "account_type": "individual",
  "bank_name": "Starling Bank",
  "country": "country6",
  "object": "bank_account",
  "sort_code": "sort_code2"
}
```

