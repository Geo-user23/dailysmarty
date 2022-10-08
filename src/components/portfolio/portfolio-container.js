import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";
export default class PortfolioContainer extends Component {
    constructor() {
        super();
    }

    portfolioItems() {
        const data = ["quip", "eventbright", "sonic"];

        return data.map(item => {
            return <PortfolioItem title ={item} />;
        })
    }
    render() {
        return (
            <div>
                <h2>Porfolio items go here...</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}