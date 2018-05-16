# Integrations

You have the ability to create system integrations to allow bridging our two ecosystems together.

Integrations are like applications, they can be installed by tenants on a per-site basis, thus providing integrators access to its [core resources](/api/core/introduction.html) (see [integration installations](/api/installations.html)).

Integrators can also share data to tenants via [mirror resources](/api/mirror/introduction.html) (such as [sow mirrors](/api/mirror/sow-mirrors.html)).

:::tip Please note
You need to create an integration so tenants can make installations of your integration into their farm sites.
:::

## The integration object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `cloud_id` | _string_ | Unique identifier for the object. |
| `name` | _string_ | Integration name as it will appear to tenants. |
| `url` | _string_ | An URL to your product website. |
| `description` | _string_ | Description of your integration it will appear to tenants. |
| `created_at` | _datetime_ | Date and time at which the object was created. |
| `updated_at` | _datetime_ | Date and time at which the object was updated. |

### Example Response

```json
{
  "cloud_id": "int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH",
  "name": "Acme Plus",
  "url": "https://acme.com/products/acme-plus",
  "description": "Integrate Gestal Cloud with Acme Plus notification service.",
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## Create an integration

To create an integration, you have to create an integration object.

We recommend beginning with _one_ integration (as it will cover most cases).

### Endpoint

```
POST https://api.gestal.cloud/integrations
```

### Parameters

_None_

### Attributes

| Attribute | Required? | Description |
| :-- | :-- | :-- |
| `name` | __yes__ | A string representing the name of your integration as it will be displayed to tenants. Mostly your product name. |
| `url` | __yes__ | An URL to your product website. |
| `description` | no | A short description of your integration. It is displayed to tenants and explains your integration to them. <br/> For example: _Monitors your Gestal system data and notifies you using Acme Plus awesome real-time notifications_. |

### Example Request

```
$ http -jv POST https://api.gestal.cloud/integrations \
  name='Acme Plus' \
  url='https://acme.com/products/acme-plus' \
  description='Integrate Gestal Cloud with Acme Plus notification service.'
```

```json
{
  "name": "Acme Plus",
  "url": "https://acme.com/products/acme-plus",
  "description": "Integrate Gestal Cloud with Acme Plus notification service."
}
```

### Example Response

Returns an integration object if creation succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.
A common source of error is not providing required attributes.

```
201 Created
```

```json
{
  "cloud_id": "int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH",
  "name": "Acme Plus",
  "url": "https://acme.com/products/acme-plus",
  "description": "Integrate Gestal Cloud with Acme Plus notification service.",
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## Retrieve an integration

Retrieves details of a previously created integration.

### Endpoint

```
GET https://api.gestal.cloud/integrations/:integration_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:integration_id` | __yes__ | The integration Cloud ID you want to retrieve. |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integrations/int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH
```

### Example Response

Returns an integration object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH",
  "name": "Acme Plus",
  "url": "https://acme.com/products/acme-plus",
  "description": "Integrate Gestal Cloud with Acme Plus notification service.",
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## Update an integration

Update the specified integration by setting the values through passed attributes.
Any attributes not provided will be left unchanged.

### Endpoint

```
PATCH https://api.gestal.cloud/integrations/:integration_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:integration_id` | __yes__ | The integration Cloud ID you want to update. |

### Attributes

| Attribute | Required? | Description |
| :-- | :-- | :-- |
| `name` | __yes__ | A string representing the name of your integration as it will be displayed to tenants. Mostly your product name. |
| `url` | __yes__ | An URL to your product website. |
| `description` | no | A short description of your integration. It is displayed to tenants and explains your integration to them. <br/> For example: _Monitors your Gestal system data and notifies you using Acme Plus awesome real-time notifications_.

### Example Request

```
$ http -jv PATCH https://api.gestal.cloud/integrations/int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH \
  url='https://acme.com/products/another-url'
```

### Example Response

Returns an updated integration object if update succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH",
  "name": "Acme Plus",
  "url": "https://acme.com/products/another-url",
  "description": "Integrate Gestal Cloud with Acme Plus notification service.",
  "created_at": "2001-01-01T01:01:01.000Z",
  "updated_at": "2001-01-01T01:01:01.000Z"
}
```

## Delete an integration

Deletes an integration. It cannot be undone. Removes all existing installations too.

### Endpoint

```
DELETE https://api.gestal.cloud/integrations/:integration_id
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:integration_id` | __yes__ | The integration Cloud ID you want to delete. |

### Attributes

_None_

### Example Request

```
$ http -jv DELETE https://api.gestal.cloud/integrations/int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH
```

### Example Response

Returns only a status code if deletion succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
204 No Content
```

## List all integrations

Returns a list of your integrations, The integrations are returned sorted by creation date, with the most recent integrations appearing first.

### Endpoint

```
GET https://api.gestal.cloud/integrations
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many integrations you want per page (act as a limit, default: _100_). |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integrations page==1 per_page==10
```

### Example Response

Returns a dictionary with `data` property that contains an array of up to `per_page` integrations limit and some [pagination](/api/getting-started.html#pagination) metadata.
Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "data": [
    {
      "cloud_id": "int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH",
      "name": "Acme Plus",
      "url": "https://acme.com/products/another-url",
      "description": "Integrate Gestal Cloud with Acme Plus notification service.",
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
