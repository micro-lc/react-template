/*
 * Copyright 2021 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import {IntlProvider} from 'react-intl'
import {MemoryRouter} from 'react-router-dom'
import {render} from '@testing-library/react'

import enStrings from './strings/locales/en.json'

const testStrings = {
  ...enStrings,
  'test.string': 'string test',
  'test.values.string': 'string with values {value}'
}

export function renderWrapperComponent (children) {
  return render(
    <IntlProvider locale={'en'} messages={testStrings}>
      {children}
    </IntlProvider>
  )
}

export function renderWrapperContainer (children, initialEntries) {
  return render(
    <IntlProvider locale={'en'} messages={testStrings}>
      <MemoryRouter initialEntries={initialEntries}>
        {children}
      </MemoryRouter>
    </IntlProvider>
  )
}
