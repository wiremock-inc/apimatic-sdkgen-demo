# Payments

Pay for bookings using a card or bank account, and view payment
status and history.

> warn
> Bookings usually expire within 1 hour so you'll need to make your payment
> before the expiry date

```ts
const paymentsController = new PaymentsController(client);
```

## Class Name

`PaymentsController`


# Create-Booking-Payment

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

```ts
async createBookingPayment(  bookingId: string,
  body: BookingPayment,
requestOptions?: RequestOptions): Promise<ApiResponse<BookingsPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Template, Required | The ID of the booking to pay for. |
| `body` | [`BookingPayment`](../../doc/models/booking-payment.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### OAuth2

`read`

## Response Type

[`BookingsPaymentResponse`](../../doc/models/bookings-payment-response.md)

## Example Usage

```ts
const bookingId = '1725ff48-ab45-4bb5-9d02-88745177dedb';

const body: BookingPayment = {
  amount: 49.99,
  currency: CurrencyEnum.Gbp,
  source: {
    name: 'J. Doe',
    number: '4242424242424242',
    cvc: 123,
    expMonth: BigInt(12),
    expYear: BigInt(2025),
    addressCountry: 'gb',
    object: 'card',
    addressLine1: '123 Fake Street',
    addressLine2: '4th Floor',
    addressCity: 'London',
    addressPostCode: 'N12 9XX',
  },
};

try {
  const { result, ...httpResponse } = await paymentsController.createBookingPayment(
  bookingId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "2e3b4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
  "amount": 49.99,
  "currency": "gbp",
  "source": {
    "object": "card",
    "name": "J. Doe",
    "number": "************4242",
    "cvc": 123,
    "exp_month": 12,
    "exp_year": 2025,
    "address_country": "gb",
    "address_post_code": "N12 9XX"
  },
  "status": "succeeded",
  "links": {
    "booking": "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb/payment"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemError`](../../doc/models/problem-error.md) |
| 401 | Unauthorized | [`ProblemError`](../../doc/models/problem-error.md) |
| 403 | Forbidden | [`ProblemError`](../../doc/models/problem-error.md) |
| 429 | Too Many Requests | [`ProblemError`](../../doc/models/problem-error.md) |
| 500 | Internal Server Error | [`ProblemError`](../../doc/models/problem-error.md) |

