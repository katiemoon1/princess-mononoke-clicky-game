import React, { Component } from 'react'
import CharacterCard from "../CharacterCard"
import Wrapper from "../Wrapper"
import Title from "../Title"
import Navbar from "../Navbar"
import Footer from "../Footer"
import characters from "../../characters.json"

class ClickyGame extends Component {
  // Setting this.state.characters to the characters.json array
  state = {
    characters
  }

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Title>Princess Mononoke Clicky Game!</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            name={character.name}
            image={character.image}
          />
        ))}
        <Footer />
      </Wrapper>
    )
  }
}

export default ClickyGame