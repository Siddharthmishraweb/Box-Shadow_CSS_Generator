import './App.css';
import { useState } from 'react';
function App() {
  const [Hori,setHori] = useState(-100);
  const [Veri, setVeri] = useState(-100);
  const [Blur,setBlur] = useState(10);
  const [color,setColor] = useState('#363134');
  const [checkOn,setcheckOn] = useState(false);
  const [boxColor,setboxColor] = useState('#df0000');
  return (
    <div className="App">
      
      <div className='controls'> 
        <label>Horizontal Length</label>        
        <input type="range"  min="-200" max="200" value = {Hori} 
          onChange = {(e)=>{
            setHori(e.target.value);
          }}
        />         
        <label>Vertical Length</label>
        <input type="range"  min="-200" max="200" value = {Veri} 
          onChange = {(e)=>{
            setVeri(e.target.value);
          }}
        /> 
        <label>Blur</label>
        <input type="range"  min="0" max="200" value = {Blur} 
          onChange = {(e)=>{
            setBlur(e.target.value);
          }}
        />

        <label>Color</label>
        <br></br>
        <input type="color" id="favcolor" name="favcolor" value={boxColor} 
        onChange = {(e)=>{
          setColor(e.target.value);
        }}
        /><br></br>
        {/* <textarea type="color"   value = {color}  className = 'box-input'
          onChange = {(e)=>{
            setColor(e.target.value);
          }}
        />  */}
        <label>Box Color</label>
        <br></br>
        <input type="color" id="favcolor" name="favcolor" value={color} 
        onChange = {(e)=>{
          setboxColor(e.target.value);
        }}
        /><br></br>
        

<div class="switch">
    <label>
      Outline
      <input type="checkbox" checked ={checkOn} onChange={()=>setcheckOn(!checkOn)}/>
      <span class="lever"></span>
      Inset
    </label>
  </div>

      </div>
      <div className='output'>
        <div className='box'style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${color} ${checkOn?"inset":""}` , backgroundColor:`${boxColor}`}}>
          box-shadow :     {Hori}px {Veri}px {Blur}px {color} {checkOn?"inset":""}
        </div>
      </div>
    </div>
  );
}

export default App;
