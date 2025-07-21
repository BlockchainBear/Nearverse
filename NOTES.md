# Deployment Notes for Decentraland NEAR MVP

This document outlines the current state of the project and the challenges faced during the deployment process.

## Current Status

The project is in the initial development phase. A basic `LandNFT` smart contract has been created in `decentraland-near/index.js`, and the necessary dependencies have been installed.

## The Build Issue

The primary blocker is a build error that occurs when compiling the smart contract using `near-sdk-js`. The error message is related to `clang`, which is a C++ compiler used in the build process.

### Error Message

```
[exec] › ✖  error     Command failed: node_modules/near-sdk-js/lib/cli/deps/wasi-sdk/bin/clang --sysroot=node_modules/near-sdk-js/lib/cli/deps/wasi-sdk/share/wasi-sysroot --target=wasm32-wasi -nostartfiles -Oz -flto -D_GNU_SOURCE '-DCONFIG_VERSION="2021-03-27"' -DCONFIG_BIGNUM -Inode_modules/near-sdk-js/lib/cli/deps/quickjs -I. build/builder.c node_modules/near-sdk-js/lib/cli/deps/quickjs/quickjs.c node_modules/near-sdk-js/lib/cli/deps/quickjs/libregexp.c node_modules/near-sdk-js/lib/cli/deps/quickjs/libunicode.c node_modules/near-sdk-js/lib/cli/deps/quickjs/cutils.c node_modules/near-sdk-js/lib/cli/deps/quickjs/quickjs-libc-min.c node_modules/near-sdk-js/lib/cli/deps/quickjs/libbf.c -lm -Wl,--no-entry -Wl,--allow-undefined -Wl,-z,stack-size=262144 -Wl,--lto-O3 -o build/contract.wasm
```

### Attempted Solutions

I have attempted the following solutions to resolve the build issue:

1.  **Installed Xcode Command Line Tools:** The tools are installed, but the issue persists.
2.  **Reset Xcode Path:** I tried to reset the Xcode path, but the command requires `sudo` access, which is not available in the current environment.
3.  **Updated `near-sdk-js`:** I updated the `near-sdk-js` dependency to the latest version, but the error remains.
4.  **Simplified the Contract:** I simplified the smart contract to rule out any complexity-related issues, but the build still fails.
5.  **Docker Build:** I attempted to build the contract in a Docker container, but Docker is not available in the current environment.

## Next Steps

The recommended next step is to try to build the contract in a different environment, such as a new virtual machine or a different computer. It is also recommended to reach out to the NEAR community for support on the `near-sdk-js` build issue.
