import React from "react"

interface Props {
  gameName: string,
  boxart: string
}

export class GameComponent extends React.Component<Props> {
  render() {
    return <div className="text-bg-dark">
      <p>Game naam: {this.props.gameName}</p>
      <img src={this.props.boxart} alt="" /></div>

  }

}