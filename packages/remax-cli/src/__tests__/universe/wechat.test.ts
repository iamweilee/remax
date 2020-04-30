import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@remax/types';

describe('build universe app in ali', () => {
  runTest('universe', Platform.wechat, path.resolve(__dirname, `../fixtures/universe/expected/wechat`));
});
