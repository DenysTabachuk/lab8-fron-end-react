import { useState, useEffect  } from "react";
import "./GetQuoteBlock.css"
import QuoteInput from "./QuoteInput";


function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
}


export default function GetQuoteBlock(){
    const [isExpanded, setIsExpanded] = useState(false);
    const { width } = useWindowSize();

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }


    return(
        <>
            {width > 1024
            ?
                <div id="get-quote-block">
                    <div><h3>GET A QUOTE</h3></div>
                    <QuoteInput/>
                </div>
            :
            <>
            <div id="expanding-block">
                <div><h3>GET A QUOTE</h3></div>

                <img id="arrow-icon" 
                className={ isExpanded ? "flipped" : ""}
                src="icons/down-arrow.png" 
                onClick={toggleExpand} alt="" />

            </div>
            
            {isExpanded ? <QuoteInput/> : null }
            </>
            }
        </>
    );
}