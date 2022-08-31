import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from 'antd';
import { library } from '../helpers/albumList';

const { TabPane } = Tabs;

const Home = () => {

  return (
    <>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab="FEATURES" key="1">
          <h1 className='featuredTitle'>Today is the day</h1>
          <div className='albums'>
            {
              library.map((e) => (
                <Link to='album' state={e} className="albumSelection">
                  <img src={e.image} alt="album" style={{width:"150px",marginBottom:"10px"}} />
                  <p>{e.title}</p>
                </Link>
              ))
            }
          </div>
        </TabPane>
        <TabPane tab="GENERS & MOODS" key="2">
        <h1 className='featuredTitle'>Pop Hits</h1>
          <div className='albums'>
            {
              library.slice(7,13).map((e) => (
                <Link to='album' state={e} className="albumSelection">
                  <img src={e.image} alt="album" style={{width:"150px",marginBottom:"10px"}} />
                  <p>{e.title}</p>
                </Link>
              ))
            }
          </div>
        </TabPane>
        <TabPane tab="NEW RELEASES" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  )
}

export default Home;
