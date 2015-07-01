#!/usr/bin/env node

'use strict';

var assert = require('assert');

var _ = require('lodash');

// Passes
console.log('\nrunning _.includes() before requiring sequelize');
runTest();

require('sequelize');

// Fails
console.log('\nrunning _.includes() after requiring sequelize');
runTest();

function runTest() {
    assert(
        !_.includes(['foo-9', 'foo-10'], 'foo-1'),
        "`_.includes(['foo-9', 'foo-10'], 'foo-1')` should return false"
    );
    console.log('test passed');
}
