import React, { Component } from 'react'
import style from './Home.scss';
import Header from '../../components/Header';
import LeftList from '../../components/leftList';
import RightList from '../../components/rightList';
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