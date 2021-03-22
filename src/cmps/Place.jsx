import React, { Component } from 'react'

export class Place extends Component {
    render() {
        return (
            <section className="place-cont flex">
                <img src="https://res.cloudinary.com/drak3llqt/image/upload/v1616410178/enjoyable-place-desktop_xt6q4k.jpg" />
                <div className="right-side">
                    <h1>Enjoyable place for all the family</h1>
                    <p>  Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
  a tour of the farm before your meal.</p>
                </div>
            </section>
        )
    }
}
