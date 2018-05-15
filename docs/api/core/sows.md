# Sows

## The sow object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `cloud_id` | _string_ | Unique identifier for the object. |
| `gestal_id` | _number_ | The Gestal system unique ID. |
| `pin_tag` | _string_ | The visual ID of a sow. |
| `rfid1` | _number_ | The first RFID tag. |
| `rfid2` | _number_ | The second RFID tag. |
| `state` | _string_ | The current sow state, can be `gilt`, `open`, `cycled`, `bred`, `gestating`, `farrowing`, `farrowed`, `weaned` or `retired`. |
| `state_updated_at` | _datetime_ | Date and time at which the sow state changed for the last time. |
| `last_location` | _string_ | Last known location for the sow. |
| `created_at` | _datetime_ | Date and time at which the object was created. |
| `updated_at` | _datetime_ | Date and time at which the object was updated. |

## Retrieve a sow

Retrieves details of a sow.

### Endpoint

```
GET https://api.gestal.cloud/integration/sows/:sow_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:sow_id` | __yes__ | The sow Cloud _or_ Gestal ID you want to retrieve. |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/sows/sow_hUdntuB2PEPwg03VZqMWKo9VtNt0WA4T
```

### Example Response

Returns a sow object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "sow_hUdntuB2PEPwg03VZqMWKo9VtNt0WA4T",
  "gestal_id": 48257620,
  "pin_tag": "1234",
  "rfid1": 6616539713,
  "rfid2": 1069407799,
  "state": "farrowing",
  "state_updated_at": "2001-01-01T01:01:01.000Z",
  "last_location": "far101",
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z",
  "site": {
    "cloud_id": "sit_VbRdHhAiizrPScy3TjNH28Ijfvqd6xGc",
    "name": "Site 1"
  }
}
```

## List all sows

Returns a list of sows, The sows are returned sorted by update date, with the most recent sows updated appearing first.

### Endpoint

```
GET https://api.gestal.cloud/integration/sows
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many sows you want per page (act as a limit, default: _100_). |


### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/sows page==1 per_page==10
```

### Example Response

Returns a dictionnary with `data` property that contains an array of up to `per_page` sows limit and some [pagination](/api/getting-started.html#pagination) metadata.
Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "data": [
    {
      "cloud_id": "sow_hUdntuB2PEPwg03VZqMWKo9VtNt0WA4T",
      "gestal_id": 48257620,
      "pin_tag": "1234",
      "rfid1": 6616539713,
      "rfid2": 1069407799,
      "state": "farrowing",
      "state_updated_at": "2001-01-01T01:01:01.000Z",
      "last_location": "far101",
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

## The sow version object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `event` | _string_ | The kind of operation done with on this version (create, update, etc.). |
| `changes` | _object_ | Changes done on this version (before/after values, per attribute). |
| `created_at` | _datetime_ | Date and time at which the version was created. |

## List all sow versions

Returns a list of sow verions, The sows verions are returned sorted by creation date, with the most recent version appearing first.

### Endpoint

```
GET https://api.gestal.cloud/integration/sows/:sow_id/versions
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:sow_id` | __yes__ | The sow Cloud _or_ Gestal ID you want to retrieve the versions of. |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many sows you want per page (act as a limit, default: _50_). |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/sows/sow_hUdntuB2PEPwg03VZqMWKo9VtNt0WA4T/versions page==1 per_page==10
```

### Example Response

Returns a dictionnary with `data` property that contains an array of up to `per_page` sow versions limit and some [pagination](/api/getting-started.html#pagination) metadata.
Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "data": [
    {
      "event": "create",
      "changes": {
        "gestal_id": [
          null,
          48257620
        ]
      },
      "created_at": "2001-01-01T01:01:01.000Z"
    },
    {
      "event": "update",
      "changes": {
        "rfid1": [
          null,
          6616539713
        ],
        "rfid2": [
          null,
          1069407799
        ],
        "pin_tag": [
          null,
          "1234"
        ]
      },
      "created_at": "2001-01-01T01:01:01.000Z"
    }
  ],
  "meta": {
    "total": 2,
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
