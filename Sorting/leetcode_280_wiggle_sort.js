function wiggle_sort(arraylist){
let i = 0;

if(arraylist.length <=1){
    return arraylist;
}
for(i=0;i<arraylist.length;i++){
    if((i%2 ===0  && arraylist[i] > arraylist[i+1] )|| (i%2 ===1 &&  arraylist[i] < arraylist[i+1])){
         [arraylist[i],arraylist[i+1]] = [arraylist[i+1],arraylist[i]];
    }
   

};
return arraylist;
};
console.log(wiggle_sort([3,5,2,1,6,4]));