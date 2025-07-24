function insertion(arraylist){
     let n = arraylist.length;
     for(let i =0;i<n-1;i++){
        let temp = arraylist[i];
        let x = i-1;
        while(x>=0 && arraylist[x]>temp){
            arraylist[x+1] = arraylist[x];
            x--;
        }
        arraylist[x+1] = temp;
     }
    return arraylist;
}

console.log(insertion([12,56,1,34,68]));