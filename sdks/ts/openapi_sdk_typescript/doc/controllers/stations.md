# Stations

Find and filter train stations across Europe, including their location
and local timezone.

```ts
const stationsController = new StationsController(client);
```

## Class Name

`StationsController`


# Get-Stations

Returns a paginated and searchable list of all train stations.

```ts
async getStations(  page?: number,
  coordinates?: string,
  search?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<StationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | The page number to return<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `coordinates` | `string \| undefined` | Query, Optional | The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location. |
| `search` | `string \| undefined` | Query, Optional | A search term to filter the list of stations by name or address. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### OAuth2

`read`

## Response Type

[`StationsResponse`](../../doc/models/stations-response.md)

## Example Usage

```ts
const search = 'Milano Centrale';

try {
  const { result, ...httpResponse } = await stationsController.getStations(
  undefined,
  undefined,
  search
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
      "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
      "name": "Berlin Hauptbahnhof",
      "address": "Invalidenstraße 10557 Berlin, Germany",
      "country_code": "DE",
      "timezone": "Europe/Berlin"
    },
    {
      "id": "b2e783e1-c824-4d63-b37a-d8d698862f1d",
      "name": "Paris Gare du Nord",
      "address": "18 Rue de Dunkerque 75010 Paris, France",
      "country_code": "FR",
      "timezone": "Europe/Paris"
    }
  ],
  "links": {
    "self": "https://api.example.com/stations&page=2",
    "next": "https://api.example.com/stations?page=3",
    "prev": "https://api.example.com/stations?page=1"
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

