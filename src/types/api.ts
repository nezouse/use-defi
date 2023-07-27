import { Address } from 'viem';

import { components, operations } from '../generated/api';

export type Hop = components['schemas']['Hop'];
export type Transaction = Omit<components['schemas']['Transaction'], 'from'>;

export type ApproveTransaction = Omit<components['schemas']['WalletApproveTransaction'], 'tx'> & {
  // FIXME: Missing in API: No TX Schema only Record<never, never>
  tx: Transaction;
};

// FIXME: Missing in API: Incorrect datatype, just using approve as placeholder
export type TransferTransaction = ApproveTransaction;

export type BundleAction = components['schemas']['Action']['action'];

// FIXME: Missing in API: No response type for shortcuts/bundle endpoint
export type Bundle = {
  amountOut: string;
  createdAt: number;
  gas: number;
  route: Hop[];
  tx: Transaction;
};

export type PoolPosition = components['schemas']['DefiToken'];
export type BasePosition = components['schemas']['BaseToken'];

export type Position = (PoolPosition | BasePosition) & {
  // FIXME: Missing in API
  chainId: number;
};

// FIXME: Missing in API
export type ProtocolName =
  | 'lido'
  | 'across'
  | 'yearn-finance'
  | 'frax-ether'
  | 'curve-dex'
  | 'aave-v2'
  | 'compound'
  | 'aave-v3'
  | 'fraxlend'
  | 'angle'
  | 'rocket-pool'
  | 'archimedes-finance'
  | 'balancer-v2'
  | 'curve-gauge'
  | 'aura'
  | 'concentrator'
  | 'erc4626'
  | 'morpho-aave'
  | 'sideshift'
  | 'stargate'
  | 'exactly'
  | 'gearbox'
  | 'damm-finance'
  | 'beefy'
  | 'vesper'
  | 'stakedao-sd'
  | 'convex'
  | 'sonne-finance'
  | 'iron-bank'
  | 'venus'
  | 'apeswap-lending'
  | 'autofarm'
  | 'alpaca-lending'
  | 'radiant-v2'
  | 'wefi'
  | 'quickswap-dex'
  | 'sushiswap'
  | 'benqi-lending'
  | 'trader-joe-lend';

export type ExecutableRoute = {
  amountOut: string;
  createdAt: number;
  gas: number;
  route: Hop[];
  tx: Transaction;
};

export type API_ApproveResponse = Omit<components['schemas']['WalletApproveTransaction'], 'tx'> & { tx: Transaction };
export type API_ApproveOptions = operations['WalletController_createApproveTransaction']['parameters']['query'];

// FIXME: These are marked as `string[]` in the typings, but the bundle endpoint can't handle single value arrays and will fail.
type API_RouteOptions_Overwrites = {
  tokenIn: string;
  amountIn: string;
  tokenInAmountToTransfer?: string;
  tokenInAmountToApprove?: string;
};

export type API_RouteOptions = Omit<
  operations['RouterController_routeShortcutTransaction']['parameters']['query'],
  keyof API_RouteOptions_Overwrites
> &
  API_RouteOptions_Overwrites;

// FIXME: Missing in API
export type API_AllowancesOptions = {
  chainId?: number;
  fromAddress: Address;
};
// FIXME: Missing in API
export type API_AllowancesResponse = {
  token: Address;
  spender: Address;
  amount: string;
}[];
