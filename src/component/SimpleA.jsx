import React from 'react';
import { DatePicker } from '@QCFE/lego-ui';

const SimpleA = () => (
  <div>
    <DatePicker mode="range" enableTime enableSeconds dateFormat="Y-m-d" defaultDate={new Date()} />
  </div>
);
export default SimpleA;
