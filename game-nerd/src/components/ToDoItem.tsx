import React from "react";

interface Props {
  name: string,
  subtext: string,
  done: boolean
}

interface State {
  done: boolean
}

export class ToDoItem extends React.Component<Props, State>{
  constructor(props: Props) {
    //super
    super(props);
    //state
    this.state = {
      done: this.props.done
    }
    //event handlers
    this.onClicked = this.onClicked.bind(this)
  }

  render() {
    return (<li className="list-group-item">
      <div className="form-check">
        <input className="form-check-input"
          type="checkbox" name="checkbox"
          checked={this.state.done}
          onClick={this.onClicked} />
        <label className="form-check-label">
          <strong> {this.props.name} </strong><br />
          {this.props.subtext}
        </label>
      </div>
    </li>
    )
  }

  onClicked(event: React.MouseEvent) {
    this.setState({ done: !this.state.done })
  }
}
