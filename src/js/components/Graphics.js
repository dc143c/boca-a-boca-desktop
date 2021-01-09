import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries, VerticalRectSeries, RadialChart} from 'react-vis';
import './Graphics.css';

function Graphics(){

    
    const timestamp = new Date('Dec 21 2020').getTime();
    const ONE_DAY = 86400000;
    const DATA = [
        {x0: ONE_DAY * 2, x: ONE_DAY * 3, y: 1},
        {x0: ONE_DAY * 7, x: ONE_DAY * 8, y: 1},
        {x0: ONE_DAY * 8, x: ONE_DAY * 9, y: 1},
        {x0: ONE_DAY * 9, x: ONE_DAY * 10, y: 2},
        {x0: ONE_DAY * 10, x: ONE_DAY * 11, y: 2.2},
        {x0: ONE_DAY * 19, x: ONE_DAY * 20, y: 1},
        {x0: ONE_DAY * 20, x: ONE_DAY * 21, y: 2.5},
        {x0: ONE_DAY * 21, x: ONE_DAY * 24, y: 1}
      ].map(el => ({x0: el.x0 + timestamp, x: el.x + timestamp, y: el.y}));
    const meinData = [ 
        {angle: 1, radius: 10},
        {angle: 2, label: 'Super Custom label', 
        subLabel: 'With annotation', radius: 20}, 
        {angle: 5, radius: 5, label: 'Alt Label'}, 
        {angle: 3, radius: 14}, 
        {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'}
    ];

    return(
        <>
        <div className='title'>
            <h2 className='title-text'>Visão Geral</h2>
        </div>
        <div className='container-content'>
            <div className='graph-l'>
                <XYPlot
                width={250}
                height={250}
                xDomain={[timestamp - 2 * ONE_DAY, timestamp + 30 * ONE_DAY]}
                yDomain={[0.1, 2.1]}
                xType="time">
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries data={DATA} style={{stroke: '#fff'}} />
                </XYPlot>
            <p> Mais vendidos </p>
            <ul>
                <li> Item 1 </li>
                <li> Item 2 </li>
                <li> Item 3 </li>
                <li> Item 4 </li>
            </ul>
            </div>
            <div className='graph-r'>
            <RadialChart
            data={meinData}
            width={250}
            height={250} />
            <RadialChart
            data={meinData}
            width={250}
            height={250} />
            </div>
        </div>
        </>
    )
}

export default Graphics;