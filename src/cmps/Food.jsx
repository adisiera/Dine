import React, { Component } from 'react'

export class Food extends Component {
    render() {
        return (
            <section className="food-cont flex">    
                <div className="left-side">
                <h1>The most locally sourced food</h1>
                <p> All our ingredients come directly from our farm or local fishery. So you can be sure that you’re 
  eating the freshest, most sustainable food.</p>
                </div>
                <img src="https://res.cloudinary.com/drak3llqt/image/upload/v1616410177/locally-sourced-desktop_xt0ods.jpg" />
            </section>
        )
    }
}
