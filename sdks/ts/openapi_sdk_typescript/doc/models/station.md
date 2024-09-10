
# Station

## Structure

`Station`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique identifier for the station. |
| `name` | `string` | Required | The name of the station |
| `address` | `string` | Required | The address of the station. |
| `countryCode` | `string` | Required | The country code of the station. |
| `timezone` | `string \| undefined` | Optional | The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones). |

## Example (as JSON)

```json
{
  "id": "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
  "name": "Berlin Hauptbahnhof",
  "address": "Invalidenstraße 10557 Berlin, Germany",
  "country_code": "DE",
  "timezone": "Europe/Berlin"
}
```

