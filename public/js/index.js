document.addEventListener('DOMContentLoaded', function () {
  console.log('%c DOM FULLY LOADED AND PARSED', 'color:#bada55; background: #000000; padding:20px; margin:10px 0 10px 550px; border-radius: 5px; font-weight:bold;')


  // variables:
  const navlist = document.querySelector('.navbar__list')
  const menuBtn = document.querySelector('.menu-btn')
  const dropDowns = Array.from(document.querySelectorAll('a'))

  // hamburger and nav toggling:

  let menuOpen = false
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open')
      navlist.classList.add('openNav')
      menuOpen = true
    } else {
      menuBtn.classList.remove('open')
      navlist.classList.remove('openNav')
      menuOpen = false
    }
  })

  // remove class siblings

  const handleClick = (e) => {
    e.preventDefault()
    dropDowns.forEach(node => {
      node.classList.remove('navbar__link--active')
      menuBtn.classList.remove('open')
      navlist.classList.remove('openNav')
    })
    e.currentTarget.classList.add('navbar__link--active')
  }

  dropDowns.forEach(node => {
    node.addEventListener('click', handleClick)
  })



// ################################################################
// #################         exercises       ######################
// ################################################################


console.log('%c exercise #1:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const pairs = (a1,a2) => [a1,a2];

console.log(pairs(51,21));


console.log('%c exercise #2:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const getVoteCount = obj => 

console.log('%c exercise #3:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const sumArray = arr => arr.reduce((a,b) => a + b);

console.log(sumArray([1,2,3,4,5])); // > 15
console.log(sumArray([1,0,-1])); // > 0


console.log('%c exercise #4:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const reverseArr = arr => arr.reverse();

console.log(reverseArr([1,2,3,4,5])) // > [5,4,3,2,1]
console.log(reverseArr(['a','b','c'])) // > ['c','b','a']

console.log('%c exercise #5:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const evenOrOdd = arr => {
  if(arr[0] == 0 && arr.length == 1 || arr.length == 0) {return "even"}

  let check = arr.reduce((a,b)=> a + b);
  check % 2 !== 0 ?  console.log('odd') : console.log('even')
}


console.log(evenOrOdd([0])) // 'even'
console.log(evenOrOdd([1])) // 'odd'
console.log(evenOrOdd([])) // 'even'
console.log(evenOrOdd([0,1,5], "[0,1,5]")) // 'even'

console.log('%c exercise #6:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

function drop (arr, c){
  result = [arr[c]];
 console.log(result)
}

console.log(drop([1,2,3], 1)) // > 2

function drop1 (arr, c){
  result = [arr.slice(c)];
 console.log(result)
}

console.log(drop1([1,2,3], 1)) // > [2,3]

console.log('%c exercise #7:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const arr = [1,2,3,4,5,6];

let [a,b] = arr;
console.log(a)
console.log(b)

console.log('%c exercise #8:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const getLastItem = arr => arr[arr.length -1]

console.log(getLastItem([1,2,3,4,5,6]))
console.log(getLastItem(['a','b','c','d']))


console.log('%c exercise #9:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const rangeOfNum = (r1,r2) => {
  result =[];

  for(let i = r1 + 1; i < r2; i++){
    result.push(i)
  }
  return result;
}


console.log(rangeOfNum(1,9))

console.log('%c exercise #10:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const rotateByOne = arr => {
  let posZero = arr.pop();

  let result = [posZero, ...arr];

   return result;
}

console.log(rotateByOne([1,2,3,4,5]))

console.log('%c exercise #11:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const arrayValues = arr => {
  let result =[]

  for(let i = 0; i < arr.length; i++){
    result.push(typeof(arr[i]))
  }
  return result;
}


console.log(arrayValues([1,2,"null",[]]))

console.log('%c exercise #12:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const arrayToString = arr => arr.join("")


console.log(arrayToString([1,2,3,4,5]))
console.log(arrayToString(["a", "b", "c","d"]))
console.log(arrayToString([2,4, "c","d"]))


console.log('%c exercise #13:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const incrementItems = arr => arr.map(el => el += 1)

console.log(incrementItems([2,4,6]))


console.log('%c exercise #14:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const concatenation = (arr1, arr2) => arr1.concat(arr2)

console.log(concatenation([1,3,5],[2,6,8]))

console.log('%c exercise #15:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const findIndex = (arr, ind) => arr.indexOf(ind);


console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) //2

console.log('%c exercise #16:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const sumFive = arr => arr.filter(el=>el>5).reduce((a,b)=> a+b)


console.log(sumFive([1,5,20,30,4,9,18])) // 77

console.log('%c exercise #17:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const parseArray = arr => arr.map(el => el.toString())

console.log(parseArray([1,2,"a","r"]))

console.log('%c exercise #18:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const search = ( arr, ind ) => arr.indexOf(ind)

console.log(search([1,2,3,4,5,6,7], 25 ))

console.log('%c exercise #19:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const check = ( arr, ind ) => arr.includes(ind)

console.log(check([1,2,3,4,5], 3))
console.log(check([]), 3)

console.log('%c exercise #19:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const minSum = arr => {
  let result = 0;

  for(let i=0; i<arr.length; i++){
     result += Math.min.apply(null, arr[i])
  }
   return result;
}

console.log(minSum([[1,2,3,4,5],[5,6,7,8],[20,21,34,56,100]])) // 26

console.log('%c exercise #20:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const arrBetween = (n1, n2, arr) => {
  let result = []
  for(i=0; i<arr.length; i++){
    if(arr[i] > n1 && arr[i] < n2){
      result.push(arr[i])
    }
  }
  return result;
}

console.log(arrBetween(1,10,[1,10,25,8,11,6])) //[8,6]
console.log(arrBetween(7,32,[1,2,3,78])) //[]
console.log(arrBetween(3,8,[1,5,95,0,4,7])) //[5,4,7]

console.log('%c exercise #21:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const hasSame = ( arr1, arr2 ) => {
  if(arr1[0] == arr2[0] && arr1[arr1.length -1] == arr2[arr2.length -1]){
    return true
  }
  return false;
}

console.log(hasSame(["aa", "bb", "aa"], ["aa", "cc", "aa"]))


console.log('%c exercise #22:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// const cleanUpArray = arr => {
//   let odd =[]
//   let even =[]
//   let int =[]
 
//   for(let i=0; i<arr.length; i++){
//     int.push(parseInt(arr[i]))
//   }
//   for(let i=0; i<int.length; i++){
//     if(int[i] %2 !== 0){odd.push(int[i])}
//     else{
//       even.push(int[i])
//     }
//   }
//   return ;
// }

// console.log(cleanUpArray(["7", "4", "8"])) // [[7], [4,8]]

console.log('%c exercise #23:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const invertArray = arr => arr.map(e=> e * -1)

console.log(invertArray([1,2,3,4,5]))
console.log(invertArray([1,2,-3,4,-5]))


console.log('%c exercise #24:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const len = str => {
  let spl = str.split('');
  let res = 0;

  console.log(spl)
  
  for(let i=0; i< spl.length; i++){
    res ++
  }
  return res;
}


console.log(len('Hello World')) // 11

console.log('%c exercise #25:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const halfQeight = n => [n/2, n/4, n/8]


console.log(halfQeight(6)) // [3,1.5,0.75]
console.log(halfQeight(22)) // [11, 5.5, 2.75]

console.log('%c exercise #26:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const shapes = n => {

obj ={
1	: "circle",
2	: "semi-circle",
3	: "triangle",
4	: "square",
5	: "pentagon",
6	: "hexagon",
7	: "heptagon",
8	: "octagon",
9	:"nonagon",
10: 	"decagon"
}

return obj[n]
}

console.log(shapes(2),2) // "semi circle"
console.log(shapes(5),5) // "pentagon"

console.log('%c exercise #27:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const bytwo = arr => arr.map(e => e * 2)

console.log(bytwo([1,2,3,4,5])) // [2,4,6,8,10]


console.log('%c exercise #28:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const wordLengths = arr => {
  res =[];

  for(let i=0; i < arr.length; i++){
    res.push(arr[i].length)
  }
  return res;
}

console.log(wordLengths(["hello", "world"])) // [5,5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) // [9,12,9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) // [3, 5, 9, 4, 2, 3, 8]

console.log('%c exercise #29:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

function sumMinimums(arr){
	let count = 0;
  for(let i = 0; i < arr.length; i++) {
			count += Math.min(...arr[i]);
	}
	return count;
}
console.log(sumMinimums([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
])) // 26 (1 + 5 +20)

console.log('%c exercise #30:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const trimmedAverages = arr => {
  let res = [];

  let max = arr.pop()
  let min = arr.shift()

  for(let i =0; i< arr.length; i++){
    res.push(arr[i])
  }
  return  res.reduce((a,b)=> a + b) / res.length;
}


console.log(trimmedAverages([4, 5, 7, 100]))

console.log('%c exercise #31:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

function arrIndex (list, idx){
  let arr = list.flat()
	return idx.map(x=> arr[x-1]).join('')
}


console.log(arrIndex([[1, 2, 3],[4, 5, 6],[7, 8, 9]], [["m", "u", "b"],["a", "s", "h"],["i", "r", "1"]
]))

console.log('%c exercise #32:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const birthdayCakeCandles = arr => {
  let max = Math.max(...arr)
  let res =[]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == max){
      res.push(arr[i])
    }
  }
  return res.length;
}

console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])) // 4
console.log(birthdayCakeCandles([3,2,1,3])) // 2
console.log(birthdayCakeCandles([4,4,1,3])) // 2


console.log('%c exercise #33:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const spaceMeOut = str => {
   res=''
   for(let i=0; i <str.length; i++){
     res += str[i] + " "
   }
   return res;
  }

console.log(spaceMeOut("space")) // "s p a c e"
console.log(spaceMeOut("far out")) // "f a r  o u t"
console.log(spaceMeOut("elongated musk")) // "e l o n g a t e d   m u s k"

console.log('%c exercise #34:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
// let [ trans1, trans2, [trans3, [trans4]] ] = arr

// console.log(trans2)

console.log('%c exercise #35:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const outlierNumber = arr => {
    let odd =[]
    let even =[]

    for(let i =0; i < arr.length; i++){
      if(arr[i] % 2 !== 0){
        odd.push(arr[i])
      }else{
        even.push(arr[i])
      }
    }
  odd.length < even.length ? console.log(odd) : console.log(even)
}


console.log(outlierNumber([2, 3, 4])) // 3
console.log(outlierNumber([4, 1, 3, 5, 9])) // 4


console.log('%c exercise #36:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const getSumOfItems = arr => arr.reduce((a,b) => a + b, 0) 

console.log(getSumOfItems([2,7,4])) // 13

console.log('%c exercise #37:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const getFileName = str => {
 let spli = str.split('/')
 return spli[spli.length - 1];
}



console.log(getFileName('C:/Projects/pil_tests/ascii/edabit.txt')) // edabit.txt
console.log(getFileName('C:/Users/johnsmith/Music/Beethoven_5.mp3')) // Beethoven_5.mp3
console.log(getFileName('ffprobe.exe')) // ffprobe.exe

console.log('%c exercise #38:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

function moveZeros(arr){
  return arr
  .filter((val) => val !== 0)
  .concat(arr.filter((val) => val === 0));
}

console.log(moveZeros([0, 1, null, 2, false, 1, 0])) // [1, null, 2, false, 1, 0, 0]

console.log('%c exercise #39:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const integerBoolean = n =>{
   let spli = n.split('')
   let res =[]
   for(let i = 0; i < spli.length; i++){
    if(spli[i] == 1){
      res.push(true)
    }else{res.push(false)}
    }
   return res ;
}

console.log(integerBoolean('100101')) // [true, false, false, true, false, true]
console.log(integerBoolean('10')) // [true, false]
console.log(integerBoolean('1011')) // [true, false, true, true]


console.log('%c exercise #40:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const oddSum = arr =>{
  let resultArray = [];
	for (let i = 0; i < arr.length-1; i++) {
	  if ((arr[i] + arr[i+1]) % 2 === 0) {
		resultArray.push(true);
	  } else {
		resultArray.push(false);
	  }
	}
  return resultArray;
}

console.log(oddSum([11, 15, 6, 8, 9, 10])) // [true, false, true, false, false]

console.log('%c exercise #41:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const lonelyInteger = a => a.find(b => !a.includes(-b));



console.log(lonelyInteger([1, -1, 2, -2, 3])) // -> 3
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])) // -> -4
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])) // -> -9


console.log('%c exercise #42:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

function simpleEncoder(str){
	text = ""
  for(let i = 0; i < str.length; i++){
		let occurrences = false;
		for(let j = 0; j < str.length; j++) {
			if(str[i].toLowerCase() === str[j].toLowerCase() && i != j)
				occurrences = true;
		}
		if(occurrences)
			text += "]"
		else
			text += "["
	}
	return text
}



console.log(simpleEncoder("Mubashir")) // [[[[[[[[
console.log(simpleEncoder("Matt") ) // [[]]
console.log(simpleEncoder("eD  aBiT") ) // [[]][[[[

  console.log('%c exercise #43:', 
  'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const stringPairs = str => (str + '*').match(/../g) || [];

console.log(stringPairs("airforces"))


console.log('%c exercise #44:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const findBob = arr =>  arr.indexOf('Bob')

console.log(findBob(["Jimmy", "Layla", "Bob"]))

console.log('%c exercise #45:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const unlucky13 = arr => arr.filter(v => v % 13 !==0)

console.log(unlucky13([53, 182, 435, 591, 637]))
console.log(unlucky13([104, 351, 455, 806, 871]))
console.log(unlucky13([24, 316, 393, 458, 1279]))


console.log('%c exercise #46:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

largestNumbers = ( n, arr ) =>{
   let sor= arr.sort((a,b) => a - b).reverse()
   let res =[]
   for(i = 0; i < n; i++){
      res.push(arr[i])
   }
   return res.reverse();
}

console.log(largestNumbers(2, [4, 3, 2, 1])) // -> [3,4]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) // ➞ [16, 18, 57]

console.log('%c exercise #47:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const countUppercase = arr => arr.join("").replace(/[^A-Z]/g, "").length;
    
console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"])) // -> 6
console.log(countUppercase(["little", "lower", "down"])) // -> 0
console.log(countUppercase(["EDAbit", "Educate", "Coding"])) // -> 5

console.log('%c exercise #48:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const findLargestNum = arr => arr.sort((a,b)=>b-a)[0]


console.log(findLargestNum([4, 5, 1, 3])) // -> 5
console.log(findLargestNum([1000, 1001, 857, 1])) // -> 1001
console.log(findLargestNum([300, 200, 600, 150])) // -> 600


console.log('%c exercise #49:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const checkit = (a1, a2) => a2.filter((v,i) => v[i] !== a1[i] ? -1 : 1)


console.log(checkit(["cat", "blue", "skt", "umbrells", "paddy"],
                    ["cat", "blue", "sky", "umbrella", "paddy"]));

                    console.log('%c exercise #50:', 
                    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const addIndexes = arr =>  arr.map((e,i) => e + i)
// lub {
  // let res=[]
  // for(let i=0; i<arr.length; i++){
  //   res.push(arr[i] + i)
  // }
  // return res;
// }

console.log(addIndexes([0, 0, 0, 0, 0])) // ➞ [0, 1, 2, 3, 4]
console.log(addIndexes([1, 2, 3, 4, 5])) // ➞ [1, 3, 5, 7, 9]
console.log(addIndexes([5, 4, 3, 2, 1])) // ➞ [5, 5, 5, 5, 5]


console.log('%c exercise #51:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const arrayLessThan100 = arr => arr.reduce((a,b)=>a+b) < 100 ? true : false;

console.log(arrayLessThan100([5, 57])) // -> true

console.log('%c exercise #52:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const outlieNumber = arr => {
  let ev =[]
  let od =[]

  for(let i=0; i<arr.length; i++){
   arr[i] % 2 == 0 ? ev.push(arr[i]) : od.push(arr[i])
  }
  if(ev.length > od.length){
    for(let i=0; i<od.length; i++){
      console.log(od[i])
    }
  }else{
    for(let i=0; i<ev.length; i++){
      console.log(ev[i])
    }
  }
  
}

console.log(outlieNumber([2, 3, 4])) // -> 3
console.log(outlieNumber([1, 2, 3])) // -> 2
console.log(outlieNumber([4, 1, 3, 5, 9])) // -> 4


console.log('%c exercise #53:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const isFourLetters = arr => arr.filter(e => e.length == 4)

console.log(isFourLetters(["Tomato", "Potato", "Pair"])) // ➞ ["Pair"]
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])) // -> ["Bear"]
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])) // ["Ryan", "Matt"]

console.log('%c exercise #54:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const difference = arr => {
  let sorted = arr.sort((a,b) => a - b)
  return sorted[sorted.length - 1] - sorted[0]
}

console.log(difference([10, 15, 20, 2, 10, 6])) // -> 18
console.log(difference([-3, 4, -9, -1, -2, 15])) // -> 24
console.log(difference([4, 17, 12, 2, 10, 2])) // -> 15

console.log('%c exercise #55:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const noOdds = arr =>  arr.filter(e => e % 2 == 0)

console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])) // -> [2,4,6,8]
console.log(noOdds([43, 65, 23, 89, 53, 9, 6])) //  ➞ [6]
console.log(noOdds([718, 991, 449, 644, 380, 440])) // ➞ [718, 644, 380, 440]

console.log('%c exercise #56:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const nextElement = arr =>arr[arr.length - 1] + (arr[1] - arr[0]);


console.log(nextElement([3, 5, 7, 9])) // -> 11
console.log(nextElement([-5, -6, -7])) // -> -8
console.log(nextElement([2, 2, 2, 2, 2])) // -> 2

console.log('%c exercise #57:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const canCapture = ( [ s1, s2 ] ) => s1[0] === s2[0] || s1[1] === s2[1];

console.log(canCapture(["A8", "E8"])) // -> true
console.log(canCapture(["A1", "B2"])) // -> false
console.log(canCapture(["H4", "H3"])) // -> true
console.log(canCapture(["F5", "C8"])) // -> false

console.log('%c exercise #58:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const addEnding = ( arr, n ) => {
  let res =[]
  for(i=0; i<arr.length; i++){
      res.push(arr[i] + n)
  }
  return res;
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")) // ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
console.log(addEnding(["new", "pander", "scoop"], "er")) // ➞ ["newer", "panderer", "scooper"]
console.log(addEnding(["bend", "sharpen", "mean"], "ing")) // ➞ ["bending", "sharpening", "meaning"]

console.log('%c exercise #59:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const getFillings = arr => arr.filter(e => e !== "bread")
const getFillings = arr => arr.slice(1,-1)

console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"])) //  ["ham", "cheese", "ham"]
console.log(getFillings(["bread", "sausage", "tomato", "bread"])) //  ["sausage", "tomato"]
console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"])) // ➞ ["lettuce", "bacon", "tomato"]

console.log('%c exercise #60:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const countdown = n => {
  let res =[]
  for(i=0; i <= n; i++){ res.push(i)}
  return res.reverse();
}

console.log(countdown(5)) // [5, 4, 3, 2, 1, 0]
console.log(countdown(1)) // [1, 0]
console.log(countdown(0)) //  [0]

console.log('%c exercise #61:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const getSequence = ( n1, n2 ) => {
  let res =[]
    for(let i =n1; i <= n2; i++){
      res.push(i)
    }
  return res;
}


console.log(getSequence(1, 5)) // -> [1, 2, 3, 4, 5]
console.log(getSequence(98,100)) // ➞ [98, 99, 100]
console.log(getSequence(1000,1000)) // ➞ [1000]



// ########################################
}) // <----DOMContentLoaded close brackets