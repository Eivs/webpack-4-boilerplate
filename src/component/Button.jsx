import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { omit } from 'lodash';

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
    const {
      children, className, size, ...resProps
    } = this.props;
    const btnSize = size ? `is-${size}` : '';
    const otherProps = omit(resProps, 'style');
    return (
      <button type="button" className={classNames('button', className, btnSize)} {...otherProps}>
        {children}
      </button>
    );
  }
}

export default Button;
