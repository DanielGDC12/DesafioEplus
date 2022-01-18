import Header from './components/Header/Header'




function App() {
  
  const requi = fetch("./Data/products.json").then(response => console.log(response))
  return (
     <div className='App'>
       <Header/>
         
       </div>
     
  );
}

export default App;
