# 🛠️ Hariram Developer Toolkit

A modular, zero-dependency Node.js utility toolkit for text transformations, secure cryptographic generation, and runtime performance diagnostics.

## Features

- **Text Manipulation:** Slug generation, camelCase to snake_case converter, word & character analytics.
- **Crypto & Security:** Cryptographically secure password generation with custom lengths, SHA-256 token hashing, and UUID v4 generation.
- **System Monitoring:** OS memory breakdown, CPU metrics, and human-readable memory formatting.
- **Data Serialization:** Array to CSV conversion and JSON formatting.

## Usage

```javascript
import { slugify, generateSecurePassword, getSystemStats } from './src/index.js';

console.log(slugify('My New Feature'));
console.log(generateSecurePassword(24));
console.log(getSystemStats());
```

## Running Tests

```bash
npm test
```
