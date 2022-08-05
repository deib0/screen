import React, {useEffect, useRef} from 'react';
import './home.scss';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';

export const Home = () => {
  return (
    <div className="home">
      <header className="header" />
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="bordered section2">
        </section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer>
        数据统计于：{new Date().toLocaleDateString()}
      </footer>
    </div>
  )
}
