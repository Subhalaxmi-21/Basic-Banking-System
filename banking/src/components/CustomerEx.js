import React from 'react'

function Customer() {
    const slides = [
        {
            title: "Today's workout plan",
            text: "We're gonna do 3 fundamental exercises."
        },
        {
            title: "First, 10 push-ups",
            text: "Do 10 reps. Remember about full range of motion. Don't rush."
        },
        {
            title: "Next, 20 squats",
            text: "Squats are important. Remember to keep your back straight."
        },
        {
            title: "Finally, 15 sit-ups",
            text: "Slightly bend your knees. Remember about full range of motion."
        },
        {
            title: "Great job!",
            text: "You made it, have a nice day and see you next time!"
        }
    ];
    const [slide,setSlide] = React.useState(0)
    const [disable,setDisable] = React.useState(false)
    const [disablenext,setDisablenext] = React.useState(false)
    // const [disableprev,setDisableprev] = React.useState(false)
    const restarts=()=>{
      if (slide==0){
        setDisable(true)

      }
      else{
        setDisable(true)
        setDisablenext(false)
        setSlide(0);
      }  
    }
    const nexts = () => {
      if ((slides.length-2)==slide){
        setDisablenext(true)
        setSlide(slide+1)
      } 
      else{
        setDisable(false)
        setDisablenext(false)
        setSlide(slide+1)
      }
    }
    const prevs = () =>{
      if (slide==1){
        setDisable(true)
        setSlide(slide-1)
      }
      else if (slide==0){
          setDisable(true)
      }
      else{
        setDisablenext(false)
        setDisable(false)
        setSlide(slide-1)
      }
    }
    return (
        <div>
            <div >
                <button disabled={disable} onClick={()=>restarts()}>Restart</button>
                <button disabled={disable} onClick={()=>prevs()} >Prev</button>
                <button disabled={disablenext} onClick={()=>nexts()} >Next</button>
            </div>
            <div>
                <h1>{slides[slide].title}</h1>
                <p >{slides[slide].text}</p>
            </div>
        </div>
    )
}

export default Customer
