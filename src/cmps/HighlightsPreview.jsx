import React from 'react'

export function HighlightsPreview(props) {
    const { highlight } = props
    return (

        <article className="highlight-preview flex">
            <img src={highlight.imgUrl}/>
            <div className="prev-text">
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
            </div>
        </article>

    )
}
