import { Trans } from '@lingui/macro';
import { FormatBytes } from '@spare/core';
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';

export default function FarmCardTotalNetworkSpace() {
  const totalNetworkSpace = useSelector(
    (state: RootState) => state.full_node_state.blockchain_state?.space ?? 0,
  );

  return (
    <FarmCard
      title={
        <Trans>Total Network Space</Trans>
      }
      value={<FormatBytes value={totalNetworkSpace} precision={3} />}
      description={
        <Trans>
          Best estimate over last 24 hours
        </Trans>
      }
    />
  );
}