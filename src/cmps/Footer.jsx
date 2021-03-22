import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="logo">dine</div>
                <div className="list1">
                    <ul>
                        <li>Marthwaite, Sedbergh</li>
                        <li>Cumbria</li>
                        <li>+00 44 123 4567</li>
                    </ul>
                </div>
                <div className="list2">
                    <ul>
                        <li>Open Times</li>
                        <li>Mon - Fri: 09:00 AM - 10:00 PM</li>
                        <li>Sat - Sun: 09:00 AM - 11:30 PM</li>
                    </ul>
                </div>
            </section>
        )
    }
}
