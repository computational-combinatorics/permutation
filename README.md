:seat: [@combinatorics/permutation](https://computational-combinatorics.github.io/permutation)
==

<p align="center">
<a href="https://commons.wikimedia.org/wiki/File:Symmetric_group_3;_Cayley_table;_matrices.svg">
<img alt="Symmetric group of order 3" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Symmetric_group_3;_Cayley_table;_matrices.svg" width="440">
</a><br/>
<a href="https://en.wikipedia.org/wiki/User:Watchduck">
User:Watchduck
</a>
/
<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>
</p>

Permutation library for JavaScript.
See [docs](https://computational-combinatorics.github.io/permutation/index.html).
Parent is [js-algorithms](https://github.com/make-github-pseudonymous-again/js-algorithms).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import { next , reversed , identity } from '@combinatorics/permutation' ;
next( reversed( identity( 3 ) ) ) ; // [ 0 , 1 , 2 ]
```

[![License](https://img.shields.io/github/license/computational-combinatorics/permutation.svg)](https://raw.githubusercontent.com/computational-combinatorics/permutation/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@combinatorics/permutation.svg)](https://www.npmjs.org/package/@combinatorics/permutation)
[![Tests](https://img.shields.io/github/actions/workflow/status/computational-combinatorics/permutation/ci.yml?branch=main&event=push&label=tests)](https://github.com/computational-combinatorics/permutation/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/computational-combinatorics/permutation.svg)](https://github.com/computational-combinatorics/permutation/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/computational-combinatorics/permutation.svg)](https://github.com/computational-combinatorics/permutation/issues)
[![Downloads](https://img.shields.io/npm/dm/@combinatorics/permutation.svg)](https://www.npmjs.org/package/@combinatorics/permutation)

[![Code issues](https://img.shields.io/codeclimate/issues/computational-combinatorics/permutation.svg)](https://codeclimate.com/github/computational-combinatorics/permutation/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/computational-combinatorics/permutation.svg)](https://codeclimate.com/github/computational-combinatorics/permutation/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/computational-combinatorics/permutation/main.svg)](https://codecov.io/gh/computational-combinatorics/permutation)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/computational-combinatorics/permutation.svg)](https://codeclimate.com/github/computational-combinatorics/permutation/trends/technical_debt)
[![Documentation](https://computational-combinatorics.github.io/permutation/badge.svg)](https://computational-combinatorics.github.io/permutation/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@combinatorics/permutation)](https://bundlephobia.com/result?p=@combinatorics/permutation)
