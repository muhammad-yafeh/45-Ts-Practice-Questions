//question 1
//type script,node and vs code downloaded


//question2
// let a='ali';
// console.log(`hwllow${a}, lets lern ts today`)


// //qustion3
// console.log(a.toUpperCase);
// console.log(a.toLowerCase);
// let my="y afeh k aleem"
// let characters=my.split(" ")
// let titleCase=characters[0].toUpperCase()+characters[1]+" "+characters[2].toUpperCase()+characters[3]
// console.log(titleCase)
// let we="yafehkaleem"
// let n=we.charAt(0).toUpperCase()+we.substring(1,4) +we.charAt(5).toUpperCase()+we.substring(6,11)
// console.log(n)


// //question4
// console.log(`Albert Eistein said that,"Those who do not do
// any mistake has not learned anything new"`)


// //question5
// let c="Quaid e Azam"
// let message="Think hundred time before making a decison";
// console.log(`${c} said that,"${message}"`)


//question6
// let o="\t  name"
// console.log(o)
// o="my name \n"
// console.log(o)


//question7
// function sum(num1:number,num2:number)
// {
//     console.log(num1+ num2)
// }
// sum(5,3);
// function multiply(num1:number,num2:number)
// {
//     console.log(num1*num2)
// }
// multiply(4,2);
// function divide(num1:number,num2:number)
// {
//     console.log(num1/num2)
    
//     }
// divide(16,2);
// function sub(num1:number,num2:number)
// {
//     console.log(num1-num2)
// }
// sub(16,8)


//question8
// for(let i=1; i<5;i++){
//     console.log(5+3);
// }

//question9
//let v=3
//console.log(`my favourite number is ${v}`


//question10
//comments added


//question11
// let y=["ali","usman","omer"]
// console.log(y[0])
// console.log(y[1])
// console.log(y[2])


//question12
// console.log(`hellow ${y[0]}`)
// console.log(`hellow ${y[1]}`)


//question13
// let u=["car","bike","bus"]
// console.log(`i like to drive ${0}`)


//question14
// let guest=["ali","sarah","noor"]
// function greet(name:string){
//     console.log("dear",name,"you are invited at dinner")
// }
// greet(guest[0])
// greet(guest[1])
// greet(guest[2])


//question15
// let guest=["ali","sarah","noor"]
//  function greet(name:string){
//      console.log("dear",name,"you are invited at dinner")
//  }
//  greet(guest[0])
//  greet(guest[1])
//  greet(guest[2])
// console.log(`${guest[2]} cannot come`)
// let pop=guest.pop()
// let push=guest.push("saad")
// greet(guest[0])
// greet(guest[1])
// greet(guest[2])


//question16
//  guest=["ali","sarah","noor"]
//  let unshift=guest.unshift("umer")
//  let push=guest.push("zain")
//  let spllice=guest.splice(2,0,"saad")            //2 indicate index number where we want to changeand 0 is deletecount
// greet(guest[0])
// greet(guest[1])
// greet(guest[2])
// greet(guest[3])
// greet(guest[4])
// greet(guest[5])
// console.log(`dinner table is now bigger`) 


//question17
// console.log(`sorry due to some reason only 2 guest allowed`)
//  let k=guest.slice(2,6)
//  console.log(`sorry ${k} dinner cancelled`)
//  console.log(`${guest[0]} and ${guest[1]} you are invited`)
//  let g=guest.pop()
//  g=guest.pop()
//  g=guest.pop()
//  g=guest.pop()
//  g=guest.pop()
//  g=guest.pop()
//  console.log(guest)


//questiom 18
// let f=["makkah","medina","quds","damascus","baghdad"]
// console.log(f)
// let f1=Array.from(f).sort()
// console.log(f1)
// console.log(f)
// let f2=Array.from(f).sort().reverse()
// console.log(f2)
// console.log(f)
// f.reverse()
// console.log(f)
// f.reverse()
// console.log(f)
// f.sort()
// console.log(f)
// f.sort().reverse()
// console.log(f) 


//question19
//let Guest=["ali","sarah","noor"]
//console.log(`number of guest invited are ${Guest.length}`)


//question20
// let pak=["rivers","mountains","forest"]
// for(let i=0;i<3;i++){
//     console.log(pak[i])
// } 

//question21
// let obj={
//     name:"yafeh",
//     age:23,
//     city:"karachi"
// }
// console.log(obj)


//question22
//let u=[12,13]           //we can not access index 3 as it not exist
//console.log(u[0])


//question23
// let p=3
// let q=3
// let r=6
// console.log(p==q)    
// console.log(`equal to operator..true`)
// console.log(p===q)   
// console.log(`equal to considering data types...true`)
// console.log(p!=r)    
// console.log(`not equal to operator...true`)
// console.log(r>=p)    
// console.log(`greater than or equal to...true`)
// console.log(r<=p)    
// console.log(`less than or equal to...false`)
// console.log(p==q&&r>q) 
// console.log(`logical and ..both condition to be true....true`)
// console.log(p<q||p>q) 
//  console.log(`logical or ..one condition to be true...true`)
// console.log(!(p<q))   
// console.log(`logical not ..flips..true`)
// console.log(r===q)
// console.log(p!=q)


//question24
// let r=[1,2,3]
// console.log(r.includes(1))
// console.log(r.includes(4))


//question25
// let alienColor="green"
// if(alienColor==="green"){
//     console.log("u earned 5 points")
// }
// if(alienColor==="red"){}


// //question26
// alienColor="green"
// if(alienColor==="green"){
//     console.log("u earned 5 points for shooting")
// }else{"u earned 10 points"}
// alienColor="green"
// if(alienColor!="green"){
//     console.log("u earned 10 points")
// }


//question27
// alienColor="green"
// if(alienColor==="green"){
//     console.log("5 points")
// }
// alienColor="yellow"
// if(alienColor==="yellow"){
//     console.log("u earned 10 points")
// }
// alienColor="red"
// if(alienColor==="red"){
//     console.log("u earned 15 points")
// }


//question28
// let age=23
// if(age<2){console.log("baby")}
// else if(age==2||age<4)
// {console.log("toddler")}
// else if(age==4||age<13)
// {console.log("kid")}
// else if(age==13||age<20)
// {console.log("teen")}
// else if(age==20||age<65)
// {console.log("adult")}
// else if(age==65||age>65)
// {console.log("old")}


//question29
// let fav_fruits=["mango","apple","banana"]
// if(fav_fruits[0]=="mango"){console.log("u like mango")}
// if(fav_fruits[1]=="apple"){console.log("u like apple")}
// if(fav_fruits[2]=="banana"){console.log("u like banana")}


//question30
// let user=["admin","ali","sarah"]
// function greet(name:string){
//     console.log("hellow",name,"thank u for logging in")}
// for(let i=0;i<user.length;i++){
// greet(user[i])
// if(i==0){console.log("would u like to see status")}}


//question31
// let workers=["admin ","sarah","ali"]
// if(workers.length===0){console.log("we need to find users")}
// else{workers}
// workers=[]
// if(workers.length===0){console.log("we need to find users")}


//question32
// let currentUsers=["noor","omer","saad"]
// let newUsers=["Saad","zain","ali"]
// currentUsers
// for (let i=0;i<newUsers.length;i++){
//     console.log(newUsers[i])
//     if(newUsers[i].toLowerCase()=="noor"
//     ||newUsers[i].toLowerCase()=="omer"
//     ||newUsers[i].toLowerCase()=="saad"){
//         console.log("user name already exist")
//     }else{console.log("user name available")}
// }


//question33
// let ordinalNo=[1,2,3,4,5,6,7,8,9]
// for(let i=0;i<ordinalNo.length;i++){
//     if(ordinalNo[i]==1){console.log(`${ordinalNo[i]}st`)}
//     else if(ordinalNo[i]==2){console.log(`${ordinalNo[i]}nd`)}
//     else if(ordinalNo[i]==3){console.log(`${ordinalNo[i]}rd`)}
//     else{console.log(`${ordinalNo[i]}th`)}
//     }


//question34
// let pizza=['chicken','beef','mutton']
// let i=0
// for( i=0;i<pizza.length;i++){
//     console.log(`i like ${pizza[i]} pizza`)
// }
// console.log(`${pizza} pizzas are my favourite and i really like it`)

//question35
// let pet=['cat','pigeon','parrot']
// for(let i=0;i<pet.length;i++){
//     if(pet[i]=="cat"){console.log("cats are cute")}
//     else if(pet[i]=="pigeon"){console.log("pigeons are innocent")}
//     else if(pet[i]=="parrot"){console.log("parrots are talkative")}
// }
// console.log(`${pet} are good as pets`)

//question36
//  function make_shirt(size:number,message:string)
//   {return console.log(`size is ${size} and shirt message is ${message}`)}
// make_shirt(23,"hollister california")


//question37
// let make_Shirt=(message:string,size="large")=>
//   console.log(`size is ${size} and shirt message is ${message}`)
// make_Shirt("i love typescript")

// make_Shirt=(size:string,message="be strong")=>
//   {return console.log(`size is ${size} and shirt message is ${message}`)}
//    make_Shirt("medium")

// make_Shirt=(message:string,size="24")=>
// {return console.log(`size is ${size} and shirt message is ${message}`)}
// make_Shirt("be yourself")


//question38
// let describe_city=(city:string,country="pakistan")=>
// {return console.log(`${city} is situated in ${country}`)}
// describe_city("karachi")
// describe_city("lahore")
// describe_city("london")


//question39
// function city_country(city:string,country:string)
// {console.log(`${city},${country}`)}
// city_country("Medina","Arabia")
// city_country("Istanbol","Turkey")
// city_country("Islamabad","Pakistan")


//question40
// type artist={name:string,
//             city:string}
// type title={name:string,
//             volume:number,
//           issuedOn:string,
//           track:number}                      
// function make_album(artistName:artist,albumTitle:title)
// {return console.log(artistName,albumTitle)}
// make_album({name:"ali",city:"karachi"},
// {name:"mera nabi",
// volume:1,
// issuedOn:"22 jan",
// track:4})
// make_album({name:"ahmed",city:"lahore"},
// {name:"sabz gumbad",
// volume:1,
// issuedOn:"2 march",
// track:8})
// make_album({name:"raza",city:"peshawer"},
// {name:"noor wala",
// volume:7,
// issuedOn:"8 Aug",
// track:3})


//question41
// let magicians=["herculis","koses","andranikose"]
// function show_magician(index:number):string
// { if(index==0||index<magicians.length)
// {console.log(magicians[index])}
// return magicians[index]}
// show_magician(0)
// show_magician(1)
// show_magician(2)


//question42
// let magicians=["herculis","koses","andranikose"]
// function show_magician(index:number):string
// { if(index==0||index<magicians.length)
// {`great ${magicians[index]}`}
// return `great ${magicians[index]}`}
// function make_great(y:(i:number)=>string){
//     return[
//         y(0),y(1),y(2)
//     ]
// }
// make_great(show_magician)
// console.log(make_great(show_magician))


//question43
//  let magicians=["herculis","koses","andranikose"]
// function show_magician(index:number):string
// { if(index==0||index<magicians.length)
// {return`great ${magicians[index]}`}
// return "";}
// function make_great(y:(i:number)=>string){
//     return[
//         y(0),y(1),y(2)
//     ]
// }
// make_great(show_magician)
// let makeGreat=make_great(show_magician)
// console.log(magicians[0])
// console.log(magicians[1])
// console.log(magicians[2])
// console.log(makeGreat[0])
// console.log(makeGreat[1])
// console.log(makeGreat[2])
// console.log(makeGreat)


//question44
// function Sandwich(...items:string[]){
//          console.log(`Fried bread freshly baked with borders removed
//          filled with ${items}`)
//      }
//      Sandwich("mayo","chiken","sauce")
//      Sandwich("mutton","potatoPatty","chillieSauce")
//      Sandwich("ketchup","beef","salad")


//question45
// function car(mnf:string,model:string,
//     color:string,year:number,...features:string[]){
// console.log({mnf,model,color,year,features})
//     }
// car("toyota","corrola","black",2023,"hybrid","fast")













