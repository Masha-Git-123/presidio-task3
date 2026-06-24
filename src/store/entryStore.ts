import {create} from "zustand";

interface Entry{
    title:string;
    amount:number;

}
interface EntryStore{
    entries:Entry[];
    addEntry:(entry:Entry) => void;
}
export const useEntryStore=
create<EntryStore>((set)=>({
    entries:[],
    addEntry:(entry)=>
        set((state)=>({
            entries:[...state.entries,entry],
        })),
    
}));