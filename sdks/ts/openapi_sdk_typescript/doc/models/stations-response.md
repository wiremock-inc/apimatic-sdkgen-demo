
# Stations Response

## Structure

`StationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Station[] \| undefined`](../../doc/models/station.md) | Optional | The wrapper for a collection is an array of objects. |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | A set of hypermedia links which serve as controls for the client. |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "00001c2a-0000-0000-0000-000000000000",
      "name": "name0",
      "address": "address6",
      "country_code": "country_code0",
      "timezone": "timezone0"
    },
    {
      "id": "00001c2a-0000-0000-0000-000000000000",
      "name": "name0",
      "address": "address6",
      "country_code": "country_code0",
      "timezone": "timezone0"
    },
    {
      "id": "00001c2a-0000-0000-0000-000000000000",
      "name": "name0",
      "address": "address6",
      "country_code": "country_code0",
      "timezone": "timezone0"
    }
  ],
  "links": {
    "self": "self2",
    "next": "next2",
    "prev": "prev8"
  }
}
```

