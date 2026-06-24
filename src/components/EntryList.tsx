import {useEntryStore} from "../store/entryStore";
export default function EntryList(){
    const entries=useEntryStore((state)=>state.entries);
    return(
        <div>
            <h2>Entries</h2>
            {entries.map((entry,index)=>(
                <div key={index}>
                    <p>{entry.title}</p>
                    <p> ₹{entry.amount}</p>
                    </div>
            ))}
        </div>
    );
}