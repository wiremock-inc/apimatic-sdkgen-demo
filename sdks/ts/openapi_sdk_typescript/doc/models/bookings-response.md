
# Bookings Response

## Structure

`BookingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Booking[] \| undefined`](../../doc/models/booking.md) | Optional | The wrapper for a collection is an array of objects. |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | A set of hypermedia links which serve as controls for the client. |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "00001c2a-0000-0000-0000-000000000000",
      "trip_id": "00002406-0000-0000-0000-000000000000",
      "passenger_name": "passenger_name0",
      "has_bicycle": false,
      "has_dog": false
    }
  ],
  "links": {
    "self": "self2",
    "next": "next2",
    "prev": "prev8"
  }
}
```

