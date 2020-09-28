function doubles(s){
    let strArr = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === strArr[strArr.length -1]){
   //      remove last item in strArr
            strArr.pop();
        } else {
   //      add to strArr
            strArr.push(s[i]);
        }
    }
    return strArr.join('');
}