// const elForm = document.querySelector('.js-form');
// const elFormTexareaInput = elForm.querySelector('.js-textarea-input');
// const elFormTexareaOutput = elForm.querySelector('.js-textarea-output');

function rot (str,rot){
  let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let result = '';
  for(let i = 0; i < str.length; i++){
      let arrIndex = arr.findIndex((ind) => ind == str[i].toLowerCase());
      let index = arrIndex + rot;
      if(arrIndex == -1) result += str[i];
      else if(str[i].toUpperCase() == str[i]){
          result +=  index < 26 ? arr[index].toUpperCase() : arr[index - arr.length].toUpperCase();
      }else{
          result +=  index < 26 ? arr[index] : arr[index - arr.length];
      }
  }
  return result;
}
console.log(rot('salom hello',13));



function decrypt (str,rot){
  let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].reverse('');
  let result = '';
  for(let i = 0; i < str.length; i++){
      let arrIndex = arr.findIndex((ind) => ind == str[i].toLowerCase());
      let index = arrIndex + rot;
      if(arrIndex == -1) result += str[i]
      else if(str[i].toUpperCase() == str[i]){
          result +=  index < 26 ? arr[index].toUpperCase() : arr[index - arr.length].toUpperCase();
      }else{
          result +=  index < 26 ? arr[index] : arr[index - arr.length];
      }
  }
  return result;
}
console.log(decrypt('fnybz uryyb',13));