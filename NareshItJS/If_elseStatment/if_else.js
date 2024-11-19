// let marks = [5,12,56,96,45,78];
// let res= marks.map((v)=> {if(v>35) return 'pass' 
//     else return 'fail'});
// console.log(res)




// // create a question  with its respective ans in decision statements

//  console.log("1.Who is the prime minister of India?")
//  console.log('a.Rahul gandhi')
// console.log('b.Narendra Modi')
// console.log('c.Draupati Murmu')
// console.log('d.Amit shah')

// //string inside the array in object 
// const listOfPM=[
// {
//   name:'Rahul Gandhi',
//   isPM:false,
// }
// ,{
//     name:'Naredra modi',
//     isPM:true,
//   },
//   {
//     name:'Draupati Murmur',
//     isPM:false
//   },
//   {
//     name:'Amit shah',
//     isPM:false
//   }
// ]

// for(key in listOfPM){
//  if(key.isPM){
//     console.log("PM name is"+key.listOfPM)
//  }

// }


// let ans ='a';
// if(ans=='a'){
//     console.log("Wrong Answare");
// }else if(ans=='b'){
//     console.log(' congraturations correct answare!!!')
// }
 



//task

// let arr= [5,8,12,15,25];
// let ans1 =arr.filter((v)=>
//  v%3==0
// )

// console.log(ans1)


//switch statements  ==> witch is an alternative to if-elseif*/

// switch(ans){
//     case 'a': break;
//     case 'b': break;
//     case 'c': break;
//     case 'd': break;
//     default : break;

// }


// write basic code of js  to perform add, sub, multi, div, on two number base on choice

// let a = 23;
// let b=23;
// let ch='+';
// switch(ch)
// {
//     case '+':
//         console.log('sum'+(a+b));
//         break;
        
//     case '-':
//         console.log('sub'+(a-b));
//         break;
        
//     case '*':
//         console.log('Multi'+(a*b));
//         break
//         ;
    
//     case '/':
//         console.log('sum'+(a/b));
//         break;
//         default:
//             console.log('wrong input')
// }



// let arr=[5,8,3,4,7,9,6];
// arr.reverse();
// console.log(arr)
// let revers = arr.reduce((c,v)=>
// {
//     arr.unshift(v);
//     return acc;
// },[]);
// console.log(revers)

let words = "Javascript is son intuitive and interesting "

let count=0; 
let res=0;
for(let i=0; i<words.length(); i++){

    if(words.charAt[i]==' '){
        res=Math.max(res,count);
        count=0;
    }
    count++;
}

console.log(res);
