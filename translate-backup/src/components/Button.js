import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // Getting data using this.context, cannot be used when we are accessing multiple different
  // context objects inside a single component

  // static contextType = LanguageContext;

  // render() {
  //   const text = this.context === "english" ? "Submit" : "Voorleggen";
  //   return <button className="ui button primary">{text}</button>;
  // }

  // Getting data using Consumer component
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
