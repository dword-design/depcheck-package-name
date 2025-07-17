import { expect, test } from '@playwright/test';

import self from '.';

test('works', () => expect(self`foo${1}`).toEqual('foo1'));
