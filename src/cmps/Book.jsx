import React, { Component } from 'react'

export class Book extends Component {
    render() {
        return (
            <div className="book-cont flex">
                <img src="https://res.cloudinary.com/drak3llqt/image/upload/v1616410177/family-gathering-desktop_swfflb.jpg" />
                <div className="book-text">
                    <h1>Family Gathering</h1>
                    <p> We love catering for entire families. So please bring everyone along for a special meal with your
  loved ones. We’ll provide a memorable experience for all.</p>
                    <button> <span>Book a table</span> </button>
                    <ul className="clean-list flex column">
                        <li>Family Gathering</li>
                        <li>Special Events</li>
                        <li>Social Events</li>
                    </ul>
                </div>
            </div>
        )
    }
}
