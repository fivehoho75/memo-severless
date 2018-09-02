import React, { Component } from 'react';
import PageTemplate from 'components/templates/pagetemplate';
import HomeTemplate from 'components/templates/hometemplate';
import Header from 'components/base/header';

class Home extends Component {
  render() {
    return (
      <PageTemplate header={<Header />}>
        <HomeTemplate />
      </PageTemplate>
    );
  }
}

export default Home;
