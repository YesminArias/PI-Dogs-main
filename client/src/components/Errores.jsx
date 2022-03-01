export function validation(input){
    let errors ={};

    if(!input.name){
        errors.name ="enter the name please";
    }else if(input.name.search(/^[a-zA-Z\s]*$/) ){
        errors.name ="No numbers or symbols are allowed in the name "
    }
    if(!input.minHeight){
        errors.minHeight ="enter the minimum height please";
    }else if( input.minHeight > input.maxHeight){
        errors.minHeight = "The minimum height cannot be greater than the maximum height";
    }
    if(!input.maxHeight){
        errors.maxHeight ="enter the miximum height please";
    }else if( input.maxHeight < input.minHeight ){
        errors.maxHeight = "The miximum height cannot be minor than the minimum height";
    }
    if(!input.minWeight){
        errors.minWeight ="enter the minimum Weight please";
    }else if( input.minWeight > input.maxWeight){
        errors.minWeight = "The minimum weight cannot be greater than the maximum weight";
    }
    if(!input.maxWeight){
        errors.maxWeight ="enter the miximum Weight please";
    }else if( input.maxWeight < input.minWeight ){
        errors.maxWeight = "The maximum height cannot be minor than the minimum height";
    }
    if(!input.minlife_span){
        errors.minlife_span ="enter the minimum years please";
    }else if( input.minlife_span > input.maxlife_span){
        errors.minlife_span = "The minimum years cannot be greater than the maximum years";
    }
    if(!input.maxlife_span){
        errors.maxlife_span ="enter the miximum years please";
    }else if( input.maxlife_span < input.minlife_span ){
        errors.maxlife_span = "The maximum years cannot be minor than the minimum years";
    }
    
    return errors;

    
}