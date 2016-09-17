# patternplate-legacy-defaults

Legacy defaults for patternplate projects migrating from 0.x.

## Rationale

[patternplate-server][1] dropped default configurations
for `.transforms` and `.patterns` with the update from `0.18` to `1.0`.

To make migrating from `0.18` easier the former defaults moved to this project.

## Installation

Grab it from npm

```
npm install --save patternplate-legacy-defaults
```

## Usage

Merge legacy transforms default configuration

```js
// configuration/patternplate-server/transforms.js
const defaults = require('patternplate-legacy-defaults');
const merge = require('lodash.merge');
module.exports = merge({}, defaults.transforms, {});
```

Merge legacy patterns default configuration

```js
// configuration/patternplate-server/patterns.js
const defaults = require('patternplate-legacy-defaults');
const merge = require('lodash.merge');
module.exports = merge({}, defaults.patterns, {});
```

---
Released under the MIT License

[1]: https://github.com/sinnerschrader/patternplate-server
