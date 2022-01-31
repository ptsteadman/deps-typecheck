## Repro

This is a potential example in a change in deps behavior between `ts_library` and `ts_project`.

The `//:test_ts_library` target builds without `@npm//@types/node` specified as a dep.

The `//:test_ts_project` target fails to build unless `@npm//@types/node` is specified as a dep.
