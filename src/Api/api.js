const url = 'https://api.coincap.io/v2'
function getAssets(){
    return fetch( `${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

//recibir el nombre y valor de la moneda
function getAsset(coin) {
    return fetch(`${url}/assets/${coin}`)
      .then(res => res.json())
      .then(res => res.data)
  }
  function getAssetHistory(coin) {
    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()
  
    return fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    )
      .then(res => res.json())
      .then(res => res.data)
  }

  //function getMarkets = async coin=>{
    const getMarkets = async coin=>{ 
  try {
      let res = await fetch (`${url}/assets/${coin}/markets?limit=5`);
      res= await res.json();
      return res.data;
      //return fetch (`${url}/assets/${coin}/markets?limit=5`)
    //.then(res => res.json())
    //.then(res=>res.data)
    } catch (error) {
      console.error('Error en el request')
    }

    
  }
  
  const  getExchange = async id =>{
    try {
      let res = await  fetch (`${url}/exchanges/${id}`);
      res = await res.json();
      return res.data;
    } catch (error) {
      console.error("error en el request");
    }
  }

  /*
  function getExchange(id){
    try {
      return fetch (`${url}/exchanges/${id}`)
      .then(res => res.json())
      .then(res=>res.data)
    } catch (error) {
      console.error("Error en el request")
    }
   
  }
  */
  
  export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
  }