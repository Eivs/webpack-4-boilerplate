import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { NavLink as Link } from 'react-router-dom';

const MainView = ({ route }) => (
  <div>
    <Link to="/simple-a" className="button" activeClassName="is-success">
      SimpleA
    </Link>
    <Link to="/simple-b" className="button" activeClassName="is-success">
      SimpleB
    </Link>
    <hr />
    <div className="view">{renderRoutes(route.childRoutes)}</div>
  </div>
);

MainView.prototype.propTypes = {
  route: PropTypes.object, // eslint-disable-line
};

export default MainView;
