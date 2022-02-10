## Repro

This illustrates the failure of `ts_project` to import type declarations when tsconfig / package.json
is in a subdirectory of the WORKSPACE root.

`bazel build dir:test_server` fails as it cannot import either a simple string type delcaration wrapped
with `js_library` or a global declaration merging of `express.request`.
