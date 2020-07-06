// rollup.config.js
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

export default [
  {
    input: 'components/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json'],
    output: [
      {
        file: 'index.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'xprog-ds'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**',
      }),
      json(),
      resolve(),
      sass()
    ]
  },
  {
    input: 'components/Templates/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json'],
    output: [
      {
        file: 'templates.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'xprog-ds/templates'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**',
      }),
      json(),
      resolve(),
      sass()
    ]
  },
  {
    input: 'components/Teasers/index.js',
    external: ['react', 'prop-types', 'sass', 'lodash', 'classnames', 'html2json'],
    output: [
      {
        file: 'teasers.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'xprog-ds/teasers'
      }
    ],
    plugins: [ 
      babel({
        exclude: 'example/**, node_modules/**, stories/**, .github/**, .storybook/**, mockup/**, utils/**',
      }),
      json(),
      resolve(),
      sass()
    ]
  }
];
