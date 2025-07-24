function sort_colors(arraylist){
    if(arraylist.length <=1){
        return arraylist;
    }
    let start_pt =0;
    let middle_pt =0;
    let end_pt = arraylist.length-1;
      while(middle_pt <=end_pt){
          if(arraylist[middle_pt] ===2){
                [arraylist[middle_pt],arraylist[end_pt]] = [arraylist[end_pt],arraylist[middle_pt]];
               end_pt--;
               
          }
          else if(arraylist[middle_pt] ===0){
            [arraylist[start_pt],arraylist[middle_pt]] =[arraylist[middle_pt],arraylist[start_pt]];
            start_pt++;
            middle_pt++;
          }
          else if(arraylist[middle_pt]===1){
            middle_pt++;
          }
    }
  return arraylist;
}
console.log(sort_colors([2, 0, 2, 1, 1, 0]));
console.log(sort_colors([1, 2, 0]));