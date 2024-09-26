//Chapter 15 (Array I)

//Q no 1 

var studentNames = [] ;
console.log(studentNames);

//Q no 2

var stringArray = ["Welcome"];
console.log(stringArray);

//Q no 3

var alphabet = [ "h" , "i" , "j" , "k"];

alert(alphabet [2]);

//Q no 4

var alphabet = [ "h" , "i" , "j" , "k"  , "l" , "m" , "n" , "o"];

console.log(alphabet.length);


//Q no 5

var myArray = ["First Element"];

 myArray[1]= ["newElement"];

 alert(myArray[1]);

 //Chapter 16 (Array II)

 //Q no 1 

 var anArray = ["first Element"];
 anArray.push ("second Element");

 alert(anArray [anArray.length - 1]);

  //Q no 2

  var Alphabet = [ "h" , "i" , "j" , "k"];
  
 Alphabet.pop(3);

 console.log(Alphabet);

  //Q no 3

  var Alphabet = [ "h" , "i" , "j" , "k"];
  Alphabet.push(8);
  console.log(Alphabet);

  //Chapter 16 (Array III)

    //Q no 1

    var sizes = [ "S", "M", "L", "XL", "XXL"];
    sizes.shift(0);
    console.log(sizes);

    //Q no 2

    var sizes = [ "S", "M", "L", "XL", "XXL"];
    sizes.unshift(1 ,2 ,3 );
    console.log(sizes);

    //Q no 3

    var Arr = ["Ali"];

    Arr.unshift ("Muhammad");
   alert(Arr [0]);

   //Q no 4

   var sizes = [ "S", "M", "XL", "XXL"];

   sizes.splice( 2 , 0 , "L");
   console.log(sizes);

    //Q no 5

   var sizes = [ "S", "M", "L", "XL", "XXL" , "XXXL"];

   var resizes = sizes.slice(0 , 3);
   console.log(resizes);

  //Q no 6

  var pets = ["dog", "cat", "ox", "duck", "frog"];
  pets.splice(1,3,"Tiger","Cow");
  console.log(pets);

  // Q no 7

 var pets = ["dog","cat","ox","duck","frog"];

  pets.splice(1,2);

 console.log(pets);

 // Q no 8

 var pets = ["dog","cat","ox","duck","frog","flea"];

 var reducedpets=pets.slice(3,5);

 console.log(reducedpets);
