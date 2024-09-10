
# Trip

## Structure

`Trip`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique identifier for the trip |
| `origin` | `string \| undefined` | Optional | The starting station of the trip |
| `destination` | `string \| undefined` | Optional | The destination station of the trip |
| `departureTime` | `string \| undefined` | Optional | The date and time when the trip departs |
| `arrivalTime` | `string \| undefined` | Optional | The date and time when the trip arrives |
| `operator` | `string \| undefined` | Optional | The name of the operator of the trip |
| `price` | `number \| undefined` | Optional | The cost of the trip |
| `bicyclesAllowed` | `boolean \| undefined` | Optional | Indicates whether bicycles are allowed on the trip |
| `dogsAllowed` | `boolean \| undefined` | Optional | Indicates whether dogs are allowed on the trip |

## Example (as JSON)

```json
{
  "origin": "Berlin Hauptbahnhof",
  "destination": "Paris Gare du Nord",
  "operator": "Deutsche Bahn",
  "id": "00001cba-0000-0000-0000-000000000000",
  "departure_time": "2016-03-13T12:52:32.123Z",
  "arrival_time": "2016-03-13T12:52:32.123Z"
}
```

