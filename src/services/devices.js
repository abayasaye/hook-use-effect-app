const getDevices = async ()=>{
    try {
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
        .then((res) => res.json())
    } catch (error) {
    console.log(error);
    }  
    finally{
    
    }

}
export default getDevices