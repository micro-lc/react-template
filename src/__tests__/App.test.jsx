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
import { screen } from '@testing-library/react'

import {renderWrapperComponent} from '../utilsTests'
import App from '../App'

it('renders without crashing', () => {
  const {asFragment} = renderWrapperComponent(<App />)
  expect(asFragment()).toMatchSnapshot()
})

it('intl works', () => {
  renderWrapperComponent(<App />)

  const saveAndReload = screen.getByText('Edit src/App.js and save to reload')
  expect(saveAndReload).toBeInTheDocument()

  const learnReact = screen.getByText('Learn React')
  expect(learnReact).toBeInTheDocument()
})
