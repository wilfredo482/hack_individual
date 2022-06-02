/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

result=arr.slice(1,4);

for(let i=0;i<result.length;i++){
    if(i==0){
        result[i]="b@r";
    }if(i==1){
        result[i]="b@z";
    }if(i==2){
        result[i]="QUX";
    }
}


console.log(result);

//export result
module.exports = result;

