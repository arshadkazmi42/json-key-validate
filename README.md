# json-key-validate

[![Build Status](https://travis-ci.com/arshadkazmi42/json-key-validate.svg?branch=master)](https://travis-ci.com/arshadkazmi42/json-key-validate)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/json-key-validate.svg)](https://github.com/arshadkazmi42/json-key-validate)
[![LICENSE](https://img.shields.io/npm/l/json-key-validate.svg)](https://github.com/arshadkazmi42/json-key-validate/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/json-key-validate.svg)](https://www.npmjs.com/package/json-key-validate)
[![NPM Version](https://img.shields.io/npm/v/json-key-validate.svg)](https://www.npmjs.com/package/json-key-validate)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/json-key-validate.svg)](https://github.com/arshadkazmi42/json-key-validate/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/json-key-validate.svg)](https://github.com/arshadkazmi42/json-key-validate/commits/master)

Validates if all required keys are present in JSON object

> Give us a :star: if you like our work :heart:

## Install

```
$ npm install json-key-validate --save
```

## Usage

```javascript
const jkValidate = require('json-key-validate');

const JSON_DATA = {
  'name': 'arr-contains',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/arr-contains',
    'language': 'js'
  }
};

const isValid = jkValidate(JSON_DATA, ['name', 'author']);
// Output -> true

const isValid = jkValidate(JSON_DATA, ['url', 'author']);
// Output -> false

const isValid = jkValidate('JSON_DATA', ['url', 'author']);
// Output -> false
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/json-key-validate/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
