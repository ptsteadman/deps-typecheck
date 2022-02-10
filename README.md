## Repro

This illustrates the failure of `ts_project` to import type declarations when tsconfig / package.json
is in a subdirectory of the WORKSPACE root.

`bazel build dir:test_server` fails as it cannot import either a simple string type delcaration wrapped
with `js_library` or a global declaration merging of `express.request`.

This issue also occurs in `rules_nodejs` 4.6.1.

```
dir/testServer.ts(2,19): error TS2307: Cannot find module './a' or its corresponding type declarations.
dir/testServer.ts(8,29): error TS2339: Property 'foo' does not exist on type 'Request<ParamsDictionary>'.
```

Moving the files in `dir` out of the subdirectory allows the build to succeed.

