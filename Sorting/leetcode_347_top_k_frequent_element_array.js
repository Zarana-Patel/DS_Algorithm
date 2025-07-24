function topk(arrlist,k){
    let freq_arrlist = new Map();
    let result = [];
    for(let i =0;i<arrlist.length;i++){
        if(freq_arrlist.has(arrlist[i])){
            freq_arrlist.set(arrlist[i],freq_arrlist.get(arrlist[i])+1);
        }
        else{
            freq_arrlist.set(arrlist[i],1);
        }
    }
    let maxfreq = Math.max(...freq_arrlist.values());
    let buckets =Array.from({length:maxfreq+1},()=>[]);
    for([num,freq] of freq_arrlist.entries()){
        buckets[freq].push(num);
    }
    
    for(i=buckets.length-1;i>=0 && result.length < k;i--){
        for(num of buckets[i]){
            result.push(num);
            if(result.length === k){
              break;
            }
        }
    };
  return result;
  
}
console.log(topk([1,1,1,1,2,2,3],2));