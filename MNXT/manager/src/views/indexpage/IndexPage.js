import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import Login from '../../components/login/login'

function IndexPage() {
  return (
    <div className="wrap">
          <Login />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
