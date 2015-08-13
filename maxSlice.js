console.clear();

var intArr = [];
intArr.push(1);
intArr.push(-1);
intArr.push(7);
intArr.push(-11);
intArr.push(4);
intArr.push(2);
intArr.push(-3);
intArr.push(4);

var currentSlice = 0, currentSliceStart = 0;
var maxSliceStart = 0, maxSliceEnd = 1, maxSlice = 0;

for(var i=0; i< intArr.length; i++)
{
    currentSlice =  (0 < currentSlice + intArr[i] ? currentSlice + intArr[i] : 0); 
    currentSliceStart = (0 < currentSlice ? currentSliceStart : i+1);  
  
    if(maxSlice <= currentSlice)
    {
        maxSlice = currentSlice;
        if (currentSliceStart <= i)  maxSliceStart = currentSliceStart;
        maxSliceEnd = i;   
    }	
}

 console.log('maxSlice = ' + maxSlice);
 console.log('maxSliceStart = ' + maxSliceStart);
 console.log('maxSliceEnd = ' + maxSliceEnd);
