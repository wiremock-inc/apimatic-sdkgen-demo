
# Bookings Response 1

## Structure

`BookingsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique identifier for the booking |
| `tripId` | `string \| undefined` | Optional | Identifier of the booked trip |
| `passengerName` | `string \| undefined` | Optional | Name of the passenger |
| `hasBicycle` | `boolean \| undefined` | Optional | Indicates whether the passenger has a bicycle. |
| `hasDog` | `boolean \| undefined` | Optional | Indicates whether the passenger has a dog. |
| `links` | [`LinksSelf \| undefined`](../../doc/models/links-self.md) | Optional | - |

## Example (as JSON)

```json
{
  "passenger_name": "John Doe",
  "id": "00000124-0000-0000-0000-000000000000",
  "trip_id": "00000900-0000-0000-0000-000000000000",
  "has_bicycle": false,
  "has_dog": false
}
```

