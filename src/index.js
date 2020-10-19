module.exports = function check(str, bracketsConfig) {

  for (let i = 1; i < str.length; i++) {
    for (let n = 0; n < bracketsConfig.length; n++) {

        if (str[i] === bracketsConfig[n][1]) {
            if (str[i-1] === bracketsConfig[n][0]) {
                let pair = str[i-1]+str[i];
                str = str.replace(pair, '');
                i = i-2;
                break;
            }
        }
    }
  }

 if ( str === '' ) {
   return true;
 }
 return false;

}
