# Bookings

Create and manage bookings for train trips, including passenger details
and optional extras.

```ts
const bookingsController = new BookingsController(client);
```

## Class Name

`BookingsController`

## Methods

* [Get-Bookings](../../doc/controllers/bookings.md#get-bookings)
* [Create-Booking](../../doc/controllers/bookings.md#create-booking)
* [Get-Booking](../../doc/controllers/bookings.md#get-booking)
* [Delete-Booking](../../doc/controllers/bookings.md#delete-booking)


# Get-Bookings

Returns a list of all trip bookings by the authenticated user.

```ts
async getBookings(requestOptions?: RequestOptions): Promise<ApiResponse<BookingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### OAuth2

`read`

## Response Type

[`BookingsResponse`](../../doc/models/bookings-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await bookingsController.getBookings();
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
  "data": [
    {
      "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "trip_id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "passenger_name": "John Doe",
      "has_bicycle": true,
      "has_dog": true
    },
    {
      "id": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "trip_id": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "passenger_name": "Jane Smith",
      "has_bicycle": false,
      "has_dog": false
    }
  ],
  "links": {
    "self": "https://api.example.com/bookings",
    "next": "https://api.example.com/bookings?page=2"
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


# Create-Booking

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

```ts
async createBooking(  body: Booking,
requestOptions?: RequestOptions): Promise<ApiResponse<BookingsResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Booking`](../../doc/models/booking.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### OAuth2

`write`

## Response Type

[`BookingsResponse2`](../../doc/models/bookings-response-2.md)

## Example Usage

```ts
const body: Booking = {};

try {
  const { result, ...httpResponse } = await bookingsController.createBooking(body);
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
  "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "trip_id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "passenger_name": "John Doe",
  "has_bicycle": true,
  "has_dog": true,
  "links": {
    "self": "https://api.example.com/bookings/efdbb9d1-02c2-4bc3-afb7-6788d8782b1e"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemError`](../../doc/models/problem-error.md) |
| 401 | Unauthorized | [`ProblemError`](../../doc/models/problem-error.md) |
| 404 | Not Found | [`ProblemError`](../../doc/models/problem-error.md) |
| 409 | Conflict | [`ProblemError`](../../doc/models/problem-error.md) |
| 429 | Too Many Requests | [`ProblemError`](../../doc/models/problem-error.md) |
| 500 | Internal Server Error | [`ProblemError`](../../doc/models/problem-error.md) |


# Get-Booking

Returns the details of a specific booking.

```ts
async getBooking(  bookingId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<BookingsResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Template, Required | The ID of the booking to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### OAuth2

`read`

## Response Type

[`BookingsResponse2`](../../doc/models/bookings-response-2.md)

## Example Usage

```ts
const bookingId = '1725ff48-ab45-4bb5-9d02-88745177dedb';

try {
  const { result, ...httpResponse } = await bookingsController.getBooking(bookingId);
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
  "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "trip_id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "passenger_name": "John Doe",
  "has_bicycle": true,
  "has_dog": true,
  "links": {
    "self": "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemError`](../../doc/models/problem-error.md) |
| 401 | Unauthorized | [`ProblemError`](../../doc/models/problem-error.md) |
| 403 | Forbidden | [`ProblemError`](../../doc/models/problem-error.md) |
| 404 | Not Found | [`ProblemError`](../../doc/models/problem-error.md) |
| 429 | Too Many Requests | [`ProblemError`](../../doc/models/problem-error.md) |
| 500 | Internal Server Error | [`ProblemError`](../../doc/models/problem-error.md) |


# Delete-Booking

Deletes a booking, cancelling the hold on the trip.

```ts
async deleteBooking(  bookingId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookingId` | `string` | Template, Required | The ID of the booking to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### OAuth2

`write`

## Response Type

`void`

## Example Usage

```ts
const bookingId = '1725ff48-ab45-4bb5-9d02-88745177dedb';

try {
  const { result, ...httpResponse } = await bookingsController.deleteBooking(bookingId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemError`](../../doc/models/problem-error.md) |
| 401 | Unauthorized | [`ProblemError`](../../doc/models/problem-error.md) |
| 403 | Forbidden | [`ProblemError`](../../doc/models/problem-error.md) |
| 404 | Not Found | [`ProblemError`](../../doc/models/problem-error.md) |
| 429 | Too Many Requests | [`ProblemError`](../../doc/models/problem-error.md) |
| 500 | Internal Server Error | [`ProblemError`](../../doc/models/problem-error.md) |

