const root = ReactDOM.createRoot(document.getElementById('root'))
const parent = React.createElement('div', {id: 'parent'}, 
  React.createElement('div', {id: 'child'}, 
    React.createElement('h1', {id: 'heading'}, 'Namaste React')
  )
)
root.render(parent)
console.log(parent)