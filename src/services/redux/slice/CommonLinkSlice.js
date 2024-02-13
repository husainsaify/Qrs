import { createSlice } from "@reduxjs/toolkit";

const fetchLink = createSlice({
    name:"commonLink",
    initialState:{
        link: null,
        isLoader:false,
        isError:false,
    },
    reducers:{
        Link(state,action){
            
            // state.data.push(action.payload)
            state.link = action.payload

        }
    },  
});
export const {Link} = fetchLink.actions
export default fetchLink.reducer;