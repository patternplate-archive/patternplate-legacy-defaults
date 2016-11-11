'use strict';
const merge = require('lodash.merge');
const patterns = require('./patterns');
const transforms = require('./transforms');

module.exports = {
  'build-bundles': {
    filters: {
      inFormats: ['less', 'css', 'js'],
      baseNames: ['index']
    },
    patterns: merge({}, patterns, {
      formats: {
        js: {
          name: 'Script',
          transforms: ['browserify'],
          build: true
        }
      }
    }),
    transforms: merge({}, transforms, {
      browserify: {
        opts: {
          debug: false
        },
        transforms: {
          uglifyify: {
            enabled: true
          }
        }
      },
      less: {
        opts: {
          ieCompat: true,
          compress: true,
          sourceMap: false
        },
        plugins: {
          'clean-css': {
            enabled: true
          }
        }
      },
      uglify: {
        enabled: true
      }
    })
  },
  'build-commonjs': {
    filters: {
      inFormats: ['less', 'css', 'js', 'jsx', 'html', 'md'],
      baseNames: ['index']
    },
    patterns: {
      formats: {
        html: {
          name: 'component',
          transforms: ['react', 'resolve-imports'],
          dependencies: ['react']
        },
        js: {
          name: 'script',
          transforms: ['babel', 'resolve-imports']
        },
        jsx: {
          name: 'component',
          transforms: ['react', 'resolve-imports'],
          dependencies: ['react']
        },
        less: {
          name: 'style',
          transforms: ['resolve-includes'],
          dependencies: ['less', 'less-plugin-npm-import']
        },
        md: {
          name: 'documentation',
          transforms: []
        }
      }
    },
    pkg: {
      style: 'style'
    },
    resolve: '%(outputName)s/%(patternId)s/index.%(extension)s',
    transforms: merge({}, transforms, {
      react: {
        outFormat: 'js',
        resolveDependencies: false
      }
    })
  }
};
