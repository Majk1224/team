import React, { Component } from 'react'
import style from './Home.css';
import Header from '../Header';
import LeftList from '../leftList';
import RightList from '../rightList';
class Home extends Component {
    render () {
        return (
            <div className={style.Home}>
                <Header></Header>
                <div className={style.main}>
                    <LeftList></LeftList>
                    <RightList></RightList>
                </div>
            </div>
        )
    }
}

export default Home