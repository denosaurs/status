// Copyright 2020 Filippo Rossi. All rights reserved. MIT license.

import {
  assert,
  assertStrictEquals as assertStrictEq,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";

import { MOVED_PERMANENTLY, status } from "./mod.ts";

Deno.test({
  name: "status:arguments:number",
  fn(): void {
    assertStrictEq(status(200), "OK");
    assertStrictEq(status(404), "NOT_FOUND");
    assertStrictEq(status(500), "INTERNAL_SERVER_ERROR");

    assertThrows(status.bind(null, 0), undefined, "invalid status code");
    assertThrows(status.bind(null, 1000), undefined, "invalid status code");
    assertThrows(status.bind(null, 299), undefined, "invalid status code");
    assertThrows(status.bind(null, 310), undefined, "invalid status code");

    assertThrows(status.bind(null, 306), undefined, "invalid status code");
  },
});

Deno.test({
  name: "status:arguments:string",
  fn(): void {
    assertStrictEq(status("200"), "OK");
    assertStrictEq(status("404"), "NOT_FOUND");
    assertStrictEq(status("500"), "INTERNAL_SERVER_ERROR");

    assert(status("OK"));
    assert(status("internal server error"));
    assert(status("NoT FoUnd"));

    assertThrows(
      status.bind(null, "too many bugs"),
      undefined,
      "invalid status message",
    );
    assertThrows(status.bind(null, "299"), undefined, "invalid status code");
  },
});

Deno.test({
  name: "status:pretty",
  fn(): void {
    assertStrictEq(status.pretty("200"), "Ok");
    assertStrictEq(status.pretty("404"), "Not Found");
    assertStrictEq(status.pretty("500"), "Internal Server Error");

    assert(status.pretty("OK"));
    assert(status.pretty("internal server error"));
    assert(status.pretty("NoT FoUnd"));

    assertThrows(
      status.pretty.bind(null, "too many bugs"),
      undefined,
      "invalid status message",
    );
    assertThrows(
      status.pretty.bind(null, "299"),
      undefined,
      "invalid status code",
    );

    assertStrictEq(status(status.pretty("500")), 500);
  },
});

Deno.test({
  name: "status:globals",
  fn(): void {
    MOVED_PERMANENTLY;
  },
});
