import { Address } from 'viem';

import { Position, ProtocolName } from '../../types/api';
import { LoadingState } from '../../types/enso';

export type UsePositionsPayload = {
  data?: Position[];
  status: LoadingState;
};

export type UsePositionsArgs = {
  chain?: number;
  token?: Address;
  protocol?: ProtocolName;
};
