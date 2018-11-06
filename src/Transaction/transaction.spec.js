// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React from 'react';
import { shallow } from 'enzyme';

import EthApi from '@parity/api';
import '@parity/shared/lib/environment/tests';

// Mock API for tests
import * as Api from '../parity';
import BigNumber from 'bignumber.js';
import { Transaction, LocalTransaction } from './transaction';

Api.api.util = EthApi.prototype.util;

describe('dapps/localtx/Transaction', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      const transaction = {
        hash: '0x1234567890',
        from: '0x123467',
        nonce: new BigNumber(15),
        gasPrice: new BigNumber(10),
        gas: new BigNumber(10)
      };

      const stats = {
        firstSeen: 1,
        propagatedTo: {}
      };

      const rendered = shallow(
        <Transaction
          idx={ 1 }
          isLocal={ false }
          transaction={ transaction }
          blockNumber={ new BigNumber(0) }
          stats={ stats }
        />
      );

      expect(rendered).toBeDefined();
    });
  });
});

describe('dapps/localtx/LocalTransaction', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      const rendered = shallow(
        <LocalTransaction
          hash={ '0x1234567890' }
          status={ 'pending' }
        />
      );

      expect(rendered).toBeDefined();
    });
  });
});
