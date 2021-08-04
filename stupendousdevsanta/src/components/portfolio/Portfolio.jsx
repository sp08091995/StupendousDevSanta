import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'

export default function Portfolio() {
    const list=[
        {
            id: "featured",
            title:"Featured"
        },{
            id: "node",
            title:"MERN/ MEVN"
        },{
            id: "java",
            title:"Spring/ SpringBoot"
        }
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>PortFolio</h1>
                <ul>
                    {list.map((item)=>{
                        return <PortfolioList title={item.title}/>
                    })}
                </ul>
                <div className="container">
                    <div className="item">
                    <img
                        src="https://i.stack.imgur.com/4TJXX.png"
                        alt=""
                        />
                        <h3>Some Title</h3>
                    </div>
                    <div className="item">
                    <img
                        src="https://i.stack.imgur.com/4TJXX.png"
                        alt=""
                        />
                        <h3>Some Title</h3>
                    </div>
                    <div className="item">
                    <img
                        src="https://i.stack.imgur.com/4TJXX.png"
                        alt=""
                        />
                        <h3>Some Title</h3>
                    </div>
                    <div className="item">
                    <img
                        src="https://i.stack.imgur.com/4TJXX.png"
                        alt=""
                        />
                        <h3>Some Title</h3>
                    </div>
                    <div className="item">
                    <img
                        src="https://i.stack.imgur.com/4TJXX.png"
                        alt=""
                        />
                        <h3>Some Title</h3>
                    </div>
                    <div className="item">
                    <img
                        src="https://i.stack.imgur.com/4TJXX.png"
                        alt=""
                        />
                        <h3>Some Title</h3>
                    </div>
                    
                </div>
        </div>
    )
}
