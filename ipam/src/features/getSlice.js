import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const getStates = createAsyncThunk(
    "ibgeStates/getStates",
    async () => {
        try{
            const response = await axios.get("servicodados.ibge.gov.br/api/v1/localidades/etasdos");
            return response.data;
        }catch (error){
            console.error(error)
        }
        
    });

 const getStateSlice = createSlice({
    name:"getState",
    initialState:{
        states:{},
        isLoading:false,
        hasError:false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getStates.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          })
            .addCase(getStates.fulfilled, (state, action) => {
              state.company = action.payload;
              state.isLoading = false;
              state.hasError = false
            })
            .addCase(getStates.rejected, (state, action) => {
              state.hasError = true
              state.isLoading = false;
            })
        }
      });
      export const selectState = state => state.getState.state;
      export const selectLoadingState = state => state.getState.isLoading;
      export const selectErrorState = state => state.getState.hasError;

      export default getStateSlice.reducer

 
//     reducers:{
//         getApiState: state =>{},
//         //get using axios
    
//         getApiCity: state =>{},
//         //get using axios
//     },
// })

// export const {getApiState,getApiCity} = getSlice.actions
// export default getSlice.reducer