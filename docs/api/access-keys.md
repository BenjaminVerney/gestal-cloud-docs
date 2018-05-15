# Access Keys

Access keys are credentials used to authenticate as an integration installation (which is scoped to a tenant site).<br/>
It is the __only__ way to access [core resources](/api/core/introduction.html) as well as [mirror resources](api/mirror/introduction.html).

:::tip Integrator Account
  Access keys manipulations are only available through your integrator account.
:::

:::danger Treat access keys with care
Like a password, an access key does not expire. Please obfuscate or hide it from unwanted eyes.
:::

## The access key object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `id` | _string_ | Unique identifier for the access key. |
| `access_key` | _string_ | The access key credential (can be obfuscated, starts with `ak_`). |
| `last_active_at` | _string_ | Last time this access key was used (null if never used). |
| `created_at` | _datetime_ | Date and time at which the access key was created. |

## Create an access key

To create an access key, you have to create an access key object.

You can virtually create as many as access key you want, however too much access keys emitted will increase the security risk.
We recommend removing unused keys as soon as possible, the `last_active_at` attribute can be useful to determine that.

### Endpoint

```
POST https://api.gestal.cloud/integrations/installations/:installation_id/accesskeys
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:installation_id` | __yes__ | The installation Cloud ID you want to create an access key on. |

### Attributes

_None_

### Example Request

```
$ http -jv POST https://api.gestal.cloud/integrations/installations/inst_JbB8eEQnk4qy5vp2LN6BzTjpIAR4BJwD/accesskeys
```

### Example Response

Returns an access key object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
201 Created
```

```json
{
  "id": "25201008-8c5a-4acb-b9f6-fd6a5f4e41c5",
  "access_key": "ak_12345678901234567890124567890",
  "last_active_at": null,
  "created_at": "2001-01-01T01:01:01.000Z"
}
```

:::tip Please note
Access key credential in `access_key` attribute will __only__ be revealed at creation __once__ and will obfuscated afterwards.
:::

## Retrieve an access key

Retrieves details of a previously created access key.

### Endpoint

```
GET https://api.gestal.cloud/integrations/accesskeys/:access_key_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:access_key_id` | __yes__ | The access key ID you want to retrieve. |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integrations/accesskeys/25201008-8c5a-4acb-b9f6-fd6a5f4e41c5
```

### Example Response

Returns an integration object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "id": "25201008-8c5a-4acb-b9f6-fd6a5f4e41c5",
  "access_key": "ak_xxxxxxxxxxxxxxxxxxxxxxxxxxxx7890",
  "last_active_at": null,
  "created_at": "2001-01-01T01:01:01.000Z"
}
```

:::tip Obfuscated
Access keys credentials are obfuscated for security reasons. The last four characters are revealed to help you identify the access key you want to deal with.
:::

## Delete an access key

Deletes an access key. It cannot be undone.

### Endpoint

```
DELETE https://api.gestal.cloud/integrations/accesskeys/:access_key_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:access_key_id` | __yes__ | The access key ID you want to delete. |

### Attributes

_None_

### Example Request

```
$ http -jv DELETE https://api.gestal.cloud/integrations/accesskeys/25201008-8c5a-4acb-b9f6-fd6a5f4e41c5
```

### Example Response

Returns only a status code if deletion succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
204 No Content
```

## List all access keys

Returns a list of your access keys, The access keys are returned sorted by update date, with the most recent access keys updated appearing first.

### Endpoint

```
GET https://api.gestal.cloud/integrations/installations/:installation_id/accesskeys
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:installation_id` | __yes__ | The installation Cloud ID you want the access keys of. |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many integrations you want per page (act as a limit, default: _100_). |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integrations/installations/inst_JbB8eEQnk4qy5vp2LN6BzTjpIAR4BJwD/accesskeys page==1 per_page==10
```

### Example Response

Returns a dictionnary with `data` property that contains an array of up to `per_page` access keys limit and some [pagination](/api/getting-started.html#pagination) metadata.
Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "data": [
    {
      "id": "25201008-8c5a-4acb-b9f6-fd6a5f4e41c5",
      "access_key": "ak_xxxxxxxxxxxxxxxxxxxxxxxxxxxx7890",
      "last_active_at": null,
      "created_at": "2001-01-01T01:01:01.000Z"
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
