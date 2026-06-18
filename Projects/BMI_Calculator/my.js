const form = document.querySelector('form');
form.addEventListener('submit',(f)=>{
    f.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
      result.innerHTML=`Please give a valid height ${height}`
    } else if(height === '' || height <0 || isNaN(height)){
      result.innerHTML=`Please give a valid weight ${weight}`
    }else{
      const bmi=(weight / ((height * height) / 10000)).toFixed(2);
      if(bmi < 18){
        result.innerHTML=`<span> Your weight is ${bmi} . You are Under Weight.</span>`
      } else if( bmi > 18 && bmi < 24){
        result.innerHTML=`<span> Your weight is ${bmi} . Your weight is normal.</span>`
      }else if( bmi > 24){
        result.innerHTML=`<span> Your weight is ${bmi} . You are overweight.</span>`
      }
     
    //   result.innerHTML=`<span>${bmi}</span>`
    }
    

})

