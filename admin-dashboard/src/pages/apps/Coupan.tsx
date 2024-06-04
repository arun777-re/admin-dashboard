import {FormEvent,useState,useEffect} from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";
const Coupan = () => {

    const [size,setSize] = useState<number>(8);
    const [prefix,setPrefix] = useState<string>("");
    const [includeNumbers,setIncludeNumbers] = useState<boolean>(false);
    const [includeSymbols,setIncludeSymbols] = useState<boolean>(false);
    const [includeCharacters,setIncludeCharacters] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const [coupan,setCoupan] = useState<string>("");

    const copyText = async (coupan: string) =>{
        await window.navigator.clipboard.writeText(coupan);
        setIsCopied(true);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(!includeNumbers && !includeCharacters && !includeSymbols) return alert("Please select atleast one");
        let result: string = prefix || "";
        const loopLength: number = size - result.length;
        
        for(let i = 0; i < loopLength; i++) {
            let entireString: string = "";
            if(includeCharacters) entireString += allLetters;
            if(includeNumbers) entireString += allNumbers;
            if(includeSymbols) entireString += allSymbols;

            const randomNumber: number = (Math.random() * entireString.length);
            result += entireString[randomNumber];

        }

        setCoupan(result);
    }

    useEffect(() =>{
         setIsCopied(false);
    },[coupan])
  return (
    <div className='adminContainer'>
        <AdminSidebar/>
        <main className='dashboard-app-container'>
           <h1>Coupan</h1>
           <section>
            <form  className="coupan-form" onSubmit={submitHandler}>
            <input type="text"
            placeholder='text to include'
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            maxLength={size}
            />
            <input type="number"
            placeholder='Coupan Length'
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min={8}
            max={25}

            />
   <fieldset>
    <legend>Include</legend>

    <input type="checkbox"
    checked={includeNumbers}

    onChange={() => setIncludeNumbers((prev) => !prev)}
    />
    <span>Numbers</span>

    <input type="checkbox"
    checked={includeCharacters}
      onChange={() => setIncludeCharacters((prev) => !prev)}  
    
    />
    <span>Characters</span>
    
    <input type="checkbox"
    checked={includeSymbols}
    onChange={() => setIncludeSymbols((prev) => !prev)}
    
    />
    <span>Symbols</span>
   </fieldset>
   <button type='submit'>Generate</button>
            </form>
            {coupan && (
                <code>
                    {coupan}{" "}
                    <span 
                    style={{cursor:"pointer"}}
                    onClick={() => copyText(coupan)}>
                        {isCopied ? "Copied" : "Copy"}
                    </span>
                    </code>
            )}
           </section>
        </main>
        </div>
  )
}

export default Coupan