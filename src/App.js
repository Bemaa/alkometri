import './App.css';
import { useState } from 'react';

function App() {
  const [paino,setPaino] = useState(0);
  const [pullot,setPullot] = useState(0);
  const [sukupuoli,setSukupuoli] = useState('mies');
  const [aika,setAika] = useState(0);
  const [tulos,setTulos] = useState(0);

function Alcometer(e){
  e.preventDefault();
  let alkoholiaVeressa = 0;

if (sukupuoli === 'mies'){
  alkoholiaVeressa = (((pullot * 0.33)*8*4.5)-((paino/10)*aika))/(paino*0.7);
} else {
  alkoholiaVeressa = (((pullot * 0.33)*8*4.5)-((paino/10)*aika))/(paino*0.6);
} 

if (alkoholiaVeressa < 0){
  setTulos(0);
} else{
  setTulos(alkoholiaVeressa);
}



}


return(

<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',fontFamily:'helvetica',fontSize:'30px',backgroundColor: '#6C4A4A', color:'#EDEDED'}} >

<form onSubmit={Alcometer} style={{border:'10px solid #DDBEBE',borderRadius:'25px',backgroundColor: '#C89595', padding:'10px'}}>
<h3 style={{fontSize:'40px', textAlign:'center'}}>Alkometri</h3>
<div>
    <label>Paino</label>
    <input value={paino} type='number' onChange={e => setPaino(e.target.value)}/>
</div>
<div>
    <label>Annokset</label>
    <input value={pullot} type='number' onChange={e => setPullot(e.target.value)}/>
</div>
<div>
    <label>Missä ajassa</label>
    <input value={aika} type='number' onChange={e => setAika(e.target.value)}/>
</div>
<div>
<label >Sukupuoli</label>
<label><input type="radio" name="gender" value="mies" defaultChecked onChange={e => setSukupuoli(e.target.value)}/>Mies</label>
<label><input type="radio" name="gender" value="nainen" onChange={e => setSukupuoli(e.target.value)} />Nainen</label>   
</div>

<div>
  <output >{tulos.toFixed(1)}</output>
</div>

<button >Laske</button>
</form>
</div>
);
}
export default App;
