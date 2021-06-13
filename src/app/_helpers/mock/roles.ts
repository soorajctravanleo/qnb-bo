import { MmockRole, RoleStatus } from '../models/backend';

export const MOCK_ROLES: MmockRole[] = [
  new MmockRole(
    1,
    'system',
    'qnb-qatar',
    'system has access to all menus and features',
    'maker',
    ['ADMGRP'],
  ),

  new MmockRole(
    2,
    'n-system',
    'qnb-france',
    'system has access to all menus and features',
    'checker',
    ['ARMMPLGRP'],
  ),

  new MmockRole(
    3,
    'u-system',
    'qnb-uae',
    'system has access to all menus and features',
    'makerchecker',
    ['ACCOUNT_DELETE'],
  ),
];
