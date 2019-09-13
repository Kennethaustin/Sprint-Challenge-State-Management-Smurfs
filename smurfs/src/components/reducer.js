import {
  	FETCH_SMURF_START,
  	FETCH_SMURF_SUCCESS,
  	FETCH_SMURF_FAILURE,
  	ADD_SMURF_START,
	ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE	  
} from './action';	

    const initialState = {	
    smurfs:[],	    
    errors:'',	    
    isFetching: false	    
}	




 export const rootReducer = (state= initialState, {type, payload}) => {	
         switch(type){	    
        case FETCH_SMURF_START:	     
            return{	            
                ...state,	               
                errors:'',	                
                fetching:true	                
            };	            
        case FETCH_SMURF_SUCCESS:	        
            return{	            
                ...state,	                
                errors: '',	                
                smurfs: payload,
                fetching: false	                
            };	            
       case FETCH_SMURF_FAILURE:	       
            return{	            
                ...state,	                
                errors:payload,	         
                fetching: false	                

             }; 	             
        case ADD_SMURF_START:	       
            return{	            
                ...state,	                
                fetching:true,	             
                error: ''	                 
            };	           
        case ADD_SMURF_SUCCESS:	      
            return{	            
                ...state,	                
                smurfs:payload,	                
                fetching:false,	                
                error: ''	                
            };	            
        case ADD_SMURF_FAILURE:      	            
            return{	           
                ...state,	                
                error:payload	           
            }    	               
       default:	       
            return state;	            
}	}