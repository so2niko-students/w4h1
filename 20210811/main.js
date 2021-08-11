function clerk(arr){

    const result = arr.reduce((acc, el) => {
      if(el===25){
        acc[0]+= 1;
      }
      
      if(el===50){
        acc[1]+= 1;
        acc[0]-= 1;
      }
      
      if(el===100){
        acc[0]-= 1;
        acc[1] > 0 ? acc[1]-= 1 : acc[0]-= 2;
      }
      
      (acc[0] < 0 || acc[1] < 0) && (acc[2] = 'NO');
      return acc;
      
    }, [0,0,'YES']);
  
  return result[2];
  }
  
  console.log(clerk([50, 50, 50]));