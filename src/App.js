import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const personName = ['abul', 'sakib', 'bappi', 'alom']
  var name = "dr. Mahfuz"
  var person = {
    name: "jhankar mahbub",
    job: "Web developer"
  }
  var style = {
    color: "red",
    border: "2px solid white",
    backgroundColor: 'yellow'
  }
  var productName = [
    { name: 'photoshop', price: '$50.5' },
    { name: 'Illustrator', price: '$30.5' },
    { name: 'pd reader', price: ' $141.0' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <UserList></UserList>
        <Counter> </Counter>

        <h2>math in raact {(5 + 53) * 2} {name}</h2>
        <h3 style={style}>A awsome man {person.name + " is a" + person.job}</h3>
        {/* <Product productDetails={productName[0]}> </Product>
        <Product productDetails={productName[1]}> </Product>
        <Product productDetails={productName[2]}> </Product> */}
        {
          productName.map(pd => <Product productDetails={pd}></Product>)
        }

        <Person name={personName[0]}></Person>
        <Person name={personName[1]}></Person>
        <Person name={personName[2]}></Person>
        <Person name={personName[3]}></Person>
      </header>
    </div>

  );

}

const UserList=()=>{
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=> setUser(data))

  },([]))
  return(
    <div>
      <h1>Total User: {user.length}</h1>
     <ul>
       {user.map(users=><li>{users.name}</li>)}
     </ul>
    </div>
  )
}

function Product(props) {
  const style = {
    backgroundColor: 'lightgray',
    border: '2px solid gray',
    borderRadius: '4px',
    float: 'left',
    height: '300px',
    width: '280px'
  }
  console.log(props);
  var { name, price } = props.productDetails;
  return (
    <div style={style}>

      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10)
  // const handleIncrease=()=>{
  //   const newCount=count+1
  //   setCount(newCount)
  //   console.log('clicked');
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <button onClick={() => setCount(count - 1)}>Decreasse</button>
    </div>
  );
}
function Person(props) {
  var personStyle = {
    color: 'black',
    backgroundColor: 'cyan',
    margin: '10px',
    border: '2px solid red'
  }
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <h5>Position : No1</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur itaque minus
        magnam nobis neque labore mollitia minima illum voluptate aliquid impedit libero quo
        placeat rem corrupti quidem ipsa, explicabo nam.</p>

    </div>

  )
}

export default App;
