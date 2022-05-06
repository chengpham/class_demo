
// React.createElement - a method for returning a ReactElement
// A ReactElement is an object that represents a DOM Node
const ourFirstElement = React.createElement(
    'a', // html tag
    { href: 'https://google.ca'}, // props 
    'Hello World'
  )
  
  
  // React Component - A function that returns a ReactElement
  // React Components accept a "props" object
  const Name = (props) => { // returns a <li style='background-color: zzz'>name</li>
    const { name, bgColor } = props;
    // const name = props.name;
    // const bgColor = props.bgColor;
    return React.createElement(
      'li',
      {
        style: {
          backgroundColor: bgColor
        }
      },
      `${name}`
    )
  }
  
  // NameList Component - accepts an array of names. Will render out a list of Name elements
  const NameList = (props) => { // <ul> <li style='background-color: zzz'>name</li> <li style='background-color: zzz'>name</li> <li style='background-color: zzz'>name</li> <li style='background-color: zzz'>name</li></ul>
    const names = props.names;
    const items = names.map((n, i) => {
      return Name({ name: n, bgColor: i % 2 === 0 ? 'grey' : 'yellow' })
    })
    return React.createElement(
      'ul',
      null,
      items
    )
  }
  
  
  // ReactDOM is a library used to interpret ReactElements and render them onto the DOM
  
  // ReactDOM.render is a method that accepts 2 arguments
  // 1) a ReactElement - returned from React.createElement
  // 2) a DOM Node
  
  // It will render the ReactElement onto the dom
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      NameList({ names: ['anson', 'andy', 'brnaodn', 'clarence'] }), // ReactElement
      document.getElementById('app')
    )
  })
  