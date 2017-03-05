# patternplate-legacy-defaults

[![Greenkeeper badge](https://badges.greenkeeper.io/sinnerschrader/patternplate-legacy-defaults.svg)](https://greenkeeper.io/)

Legacy defaults for patternplate projects migrating from 0.x.

## Rationale

[patternplate-server][1] dropped default configurations
for `.transforms` and `.patterns` with the update from `0.18` to `1.0`.

To make migrating from `0.18` easier the former defaults moved to this project.

| Warning   |     |
|:---------:|:----|
| :warning: | This installs the former default `patternplate-transform-*` packages with the exact versions used by patternplate at version 0.18. For most transforms further development takes place on higher, breaking version. To benefit from advances in transform development upgrade to the latest versions of the transforms you use. |

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

Use to restore default task configuration

```js
// configuration/patternplate-server/tasks.js
const merge = require('lodash.merge');
const defaults = require('patternplate-legacy-defaults');
const patterns = require('./patterns');
const transforms = require('./transforms');

const inherited = {patterns, transforms};

module.exports = merge({},
  {
    // inherit common pattern and transforms config
    'build-bundles': inherited,
    'build-commonjs': inherited
  },
  defaults.tasks, // pull in legacy defaults
  {
    // your specific configuration
  }
)
```

## Included transforms

The following transforms are included in `patternplate-legacy-defaults`. For convenience the transform packages are clustered:

*  :x: **No active development** - Update to `current` version
*  :white_check_mark: **Active development** - Safe to use 

| Transform Name   | Included | Current | Active |
|:-----------------|:--------:|:-------:|:------:|
| [babel][babel] | `0.2.1`  | `1` | :x: |
| [browserify][browserify]   | `0.3.5` | `1` | :x: |
| [less][less] | `0.2.5` | `2` | :x: |
| [markdown][markdown] | `0.1.1` | `0.1.1` | :white_check_mark: |
| [react][react] | `0.4.13` | `1` | :x: |
| [react-mount][react-mount] | `0.1.2` | `0.1` | :white_check_mark: |
| [react-to-markup][react-to-markup] | `0.3.8` | `1` | :x: |
| [resolve-imports][resolve-imports] | `0.1.1` | `0.1` | :white_check_mark: |
| [resolve-includes][resolve-includes] | `0.1.4` | `0.1` | :white_check_mark: |
| [uglify][uglify] | `0.1.0` | `0.1` | :white_check_mark: |



---
Released under the MIT License

[1]: https://github.com/sinnerschrader/patternplate-server
[babel]: https://github.com/sinnerschrader/patternplate-transform-babel
[browserify]: https://github.com/sinnerschrader/patternplate-transform-browserify
[less]: https://github.com/sinnerschrader/patternplate-transform-less
[markdown]: https://github.com/sinnerschrader/patternplate-transform-markdown
[react]: https://github.com/sinnerschrader/patternplate-transform-react
[react-mount]: https://github.com/sinnerschrader/patternplate-transform-react-mount
[react-to-markup]: https://github.com/sinnerschrader/patternplate-transform-react-to-markup
[resolve-imports]: https://github.com/sinnerschrader/patternplate-transform-resolve-imports
[resolve-includes]: https://github.com/sinnerschrader/patternplate-transform-resolve-includes
[uglify]: https://github.com/sinnerschrader/patternplate-transform-uglify
