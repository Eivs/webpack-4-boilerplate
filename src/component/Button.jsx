import * as React from 'react';
import classNames from 'classnames';

// @flow
// @flow-runtime
type Props = {
  children?: React.Node,
  className: String,
  size?: String<'small' | 'normal' | 'medium' | 'large'>,
};

type State = {};

class Button extends React.PureComponent<Props, State> {
  static defaultProps = {
    children: 'Button',
    size: 'normal',
  };

  render() {
    const {
      children, className, size, ...restProps
    } = this.props;

    const btnSize = size !== 'normal' ? `is-${size}` : '';

    return (
      <button type="button" className={classNames('button', className, btnSize)} {...restProps}>
        {children}
      </button>
    );
  }
}

export default Button;
