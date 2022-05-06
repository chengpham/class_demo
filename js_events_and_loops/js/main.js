document.addEventListener('click', function(event) {
    // event.target is the Node that triggered the event
    console.log(event.target);
    // event.currentTarget is the Node that OWNs the event (the node that .addEventListener was invoked on)
    console.log(event.currentTarget);
    console.log('document was clicked!')
    // `this` within a listener function has the value of event.currentTarget
    // becareful using an arrow function as a listener and referencing this because
    // the arrow function will bind `this` to the current context which makes `this` refer to the global object
    console.log(this);
  })
  
  const ToxicTim = document.getElementById('toxic-tim');
  
  ToxicTim.addEventListener('dblclick', function() {
    console.log('Toxic Tim was double clicked!')
  })
  
  const allDoggos = document.querySelectorAll('.doggo');
  allDoggos.forEach(dog => {
    dog.querySelector('h1').addEventListener('click', function() {
      console.log('doggo name clicked!')
    })
  })
  
  // Checking if a thing is an instance of a DOM Node
  // use instanceof with Node as the class/constructor
  
  document.querySelector('#doesnotexist') instanceof Node // false
  ToxicTim instanceof Node // true
  
  // we want to check if something is a node before calling .addEventListener because if you try
  // to call .method on null or undefined you'll recieve an error that crashes the app.
  
  // Clicks, Events & Properties
  
  ToxicTim.addEventListener('click', function(event) {
    console.log('toxic tim logging event.target')
    console.log(event.target) // either the ToxicTim div or the H1 tag that sits ontop of it
    console.log(event.currentTarget)
    console.log([event.clientX, event.clientY])
  })
  
  const TeamSalmon = document.querySelector('.team.salmon')
  TeamSalmon.addEventListener('click', function() {
    console.log(this);
  })
  
  // Last in Queue
  
  // 1) get all the dogs
  allDoggos.forEach((dogNode) => {
    // 2) loop through add event
    dogNode.addEventListener('click', function(event) {
      const dogN = event.currentTarget
      // 3) get p
      const rosterN = dogN.parentElement
      rosterN.appendChild(dogN)
    })
  })
  
  
  // Mouse & The Doggo
  
  // 1)
  allDoggos.forEach((dogNode) => {
    dogNode.addEventListener('dblclick', function(event) {
      event.currentTarget.classList.toggle('inverted')
    })
    dogNode.addEventListener('mousedown', function(event) {
      event.currentTarget.classList.add('flipped');
    })
    dogNode.addEventListener('mouseup', function(event) {
      event.currentTarget.classList.remove('flipped');
    })
  })
  
  // 2)
  const coordDiv = document.createElement('div')
  coordDiv.style.position = 'fixed'
  coordDiv.style.bottom = 0
  coordDiv.style.border = '3px dashed red'
  document.body.append(coordDiv)
  document.addEventListener('mousemove', function(event) {
    const position = `${event.clientX}, ${event.clientY}`
    coordDiv.innerText = position
  })
  
  // Input Event
  
  const random = n => Math.ceil(Math.random() * n) // gives me a number between 1-n
  const keySound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`)
  const inputs = document.querySelectorAll('input')
  inputs.forEach(inputNode => {
    inputNode.addEventListener('input', function(event) {
      // play sound
      keySound().play();
    })
  })
  
  const applicantPreview = document.querySelector('#application-preview .doggo.blank')
  // Explode on Submit
  const explosionSound = () => new Audio('sounds/small-explosion.wav')
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const formNode = event.currentTarget;
    // FormData is a helper class that provides a nice api to add/retrieve values from a form
    const formData = new FormData(formNode);
  
    // adding all the attributes to the new dog node
    applicantPreview.style.backgroundImage = `url(${formData.get('picture-url')})`
    applicantPreview.querySelector('h1').innerText = formData.get('name')
    applicantPreview.style.border = `medium solid ${formData.get('team-name')}`
  
    // add dog to a team
    const roster = document.querySelector(`.team.${formData.get('team-name')} > .roster`)
    roster.appendChild(applicantPreview.cloneNode())
    // explosionSound().play()
  })
  
  // Applicant Avatar
  
  document.querySelector('input[name="picture-url"]')
    .addEventListener('input', function(event) {
      const imageUrl = event.currentTarget.value
      applicantPreview.style.backgroundImage = `url(${imageUrl})`
    })
  
  
  // keyboard events
  
  // if a user types in a secret password "panic"
  let lettersTyped = ''
  document.addEventListener('keypress', function(event) {
    lettersTyped += event.key
    const last5TypedCharacters = lettersTyped.slice(lettersTyped.length - 5);
    if (last5TypedCharacters === 'panic') {
      window.location.replace('http://hackertyper.net');
    }
  
    console.log(event.altKey);
    console.log(event.shiftKey);
    console.log(event.key);
  })