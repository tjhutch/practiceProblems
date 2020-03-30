// Question was: User has an input box in which they are selecting a contact. Create a component for this
// which will show autocomplete suggestions below the text input box.
// Assume a function queryContact exists which will get an array of contact objects from a given search string
import React, { Component } from 'react';

class contactSuggest extends Component {
  constructor (props) {
    super(props);
    this.setState({
      suggestions: [],
      currentSearch: '',
      activeRequest: null,
    });
  }

  handleInputUpdate(event) {
    // call queryContact to fill suggestions
    const newSearch = event.currentTarget.value;
    this.setState({
      currentSearch: newSearch,
      error: '',
    });
    this.updateSuggestions(newSearch);
  }

  updateSuggestions(search) {
    if (this.state.activeRequest) {
      // cancel the active request
      this.state.activeRequest.cancel();
    }

    const suggestionPromise = queryContact(search).then((contacts) => {
      this.setState({
          suggestions: contacts,
        });
      }).catch((e) => {
        // network failed
        this.setState({
          error: e.errorMessage,
        });
    });

    this.setState({
      activeRequest: suggestionPromise,
    });
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleInputUpdate.bind(this)} value={this.state.currentSearch}/>
        <ul>
          {this.state.suggestions.map((contact, index) => {
            return (
              <li key={index}>{contact.name}</li>
            );
          })}
        </ul>
        {this.state.error ? (<p>Sorry, this resource is currently unavailable. Try again later. Error: {this.state.error}</p>) : ''}
      </div>
    )
  }
}
