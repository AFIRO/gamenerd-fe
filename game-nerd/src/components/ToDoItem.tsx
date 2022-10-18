import React from "react";

interface Props {
  name: string,
  subtext: string,
  done: boolean
}

export class ToDoItem extends React.Component<Props>{
  render() {
    return (<li className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="checkbox" checked={this.props.done} />
        <label className="form-check-label">
          <strong> {this.props.name} </strong><br />
          {this.props.subtext}
        </label>
      </div>
    </li>
    )
  }
}
