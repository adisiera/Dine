import React, { Component } from 'react'
import {HighlightsPreview} from '../cmps/HighlightsPreview.jsx'

export function Highlights(props) {
   
        return (
            <section className="highlights-cont flex">
                <div className="left-highlights">
                    <img src="https://res.cloudinary.com/drak3llqt/image/upload/v1616411563/pattern-divide_eafuxi.svg" />
                    <h1>A few highlights from our menu</h1>
                    <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
  Our menu is revamped every season.</p>
                </div>
                <div className="highlights-list">
                    {props.highlights.map(highlight => <HighlightsPreview key={highlight.id} highlight={highlight} /> )}
                </div>
            </section>
        )
    
}
