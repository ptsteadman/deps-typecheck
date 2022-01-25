workspace(
    name = "repro",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# https://github.com/bazelbuild/rules_nodejs/releases
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "f690430f4d4cc403b5c90d0f0b21842183b56b732fff96cfe6555fe73189906a",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.0.1/rules_nodejs-5.0.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = "16.13.2",
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    exports_directories_only = False,
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

# https://github.com/bazelbuild/rules_docker/releases
http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "a81d4ffb9464efd0e5b7c1eea53ecac569df2e31d6da91f9e8eec823302c8c76",
    strip_prefix = "rules_docker-c27194b35f56a1bea6e37f58e549230823653dc3",
    urls = ["https://github.com/bazelbuild/rules_docker/archive/c27194b35f56a1bea6e37f58e549230823653dc3.zip"],
)

load(
    "@io_bazel_rules_docker//repositories:repositories.bzl",
    container_repositories = "repositories",
)

container_repositories()

load("@io_bazel_rules_docker//repositories:deps.bzl", container_deps = "deps")

container_deps()

load("@io_bazel_rules_docker//nodejs:image.bzl", nodejs_image_repos = "repositories")

nodejs_image_repos()
