function merged_sorted_arrays(num1,m,num2,n){
    let ptr1 = m-1;
    let ptr2 = n-1;
    let p = m+n-1;
    while(ptr1 >=0 && ptr2 >=0){
        if(num1[ptr1]>num2[ptr2]){
            num1[p] = num1[ptr1];
            ptr1--;
        }
        else{
            num1[p] = num2[ptr2];
            ptr2--;
        }
        p--;
    }
    while(ptr2 >=0){
        num1[p]= num2[ptr2];
        ptr2--;
        p--;

    }
    return num1;
}

let num1=[1,2,3,0,0,0];
let num2=[2,5,6];
console.log(merged_sorted_arrays(num1,3,num2,3));


let num3=[1];
let num4=[];
console.log(merged_sorted_arrays(num3,1,num4,0));