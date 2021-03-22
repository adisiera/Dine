
import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        return (
            <section className="hero-cont">
                <div className="logo">dine</div>
                <h1>Exquisite dining since 1989</h1>
                <p>  Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
  the comfort of our farmhouse.</p>
                <button className="book-btn"><span>Book a table</span></button>
            </section>
        )
    }
}
