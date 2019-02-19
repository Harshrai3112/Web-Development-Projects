function average(marks){
    var sum =0;
    for(var i=0;i<marks.length;i++){
        sum=sum+marks[i];
    }
    // var avg=Math.floor(sum/marks.length);
    var avg=Math.round(sum/marks.length);
    return avg;
    
}
var arr1=[90,90,90,90,90];
console.log(average(arr1));
var arr2=[95,95,93,87,65];
console.log(average(arr2));
