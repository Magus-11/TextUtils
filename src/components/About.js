import React from 'react'

export default function About(props) {
    return (
        <div className="container" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}}>
                <div className="accordion-item" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Textutils</strong> gives you a way to analyze yout text quickly and efficiently, gives it word count, character count or number count etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}