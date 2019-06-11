import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import Login from '../login/login.js'

function IndexPage() {
  return (
    <div className={styles.wrap}>
          <Login />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
