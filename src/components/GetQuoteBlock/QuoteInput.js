export default function QuoteInput(){
    return (
        <div id = "quote-input-container">
        <input type="text" value="Name"/>
        <input type="text" value="Phone"/>
        <select id="dropdown">
            <option value="" selected>Services</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>

        <button className="get-quote-button"><b>GET A QUOTE</b></button>
    </div>
    );
}