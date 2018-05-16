# Integration Installations

Integration installations are activations of your integration by tenants on their sites.<br/>
An integration installation is _scoped_ to a site, in a multi-sites setup you'll need one installation per-site.<br/>
It grants you access to site [core resources](/api/core/introduction.html) data and allows you to share some data through [mirror resources](api/mirror/introduction.html).

## List all installations

Returns a list of your installations __activated__ by tenants, The installations are returned sorted by update date, with the most recently updated installations appearing first.

:::tip No installations ?
It basically means no tenants have activated your integration on their sites yet.
:::

### Endpoint

```
GET https://api.gestal.cloud/integrations/:integration_id/installations
```

### Parameters

| Parameter | Required? | Description |
| :-- | :-- | :-- |
| `:integration_id` | yes | The integration Cloud ID you want to retrieve the installations of. |
| `page` | no | The page number you want to retrieve (default to first page). |
| `per_page` | no | How many installations you want per page (act as a limit, default: _100_). |

### Attributes

_None_

### Example Request

```
$ http -jv GET https://api.gestal.cloud/integrations/int_41soix4ZP9os2M1lsPzwlpbvqnqHJgYH/installations page==1 per_page==10
```

### Example Response

Returns a dictionary with `data` property that contains an array of up to `per_page` installations limit and some [pagination](/api/getting-started.html#pagination) metadata.
Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "data": [
    {
      "cloud_id": "inst_JbB8eEQnk4qy5vp2LN6BzTjpIAR4BJwD",
      "created_at": "2001-01-01T01:01:01.000Z",
      "tenant": {
        "cloud_id": "te_qxSygnPmLR8GkBfevGTm73c85Ll3rrC1",
        "name": "Tenant"
      },
      "site": {
        "cloud_id": "sit_VbRdHhAiizrPScy3TjNH28Ijfvqd6xGc",
        "name": "Site 1"
      }
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

## Authenticate as installation

Authentication as integration installation use an [access key](/api/access-keys.html) to authenticate if you don't have one please [create an access key](/api/access-keys.html#create-an-access-key) into an integration installation first.

Authenticate as an integrator by providing your _access-key_ as basic auth username value (leave password value empty) :

### Example Request

```
$ http -jv -a <accesskey>: GET https://api.gestal.cloud/ping
```

:::tip No tokens
Unlike your integrator account, there is __no session tokens__ for installations, you must authenticate with basic auth for __every__ request.
:::

::: danger Treat access keys with care
Access keys grants you access to complete tenant site data. Please obfuscate or hide them from unwanted eyes.
:::

## The current installation object

| Attribute | Type | Description |
| :-- | -- | :-- |
| `cloud_id` | _string_ | Unique identifier for the object. |
| `name` | _string_ | The integration name. |
| `url` | _string_ | The integration url. |
| `type` | _string_ | Type of integration (default to third_party). |
| `signed` | _boolean_ | If this integration is signed or not (default to false). |
| `description` | _string_ | The integration description |
| `access_key`| _object_ | The current [access key](/api/access-keys.html#the-access-key-object) object. |
| `site` | _object_ | The site where this installation is activated. |

## Retrieve current installation

Retrieves details of the integration installation you're authenticated with.

### Endpoint

```
GET https://api.gestal.cloud/integration
```

### Parameters

_None_

### Attributes

_None_

### Example Request

```
$ http -jv -a <accesskey>: GET https://api.gestal.cloud/integration
```

### Example Response

Returns a current installation object if request succeeded. Returns [an error](/api/getting-started.html#errors) if something goes wrong.

```
200 OK
```

```json
{
  "cloud_id": "inst_JbB8eEQnk4qy5vp2LN6BzTjpIAR4BJwD",
  "name": "Acme Plus",
  "url": "https://acme.com/products/acme-plus",
  "type": "third_party",
  "signed": false,
  "description": "Integrate Gestal Cloud with Acme Plus notification service.",
  "access_key": {
    "last_active_at": "2001-01-01T01:01:01.000Z"
  },
  "site": {
    "cloud_id": "sit_VbRdHhAiizrPScy3TjNH28Ijfvqd6xGc",
    "name": "Site 1"
  }
}
```
