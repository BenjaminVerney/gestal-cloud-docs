---
title: Getting Started
---

# Getting Started

Designed around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) principles,
our Web API is a collection of resource-oriented URIs.

Each method has a series of arguments informing the execution of your intentions.

Web API use standard HTTP features such as HTTP authentication and verbs widely supported by off-the-shelf HTTP client.

[Cross origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) and [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) are supported out-of-the-box too.

:::tip No integrator account?
  Please send us an [__email__](mailto:dev@jygatech.com?subject=Integrator&nbsp;Account) so we can help you setup an account.
:::

## Terminology

This documentation has recurring terms you'll encounter:

__Integrator__ (basically you).

__Tenant__ is an organization (a company, a group, etc...) owned by a customer.


## Endpoint

Web API endpoint is globally available at:

```
https://api.gestal.cloud
```

Please note that [HTTPS](https://en.wikipedia.org/wiki/HTTPS) and [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) are mandatory to access this endpoint.


## Format

[JSON](http://www.json.org) is the default and __only__ format.

Media types supported:

```
application/json
application/vnd.gestal+json
```

## Authentication

There are two way of authenticating with Web API:

* As an __integrator__ account (covered by __this__ section).
* As an __integration installation__ (covered by its [own section](/api/installations.html#authenticate-as-installation.html)).


### Example Request

Authenticate as an integrator by providing your _email_ and _password_ as basic auth values:

```
$ http -jv -a email:password POST https://api.gestal.cloud/auth
```

_Examples in this documentation will make use of [__HTTPie__](https://httpie.org/) but clients such as __curl__, [__Postman__](https://www.getpostman.com/) or [__Insomnia__](https://insomnia.rest/) are great too!_


### Example Response

Once successful, a session token will be provided in response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX..."
}
```

_Session tokens are simply [__JWT__](https://jwt.io/) tokens._

### Example Authenticated Request

Session token __must__ be provided for every request made as an integrator:

```
$ http -jv GET https://api.gestal.cloud/ping 'Authorization: Bearer <token>'
```

```
GET /ping HTTP/1.1
Content-Type: application/json
Authorization: Bearer <token>
```

::: danger Treat tokens with care
Never store a token, it will __expire after one day__ anyway.
:::

## Errors

Web API uses conventional HTTP response codes to indicate request success of failure.
`2xx` codes range are for successful responses, `4xx` represents an error in provided request
(wrong credentials, expired session token, missing attribute in payload, etc.).
`5xx` codes indicate an error our servers and will be automatically reported to us.

### HTTP status code summary

| Code | Name | Description |
| -- |:--:| :-- |
| `200` | OK | Request is successful. Everything worked as expected. |
| `201` | Created | Resource is successfully created. |
| `202` | Accepted | Operation is accepted but will be processed in background. |
| `204` | No Content | Everything worked as expected but nothing to respond. |
| `400` | Bad Request | Unacceptable request, mandatory conditions were not met. |
| `401` | Unauthorized | Invalid credentials, session token is expired, etc. |
| `403` | Forbidden | Resource is not accessible due to authorization failure. |
| `404` | Not Found | Resource cannot be found. |
| `422` | Unprocessable Entity | Operation on resource failed, often due to a validation error. |
| `429` | Too Many Request | Raised when you have been rate-limited by our API protections due to flood detection. Please __wait 2 hours__ or [contact us](mailto:noc@jygatech.com?subject=Rate&nbsp;Limited&nbsp;) if situation still occur.
| `5xx` | Server Errors | Errors on Gestal Cloud side (will be automatically reported to us). |

## Pagination

All top-level API resources have support for bulk fetches via "list" API methods.

We don't return every existing records by default for the sake of performance.

Resources are splitted into page cursors via `page` parameter and limited to a bulk size using a `per_page` parameter.

A collection of pagination metadata will be provided in association with data.

### Metadata

| Metadata | Type | Description |
| :-- | -- | :-- |
| `total` | _number_ | Complete number of objects available in datastore. |
| `pages` | _number_ | Number of pages with applied `per_page` limit. |
| `per_page` | _number_ | Limit the number of objects returned by a `page`. |
| `current_age` | _number_ | The current active `page` (default to first). |
| `next_page` | _number_ | The next `page` number (false if none). |
| `previous_page` | _number_ | The previous `page` number (false if none). |
| `first_page` | _boolean_ | If current `page` is last `page` (or not). |
| `last_page` | _boolean_ | If current `page` is last `page` (or not). |
| `out_of_range` | _boolean_ | If current `page` is out of range (does not exists within current parameters). |


### Example request

```
$ http get https://api.gestal.cloud/<list> page==1 per_page==100
```

### Example response

```json
{
  "data": [...],
  "meta": {
    "total": 600,
    "pages": 6,
    "per_page": 100,
    "current_page": 1,
    "next_page": 2,
    "previous_page": false,
    "first_page": true,
    "last_page": false,
    "out_of_range": false
  }
}
```

You need to iterate over all pages to retrieve complete dataset.

## Versioning

As Web API evolve, some backwards-incompatible changes may occur.

Versioning is handled through specific media-types format.

To set the API version on a specific request, send a media-type like:

```
application/vnd.gestal.<version>+json
```

With `<version>` the Web API version you want to use.

If no version is provided it'll use the latest API version by default.
