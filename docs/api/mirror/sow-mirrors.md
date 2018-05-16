# Sow Mirrors

## The sow mirror object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `cloud_id` | _string_ | Unique identifier for the object. |
| `vendor_id` | _uuid_ | Unique vendor identifier for the object. |
| `gestal_id` | _string_ | The [sow](/api/core/sows.html#the-sow-object) unique ID (optional). |
| `pin_tag` | _string_ | The visual ID of a sow. |
| `rfid1` | _number_ | The first RFID tag. |
| `rfid2` | _number_ | The second RFID tag. |
| `state` | _string_ | The current sow mirror state, can be: <br/><br/> `gilt`, `open`, `cycled`, `bred`, `gestating`, `farrowing`, `farrowed`, <br/><br/>`weaned` or `retired`. |
| `state_updated_at` | _datetime_ | Date and time at which the sow mirror state changed for the last time. |
| `last_location` | _string_ | Last known location for the sow mirror. |
| `created_at` | _datetime_ | Date and time at which the object was created. |
| `updated_at` | _datetime_ | Date and time at which the object was updated. |

## Create a sow mirror

To create a sow mirror, you have to create a sow mirror object.

### Endpoint

```
POST https://api.gestal.cloud/integration/mirrors/sows
```

### Parameters

_None_

### Attributes

| Attribute | Required? | Description |
| :-- | :-- | :-- |
| `vendor_id` | __yes__ | Your own unique ID as an integrator for a sow resource. |
| `pin_tag` | no | The visual ID of the [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) to create. |
| `rfid1` | no | The [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) first RFID tag. |
| `rfid2` | no | The [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) second RFID tag. |
| `state` | no | The current sow state, can be: <br/><br/> `gilt`, `open`, `cycled`, `bred`, `gestating`, `farrowing`, `farrowed`, <br/><br/>`weaned` or `retired`. |
| `state_updated_at` | no | Date and time at which the [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) state changed for the last time. |
| `last_location` | no | Last known location for the [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object). |

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/mirrors/sows \
  vendor_id='70b096b7-047b-41ab-b36c-261f608ea701' \
  pin_tag=1234
```

```json
{
  "vendor_id": "70b096b7-047b-41ab-b36c-261f608ea701",
  "pin_tag": "1234"
}
```

### Example Response

Returns a sow mirror object if creation succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.
A common source of error is not providing the `vendor_id` attribute.

```
201 Created
```

```json
{
  "cloud_id": "wos_nbocYxWfQeXdI27iD6JeRLl1yKPrYNKF",
  "vendor_id": "70b096b7-047b-41ab-b36c-261f608ea701",
  "gestal_id": null,
  "pin_tag": "1234",
  "rfid1": null,
  "rfid2": null,
  "state": "gilt",
  "state_updated_at": null,
  "last_location": null,
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## Retrieve a sow mirror

Retrieves details of a sow mirror.

### Endpoint

```
GET https://api.gestal.cloud/integration/mirrors/sows/:sow_mirror_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:sow_mirror_id` | __yes__ | The sow mirror Cloud _or_ vendor ID you want to retrieve. |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/mirrors/sows/wos_nbocYxWfQeXdI27iD6JeRLl1yKPrYNKF
```

### Example Response

Returns a sow object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "wos_nbocYxWfQeXdI27iD6JeRLl1yKPrYNKF",
  "vendor_id": "70b096b7-047b-41ab-b36c-261f608ea701",
  "gestal_id": null,
  "pin_tag": "1234",
  "rfid1": null,
  "rfid2": null,
  "state": "gilt",
  "state_updated_at": null,
  "last_location": null,
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## The sow mirror version object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `event` | _string_ | The kind of operation done with on this version (create, update, etc.). |
| `changes` | _object_ | Changes done on this version (before/after values, per attribute). |
| `created_at` | _datetime_ | Date and time at which the version was created. |

## Retrieve a sow mirror versions

Returns a list of sow mirror versions, The sows mirror versions are returned sorted by creation date, with the most recent version appearing first.

### Endpoint

```
GET https://api.gestal.cloud/integration/mirrors/sows/:sow_mirror_id/versions
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:sow_mirror_id` | __yes__ | The sow mirror Cloud _or_ vendor ID you want to retrieve the versions of. |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many sow mirror versions you want per page (act as a limit, default: _50_). |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/mirrors/sows/70b096b7-047b-41ab-b36c-261f608ea701/versions page==1 per_page==10
```

### Example Response

Returns a dictionary with `data` property that contains an array of up to `per_page` sow versions limit and some [pagination](/api/getting-started.html#pagination) metadata.
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
        "vendor_id": [
          null,
          "70b096b7-047b-41ab-b36c-261f608ea701"
        ]
      },
      "created_at": "2001-01-01T01:01:01.000Z"
    },
    {
      "event": "update",
      "changes": {
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

## Update a sow mirror

Update the specified sow mirror by setting the values through passed attributes.
Any attributes not provided will be left unchanged.

### Endpoint

```
PATCH https://api.gestal.cloud/integration/mirrors/sows/:sow_mirror_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:sow_mirror_id` | __yes__ | The sow mirror Cloud _or_ vendor ID you want to update. |

### Attributes

| Attribute | Description |
| :-- | :-- | :-- |
| `pin_tag` | The visual ID of the [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) to create. |
| `rfid1` | The [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) first RFID tag. |
| `rfid2` | The [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) second RFID tag. |
| `state` | The current [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) state, can be: <br/><br/> `gilt`, `open`, `cycled`, `bred`, `gestating`, `farrowing`, `farrowed`, <br/><br/>`weaned` or `retired`. |
| `state_updated_at` | Date and time at which the [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object) state changed for the last time. |
| `last_location` | Last known location for the [sow mirror](/api/mirror/sow-mirrors.html#the-sow-mirror-object). |

### Example Request

```
$ http -jv PATCH https://api.gestal.cloud/integration/mirrors/sows/70b096b7-047b-41ab-b36c-261f608ea701 rfid2==1234567
```

```json
{
  "rfid2": "1234567"
}
```

### Example Response

Returns an updated sow mirror object if update succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "wos_nbocYxWfQeXdI27iD6JeRLl1yKPrYNKF",
  "vendor_id": "70b096b7-047b-41ab-b36c-261f608ea701",
  "gestal_id": null,
  "pin_tag": "1234",
  "rfid1": null,
  "rfid2": 1234567,
  "state": "gilt",
  "state_updated_at": null,
  "last_location": null,
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## Delete a sow mirror

Deletes a sow mirror. It cannot be undone.

### Endpoint

```
DELETE https://api.gestal.cloud/integration/mirrors/sows/:sow_mirror_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:sow_mirror_id` | __yes__ | The sow mirror Cloud or vendor ID you want to delete. |

### Attributes

_None_

### Example Request

```
$ http -jv DELETE https://api.gestal.cloud/integration/mirrors/sows/70b096b7-047b-41ab-b36c-261f608ea701
```

### Example Response

Returns only a status code if deletion succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
204 No Content
```

## The batch update object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `cloud_id` | _string_ | Unique identifier for the object. |
| `update_type` | _string_ | The type of batch update (here `sow_mirrors`). |
| `total`| _number_ | The total number of resources to process in this batch. |
| `failures` | _number_ | How many batch jobs failed. |
| `pending` | _number_ | How many batch jobs are pending. |
| `created_at` | _datetime_ | Date and time at which the batch update was created. |
| `completed_at` | _datetime_ | Date and time at which the batch update was completed. |
| `canceled_at` | _datetime_ | Date and time at which the batch update was canceled. |

## Bulk insert sow mirrors

Creating or updating a large batch of resources is often necessary when doing a first time synchronization.
This endpoint is designed to handle any size of sow mirror creation or update payloads.

### Endpoint

```
POST https://api.gestal.cloud/integration/mirrors/sows/bulk
```

### Parameters

_None_

### Attributes

An array of [sow mirrors](/api/mirror/sow-mirrors.html#the-sow-mirror-object).

### Example Request

```
$ http -jv POST https://api.gestal.cloud/integration/mirrors/sows/bulk < sow_mirrors.json
```

#### sow_mirrors.json

```json
[
  {
    "vendor_id": "70b096b7-047b-41ab-b36c-261f608ea701",
    "pin_tag": "1234",
    "rfid1": 12345678,
    "rfid2": 87654321
  }
]
```

### Example Response

```
202 Accepted
```

```json
{
  "cloud_id": "bu_aYD83ogODTtHsiNjclTFAVOdiq4Y47K5",
  "update_type": "sow_mirrors",
  "state": "active",
  "total": 1,
  "failures": 0,
  "pending": 1,
  "created_at": "2001-01-01T01:01:01.000Z",
  "completed_at": null,
  "cancelled_at": null
}
```

## Retrieve a batch update

Retrieves details of a previously created batch update.

### Endpoint

```
GET https://api.gestal.cloud/integration/mirrors/sows/bulk/:batch_update_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:batch_update_id` | __yes__ | The batch update Cloud ID you want to retrieve. |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/mirrors/sows/bulk/bu_aYD83ogODTtHsiNjclTFAVOdiq4Y47K5
```

### Example Response

Returns a batch update object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "bu_aYD83ogODTtHsiNjclTFAVOdiq4Y47K5",
  "update_type": "sow_mirrors",
  "state": "completed",
  "total": 1,
  "failures": 0,
  "pending": 0,
  "created_at": "2001-01-01T01:01:01.000Z",
  "completed_at": "2001-01-01T01:01:01.000Z",
  "cancelled_at": null
}
```

## Cancel a batch update

Cancels a batch update. Won't rollback already processed batch jobs.

### Endpoint

```
DELETE https://api.gestal.cloud/integration/mirrors/sows/bulk/:batch_update_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:batch_update_id` | __yes__ | The batch update Cloud ID you want to cancel. |

### Attributes

_None_

### Example Request

```
$ http -jv DELETE https://api.gestal.cloud/integration/mirrors/sows/bulk/bu_aYD83ogODTtHsiNjclTFAVOdiq4Y47K5
```

### Example Response

Returns a batch update object if deletion succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "bu_aYD83ogODTtHsiNjclTFAVOdiq4Y47K5",
  "update_type": "sow_mirrors",
  "state": "cancelled",
  "total": 1,
  "failures": 0,
  "pending": 0,
  "created_at": "2001-01-01T01:01:01.000Z",
  "completed_at": null,
  "cancelled_at": "2001-01-01T01:01:01.000Z"
}
```

## List all sow mirrors

Returns a list of sow mirrors, The sows mirrors are returned sorted by update date, with the most recent sow mirror updated appearing first.

### Endpoint

```
GET https://api.gestal.cloud/integration/mirrors/sows
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many sow mirrors you want per page (act as a limit, default: _100_). |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integration/mirrors/sows page==1 per_page==10
```

### Example Response

Returns a dictionary with `data` property that contains an array of up to `per_page` sow mirrors limit and some [pagination](/api/getting-started.html#pagination) metadata.
Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "data": [
    {
      "cloud_id": "wos_nbocYxWfQeXdI27iD6JeRLl1yKPrYNKF",
      "vendor_id": "70b096b7-047b-41ab-b36c-261f608ea701",
      "gestal_id": 7847698,
      "pin_tag": "1234",
      "rfid1": 4564678,
      "rfid2": 1234567,
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
