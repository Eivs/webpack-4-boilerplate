import React from 'react';
import { DatePicker, Message } from '@QCFE/lego-ui';

const SimpleB = () => (
  <div>
    <DatePicker
      dateFormat="Y-m-d"
      mode="range"
      defaultDate={['2018-10-04', '2018-10-10']}
      onChange={date => {
        if (date.length > 0) Message.info(date.toString());
      }}
    />
  </div>
);
export default SimpleB;
