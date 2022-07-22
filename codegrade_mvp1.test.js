import MutationObserver from 'mutationobserver-shim';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './src/index.js'
import React from 'react'


test('Is the latest version of the project', () => {
  const pjson = require('./package.json')
  expect(pjson.version).toBe('0.0.1')
});

