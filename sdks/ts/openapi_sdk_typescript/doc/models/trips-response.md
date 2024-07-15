
# Trips Response

## Structure

`TripsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Trip[] \| undefined`](../../doc/models/trip.md) | Optional | The wrapper for a collection is an array of objects. |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | A set of hypermedia links which serve as controls for the client. |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "00001c2a-0000-0000-0000-000000000000",
      "origin": "origin4",
      "destination": "destination6",
      "departure_time": "2016-03-13T12:52:32.123Z",
      "arrival_time": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "00001c2a-0000-0000-0000-000000000000",
      "origin": "origin4",
      "destination": "destination6",
      "departure_time": "2016-03-13T12:52:32.123Z",
      "arrival_time": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "00001c2a-0000-0000-0000-000000000000",
      "origin": "origin4",
      "destination": "destination6",
      "departure_time": "2016-03-13T12:52:32.123Z",
      "arrival_time": "2016-03-13T12:52:32.123Z"
    }
  ],
  "links": {
    "self": "self2",
    "next": "next2",
    "prev": "prev8"
  }
}
```

