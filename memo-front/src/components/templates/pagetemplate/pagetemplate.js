// @flow
import React from 'react';
import type { Node } from 'react';
import './pagetemplate.scss';

type Props = {
  header: Node,
  children: Node,
}

const PageTemplate = ({ header, children }: Props) => {
  return (
    <div className="pagetemplate">
      {header}
      <main role="main">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;
