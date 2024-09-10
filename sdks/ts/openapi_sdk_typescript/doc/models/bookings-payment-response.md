
# Bookings Payment Response

## Structure

`BookingsPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects. |
| `amount` | `number \| undefined` | Optional | Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.<br>**Constraints**: `> 0` |
| `currency` | [`CurrencyEnum \| undefined`](../../doc/models/currency-enum.md) | Optional | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `source` | [`BookingsPaymentResponseSource \| undefined`](../../doc/models/containers/bookings-payment-response-source.md) | Optional | This is a container for any-of cases. |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Optional | The status of the payment, one of `pending`, `succeeded`, or `failed`. |
| `links` | [`LinksBooking \| undefined`](../../doc/models/links-booking.md) | Optional | - |

## Example (as JSON)

```json
{
  "amount": 49.99,
  "id": "00001bb0-0000-0000-0000-000000000000",
  "currency": "gbp",
  "source": {
    "object": "card",
    "name": "name0",
    "number": "number8",
    "cvc": 94,
    "exp_month": 240,
    "exp_year": 56,
    "address_line1": "address_line14",
    "address_line2": "address_line22",
    "address_city": "address_city0",
    "address_country": "address_country2",
    "address_post_code": "address_post_code6"
  },
  "status": "failed"
}
```

