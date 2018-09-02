import React, { Component } from 'react';
import PageTemplate from 'components/templates/pagetemplate';
import NotFoundBase from 'components/base/notfound';
import Header from 'components/base/header';

class NotFound extends Component {
  render() {
    return (
      <PageTemplate header={<Header />}>
        <NotFoundBase />
      </PageTemplate>
    );
  }
}

export default NotFound;
