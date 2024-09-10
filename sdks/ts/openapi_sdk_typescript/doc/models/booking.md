
# Booking

## Structure

`Booking`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique identifier for the booking |
| `tripId` | `string \| undefined` | Optional | Identifier of the booked trip |
| `passengerName` | `string \| undefined` | Optional | Name of the passenger |
| `hasBicycle` | `boolean \| undefined` | Optional | Indicates whether the passenger has a bicycle. |
| `hasDog` | `boolean \| undefined` | Optional | Indicates whether the passenger has a dog. |

## Example (as JSON)

```json
{
  "id": "00000b58-0000-0000-0000-000000000000",
  "trip_id": "00001334-0000-0000-0000-000000000000",
  "passenger_name": "passenger_name4",
  "has_bicycle": false,
  "has_dog": false
}
```

