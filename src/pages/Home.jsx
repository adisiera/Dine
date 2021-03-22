import { Hero } from '../cmps/Hero'
import { Place } from '../cmps/Place'
import { Food } from '../cmps/Food'
import { Book } from '../cmps/Book'
import { Reserve } from '../cmps/Reserve'
import { Footer } from '../cmps/Footer'
import { Component } from 'react';
import { dineService } from '../services/dineService';
import { Highlights } from '../cmps/HighlightsList';



export class Home extends Component {
  state = {
    highlights: []
  }

  componentDidMount(){
    this.loadHighlights()
  }

  loadHighlights = () => {
    dineService.getHighlights()
    .then((highlights) => this.setState({ highlights }))
  }
  render() {
    const {highlights} = this.state
    console.log(highlights);
    if (!highlights) return console.log('no highlights here yet');
    return (
      <main className="home-container">
        <Hero></Hero>
        <Place></Place>
        <Food></Food>
        <Highlights highlights={highlights} />
        <Book></Book>
        <Reserve></Reserve>
        <Footer></Footer>
      </main>
    )
  }
};
