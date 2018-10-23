import * as React from 'react';
import proptypes from 'prop-types';

const propTypes = {
  children: proptypes.node,
};

const defaultProps = {
  children: null,
};

const Button = ({ children }) => (
  <button type="button" className="button">
    {children}
  </button>
);

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
