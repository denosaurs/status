# status

[![Open Issues](https://img.shields.io/github/issues/denosaurs/status)](https://github.com/denosaurs/denom/status)
[![GitHub license](https://img.shields.io/github/license/denosaurs/status)](https://github.com/denosaurs/denom/blob/master/LICENSE)
[![Deno Version](https://img.shields.io/badge/deno-1.0.0-informational)](https://deno.land)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/status/mod.ts)

HTTP codes and status utility for Deno. Based on [Java Apache HttpStatus](http://hc.apache.org/httpclient-3.x/apidocs/org/apache/commons/httpclient/HttpStatus.html)

## API

### status(code) and status.pretty(code)

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status(403) // => "FORBIDDEN"
status("403") // => "FORBIDDEN"
status.pretty(403) // => "Forbidden"
status(306) // throws
```

### status(message)

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status("forbidden") // => 403
status("FoRbIdDeN") // => 403
status("foo") // throws
```

### status.codes
Array of all the possible status codes.

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status.codes; // => [202, 502, 400, ...]
```

### status.code[code]
Map of all the available codes. `message (string) -> code (number)`

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status.code; // => { "ACCEPTED": 202, "BAD_GATEWAY": 502, "BAD_REQUEST": 400, ... }
satuus.code["FORBIDDEN"] = 403;
```

### status.message[msg]
Map of all the available codes. `code (number) -> message (string)`

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status.message; // => { 202: "ACCEPTED", 502: "BAD_GATEWAY, 400: "BAD_REQUEST", ... }
status.message[403] = "FORBIDDEN";
```

### status.empty[code]
Returns `true` if a status code exprects an empty body.

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status.empty[200] // => undefined
status.empty[204] // => true
```

### status.redirect[code]
Returns `true` if a status code is a valid redirect status.

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status.redirect[200] // => undefined
status.redirect[301] // => true
```

### status.retry[code]
Returns `true` if a status code hints that the request might be retried.

```typescript
import { status } from "https://deno.land/x/status/mod.ts";

status.retry[501] // => undefined
status.retry[503] // => true
```


## other

### contribution
Pull request and issues are very welcome. Code style is formatted with `deno fmt`.

### inspiration
The project is inspired by the [statuses](https://github.com/jshttp/statuses) project.
