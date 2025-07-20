# Decentraland NEAR Clone

This project is a clone of Decentraland adapted to run on the NEAR Protocol.

## Setup Instructions

### 1. Environment Setup

Install Node.js (v16+), npm, Rust (v1.65+), and NEAR CLI globally.

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs && npm install -g near-cli && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 2. Clone Repositories

The following repositories have been cloned:

*   **Decentraland:**
    *   `protocol`
    *   `cli`
    *   `sdk`
    *   `decentraland-crypto-utils`
    *   `technical-tutorials`
    *   `avatar-assets`
*   **NEAR Protocol:**
    *   `nearcore`
    *   `near-sdk-js`
    *   `near-cli`

### 3. NEAR Setup

Log in to your NEAR testnet account:

```bash
near login
```

Create a testnet account:

```bash
near create-account my-decentraland.testnet --masterAccount testnet
```

Initialize a new NEAR smart contract project:

```bash
npx near-sdk-js init --projectName decentraland-near
```
