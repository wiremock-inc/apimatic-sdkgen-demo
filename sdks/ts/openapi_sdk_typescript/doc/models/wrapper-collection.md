
# Wrapper Collection

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

## Structure

`WrapperCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`unknown[] \| undefined`](../../doc/models/object-enum.md) | Optional | The wrapper for a collection is an array of objects. |
| `links` | [`unknown \| undefined`](../../doc/models/object-enum.md) | Optional | A set of hypermedia links which serve as controls for the client. |

## Example (as JSON)

```json
{
  "data": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "links": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

