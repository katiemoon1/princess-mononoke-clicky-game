import React, { Component } from "react"
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import characters from "./characters.json"

class App extends Component {
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

export default App;
