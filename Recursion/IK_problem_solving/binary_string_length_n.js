function get_binary_strings(n) {
     return enumeration_helper("",n);
}
function enumeration_helper(slate,n){
    if(n ==0){
        return [slate];
    }
    else{
        const zero_enum = enumeration_helper(slate+"0",n-1);
        const one_enum = enumeration_helper(slate+"1" , n-1);
        return zero_enum.concat(one_enum);
    }
}