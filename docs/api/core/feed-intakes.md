# Feed Intakes

Feed Intakes resources represent how much each daily feed a [sow](/api/core/sows.html#the-sow-object) is eating.

## The feed intake object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `cloud_id` | _string_ | Unique identifier for the object. |
| `sow_id` | _number_ | The Sow unique ID. |
| `fed_at` | _date_ | Date at which a [sow](/api/core/sows.html#the-sow-object) was fed. |
| `quantity` | _number_ | The quantity in _grams_ ate by [sow](/api/core/sows.html#the-sow-object) this day. |
| `target_quantity` | _number_ | The target quantity in _grams_ to be eaten by [sow](/api/core/sows.html#the-sow-object). |
| `created_at` | _datetime_ | Date and time at which the object was created. |
| `updated_at` | _datetime_ | Date and time at which the object was updated. |

## Retrieve a feed intake

Retrieves details of a feed intake.

### Endpoint

```
GET https://api.gestal.cloud/integration/feedintakes/:feed_intake_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:feed_intake_id` | __yes__ | The feed intake Cloud ID you want to retrieve. |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integrations/feedintakes/fi_fSI3g1E99b2h2WA43hgXs7eNCilBEtl
```

### Example Response

Returns a feed intake object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "fi_fSI3g1E99b2h2WA43hgXs7eNCilBEtl",
  "fed_at": "2001-01-01",
  "quantity": 7000,
  "target_quantity": 9000,
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## List all feed intakes

Returns a list of feed intakes, The feed intakes are returned sorted by creation date, with the most recent feed intakes appearing first.

### Endpoint

```
GET https://api.gestal.cloud/integration/sows/:sow_id/feedintakes
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:sow_id` | __yes__ | The sow Cloud _or_ Gestal ID you want to retrieve the feed intakes of. |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many feed intakes you want per page (act as a limit, default: _100_). |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/sows/sow_hUdntuB2PEPwg03VZqMWKo9VtNt0WA4T/feedintakes page==1 per_page==10
```

### Example Response

Returns a dictionary with `data` property that contains an array of up to `per_page` feed intakes limit and some [pagination](/api/getting-started.html#pagination) metadata.
Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "data": [
    {
      "cloud_id": "fi_fSI3g1E99b2h2WA43hgXs7eNCilBEtl",
      "fed_at": "2001-01-01",
      "quantity": 7000,
      "target_quantity": 9000,
      "created_at": "2001-01-01T01:01:01.000Z",
      "updated_at": "2001-01-01T01:01:01.000Z"
    }
  ],
  "meta": {
    "total": 1,
    "pages": 1,
    "per_page": 10,
    "current_page": 1,
    "next_page": false,
    "previous_page": false,
    "first_page": true,
    "last_page": true,
    "out_of_range": false
  }
}
```
