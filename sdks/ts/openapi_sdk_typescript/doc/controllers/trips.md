# Trips

Timetables and routes for train trips between stations, including pricing
and availability.

```ts
const tripsController = new TripsController(client);
```

## Class Name

`TripsController`


# Get-Trips

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

```ts
async getTrips(  origin: string,
  destination: string,
  date: string,
  bicycles?: boolean,
  dogs?: boolean,
requestOptions?: RequestOptions): Promise<ApiResponse<TripsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `origin` | `string` | Query, Required | The ID of the origin station |
| `destination` | `string` | Query, Required | The ID of the destination station |
| `date` | `string` | Query, Required | The date and time of the trip in ISO 8601 format in origin station's timezone. |
| `bicycles` | `boolean \| undefined` | Query, Optional | Only return trips where bicycles are known to be allowed |
| `dogs` | `boolean \| undefined` | Query, Optional | Only return trips where dogs are known to be allowed |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### OAuth2

`read`

## Response Type

[`TripsResponse`](../../doc/models/trips-response.md)

## Example Usage

```ts
const origin = 'efdbb9d1-02c2-4bc3-afb7-6788d8782b1e';

const destination = 'b2e783e1-c824-4d63-b37a-d8d698862f1d';

const date = '02/01/2024 09:00:00';

const bicycles = false;

const dogs = false;

try {
  const { result, ...httpResponse } = await tripsController.getTrips(
  origin,
  destination,
  date,
  bicycles,
  dogs
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
  "data": [
    {
      "id": "ea399ba1-6d95-433f-92d1-83f67b775594",
      "origin": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "destination": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "departure_time": "2024-02-01T10:00:00Z",
      "arrival_time": "2024-02-01T16:00:00Z",
      "price": 50,
      "operator": "Deutsche Bahn",
      "bicycles_allowed": true,
      "dogs_allowed": true
    },
    {
      "id": "4d67459c-af07-40bb-bb12-178dbb88e09f",
      "origin": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "destination": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "departure_time": "2024-02-01T12:00:00Z",
      "arrival_time": "2024-02-01T18:00:00Z",
      "price": 50,
      "operator": "SNCF",
      "bicycles_allowed": true,
      "dogs_allowed": true
    }
  ],
  "links": {
    "self": "https://api.example.com/trips?origin=efdbb9d1-02c2-4bc3-afb7-6788d8782b1e&destination=b2e783e1-c824-4d63-b37a-d8d698862f1d&date=2024-02-01",
    "next": "https://api.example.com/trips?origin=efdbb9d1-02c2-4bc3-afb7-6788d8782b1e&destination=b2e783e1-c824-4d63-b37a-d8d698862f1d&date=2024-02-01&page=2"
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

