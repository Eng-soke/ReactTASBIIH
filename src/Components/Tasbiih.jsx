import { useState } from "react"
function Tasbiih (){
   
    const [counter, setCounter]= useState(0)

    const increamentCounter = ()=>{
        setCounter(counter +1)
        if(counter === 0){
            document.body.style.backgroundColor = "green"
        }
        else if(counter === 1){
            document.body.style.backgroundColor = "yellow"
        }
        else if(counter === 2){
            document.body.style.backgroundColor = "red"
        }
        else{
            document.body.style.backgroundColor = "white"
        }

    }

            const Decrement = ()=>{
                if(counter > 0){
                    setCounter(counter -1)
                }
                if(counter === 4){
                    document.body.style.backgroundColor = "green"
                }
                else if(counter === 3){
                    document.body.style.backgroundColor = "yellow"
                }
                else if(counter === 2){
                    document.body.style.backgroundColor = "red"
                }
                else{
                    document.body.style.backgroundColor = "white"
                }
        

            }




    
    const resetCounter = ()=>{
        setCounter ( 0 )
        if(counter === 0){
            document.body.style.backgroundColor = "white"
        }
    
    }



    return <div>
        <div className=" flex justify-center mt-[100px] ">
            <div> 

            <h1  className="text-7xl font-bold text-center ">{counter}</h1>
            <button onClick={ increamentCounter} className="bg-orange-500 w-[100px] h-[40px]   rounded sm:m-5 m-2 mt-10 ">Increament</button>
            <button onClick={ Decrement} className="bg-orange-500 w-[100px] h-[40px] rounded sm:m-5 mt-10 m-2 ">Decrement</button>
            <button onClick={resetCounter} className="bg-orange-500 w-[100px] h-[40px] rounded sm:m-5 mt-10 m-2">Reset</button>
            </div>

        </div>
        
    </div>
}
export default Tasbiih