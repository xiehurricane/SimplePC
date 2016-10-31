const  hasClass = (obj, cls) => {
   return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}


export const addClass=(obj, cls)=>{
   if (!hasClass(obj, cls)) obj.className += " " + cls;
}


export const removeClass = (obj, cls)=> {
   if (hasClass(obj, cls)) {
       var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
       obj.className = obj.className.replace(reg, ' ');
   }
}

export const toggleClass = (obj,cls)=>{
   if(hasClass(obj,cls)){
       removeClass(obj, cls);
   }else{
       addClass(obj, cls);
   }
}
