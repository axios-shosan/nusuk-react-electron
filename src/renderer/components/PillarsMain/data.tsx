import React from 'react';
import Ihram from './Ihram';
import Tawaf from './Tawaf';
import Sai from './Sai';

type Props = {
  pillar: number;
};

export default function RenderText({ pillar }: Props) {
  switch (pillar) {
    case 0:
      return <Ihram />;
    case 1:
      return <Tawaf />;
    case 2:
      return <Sai />;

    default:
      return <Ihram />;
  }
}
