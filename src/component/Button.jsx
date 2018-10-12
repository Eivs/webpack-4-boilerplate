import React, { PureComponent } from 'react';
import classNames from 'classnames';

// @flow
type Props = {
  children?: React.Node,
  className: string,
  size?: 'small' | 'normal' | 'medium' | 'large',
};

type State = {};

class Button extends PureComponent<Props, State> {
  static defaultProps = {
    children: 'Button',
    size: '',
  };

  render() {
    const { children, className, size } = this.props;
    const btnSize = size ? `is-${size}` : '';
    return (
      <button type="button" className={classNames('button', className, btnSize)}>
        {children}
      </button>
    );
  }
}

export default Button;
