import React from 'react';

import Header from './Header';
import Gender from './Gender';
import DateOfBirth from './DateOfBirth';
import Measures from './Measures';

export default class BmiApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DateOfBirth />
        <Measures />
        <Gender />
      </div>
    );
  }
}
