import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const [content, Changecontent] = useState('Speak');

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const clear = () => {
        setText("");
        props.showAlert("Text is modified", "success");
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Text is modified", "success");
   }

   const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text is modified", "success");
   }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            Changecontent("Stop");
        }   
        else {
            Changecontent("Speak");
            window.speechSynthesis.cancel();
        }
        props.showAlert("Text is modified", "success");
    }

    const handleUpClick3 = ()=> {
        let myArray =text.split(' ');
        let s = "";
        myArray.forEach(element => {
            s = s.concat(element);
        }); 
        setText(s);
        props.showAlert("Text is modified", "success");
    }

    const handleUpClick2 = ()=> {
        let newText =text.toLowerCase(); 
        setText(newText);
        props.showAlert("Text is modified", "success");
    }

    const handleUpClick = ()=> {
        let newText =text.toUpperCase(); 
        setText(newText);
        props.showAlert("Text is modified", "success");
    }

    const handleExtraSpaces = () => {
        let newtext =text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Text is modified", "success");
    }

    const len = ()=>{
            let count = 0;
            let arr = text.split(/\s+/);
            arr.forEach(item => {
                if(item.length > 0)
                {
                    count++;
                }
            }) 
            return count;
    }

    return(
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} placeholder='Enter text here' style = {{backgroundColor:props.mode === 'light'?'white':'#181a1b', color: props.mode === 'light'?'black':'white', borderColor: props.mode === 'light'?'#ced4da':'#495057'}} onChange={handleOnChange} id="mybox" rows="12"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick2}>Lowercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick3}>RemoveSpaces</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>!ExtraSpaces</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>Capitalize</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
            <button disabled = {text.length === 0} type="submit" onClick={speak} className="btn btn-info mx-2 my-2" style={{width:'79px'}} id="toggle">{content}</button>
            <button disabled = {text.length === 0} className="btn btn-danger mx-2 my-2" onClick={clear}>Clear</button>
            
            {/* <button className="btn btn-primary mx-3">Convert to upperCase</button> */}
        </div>
        <div className="container">
            <h3>Your Text Summary</h3>
            <p>{len()} Words, {text.length} Characters, {text.replace(/[^0-9]/g,"").length} Numbers</p>
            <p>{0.008 * len()} minutes will be taken to read.</p>
        </div>
        </>
    );
}
