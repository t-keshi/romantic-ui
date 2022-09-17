import React from 'react';

import { Typography } from '../../components/Typography/Typography';
import { css } from '@emotion/css';
import { theme } from '../../theme';
import { Layout } from '../layout/Layout';
import { SvgIcon } from '../../components/SvgIcon/SvgIcon';
import { AttachmentPin } from '../../components/icons';

const logo = css`
  width: 200px;
  height: auto;
`;

const avatar = css`
  margin-right: ${theme.spacing(1)};
`;

export const Page: React.FC = () => {
  return (
    <Layout>
      <SvgIcon color="primary" icon={<AttachmentPin />} />
      <Typography as="a" href="hoge" />
    </Layout>
  );
};
