
# Problem Error

## Structure

`ProblemError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | A URI reference that identifies the problem type |
| `title` | `string \| undefined` | Optional | A short, human-readable summary of the problem type |
| `detail` | `string \| undefined` | Optional | A human-readable explanation specific to this occurrence of the problem |
| `instance` | `string \| undefined` | Optional | A URI reference that identifies the specific occurrence of the problem |
| `status` | `number \| undefined` | Optional | The HTTP status code |

## Example (as JSON)

```json
{
  "type": "type4",
  "title": "title8",
  "detail": "detail2",
  "instance": "instance2",
  "status": 14
}
```

