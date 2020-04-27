import React from 'react'

import Layout from '../layouts/Layout.layout';
import Component from '../components/Component.component';

const Amp = () => (
  <Layout pageCurrent="amp">
        <Component pageCurrent="amp"  />
  </Layout>
)

export const config = { amp: true };

export default Amp
