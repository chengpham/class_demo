// const obj = {a: 'alpha', b: 'beta', c: 'carotene', d: 'delta', e: 'echo'}
// const num = [1,2,3,4,5,6,7,8,9,10]
// const fn = ({ a, ...rest }) => {
//   console.log(rest)
// }
// fn(obj)
// const func = ([a,b,c,d, ...rest]) => {
//     console.log('rest: ', rest, 'after: ', b)
//   }
// func(num)

// Redux:
const ADD = 'ADD';
const addMessage = (message) => {
  return {type: ADD, message}
};
const messageReducer = (state=[], action) => {
  switch (action.type) {
    case ADD: return [...state,action.message];
    default: return state;
  }
};
const store = Redux.createStore(messageReducer);

// React:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '', messages: [] }
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange.bind(this)}/><br/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (<li key={idx}>{message}</li>)  })
          }
        </ul>
      </div>
    );
  }
};
const Provider = ReactRedux.Provider;
class AppWrapper extends React.Component {  
  render(){
    return(
        <Provider store={store}><DisplayMessages /></Provider>
    )
  }
};
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// import React from 'https://cdn.skypack.dev/react'
// import ReactDOM from 'https://cdn.skypack.dev/react-dom'
// import marked from 'https://cdn.skypack.dev/marked@1.2.5';
// marked.setOptions({
//    breaks: true
//  });
// const placeholder = `# H1
// ## H2
// [A link](https://www.freecodecamp.com)
// Inline \`<code></code>\`
// \`\`\`
// //codeBlock:

// <div className="App">
//   <textarea id="editor" value={mark} onChange={(event)=>this.updateMark(event.target.value)}/>
//   <div id="preview" dangerouslySetInnerHTML={{__html: marked(mark, { renderer: renderer } )}} />
// </div>
// \`\`\`
// A list:
//   - 1
//   - 2

// > A Block Quote
// ![An image](https://tinemettejespersen.files.wordpress.com/2012/03/ffftextthisisanimage.gif)
  
// **And a bolded text**`

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       input: placeholder  
//     }
//   }
//   handleChange(event) { 
//   this.setState({ input: event.target.value })
//   }
//   render(){
//     return(
//       <div>
//       <textarea rows='15' cols='70' id='editor' onKeyUp={this.handleChange.bind(this)}>{this.state.input}
//         </textarea>
//         <Preview input={this.state.input}/>
      
//       </div>
//     )
   
//   }
// }
// class Preview extends React.Component {
//   render(){
//     return (
//    <div>
//          <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.props.input)}}></div>
//    </div>
      
//     )
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'))

