
  
//   // variables:
//   const navlist = document.querySelector('.navbar__list')
//   const menuBtn = document.querySelector('.menu-btn')
//   const dropDowns = Array.from(document.querySelectorAll('a'))

//   // hamburger and nav toggling:

//   let menuOpen = false
//   menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//       menuBtn.classList.add('open')
//       navlist.classList.add('openNav')
//       menuOpen = true
//     } else {
//       menuBtn.classList.remove('open')
//       navlist.classList.remove('openNav')
//       menuOpen = false
//     }
//   })

//   // remove class siblings

//   const handleClick = (e) => {
//     e.preventDefault()
//     dropDowns.forEach(node => {
//       node.classList.remove('navbar__link--active')
//       menuBtn.classList.remove('open')
//       navlist.classList.remove('openNav')
//     })
//     e.currentTarget.classList.add('navbar__link--active')
//   }

//   dropDowns.forEach(node => {
//     node.addEventListener('click', handleClick)
//   })

//   // ################################################################
//   // #################         exercises       ######################
//   // ################################################################

//   console.log('%c exercise #1:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const pairs = (a1, a2) => [a1, a2]

//   console.log(pairs(51, 21))

//   console.log('%c exercise #2:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   // const getVoteCount = obj =>

//   console.log('%c exercise #3:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const sumArray = arr => arr.reduce((a, b) => a + b)

//   console.log(sumArray([1, 2, 3, 4, 5])) // > 15
//   console.log(sumArray([1, 0, -1])) // > 0

//   console.log('%c exercise #4:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const reverseArr = arr => arr.reverse()

//   console.log(reverseArr([1, 2, 3, 4, 5])) // > [5,4,3,2,1]
//   console.log(reverseArr(['a', 'b', 'c'])) // > ['c','b','a']

//   console.log('%c exercise #5:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const evenOrOdd = arr => {
//     if (arr[0] == 0 && arr.length == 1 || arr.length == 0) { return 'even' }

//     const check = arr.reduce((a, b) => a + b)
//     check % 2 !== 0 ? console.log('odd') : console.log('even')
//   }

//   console.log(evenOrOdd([0])) // 'even'
//   console.log(evenOrOdd([1])) // 'odd'
//   console.log(evenOrOdd([])) // 'even'
//   console.log(evenOrOdd([0, 1, 5], '[0,1,5]')) // 'even'

//   console.log('%c exercise #6:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   function drop (arr, c) {
//     result = [arr[c]]
//     console.log(result)
//   }

//   console.log(drop([1, 2, 3], 1)) // > 2

//   function drop1 (arr, c) {
//     result = [arr.slice(c)]
//     console.log(result)
//   }

//   console.log(drop1([1, 2, 3], 1)) // > [2,3]

//   console.log('%c exercise #7:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const arr = [1, 2, 3, 4, 5, 6]

//   const [a, b] = arr
//   console.log(a)
//   console.log(b)

//   console.log('%c exercise #8:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const getLastItem = arr => arr[arr.length - 1]

//   console.log(getLastItem([1, 2, 3, 4, 5, 6]))
//   console.log(getLastItem(['a', 'b', 'c', 'd']))

//   console.log('%c exercise #9:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const rangeOfNum = (r1, r2) => {
//     result = []

//     for (let i = r1 + 1; i < r2; i++) {
//       result.push(i)
//     }
//     return result
//   }

//   console.log(rangeOfNum(1, 9))

//   console.log('%c exercise #10:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const rotateByOne = arr => {
//     const posZero = arr.pop()

//     const result = [posZero, ...arr]

//     return result
//   }

//   console.log(rotateByOne([1, 2, 3, 4, 5]))

//   console.log('%c exercise #11:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const arrayValues = arr => {
//     const result = []

//     for (let i = 0; i < arr.length; i++) {
//       result.push(typeof (arr[i]))
//     }
//     return result
//   }

//   console.log(arrayValues([1, 2, 'null', []]))

//   console.log('%c exercise #12:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const arrayToString = arr => arr.join('')

//   console.log(arrayToString([1, 2, 3, 4, 5]))
//   console.log(arrayToString(['a', 'b', 'c', 'd']))
//   console.log(arrayToString([2, 4, 'c', 'd']))

//   console.log('%c exercise #13:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const incrementItems = arr => arr.map(el => el += 1)

//   console.log(incrementItems([2, 4, 6]))

//   console.log('%c exercise #14:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const concatenation = (arr1, arr2) => arr1.concat(arr2)

//   console.log(concatenation([1, 3, 5], [2, 6, 8]))

//   console.log('%c exercise #15:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const findIndex = (arr, ind) => arr.indexOf(ind)

//   console.log(findIndex(['hi', 'edabit', 'fgh', 'abc'], 'fgh')) // 2

//   console.log('%c exercise #16:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const sumFive = arr => arr.filter(el => el > 5).reduce((a, b) => a + b)

//   console.log(sumFive([1, 5, 20, 30, 4, 9, 18])) // 77

//   console.log('%c exercise #17:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const parseArray = arr => arr.map(el => el.toString())

//   console.log(parseArray([1, 2, 'a', 'r']))

//   console.log('%c exercise #18:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const search = (arr, ind) => arr.indexOf(ind)

//   console.log(search([1, 2, 3, 4, 5, 6, 7], 25))

//   console.log('%c exercise #19:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const check = (arr, ind) => arr.includes(ind)

//   console.log(check([1, 2, 3, 4, 5], 3))
//   console.log(check([]), 3)

//   console.log('%c exercise #19:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const minSum = arr => {
//     let result = 0

//     for (let i = 0; i < arr.length; i++) {
//       result += Math.min.apply(null, arr[i])
//     }
//     return result
//   }

//   console.log(minSum([[1, 2, 3, 4, 5], [5, 6, 7, 8], [20, 21, 34, 56, 100]])) // 26

//   console.log('%c exercise #20:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const arrBetween = (n1, n2, arr) => {
//     const result = []
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] > n1 && arr[i] < n2) {
//         result.push(arr[i])
//       }
//     }
//     return result
//   }

//   console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) // [8,6]
//   console.log(arrBetween(7, 32, [1, 2, 3, 78])) // []
//   console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) // [5,4,7]

//   console.log('%c exercise #21:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const hasSame = (arr1, arr2) => {
//     if (arr1[0] == arr2[0] && arr1[arr1.length - 1] == arr2[arr2.length - 1]) {
//       return true
//     }
//     return false
//   }

//   console.log(hasSame(['aa', 'bb', 'aa'], ['aa', 'cc', 'aa']))

//   console.log('%c exercise #22:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   // const cleanUpArray = arr => {
//   //   let odd =[]
//   //   let even =[]
//   //   let int =[]

//   //   for(let i=0; i<arr.length; i++){
//   //     int.push(parseInt(arr[i]))
//   //   }
//   //   for(let i=0; i<int.length; i++){
//   //     if(int[i] %2 !== 0){odd.push(int[i])}
//   //     else{
//   //       even.push(int[i])
//   //     }
//   //   }
//   //   return ;
//   // }

//   // console.log(cleanUpArray(["7", "4", "8"])) // [[7], [4,8]]

//   console.log('%c exercise #23:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const invertArray = arr => arr.map(e => e * -1)

//   console.log(invertArray([1, 2, 3, 4, 5]))
//   console.log(invertArray([1, 2, -3, 4, -5]))

//   console.log('%c exercise #24:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const len = str => {
//     const spl = str.split('')
//     let res = 0

//     console.log(spl)

//     for (let i = 0; i < spl.length; i++) {
//       res++
//     }
//     return res
//   }

//   console.log(len('Hello World')) // 11

//   console.log('%c exercise #25:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const halfQeight = n => [n / 2, n / 4, n / 8]

//   console.log(halfQeight(6)) // [3,1.5,0.75]
//   console.log(halfQeight(22)) // [11, 5.5, 2.75]

//   console.log('%c exercise #26:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const shapes = n => {
//     obj = {
//       1: 'circle',
//       2: 'semi-circle',
//       3: 'triangle',
//       4: 'square',
//       5: 'pentagon',
//       6: 'hexagon',
//       7: 'heptagon',
//       8: 'octagon',
//       9: 'nonagon',
//       10: 'decagon'
//     }

//     return obj[n]
//   }

//   console.log(shapes(2), 2) // "semi circle"
//   console.log(shapes(5), 5) // "pentagon"

//   console.log('%c exercise #27:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const bytwo = arr => arr.map(e => e * 2)

//   console.log(bytwo([1, 2, 3, 4, 5])) // [2,4,6,8,10]

//   console.log('%c exercise #28:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const wordLengths = arr => {
//     res = []

//     for (let i = 0; i < arr.length; i++) {
//       res.push(arr[i].length)
//     }
//     return res
//   }

//   console.log(wordLengths(['hello', 'world'])) // [5,5]
//   console.log(wordLengths(['Halloween', 'Thanksgiving', 'Christmas'])) // [9,12,9]
//   console.log(wordLengths(['She', 'sells', 'seashells', 'down', 'by', 'the', 'seashore'])) // [3, 5, 9, 4, 2, 3, 8]

//   console.log('%c exercise #29:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   function sumMinimums (arr) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//       count += Math.min(...arr[i])
//     }
//     return count
//   }
//   console.log(sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
//   ])) // 26 (1 + 5 +20)

//   console.log('%c exercise #30:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const trimmedAverages = arr => {
//     const res = []

//     const max = arr.pop()
//     const min = arr.shift()

//     for (let i = 0; i < arr.length; i++) {
//       res.push(arr[i])
//     }
//     return res.reduce((a, b) => a + b) / res.length
//   }

//   console.log(trimmedAverages([4, 5, 7, 100]))

//   console.log('%c exercise #31:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   function arrIndex (list, idx) {
//     const arr = list.flat()
//     return idx.map(x => arr[x - 1]).join('')
//   }

//   console.log(arrIndex([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']
//   ]))

//   console.log('%c exercise #32:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const birthdayCakeCandles = arr => {
//     const max = Math.max(...arr)
//     const res = []
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == max) {
//         res.push(arr[i])
//       }
//     }
//     return res.length
//   }

//   console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])) // 4
//   console.log(birthdayCakeCandles([3, 2, 1, 3])) // 2
//   console.log(birthdayCakeCandles([4, 4, 1, 3])) // 2

//   console.log('%c exercise #33:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const spaceMeOut = str => {
//     res = ''
//     for (let i = 0; i < str.length; i++) {
//       res += str[i] + ' '
//     }
//     return res
//   }

//   console.log(spaceMeOut('space')) // "s p a c e"
//   console.log(spaceMeOut('far out')) // "f a r  o u t"
//   console.log(spaceMeOut('elongated musk')) // "e l o n g a t e d   m u s k"

//   console.log('%c exercise #34:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   // const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
//   // let [ trans1, trans2, [trans3, [trans4]] ] = arr

//   // console.log(trans2)

//   console.log('%c exercise #35:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const outlierNumber = arr => {
//     const odd = []
//     const even = []

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//         odd.push(arr[i])
//       } else {
//         even.push(arr[i])
//       }
//     }
//     odd.length < even.length ? console.log(odd) : console.log(even)
//   }

//   console.log(outlierNumber([2, 3, 4])) // 3
//   console.log(outlierNumber([4, 1, 3, 5, 9])) // 4

//   console.log('%c exercise #36:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const getSumOfItems = arr => arr.reduce((a, b) => a + b, 0)

//   console.log(getSumOfItems([2, 7, 4])) // 13

//   console.log('%c exercise #37:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const getFileName = str => {
//     const spli = str.split('/')
//     return spli[spli.length - 1]
//   }

//   console.log(getFileName('C:/Projects/pil_tests/ascii/edabit.txt')) // edabit.txt
//   console.log(getFileName('C:/Users/johnsmith/Music/Beethoven_5.mp3')) // Beethoven_5.mp3
//   console.log(getFileName('ffprobe.exe')) // ffprobe.exe

//   console.log('%c exercise #38:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   function moveZeros (arr) {
//     return arr
//       .filter((val) => val !== 0)
//       .concat(arr.filter((val) => val === 0))
//   }

//   console.log(moveZeros([0, 1, null, 2, false, 1, 0])) // [1, null, 2, false, 1, 0, 0]

//   console.log('%c exercise #39:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const integerBoolean = n => {
//     const spli = n.split('')
//     const res = []
//     for (let i = 0; i < spli.length; i++) {
//       if (spli[i] == 1) {
//         res.push(true)
//       } else { res.push(false) }
//     }
//     return res
//   }

//   console.log(integerBoolean('100101')) // [true, false, false, true, false, true]
//   console.log(integerBoolean('10')) // [true, false]
//   console.log(integerBoolean('1011')) // [true, false, true, true]

//   console.log('%c exercise #40:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const oddSum = arr => {
//     const resultArray = []
//     for (let i = 0; i < arr.length - 1; i++) {
// 	  if ((arr[i] + arr[i + 1]) % 2 === 0) {
//         resultArray.push(true)
// 	  } else {
//         resultArray.push(false)
// 	  }
//     }
//     return resultArray
//   }

//   console.log(oddSum([11, 15, 6, 8, 9, 10])) // [true, false, true, false, false]

//   console.log('%c exercise #41:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const lonelyInteger = a => a.find(b => !a.includes(-b))

//   console.log(lonelyInteger([1, -1, 2, -2, 3])) // -> 3
//   console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])) // -> -4
//   console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])) // -> -9

//   console.log('%c exercise #42:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   function simpleEncoder (str) {
//     text = ''
//     for (let i = 0; i < str.length; i++) {
//       let occurrences = false
//       for (let j = 0; j < str.length; j++) {
//         if (str[i].toLowerCase() === str[j].toLowerCase() && i != j) { occurrences = true }
//       }
//       if (occurrences) { text += ']' } else { text += '[' }
//     }
//     return text
//   }

//   console.log(simpleEncoder('Mubashir')) // [[[[[[[[
//   console.log(simpleEncoder('Matt')) // [[]]
//   console.log(simpleEncoder('eD  aBiT')) // [[]][[[[

//   console.log('%c exercise #43:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const stringPairs = str => (str + '*').match(/../g) || []

//   console.log(stringPairs('airforces'))

//   console.log('%c exercise #44:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const findBob = arr => arr.indexOf('Bob')

//   console.log(findBob(['Jimmy', 'Layla', 'Bob']))

//   console.log('%c exercise #45:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const unlucky13 = arr => arr.filter(v => v % 13 !== 0)

//   console.log(unlucky13([53, 182, 435, 591, 637]))
//   console.log(unlucky13([104, 351, 455, 806, 871]))
//   console.log(unlucky13([24, 316, 393, 458, 1279]))

//   console.log('%c exercise #46:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   largestNumbers = (n, arr) => {
//     const sor = arr.sort((a, b) => a - b).reverse()
//     const res = []
//     for (i = 0; i < n; i++) {
//       res.push(arr[i])
//     }
//     return res.reverse()
//   }

//   console.log(largestNumbers(2, [4, 3, 2, 1])) // -> [3,4]
//   console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) // ➞ [16, 18, 57]

//   console.log('%c exercise #47:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const countUppercase = arr => arr.join('').replace(/[^A-Z]/g, '').length

//   console.log(countUppercase(['SOLO', 'hello', 'Tea', 'wHat'])) // -> 6
//   console.log(countUppercase(['little', 'lower', 'down'])) // -> 0
//   console.log(countUppercase(['EDAbit', 'Educate', 'Coding'])) // -> 5

//   console.log('%c exercise #48:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const findLargestNum = arr => arr.sort((a, b) => b - a)[0]

//   console.log(findLargestNum([4, 5, 1, 3])) // -> 5
//   console.log(findLargestNum([1000, 1001, 857, 1])) // -> 1001
//   console.log(findLargestNum([300, 200, 600, 150])) // -> 600

//   console.log('%c exercise #49:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const checkit = (a1, a2) => a2.filter((v, i) => v[i] !== a1[i] ? -1 : 1)

//   console.log(checkit(['cat', 'blue', 'skt', 'umbrells', 'paddy'],
//     ['cat', 'blue', 'sky', 'umbrella', 'paddy']))

//   console.log('%c exercise #50:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const addIndexes = arr => arr.map((e, i) => e + i)
//   // lub {
//   // let res=[]
//   // for(let i=0; i<arr.length; i++){
//   //   res.push(arr[i] + i)
//   // }
//   // return res;
//   // }

//   console.log(addIndexes([0, 0, 0, 0, 0])) // ➞ [0, 1, 2, 3, 4]
//   console.log(addIndexes([1, 2, 3, 4, 5])) // ➞ [1, 3, 5, 7, 9]
//   console.log(addIndexes([5, 4, 3, 2, 1])) // ➞ [5, 5, 5, 5, 5]

//   console.log('%c exercise #51:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const arrayLessThan100 = arr => arr.reduce((a, b) => a + b) < 100

//   console.log(arrayLessThan100([5, 57])) // -> true

//   console.log('%c exercise #52:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const outlieNumber = arr => {
//     const ev = []
//     const od = []

//     for (let i = 0; i < arr.length; i++) {
//       arr[i] % 2 == 0 ? ev.push(arr[i]) : od.push(arr[i])
//     }
//     if (ev.length > od.length) {
//       for (let i = 0; i < od.length; i++) {
//         console.log(od[i])
//       }
//     } else {
//       for (let i = 0; i < ev.length; i++) {
//         console.log(ev[i])
//       }
//     }
//   }

//   console.log(outlieNumber([2, 3, 4])) // -> 3
//   console.log(outlieNumber([1, 2, 3])) // -> 2
//   console.log(outlieNumber([4, 1, 3, 5, 9])) // -> 4

//   console.log('%c exercise #53:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const isFourLetters = arr => arr.filter(e => e.length == 4)

//   console.log(isFourLetters(['Tomato', 'Potato', 'Pair'])) // ➞ ["Pair"]
//   console.log(isFourLetters(['Kangaroo', 'Bear', 'Fox'])) // -> ["Bear"]
//   console.log(isFourLetters(['Ryan', 'Kieran', 'Jason', 'Matt'])) // ["Ryan", "Matt"]

//   console.log('%c exercise #54:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const difference = arr => {
//     const sorted = arr.sort((a, b) => a - b)
//     return sorted[sorted.length - 1] - sorted[0]
//   }

//   console.log(difference([10, 15, 20, 2, 10, 6])) // -> 18
//   console.log(difference([-3, 4, -9, -1, -2, 15])) // -> 24
//   console.log(difference([4, 17, 12, 2, 10, 2])) // -> 15

//   console.log('%c exercise #55:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const noOdds = arr => arr.filter(e => e % 2 == 0)

//   console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])) // -> [2,4,6,8]
//   console.log(noOdds([43, 65, 23, 89, 53, 9, 6])) //  ➞ [6]
//   console.log(noOdds([718, 991, 449, 644, 380, 440])) // ➞ [718, 644, 380, 440]

//   console.log('%c exercise #56:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const nextElement = arr => arr[arr.length - 1] + (arr[1] - arr[0])

//   console.log(nextElement([3, 5, 7, 9])) // -> 11
//   console.log(nextElement([-5, -6, -7])) // -> -8
//   console.log(nextElement([2, 2, 2, 2, 2])) // -> 2

//   console.log('%c exercise #57:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const canCapture = ([s1, s2]) => s1[0] === s2[0] || s1[1] === s2[1]

//   console.log(canCapture(['A8', 'E8'])) // -> true
//   console.log(canCapture(['A1', 'B2'])) // -> false
//   console.log(canCapture(['H4', 'H3'])) // -> true
//   console.log(canCapture(['F5', 'C8'])) // -> false

//   console.log('%c exercise #58:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const addEnding = (arr, n) => {
//     const res = []
//     for (i = 0; i < arr.length; i++) {
//       res.push(arr[i] + n)
//     }
//     return res
//   }

//   console.log(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly')) // ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
//   console.log(addEnding(['new', 'pander', 'scoop'], 'er')) // ➞ ["newer", "panderer", "scooper"]
//   console.log(addEnding(['bend', 'sharpen', 'mean'], 'ing')) // ➞ ["bending", "sharpening", "meaning"]

//   console.log('%c exercise #59:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   // const getFillings = arr => arr.filter(e => e !== "bread")
//   const getFillings = arr => arr.slice(1, -1)

//   console.log(getFillings(['bread', 'ham', 'cheese', 'ham', 'bread'])) //  ["ham", "cheese", "ham"]
//   console.log(getFillings(['bread', 'sausage', 'tomato', 'bread'])) //  ["sausage", "tomato"]
//   console.log(getFillings(['bread', 'lettuce', 'bacon', 'tomato', 'bread'])) // ➞ ["lettuce", "bacon", "tomato"]

//   console.log('%c exercise #60:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const countdown = n => {
//     const res = []
//     for (i = 0; i <= n; i++) { res.push(i) }
//     return res.reverse()
//   }

//   console.log(countdown(5)) // [5, 4, 3, 2, 1, 0]
//   console.log(countdown(1)) // [1, 0]
//   console.log(countdown(0)) //  [0]

//   console.log('%c exercise #61:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const getSequence = (n1, n2) => {
//     const res = []
//     for (let i = n1; i <= n2; i++) {
//       res.push(i)
//     }
//     return res
//   }

//   console.log(getSequence(1, 5)) // -> [1, 2, 3, 4, 5]
//   console.log(getSequence(98, 100)) // ➞ [98, 99, 100]
//   console.log(getSequence(1000, 1000)) // ➞ [1000]

//   console.log('%c exercise #62:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const hurdleJump = (arr, n) => arr.sort((a, b) => b - a)[0] <= n

//   console.log(hurdleJump([1, 2, 3, 4, 5], 5)) // -> true
//   console.log(hurdleJump([5, 5, 3, 4, 5], 3)) // -> false
//   console.log(hurdleJump([5, 4, 5, 6], 10)) // -> true
//   console.log(hurdleJump([1, 2, 1], 1)) // -> false

//   console.log('%c exercise #63:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const additiveInverse = arr => arr.map(e => e * -1)

//   console.log(additiveInverse([5, -7, 8, 3])) // ➞ [-5, 7, -8, -3]
//   console.log(additiveInverse([1, 1, 1, 1, 1])) // ➞ [-1, -1, -1, -1, -1]
//   console.log(additiveInverse([-5, -25, 35])) // ➞ [5, 25, -35]

//   console.log('%c exercise #64:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const wordL = arr => arr.map(e => e.length)

//   console.log(wordL(['hello', 'world'])) // [5,5]
//   console.log(wordL(['Halloween', 'Thanksgiving', 'Christmas'])) //  ➞ [9, 12, 9]
//   console.log()

//   console.log('%c exercise #65:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const largestNum = (n, arr) => arr.sort((a, b) => a - b).reverse().slice(0, n)

//   console.log(largestNum(2, [4, 3, 2, 1])) // [4,3]
//   console.log(largestNum(1, [7, 19, 4, 2])) // [19]
//   console.log(largestNum(3, [14, 12, 57, 11, 18, 16])) // [16,18,57]

//   console.log('%c exercise #66:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const makeRug = (m, n, s = '#') => Array(m).fill(s.repeat(n))

//   console.log('%c exercise #64:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const nthSmallest = (arr, n) => {
//     const sli = arr.slice(n - 1)
//     return sli.reduce((a, b) => Math.min(a, b))
//   }

//   console.log(nthSmallest([1, 3, 5, 7], 1)) // -> 1
//   console.log(nthSmallest([1, 3, 5, 7], 3)) // -> 5
//   console.log(nthSmallest([1, 3, 5, 7], 2)) // -> 3
//   console.log(nthSmallest([7, 3, 5, 1], 2)) // -> 3

//   console.log('%c exercise #65:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const findSmallestNum = arr => arr.sort((a, b) => a - b)[0]

//   console.log(findSmallestNum([34, 15, 88, 2])) // -> 2
//   console.log(findSmallestNum([34, -345, -1, 100])) // -> -345
//   console.log(findSmallestNum([-76, 1.345, 1, 0])) // -76
//   console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])) // -> -0.999
//   console.log(findSmallestNum([7, 7, 7])) // -> 7

//   console.log('%c exercise #66:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const multiplyByLength = arr => arr.map(e => e * arr.length)

//   console.log(multiplyByLength([2, 3, 1, 0])) // ➞ [8, 12, 4, 0]
//   console.log(multiplyByLength([4, 1, 1])) // ➞ ([12, 3, 3])
//   console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])) // -> [7, 0, 21, 21, 49, 14, 7]
//   console.log(multiplyByLength([0])) // -> [0]

//   console.log('%c exercise #67:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const removeNull = arr => arr.filter(e => e !== null)

//   console.log(removeNull(['a', null, 'b', null])) // ➞ ["a", "b"]
//   console.log(removeNull([null, null, null, null, null])) // ➞ []
//   console.log(removeNull([7, 8, null, 9])) // ➞ [7, 8, 9]

//   console.log('%c exercise #68:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const transform = arr => arr.map(e => e % 2 == 0 ? e - 1 : e + 1)

//   console.log(transform([1, 2, 3, 4, 5])) //  ➞ [2, 1, 4, 3, 6]
//   console.log(transform([3, 3, 4, 3])) // ➞ [4, 4, 3, 4]
//   console.log(transform([2, 2, 0, 8, 10])) // ➞ [1, 1, -1, 7, 9]

//   console.log('%c exercise #69:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const deNest = arr => arr.flat(Infinity)[0]

//   console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])) // -> 3
//   console.log(deNest([[[[[[[true]]]]]]])) // -> true
//   console.log(deNest([[[[[[[[[[[[[[[[['edabit']]]]]]]]]]]]]]]]])) // ➞ "edabit"

//   console.log('%c exercise #70:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   // const getDiscounts = ( arr, n ) => {

//   //   let obj = {
//   //      "50%": 0.5,
//   //      "75%": 0.75,
//   //      "45%": 0.45
//   //   }[n]

//   //   return arr.map(e=> e * obj[n])
//   // }

//   // console.log(getDiscounts([2, 4, 6, 11], "50%")) // ➞ [1, 2, 3, 5.5]
//   // console.log(getDiscounts([10, 20, 40, 80], "75%")) // ➞ [7.5, 15, 30, 60]
//   // console.log(getDiscounts([100], "45%")) // ➞ [45]

//   console.log('%c exercise #71:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const filterStateNames = (arr, str) => arr.filter(e => str == 'abb' ? e.length < 3 : str == 'full' ? e.length > 3 : false)

//   console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb')) // ➞ ["CA", "NY"]
//   console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full')) // ➞ ["Arizona", "Nevada"]
//   console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb')) // ➞ ["MT", "NJ", "TX", "ID", "IL"]
//   console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full')) // -> []

//   console.log('%c exercise #72:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const repeat = (s, n) => {
//     const arr = []
//     for (i = 0; i < n; i++) {
//       arr.push(s)
//     }
//     return arr
//   }

//   console.log(repeat('edabit', 3)) // ➞ ["edabit", "edabit", "edabit"]
//   console.log(repeat(13, 5)) // ➞ [13, 13, 13, 13, 13]
//   console.log(repeat('7', 2)) // ➞ ["7", "7"]
//   console.log(repeat(0, 0)) // ➞ []

//   console.log('%c exercise #73:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const returnOnlyInteger = arr => arr.filter(Number.isInteger)

//   console.log(returnOnlyInteger([9, 2, 'space', 'car', 'lion', 16])) // ➞ [9, 2, 16]
//   console.log(returnOnlyInteger(['hello', 81, 'basketball', 123, 'fox'])) // ➞ [81, 123]
//   console.log(returnOnlyInteger([10, '121', 56, 20, 'car', 3, 'lion'])) // ➞ [10, 56, 20, 3]
//   console.log(returnOnlyInteger(['String', true, 3.3, 1])) // ➞ [1]

//   console.log('%c exercise #74:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const convertCartesian = (a1, a2) => {
//     const res = []
//     return res
//   }

//   console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])) // ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]
//   console.log(convertCartesian([9, 8, 3], [1, 1, 1])) // ➞ [[9, 1], [8, 1], [3, 1]]

//   console.log('%c exercise #75:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const existsHigher = (arr, n) => arr.filter(e => e >= n)

//   console.log(existsHigher([5, 3, 15, 22, 4], 10)) // true
//   console.log(existsHigher([1, 2, 3, 4, 5], 8)) // false
//   console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)) // true
//   console.log(existsHigher([], 5)) // false

//   console.log('%c exercise #76:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const mod = (arr, n) => arr.map(e => e % n)

//   console.log(mod([5, 7, 8, 2, 1], 2)) // ➞ [1, 1, 0, 0, 1]
//   console.log(mod([9, 8, 16, 47], 4)) // ➞ [1, 0, 0, 3]
//   console.log(mod([17, 11, 99, 55, 23, 1], 5)) // ➞ [2, 1, 4, 0, 3, 1]
//   console.log(mod([6, 1], 7)) // ➞ [6, 1]
//   console.log(mod([3, 2, 9], 3)) // [0, 2, 0]
//   console.log(mod([48, 22, 0, 19, 33, 100], 10)) // ➞ [8, 2, 0, 9, 3, 0]

//   console.log('%c exercise #77:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const filterDigitLength = (arr, n) => arr.map(e => e.toString()).filter(e => e.length == n).map(e => Number(e))

//   console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) // ➞ [232, 555]
//   console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) // ➞ [2, 7, 8, 9]
//   console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) // ➞ []
//   console.log(filterDigitLength([5, 6, 8, 9], 1)) //  ➞ [5, 6, 8, 9]

//   console.log('%c exercise #78:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const mirror = arr => arr.concat(arr.slice(0, -1).reverse())

//   console.log(mirror([0, 2, 4, 6])) // ➞ [0, 2, 4, 6, 4, 2, 0]
//   console.log(mirror([1, 2, 3, 4, 5])) // ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
//   console.log(mirror([3, 5, 6, 7, 8])) // ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

//   console.log('%c exercise #79:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const sum = arr => arr.reduce((a, b) => a + b)

//   console.log(sum([1, 2, 3, 4])) // -> 10
//   console.log(sum([1, 2])) // -> 3
//   console.log(sum([1])) // -> 1
//   // console.log(sum([])) // -> 0

//   console.log('%c exercise #80:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const rogerShots = arr => {
//     let res = 0

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 'Bang!' || arr[i] === 'BangBang!') {
//         res += 0.5
//       }
//     }
//     return res
//   }

//   console.log(rogerShots(['Bang!', 'Bang!', 'Bang!', 'Bang!', 'Bang!', 'Bang!'])) // -> 3
//   console.log(rogerShots(['Bang!', 'Bang!', 'Bang!', 'Bang!', 'BangBang!'])) // -> 2.5
//   console.log(rogerShots(['Bang!', 'BangBangBang!', 'Boom!', 'Bang!', 'BangBang!', 'BangBang!'])) // -> 2

//   console.log('%c exercise #81:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const minMax = arr => {
//     const sor = arr.sort((a, b) => a - b)
//     return [sor[0], sor[sor.length - 1]]
//   // return Array(sor[0], sor[sor.length -1])
//   }

//   console.log(minMax([1, 2, 3, 4, 5])) // ➞ [1, 5]
//   console.log(minMax([2334454, 5])) // ➞ [5, 2334454]
//   console.log(minMax([1])) // ➞ [1, 1]

//   console.log('%c exercise #82:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   // const canNest = ( a1, a2 ) => {
//   //   let max1 = a1.sort((a,b)=>a-b).slice(-1)
//   //   let min1 = a1.sort((a,b)=>a-b)[0]
//   //   let max2 = a2.sort((a,b)=>a-b).slice(-1)
//   //   let min2 = a2.sort((a,b)=>a-b)[0]

//   //   (min1 > min2 && max1 < max2) ? true : false;

//   // }

//   // console.log(canNest([1, 2, 3, 4], [0, 6])) // ➞ false
//   // console.log(canNest([3, 1], [4, 0])) // ➞ true
//   // console.log(canNest([9, 9, 8], [8, 9])) // false
//   // console.log(canNest([1, 2, 3, 4], [2, 3])) // false

//   console.log('%c exercise #84:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const getExtension = arr => arr.map(e => e.split('.').pop())

//   console.log(getExtension(['code.html', 'code.css'])) // ➞ ["html", "css"]
//   console.log(getExtension(['project1.jpg', 'project1.pdf', 'project1.mp3'])) // ➞ ["jpg", "pdf", "mp3"]
//   console.log(getExtension(['ruby.rb', 'cplusplus.cpp', 'python.py', 'javascript.js'])) // ➞ ["rb", "cpp", "py", "js"]

//   console.log(makeRug(3, 5, '$'))

//   console.log('%c exercise #83:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const arraySum = arr => arr.map(e => e % 2 == 0 ? Math.pow(e, 2) : Math.sqrt(e, 2)).reduce((a, b) => a + b).toFixed(2)

//   console.log(arraySum([1, 3, 3, 1, 10])) // ➞ 105.46
//   console.log(arraySum([2, 3, 4, 5])) // ➞ 23.97
//   console.log(arraySum([1, 31, 3, 11, 0])) // ➞ 11.62

//   console.log('%c exercise #84:',
//     'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//   const integerBool = str => str.split('').map(e => Number(e)).map(e => e ? true : false)


// console.log('%c exercise #85:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const checkFactors = ( arr,  n ) => {

//   for(i = 0; i < arr.length; i++){
//       if(n % arr[i]) return false;
//   }
//   return true
// }

// console.log(checkFactors([2, 3, 4], 12)) // -> true
// console.log(checkFactors([1, 2, 3, 8], 12)) // -> false
// console.log(checkFactors([1, 2, 50], 100)) // -> true
// console.log(checkFactors([3, 6], 9)) // -> false


//   console.log(integerBool('100101')) // ➞ [true, false, false, true, false, true]
//   console.log(integerBool('10')) // ➞ [true, false]
//   console.log(integerBool('001')) // ➞ [false, false, true]

//   console.log('%c exercise #86:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const sumOfCubes = arr => arr.map(e => Math.pow(e,3)).reduce(( a , b ) => a + b)

// console.log(sumOfCubes([1, 5, 9])) //  ➞ 855
// console.log(sumOfCubes([3, 4, 5])) // ➞ 216
// console.log(sumOfCubes([2])) // ➞ 8
// // console.log(sumOfCubes([])) // ➞ 0


// console.log('%c exercise #87:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const getOnlyEvens = arr => arr.filter(( e, i ) => e % 2 == 0 && i % 2 == 0)

// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])) // ➞ [2, 4]
// console.log(getOnlyEvens([0, 1, 2, 3, 4])) // ➞ [0, 2, 4]
// console.log(getOnlyEvens([1, 2, 3, 4, 5])) //  ➞ []

// console.log('%c exercise #88:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const sortByLength = arr => arr.sort(( a, b ) => a.length - b.length)

// console.log(sortByLength(["Google", "Apple", "Microsoft"])) // ➞ ["Apple", "Google", "Microsoft"]
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])) // ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// console.log(sortByLength(["Turing", "Einstein", "Jung"])) // ➞ ["Jung", "Turing", "Einstein"]

// console.log('%c exercise #89:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const isAvgWhole = arr => {
//  const avg =  arr.reduce(( a, b) => a + b ) / arr.length;
//  return Number.isInteger(avg) 
// } 

// console.log(isAvgWhole([1, 3])) // true
// console.log(isAvgWhole([1, 2, 3, 4])) // false
// console.log(isAvgWhole([1, 5, 6])) // true
// console.log(isAvgWhole([1, 1, 1])) // true
// console.log(isAvgWhole([9, 2, 2, 5])) // false

// console.log('%c exercise #90:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const mean = arr => Number((arr.reduce(( a, b ) => a + b ) / arr.length).toFixed(1))

// console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10])) // ➞ 7.2
// console.log(mean([1, 3, 8, 9, 9, 10])) // ➞ 6.7
// console.log(mean([2, 3, 3, 6, 6, 8, 9, 10])) // ➞ 5.9


// console.log('%c exercise #91:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const minimumRemovals= arr => arr.reduce(( a, b ) => a + b) % 2 == 0 ? 0 : 1;

// console.log(minimumRemovals([1, 2, 3, 4, 5])) // -> 1
// console.log(minimumRemovals([5, 7, 9, 11])) // -> 0
// console.log(minimumRemovals([5, 7, 9, 12])) // -> 1


// console.log('%c exercise #92:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

//  const oddElim = odd => odd.filter(e=>e%2==0)

// console.log(oddElim([1, 2, 3, 4, 5, 6]))


// console.log('%c exercise #93:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const onlynum = arr => arr.filter( e => typeof e == 'number' )


// console.log(onlynum(['text', 3, 7, 'github', 13, 'dev']))


// console.log('%c exercise #94:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// const minmaxlengthavg = arr => {
//   let sorted = arr.sort((a,b) => a - b)
//   let min = sorted[0]
//   let max =sorted[sorted.length -1]
//   let len = sorted.length;
//    return `the minimum number is ${min}, the maximum number is ${max}, the length is ${len}`
// }

// console.log(minmaxlengthavg([1,2,5,39,4]))

// console.log('%c exercise #95:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')



// const sumabs = arr => arr.map(e => Math.abs(e)).reduce((a,b) => a +b)


// console.log(sumabs([-1, -3, -5, -4, -10, 0])) // 23

// console.log('%c exercise #96:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const multiplyByLen = arr => arr.map(e => e * arr.length)


// console.log(multiplyByLen([4,2,3])) // 12, 6, 9

// // ===================== algorythms ========================= //


// console.log('%c exercise #97:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// // Create a function that returns the number of frames 
// // shown in a given number of minutes for a certain FPS.


// const frames = (a,b) => ( a * 60 ) * b; 

// console.log(frames(1,1)) // 60
// console.log(frames(10,1)) // 600
// console.log(frames(10,25)) // 15000


// console.log('%c exercise #98:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// // Create a function that takes two arguments. Both arguments are integers, a and b. 
// // Return true if one of them is 10 or if their sum is 10.

// const makesTen = ( a, b ) => ( a === 10 || b === 10 ) || ( a + b ) === 10  ? true : false; 


// console.log(makesTen(9, 10)) // true
// console.log(makesTen(9, 9)) // false
// console.log(makesTen(1, 9)) // true

// console.log('%c exercise #99:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// // The person is at least 15 years old.
// // They have parental supervision.
// // The function accepts two parameters, age and isSupervised. Return a boolean.


// const acceptIntoMovie = ( n, bool ) => {
//   if( n < 15 && bool=== true){ return true}
//   if( n > 15 && bool=== true){ return true}
//   return false;
// }


// console.log(acceptIntoMovie(14, true)) // true
// console.log(acceptIntoMovie(14, false)) // false
// console.log(acceptIntoMovie(16, true)) // true

// console.log('%c exercise #100:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// // Here's an image of four models. Some of the cubes are hidden behind other cubes. 
// // Model one consists of one cube. Model two consists of four cubes, and so on...
// // Write a function that takes a number n and returns the number of stacked boxes in a model n levels high,
// //  visible and invisible.


// const stackBoxes = n => n*n;

// console.log(stackBoxes(1)) // 1
// console.log(stackBoxes(2)) // 4
// console.log(stackBoxes(0)) // 0
// console.log(stackBoxes(4)) // 16


// console.log('%c exercise #101:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // A typical car can hold four passengers and one driver, 
// // allowing five people to travel around. Given n number of people, 
// // return how many cars are needed to seat everyone comfortably.


// carsNeeded = n => ( n / 5 ) % 2 !== 0 ? Math.floor(( n / 5 ) + 1) : ( n / 5 );

// console.log(carsNeeded(5)) // 1
// console.log(carsNeeded(11)) // 3
// console.log(carsNeeded(0)) // 0 

// console.log('%c exercise #102:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// // Create a function that takes an array and returns the types of values (data types) in a new array.

// const arrayValuesTypes = arr => arr.map(e=> typeof e)

// console.log(arrayValuesTypes([1, 2, "null", []])) // ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])) // ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ["number", "string", "string", "object", "object", "boolean", "number"]


// console.log('%c exercise #103:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const stutter = str => `${str.slice(0,2)}... ${str.slice(0,2)}... ${str}?`


// console.log(stutter("incredible")) // "in... in... incredible?"
// console.log(stutter("enthusiastic")) // "en... en... enthusiastic?"
// console.log(stutter("outstanding")) // "ou... ou... outstanding?"

// console.log('%c exercise #104:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// // Given an array of integers, determine whether the sum of its elements is even or odd.
// // The return value should be a string ("odd" or "even").
// // If the input array is empty, consider it as an array with a zero ([0]).



// const evenOdd = arr => {
//   if(arr.length == 0){return `even`}
//   return arr.reduce( ( a, b ) => a + b ) % 2 == 0 ? `even` : `odd`
// }

// console.log(evenOdd([0])) // 'even'
// console.log(evenOdd([1])) // "odd"
// console.log(evenOdd([])) // "even"
// console.log(evenOdd([0,1,5])) // 'even'

// console.log('%c exercise #105:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function that counts how many D's are in a sentence.

// const countDs = str => {
//   let Dsumm = 0;

//   for(let i = 0; i < str.length; i++){
//     if(str[i] === "D" || str[i] === 'd')
//     Dsumm++
//   }
//   return Dsumm;
// }

// console.log(countDs("My friend Dylan got distracted in school.")) // 4
// console.log(countDs("Debris was scattered all over the yard.")) // 3
// console.log(countDs("The rodents hibernated in their den.")) // 3

// console.log('%c exercise #106:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups.
// //  Create a function that takes n cups bought and return as an integer the total number of cups I would get.


// const totalCups = n => n + Math.floor( n / 6 )

// console.log(totalCups(6)) // 7
// console.log(totalCups(12)) // 14
// console.log(totalCups(213)) // 248


// console.log('%c exercise #107:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const programmers = ( a, b, c ) => {
//   let s = [a,b,c].sort((a,b) => a - b)
//   return `${s[s.length - 1] - s[0]}`
// }
 
// console.log(programmers(147, 33, 526)) // 493
// console.log(programmers(33, 72, 74)) // 41
// console.log(programmers(1, 5, 9)) // 8


// console.log('%c exercise #108:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const sumCubes = n => {
//   let sum = 0;
//   for(let i=1; i <= n; i++){
//       sum += i ** 3
//   }
//   return sum;
// }

// console.log(sumCubes(7)) // 784
// console.log(sumCubes(8)) // 1296
// console.log(sumCubes(9)) // 2025

// console.log('%c exercise #109:', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, 
// // separated by commas.


// const nTablesPlusOne = n => {

//   let arr1 =[]

//   for(let i= 1; i < 10; i++){
//     arr1.push(n*i+1)
//   }
//   return arr1;
// }


// console.log(nTablesPlusOne(7)) // "8,15,22,29,36,43,50,57,64,71"
// console.log(nTablesPlusOne(1)) // "2,3,4,5,6,7,8,9,10,11"
// console.log(nTablesPlusOne(3)) // "4,7,10,13,16,19,22,25,28,31"


// console.log('%c exercise #110', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function that takes a code of chess board square and return his color.

// const chessBoard = str => {
//  let splited = str.split("")
//   if(splited[0] === 'a' || splited[0] === 'c' || splited[0] === 'e' || splited[0] === 'g' && splited[1] % 2 !== 0){
//     return 'black'
//   }else if(splited[0] === 'b' || splited[0] === 'd' || splited[0] === 'f' || splited[0] === 'h' && splited[1] % 2 == 0){
//     return 'white'
//   }
// }

// console.log(chessBoard("a1")) // black
// console.log(chessBoard("e5")) // black
// console.log(chessBoard("d1")) // white

// console.log('%c exercise #111', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function to multiply all of the values in an array by the amount of values in the given array.


// const multiplyByLe = arr => arr.map( e => e * arr.length )


// console.log(multiplyByLe([1,2,3,4])) // [4,8,12,16]
// console.log(multiplyByLe([5,6,8])) // [15, 16, 24]
// console.log(multiplyByLe([0])) // [0]
// console.log(multiplyByLe([1, 0, 3, 3, 7, 2, 1])) // [7, 0, 21, 21, 49, 14, 7]

// console.log('%c exercise #112', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function that applies a discount d to every number in the array.

// const getDiscounts = ( arr, str ) => arr.map( e => ( e / 100 ) * Number(str.slice(0, -1)) )

// console.log(getDiscounts([2, 4, 6, 11], "50%")) // [1, 2, 3, 5.5]
// console.log(getDiscounts([10, 20, 40, 80], "75%")) // [7.5, 15, 30, 60]
// console.log(getDiscounts([100], "45%")) // [45]

// console.log('%c exercise #113', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')



// // Create a function that takes a number as an argument. Add up all the numbers from 1 
// // to the number you passed to the function. For example, 
// // if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


// const addUp = n => {
//   let colect = [];
//   for( let i = 1; i <= n; i++ ){
//     colect.push(i)
//   }
//   return colect.reduce((a,b) => a + b);
// }

// console.log(addUp(4)) // 10
// console.log(addUp(13)) // 91
// console.log(addUp(600)) // 180300

// console.log('%c exercise #114', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function that takes a number as an argument, 
// // increments the number by +1 and returns the result.

// const addition = n => n += 1

// console.log(addition(0) )// 1
// console.log(addition(9) )// 10
// console.log(addition(-3)) //-2


// console.log('%c exercise #115', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const footballPoints = ( w, d, l ) => ( w * 3 ) + ( d * 1 ) + ( l * 0 )

// console.log(footballPoints(3, 4, 2)) // 13
// console.log(footballPoints(5, 0, 2)) // 15
// console.log(footballPoints(0, 0, 1)) // 0

// console.log('%c exercise #116', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// // Create a function that takes an integer and return true if it's divisible by 100, 
// // otherwise return false.

// const divisible = n => n % 100 === 0

// console.log(divisible(1)) // false
// console.log(divisible(1000)) // true
// console.log(divisible(100)) // true

// console.log('%c exercise #117', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const imposterFormula = ( i, p ) => `${Math.ceil(100 * ( i / p ))}%`

// console.log(imposterFormula(1, 10)) // 10%
// console.log(imposterFormula(2, 5)) // 40%
// console.log(imposterFormula(1, 8)) // 13%

// console.log('%c exercise #118', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /*
// * The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs,
//  30% after tax income on wants, 
// and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object
//  that shows how much a person needs to spend on needs, wants, and savings.
// */

// const fiftyThirtyTwenty = n => {
//   return { needs: n / 100 * 50, wants: n / 100 * 30, savings: n / 100 * 20 }
// }

// console.log(fiftyThirtyTwenty(10000)) // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000)) // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450)) // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// console.log('%c exercise #119', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function, that will for a given a, b, c, do the following:


// const abcmath = ( a, b, c) => ( a * b) % c

// console.log(abcmath(5, 2, 1)) // true
// console.log(abcmath(1, 2, 3)) // false
// console.log(abcmath(7, 2, 14)) // true

// console.log('%c exercise #120', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

// const howManyStickers = n => `there are ${( n * 6 ) * n} stickers`

// console.log(howManyStickers(1)) // 2
// console.log(howManyStickers(2)) // 24
// console.log(howManyStickers(3)) // 54

// console.log('%c exercise #121', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// // Create a function that takes a positive integer n and returns the nth "star number".
// // A star number is a centered figurate number a centered hexagram (six-pointed star), 
// // such as the one that Chinese checkers is played on.

// const starNumber = n => 6 * n * ( n - 1 ) + 1

// console.log(starNumber(2))  // 2nd star number = 13
// console.log(starNumber(3))  // 3rd star number = 37
// console.log(starNumber(5))  // 5th star number = 121

// console.log('%c exercise #122', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a function that determines whether or not it's
//  *  possible to split a pie fairly given these three parameters:
//  * Total number of slices.
//    1. Number of recipients.
//    2. How many slices each person gets.
//    3. The function will be in this form:
//  * 
//    The function will be in this form:

//    equalSlices(total slices, no. recipients, slices each)
//  */

// const equalSlices = ( a, b, c ) => ( b * c ) <= a

// console.log(equalSlices(11, 5, 2)) // true
// console.log(equalSlices(11, 5, 3)) // false
// console.log(equalSlices(8, 3, 2)) // true
// console.log(equalSlices(8, 3, 3)) // false
// console.log(equalSlices(24, 12, 2)) // true

// console.log('%c exercise #123', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * You are given two numbers a and b.
//  *  Create a function that returns the next number greater than a and b and divisible by b.
//  */

// const divisibleByB = ( a, b ) => ( b - ( a % b ) ) + a;

// console.log(divisibleByB(17, 8)) // 24
// console.log(divisibleByB(98, 3) ) // 99
// console.log(divisibleByB(14, 11) ) // 22

// console.log('%c exercise #124', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const twoDigitSum = ( n ) => String(n).split('').map(e => Number(e)).reduce((a,b) => a + b)

// console.log(twoDigitSum(45)) // 9
// console.log(twoDigitSum(38)) // 11
// console.log(twoDigitSum(19810416)) // 30


// console.log('%c exercise #124', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// const  justAnotherSumProblem = ( a, b  ) => {

//   let res = 0;

//   if(a < b){
//     for(let i= a; i <= b ; i++){
//       res += i
//   }
// }else{
//   for(let i= b; i <= a ; i++){
//         res += i
//   }
//   return res;
// }
// }

// console.log(justAnotherSumProblem(-10, 1)) // -54
// console.log(justAnotherSumProblem(-20, 5)) // -195
// console.log(justAnotherSumProblem(90, 45)) // 3105

// console.log('%c exercise #125', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// const tooneDigit = ( n ) => n % 9 || n;
  


// console.log(tooneDigit(19810416)) //
// console.log(tooneDigit(14)) //
// console.log(tooneDigit(9)) //
// console.log(tooneDigit(3256987984561354968)) //


// console.log('%c exercise #126', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
//  */


// class Player {
//   constructor(name, age, height, year) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.year = year;
//   }

//   getName (){
//     return `Player name is ${this.name}`
//   }

//   getAge (){
//     return `Player ${this.name} age is ${this.age}`
//   }

//   getHeight (){
//     return `Player ${this.name} height is ${this.height}`
//   }

//   getWeight (){
//     return `Player ${this.name} weight is ${this.year}`
//   }
// }

// p1 = new Player("David Jones", 25, 175, 75)

// console.log(p1.getName())
// console.log(p1.getAge())
// console.log(p1.getHeight())
// console.log(p1.getWeight())

// console.log('%c exercise #127', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.
//  */

// class Calculator{
 

//   add(num1, num2){
//     return num1 + num2
//   }

//   subtract(num1, num2){
//     return num1 - num2
//   }

//   multiply(num1, num2){
//     return num1 * num2
//   }

//   divide(num1, num2){
//     return num1 / num2
//   }
// }

// let calculator = new Calculator()

// console.log(calculator.add(10, 5)) // 15
// console.log(calculator.subtract(10, 5)) // 5
// console.log(calculator.multiply(10, 5)) // 50
// console.log(calculator.divide(10, 5)) // 2

// console.log('%c exercise #128', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// class Point{
//   constructor(x,y){
//     this.x = x;
//     this.y = y;
//   }

//   toString(){
//     return `[x=${this.x}, y=${this.y}]`
//   }
// }

// let coords = new Point(1,2);

// console.log(coords.toString())

// console.log('%c exercise #129', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.
//  */

// class Name{
//   constructor(name, lname){
//       this.name = name;
//       this.lname = lname;
//   }

//   getName =() => this.name;

//   full = () => `${this.name}  ${this.lname}`

//   getLname = () => this.lname;

//   initials = () => `${this.name.slice(0,1).toUpperCase()}.${this.lname.slice(0,1)}`
// }

// a1 = new Name("john", "SMITH")
// a2 = new Name("Adam", "Johnes")

// const out = document.querySelector('.output')

// out.innerHTML =`<table>
//   <tr>
//     <th>
//       Name:    
//     </th>
//     <th>
//       Last Name:
//     </th>
//     <th>
//       Full Name:
//     </th>
//     <th>
//       Initials:
//     </th>
//   </tr>
//   <tr>
//   <td>
//     ${a1.getName()}
//   </td>
//   <td>
//     ${a1.getLname()}
//   </td>
//   <td>
//     ${a1.full()}
//   </td>
//   <td>
//   ${a1.initials()}
// </td>
//   </tr>
//   <tr>
//    <td>
//     ${a2.getName()}
//    </td>
//    <td>
//     ${a2.getLname()}
//   </td>
//   <td>
//     ${a2.full()}
//   </td>
//   <td>
//     ${a2.initials()}
//   </td>
//   </tr>
// </table>`

// console.log(a1.getName())
// console.log(a1.full())
// console.log(a1.getLname())
// console.log(a1.initials())

// console.log('%c exercise #130', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Write a function that returns the string "something" joined with a space "
//  *  " and the given argument a.
//  */


// const giveMeSomething = ( str1 ) => `something ${str1}`

// console.log(giveMeSomething("is better than nothing")) // "something is better than nothing"
// console.log(giveMeSomething("Bob Jane")) // "something bob Jane"
// console.log(giveMeSomething("something")) // "something something"

// console.log('%c exercise #131', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**\
//  * Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, 
//  * otherwise return false.
//  */

// const lessThanOrEqualToZero = n => n <= 0 ? true : false;

// console.log(lessThanOrEqualToZero(5)) // false
// console.log(lessThanOrEqualToZero(0)) // true
// console.log(lessThanOrEqualToZero(-2)) // true

// console.log('%c exercise #132', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
//  * find the final points for the team and return that value.
//  */

// const points = ( a, b ) => ( a * 2 ) + ( b * 3 )

// console.log(points(1, 1)) // 5
// console.log(points(7, 5)) // 29
// console.log(points(38, 8)) // 100

// console.log('%c exercise #133', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Write a function that takes an integer minutes and converts it to seconds.
//  */

// const convert = n => n * 60;

// console.log(convert(5)) // 300
// console.log(convert(3)) // 180
// console.log(convert(2)) // 120

// console.log('%c exercise #134', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Given two numbers, return true if the sum of both numbers is less than 100. 
//  * Otherwise return false.
//  */

// const lessThan100 = ( a, b ) => ( a + b ) < 100 ? true : false;

// console.log(lessThan100(22, 15)) // true
// console.log(lessThan100(83, 34)) // false
// console.log(lessThan100(3, 77)) // true

// console.log('%c exercise #135', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a function that takes an array of numbers and return both the minimum and maximum 
//  * numbers, 
//  * in that order.
//  */

// const minMax1 = arr => [arr.sort((a,b)=> a-b)[0], arr.sort((a,b)=> b-a)[0]];


// console.log(minMax1([1, 2, 3, 4, 5])) // [1, 5]
// console.log(minMax1([2334454, 5])) //  [5, 2334454]
// console.log(minMax1([1])) // [1,1]

// console.log('%c exercise #136', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a function to return the amount of potatoes there are in a string.
//  */

// const potatoes = ( str ) => str.match(/potato/g).length;

// console.log(potatoes("potato")) // 1
// console.log(potatoes("potatopotato")) // 2
// console.log(potatoes("potatoapple")) // 1

// console.log('%c exercise #137', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a function that takes two strings as arguments and returns the number of times the
//  *  first string (the single character) is found in the second string.
//  */

// const charCount = ( str1, str2 ) => str2.split('').filter(e => e === str1).length

// //{
// //   let col = 0;
// //     for(let i=0 ; i < str2.length ; i++){
// //       if(str2[i] === str1){
// //         col += 1
// //       }
// //     }
// //  return col;
// // }

// console.log(charCount("a", "edabit")) // 1
// console.log(charCount("c", "Chamber of secrets")) // 1
// console.log(charCount("b", "big fat bubble")) // 4
 
// console.log('%c exercise #138', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Check if a string title is a title string or not. A title string is one which has all the 
//  * words in the string start with a upper case letter.
//  */

// const checkTitle = ( str ) =>  !/\b[a-z]/.test(str)

// console.log(checkTitle("A Mind Boggling Achievement")) // true
// console.log(checkTitle("A Simple Java Script Program!")) // true
// console.log(checkTitle("Water is transparent")) // false

// console.log('%c exercise #139', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * In this challenge you will be given a relation between two numbers, written as a string.
//  *  Write a function that determines if the relation is true or false.
//  */

// const isTrue = ( str ) => eval(str.replace('=', '==='))

// console.log(isTrue("2=2")) // true
// console.log(isTrue("8<7")) // flase
// console.log(isTrue("5=13")) // false
// console.log(isTrue("15>4")) // true

// console.log('%c exercise #140', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * This challenge will help you interpret mathematical
//  *  relationships both algebraically and geometrically.
//  * 
//  * Create a function that takes a number (step) as an argument and returns the number of 
//  * matchsticks in that step. See step 1, 2 and 3 in the image above.
//  * 
//  * https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
//  */

// const matchHouses = ( n ) => ( n * 6 ) - n + 1

// console.log(matchHouses(1)) // 6
// console.log(matchHouses(4)) // 21
// console.log(matchHouses(87)) // 436
// console.log(matchHouses(3)) // 16

// console.log('%c exercise #141', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

// Write a function that mimics (without the use of <<) the left shift operator
//  and returns the result from the two given integers.
//  */

//  const shiftToLeft = ( a, b ) => a * 2 ** b;


//  console.log(shiftToLeft(5, 2)) // 20
//  console.log(shiftToLeft(10, 3)) // 80
//  console.log(shiftToLeft(-32, 2) ) // -128
//  console.log(shiftToLeft(-6, 5)) // -192
//  console.log(shiftToLeft(12, 4)) // 192
//  console.log(shiftToLeft(46, 6)) // 2944

//  console.log('%c exercise #142', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Your function will be passed two functions, f and g, that don't take any parameters
//  * Your function has to call them, and return a string which indicates which function returned the larger number.
//  * If f returns the larger number, return the string f.
//     If g returns the larger number, return the string g.
//     If the functions return the same number, return the string neither.
//  */

//     const whichIsLarger = ( f, g ) => f() > g() ? 'f': g() > f() ? 'g' : 'neither'

// console.log(whichIsLarger(() => 5, () => 10)) // "g"
// console.log(whichIsLarger(() => 25,  () => 25)) // "neither"
// console.log(whichIsLarger(() => 505050, () => 5050)) // "f"

// console.log('%c exercise #143', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
//  */

// const canNest = ( a1, a2 ) =>{
//   let sor1 = a1.sort((a,b) => a-b)
//   let sor2 = a2.sort((a,b) => a-b)
  
//   return sor1[0] > sor2[0] && sor1[sor1.length -1] < sor2[sor2.length -1] ? true : false
// }

// console.log(canNest([1, 2, 3, 4], [0, 6])) // true
// console.log(canNest([3, 1], [4, 0])) // true
// console.log(canNest([9, 9, 8], [8, 9])) // flase
// console.log(canNest([1, 2, 3, 4], [2, 3])) // false

// console.log('%c exercise #144', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Write a function that takes a two-digit number and determines 
//  * if it's the largest of two possible digit swaps.
//  */

// const largestSwap = n => String(n) >= String(n).split('').reverse().join('')

// console.log(largestSwap(27)) // false
// console.log(largestSwap(43)) // true
// console.log(largestSwap(14)) // false
// console.log(largestSwap(99)) // true

// console.log('%c exercise #145', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a function that always returns true for every item in a given array. However, 
//  * if an element is the word "flick", 
//  * switch to always returning the opposite boolean value.
//  */

// const flickSwitch = arr => {
//   let b = true;
//   return arr.map(x => x === 'flick' ? b = !b : b);
// };

// console.log(flickSwitch(["edabit", "flick", "eda", "bit"])) // [true, false, false, false]
// console.log(flickSwitch(["flick", 11037, 3.14, 53])) // [false, false, false, false]
// console.log(flickSwitch([false, false, "flick", "sheep", "flick"])) // [true, true, false, false, true]


// console.log('%c exercise #146', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  * Create a function that always returns true for every item in a given array. However, 
//  * if an element is the word "flick", 
//  * switch to always returning the opposite boolean value.
//  */
 
// const detectWord = ( str ) => str.split('').filter(e => e.match(/[a-z]/g)).join('');

// console.log(detectWord("UcUNFYGaFYFYGtNUH")) // cat
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")) // "burglar"
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")) // "embezzlement"

// console.log('%c exercise 147', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a method in the Person class which returns how another person's age compares.
//  *  Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.
//  */

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
		
// 	compareAge(other) {
// 		if (this.age < other.age){
// 			return `${other.name} is older than me.`
// 		}else if (this.age > other.age){
// 			return `${other.name} is younger than me.`
// 		}else{
// 			return `${other.name} is the same age as me.`
// 		}
// 	}
// }
// p1 = new Person("Samuel", 23)
// p2 = new Person("Joel", 36)
// p3 = new Person("Lily", 24)

// console.log(p1.compareAge(p2)) //  "Joel is older than me."
// console.log(p2.compareAge(p1)) // "Samuel is younger than me."
// console.log(p1.compareAge(p3)) // "Lily is the same age as me."

// console.log('%c exercise 148', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Given a number, return an array containing the two halves of the number. 
//  * If the number is odd, make the rightmost number higher.
//  */
// const numberSplit = n => ( n % 2 === 0) ?  [ n / 2, n /2] : [Math.floor(n / 2), Math.ceil(n /2)]

// console.log(numberSplit(4)) // [2,2]
// console.log(numberSplit(10)) // [5,5]
// console.log(numberSplit(11)) // [5,6]
// console.log(numberSplit(-9)) // [-5,-4]

// console.log('%c exercise 149 ', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that takes an array of non-negative integers 
//  * and strings and return a new array without the strings.
//  */
// const filterArray = arr => arr.filter(e => typeof e == "number") ;

// console.log(filterArray([1, 2, "a", "b"])) //  [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15])) // [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123])) // [1, 2, 123]

// console.log('%c exercise 150', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  * When resistors are connected together in series, the same current passes
//  *  through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series,
//  and calculates the total resistance of the circuit in ohms. The ohm is the standard 
//  unit of electrical resistance in the International System of Units ( SI ). 
//  */
// const seriesResistance = arr => `${arr.reduce(( a, b ) => a + b, 0)} ohms` ;

// console.log(seriesResistance([1, 5, 6, 3])) // "15 ohms"
// console.log(seriesResistance([16, 3.5, 6])) // "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5])) // "1.0 ohm"

// console.log('%c exercise 151', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  
//  */
// const error = n  => {
// return  obj ={
//     1 : "Check the fan: e1",
//     2 : "Emergency stop: e2",
//     3 : "Pump Error: e3",
//     4 : "c",
//     5 : "Temperature Sensor Error"
//   }[n]
// } ;

// console.log(error(1)) // "Check the fan: e1"
// console.log(error(2)) // "Emergency stop: e2"
// console.log(error(3)) // "Pump Error: e3"
// console.log(error(4)) // "c"
// console.log(error(5)) // "Temperature Sensor Error"

// console.log('%c exercise 152', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that takes a string and returns a string 
//  * in which each character is repeated once.
//  */
// const doubleChar = str => str.split('').map(e => e.repeat(2)).join('') ;

// console.log(doubleChar("String")) // "SSttrriinngg"
// console.log(doubleChar("Hello World!")) // "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ ")) // "11223344!!__  "

// console.log('%c exercise 153', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), 
// and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
//  */
// const generation = ( num, s ) => {
//   if(s === "f"){
//    return ob1 = {
//      '-3': 'great grandmother',
//       '-2': 'grandmother',
//       '-1': 'mother',
//        0: 'me!',
//        1: 'daughter',
//        2: 'granddaughter',
//        3: 'great granddaughter'
//     }[num]
//   }else if(s === "m"){
//    return ob2 = {
//      '-3': 'great grandfather',
//       '-2': 'grandfather',
//       '-1': 'father',
//        0: 'me!',
//        1: 'son',
//        2: 'grandson',
//        3: 'great grandson'
//     }[num]
//   }
// }  ;

// console.log(generation(2, "f")) // "granddaughter"
// console.log(generation(-3, "m") ) // "great grandfather"
// console.log(generation(1, "f")) // "daughter"

// console.log('%c exercise 154', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that returns an array of strings sorted by length in ascending order.
//  */

// const sortByLength1 = arr => arr.sort(( a, b ) => a.length - b.length) ;

// console.log(sortByLength1(["a", "ccc", "dddd", "bb"])) // ["a", "bb", "ccc", "dddd"]
// console.log(sortByLength1(["apple", "pie", "shortcake"])) // ["pie", "apple", "shortcake"]
// console.log(sortByLength1(["may", "april", "september", "august"])) // ["may", "april", "august", "september"]
// console.log([]) // []

// console.log('%c exercise 155', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  * Create a function that takes in an array of numbers and returns the sum of its cubes.
//  */
// const sumOfCubes1 = arr => arr.map(e => e ** 3).reduce(( a, b ) => a + b, 0) ;

// console.log(sumOfCubes1([1, 5, 9]) ) // 855
// console.log(sumOfCubes1([3, 4, 5])) // 216
// console.log(sumOfCubes1([2])) //  8
// console.log(sumOfCubes1([])) // 0

// console.log('%c exercise 156', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.
//  */
// // const dropRight = ( arr, n ) => {
// //   if( n === null ){ return }  

// // };

// // console.log(dropRight([1, 2, 3])) // [1,2]
// // console.log(dropRight([1, 2, 3], 2)) // [1]
// // console.log(dropRight([1, 2, 3], 5)) // []
// // console.log(dropRight([1, 2, 3], 0)) // [1,2,3]

// console.log('%c exercise 156', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that returns the number of hashes and pluses in a string.
//  */
// const hashPlusCount = str => [str.split('').filter(e=> e ==="#").length, str.split('').filter(e=> e ==="+").length] ;

// console.log(hashPlusCount("###+")) // [3,1]
// console.log(hashPlusCount("##+++#")) // [3,3]
// console.log(hashPlusCount("#+++#+#++#")) // [4,6]
// console.log(hashPlusCount("")) // [0,0]

// console.log('%c exercise 157 ', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// /**
//  *  Create a function that takes an array of arrays with numbers. 
//  * Return a new (single) array with the largest numbers of each.
//  */
// const findLargestNums = arr => {
//   let arr1 = arr[0].sort((a,b) => b-a)[0]
//   let arr2 = arr[1].sort((a,b) => b-a)[0]
//   let arr3 = arr[2].sort((a,b) => b-a)[0]

//   return [arr1, arr2, arr3]
// }

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) // [7, 90, 2]
// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])) //  [-34, -2, 7]
// console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])) // [0.7634, 9.32, 9]

// console.log('%c exercise 158', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.
//  */

// const set = arr => [...new Set(arr)] ;

// console.log(set([1, 3, 3, 5, 5]) ) // [1, 3, 5]
// console.log(set([4, 4, 4, 4])) // [4]
// console.log(set([5, 7, 8, 9, 10, 15])) // [5, 7, 8, 9, 10, 15]
// console.log(set([3, 3, 3, 2, 1])) // [3, 2, 1]

// console.log('%c exercise 159', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
//  */

// const amplify = arr => arr.filter(e=> e % 4 === 0) ;

// console.log(amplify([1, 2, 3, 40])) // 40
// console.log(amplify([1,2,3])) // 0
// console.log(amplify([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25])) // [40, 80, 120, 160, 200, 240]

// console.log('%c exercise 160 ', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Given a string, create a function to reverse the case. 
//  * All lower-cased letters should be upper-cased, and vice versa.
//  */
// const reverseCase = str => {
//   let res ='';
//   for(let i=0; i <str.length ; i++){
//       if(str[i] === str[i].toUpperCase()){
//         res += str[i].toLowerCase()
//       }
//         else if(str[i] === str[i].toLowerCase()){
//           res += str[i].toUpperCase()
//         }
//   }
//   return res;
// } ;

// console.log(reverseCase("Happy Birthday")) // "hAPPY bIRTHDAY"
// console.log(reverseCase("MANY THANKS")) // "many thanks"
// console.log(reverseCase("sPoNtAnEoUs")) // "SpOnTaNeOuS"

// console.log('%c exercise 161', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  A value is omnipresent if it exists in every subarray inside the main array.
//  * [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
//  */
// // const isOmnipresent = ( arr, n ) => {
// //   for(let i=0; i < arr.length; i++){
// //     if(arr[i].every(n)){return true}
// //   }
// // return false;
// // } ;

// // console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) // true
// // console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // false
// // console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)) // true
// // console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)) // false

// console.log('%c exercise 162', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that takes an array as an argument and returns true or false depending 
//  * on whether the average 
//  * of all elements in the array is a whole number or not.
//  */
// const isAvgWhole1 = arr =>  arr.reduce(( a, b ) => a + b, 0) % arr.length === 0;

// console.log(isAvgWhole1([1, 3])) // true
// console.log(isAvgWhole1([1, 2, 3, 4])) // false
// console.log(isAvgWhole1([1, 5, 6])) // true
// console.log(isAvgWhole1([1, 1, 1])) // true
// console.log(isAvgWhole1([9, 2, 2, 5])) // false

// console.log('%c exercise 163', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function to count the number of 1s in a 2D array.
//  */
// const countOnes = arr => arr.flat().filter(e => e===1).length ;

// console.log(countOnes([
//   [1, 0],
//   [0, 0]
// ])) // 1
// console.log(countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ])) // 7
// console.log(countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ])) // 2

// console.log('%c exercise 164', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Write a function that takes all even-indexed characters and odd-indexed 
//  * characters from a string and concatenates them together.
//  */
// const indexShuffle = str => {
//   let s = str.split('')
//   let odd =[]
//   let ev =[]

//   for(let i=0; i <s.length ; i+=2){
//         odd.push(s[i])
//   }
//   for(let i = s.length; i > 0  ; i-=2){
//     ev.push(s[i])
// }
//   return [odd.join(''), ev.reverse().join('')].concat().join('');
// }

// console.log(indexShuffle("abcdefg")) // "acegbdf"
// console.log(indexShuffle("holiday")) // "hldyoia"
// console.log(indexShuffle("maybe")) // "myeab"

// console.log('%c exercise 165', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that returns true if the first array 
//  * is a subset of the second. Return false otherwise
//  */
// const isSubset = ( a1, a2 ) => {
//   let c = a1.concat(a2)
//   let n = [ ... new Set(c)] 
//   return n.length === a2.length ? true : false;
// }

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])) // true
// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])) // true
// console.log(isSubset([1, 2], [3, 5, 9, 1])) // false

// console.log('%c exercise 166 ', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that takes two numbers as arguments (num, length) 
//  * and returns an array of multiples of num until the array length reaches length.
//  */
// const arrayOfMultiples = ( n, len ) => {
//   let res =[]
//   for(let i= 1; i <= len ; i++){
//         res.push(i * n)
//   }
//   return res;
// } ;

// console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)) // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6)) // [17, 34, 51, 68, 85, 102]

// console.log('%c exercise 167', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that counts the integer's number of digits.
//  */
// const count = n => Math.abs(n).toString().length ;

// console.log(count(318)) // 3
// console.log(count(-92563)) // 5
// console.log(count(4666)) // 4
// console.log(count(-314890)) // 6
// console.log(count(654321)) // 6
// console.log(count(638476)) // 6

// console.log('%c exercise 168 ', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function which concantenates the number 7 to the end of every chord in an array. 
//  * Ignore all chords which already end with 7.
//  */

// const jazzify = arr => {
//   for(let i=0; i <arr.length ; i++){
//         if(arr[i].endsWith(7)){return arr}
        
//         else{
//           return arr.map(e => e + '7')
//         }
//   }
// }

// console.log(jazzify(["G", "F", "C"])) // ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"])) // ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([])) // []

// console.log('%c exercise 169', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
 /*  Create a function that takes a number (step) as an argument and returns the amount of boxes 
 * in that step of the sequence.
 */

// const boxSeq = n =>  (( n + 3) - 1) ;

// console.log(boxSeq(0)) // 0
// console.log(boxSeq(1)) // 3
// console.log(boxSeq(2)) // 2

// console.log('%c exercise 170', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes an array of 10 numbers (between 0 and 9) and returns 
 * a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
 */
// const formatPhoneNumber = str =>  `(${str[0]}${str[1]}${str[2]}) ${str[3]}${str[4]}${str[5]}-${str[6]}${str[7]}${str[8]}${str[9]}`

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"
// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])) // "(519) 555-4468"
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])) // "(345) 501-2527"

// console.log('%c exercise 171', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
 */
// const amplify = n => {
//   let res =[];

//   for(let i=1; i <=n ; i++){
//     res.push(i)
//   }
//   return res.map(e => e % 4 === 0 ? e * 10 : e);
// }  ;

// console.log(amplify(4)) // [1, 2, 3, 40]
// console.log(amplify(3)) // [1, 2, 3]
// console.log(amplify(25)) 
// [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 
// 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

// console.log('%c exercise 172', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that takes an array of numbers and returns the second largest number.
//  */
// const secondLargest = arr => arr.sort((a,b) => b - a)[1] ;

// console.log(secondLargest([10, 40, 30, 20, 50])) // 40
// console.log(secondLargest([25, 143, 89, 13, 105])) // 105
// console.log(secondLargest([54, 23, 11, 17, 10])) // 23

// console.log('%c exercise 173', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
 */
// const sortIt = arr => arr.sort((a,b) => a - b);

// console.log(sortIt([4, 1, 3])) // [1, 3, 4]
// console.log(sortIt([[4], [1], [3]])) // [[1], [3], [4]]
// console.log(sortIt([4, [1], 3])) // [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]])) //  [1, [3], [4]]
// console.log(sortIt([[3], 4, [2], [5], 1, 6])) // [1, [2], [3], 4, [5], 6]

// console.log('%c exercise 174', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, 
 * and false otherwise. The array will contain 4 elements.
 */
// const testJackpot = arr => !!arr.reduce((a,b) => a === b ? a :NaN)

// console.log(testJackpot(["@", "@", "@", "@"])) // true
// console.log(testJackpot(["abc", "abc", "abc", "abc"])) // true
// console.log(testJackpot(["SS", "SS", "SS", "SS"])) // true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) // false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])) // false

// console.log('%c exercise 175 ', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
 * In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.
 */
// const hackerSpeak = str =>{
//   let input = str;
// var output = "";

// for (var i = 0; i < input.length; i++){
// 	if(input[i] === "a") {
//       	output += 4;
//      }else if (input[i] === "i"){
//         output += 1; 
//      }else if (input[i] === "e"){
//      		output += 3;
//      }else if (input[i] === "o"){
//      		output += 0;
//      }else{
//      		output += input[i];
//      }
// 	}
//   return output;
// }
  
// console.log(hackerSpeak("javascript is cool")) // "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun")) // "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder")) // "b3c0m3 4 c0d3r"

// console.log('%c exercise ', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
 */
// const maxTotal = arr => arr.sort((a,b) => b - a).slice(0,5).reduce((a,b)=> a + b, 0) ;

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) // 43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])) // 100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 40

// console.log('%c exercise 177', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society
 */
// const societyName = arr => {
//   let res ='';
//   for(let i=0; i <arr.length ; i++){
//         res += arr[i].slice(0,1)
//   }
//   return res.split('').sort().join('');
// };

// console.log(societyName(["Adam", "Sarah", "Malcolm"]) ) // AMS
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) // "CHLN"
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) // "CJMPRR"

// console.log('%c exercise 178', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Write two functions:

toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
 */
// const change = v => {
//   if(typeof v === 'number'){
//     return String(v).split('').map(e => Number(e))
//   }else if(Array.isArray(v)){
//     let s = v.map(e=>String(e))
//     let col =''
//     for(let i=0; i <s.length ; i++){
//           col += s[i]
//     }
//     return Number(col)
//   }
// }

// console.log(change(235)) // [2, 3, 5]
// console.log(change(0)) // [0]
// console.log(change([2, 3, 5])) // 235
// console.log(change([0])) // 0

// console.log('%c exercise 179', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function which takes in a word and spells it out, by consecutively
 *  adding letters until the full word is completed.
 */
// const spelling = str => {
//   let o =[]
//   let n =0;
//   for (c in str) o.push(str.slice(0, ++n))
//   return o;
// } ;

// console.log(spelling("bee")) // ["b", "be", "bee"]
// console.log(spelling("happy")) // ["h", "ha", "hap", "happ", "happy"]
// console.log(spelling("eagerly")) // ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

// console.log('%c exercise 180', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


/**
 * Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".
For example, if there are 5 users, return:

"user1, user2 and 3 more online"
 */

// const chatroomStatus = arr =>{
//   if(arr.length === 0){return `no one online`}
//   if(arr.length === 1){return `${arr} online`}
//   if(arr.length === 2){return `${arr[0]} and ${arr[1]} online`}
//   if(arr.length > 2){return `${arr[0]},  ${arr[1]} and ${arr.slice(0,4).length} more online`}
// } ;


// console.log(chatroomStatus([])) //  "no one online"
// console.log(chatroomStatus(["paRIE_to"])) // "paRIE_to online"
// console.log(chatroomStatus(["s234f", "mailbox2"])) // "s234f and mailbox2 online"
// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]))
//"pap_ier44, townieBOY and 4 more online"

// console.log('%c exercise 181', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes three parameters where:

x is the start of the range (inclusive).
y is the end of the range (inclusive).
n is the divisor to be checked against.
Return an ordered array with numbers in the range that are divisible by the third parameter n. 
Return an empty array if there are no numbers that are divisible by n.
 */

// const arrayOperation = ( a, b, c  ) => {
//    let col =[]
//   for(let i = a; i <= b ; i++){
//         col.push(i)
//   }
//   return col.filter(e=> e % c === 0)
// } ;

// console.log(arrayOperation(1, 10, 3)) // [3, 6, 9]
// console.log(arrayOperation(7, 9, 2)) // [8]
// console.log(arrayOperation(15, 20, 7)) // []

// console.log('%c exercise 182', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
 */

// const totalVolume = ( ...arr ) => {
//     let col =[]
//   for(let i=0; i < arr.length ; i++){
//       col.push(arr[i].reduce((a,b) => a * b))
//   }
//   return col.reduce((a,b)=> a + b,0);
// }

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])) // 63
// console.log(totalVolume([2, 2, 2], [2, 1, 1]) ) // 10
// console.log(totalVolume([1, 1, 1])) // 1

// console.log('%c exercise 183', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
 */
// const indexMultiplier = arr => arr.map((e, i) => e * i).reduce(( a, b )=> a + b, 0 ) ;

// console.log(indexMultiplier([1, 2, 3, 4, 5])) // 40
// console.log(indexMultiplier([-3, 0, 8, -6])) // -2

// console.log('%c exercise 184', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  An array is special if every even index contains an even number and every odd index contains an odd number. Create a function 
 * that returns true if an array is special, and false otherwise.
 */
// const isSpecialArray = arr => arr.reduce((a,b) => a + b, 0) % 2 === 0

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) // true
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) // false
// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) // false
// console.log(isSpecialArray([0, 5, 2])) // false

// console.log('%c exercise 185', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that returns true if all parameters are truthy, and false 
//  * otherwise.
//  */
// const allTruthy = ( ...para ) => para.filter(e => !Boolean(e)).length === 0

// console.log(allTruthy(true, true, true)) // true
// console.log(allTruthy(true, false, true)) // false
// console.log(allTruthy(5, 4, 3, 2, 1, 0)) // false
// console.log(allTruthy(5, 4, 3, 2, 1, 5)) // false

// console.log('%c exercise 186', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create the function that takes an array with objects and returns the sum of people's budgets.
 */
// const getBudgets = arr => arr.map() ;

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])) // 65700
// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])) // 62600


// console.log('%c exercise 187', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Fruit salads are served best when the fruits are sliced and diced into small chunks!

For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when 
the chunks are joined together to make a string.

https://edabit.com/challenge/pkSFRoDrPt2PvFsYd
 */
// const fruitSalad = arr => {
//   let chunks =[]
  
//   for(let i=0; i < arr.length ; i++){
//         if(arr[i].length %2 !== 0){
//           chunks.push(arr[i].slice(0,2), arr[i].slice(2))
//         }else if(arr[i].length %2 === 0){
//           chunks.push(arr[i].slice(0,2), arr[i].slice(2))
//         }
//   }
//   return chunks.join('').split('').sort().join('');
    
// } ;

// console.log(fruitSalad(["apple", "pear", "grapes"])) // "apargrapepesple"
// console.log(fruitSalad(["raspberries", "mango"])) // "erriesmangoraspb"
// console.log(fruitSalad(["banana"])) // "anaban"

// console.log('%c exercise 188', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  Create a function that takes an array of integers and returns the sum of all the integers that have an even index, 
//  * multiplied by the integer at the last index.
//  */
// const evenLast = arr => {
//   if(arr.length === 0){return 0}
//   let col =[]
//   for(let i=0; i < arr.length; i++){
//     if(i % 2 === 0){
//       col.push(arr[i])
//     }
//   }
//   return col.reduce((a,b) => a + b, 0) * col[col.length -1];
// };

// console.log(evenLast([])) // 0
// console.log(evenLast([1, 3, 3, 1, 10])) // 140
// console.log(evenLast([-11, 3, 3, 1, 10])) // 20

// console.log('%c exercise 189', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 * A factor chain is an array where each previous element is a factor of the next 
 * consecutive element. The following is a factor chain: 
 * 
 * https://edabit.com/challenge/FtZGQEonGwyozeCna
 */
// const factorChain = arr =>{
//   for(let i = arr.length; i >= 1 ; i--){
//         // if(arr[i] % arr[--i] === 0){return true}
//         console.log(arr[i])
//   }
// return false;
// };

// console.log(factorChain([1, 2, 4, 8, 16, 32])) // true
// console.log(factorChain([1, 1, 1, 1, 1, 1])) // true
// console.log(factorChain([2, 4, 6, 7, 12])) //  false
// console.log(factorChain([10, 1])) //  false

// console.log('%c exercise 190', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


/**
 *  Create a function that takes a number and returns an array with the digits of the number in reverse order.
 */

// const reverseArr = n => String(n).split('').map(e => Number(e)).reverse() ;

// console.log(reverseArr(1485979)) // [9, 7, 9, 5, 8, 4, 1]
// console.log(reverseArr(623478)) // [8, 7, 4, 3, 2, 6]
// console.log(reverseArr(12345)) // [5, 4, 3, 2, 1]

// console.log('%c exercise 191', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

Adds two (+2) to each odd integer.
Subtracts two (-2) from each even integer.
 */
// const evenOddTransform = ( arr, n ) =>  
//   arr.map(e => e % 2 !== 0 ? ( e + 2 * n ) : ( e - 2 * n )) 

// console.log(evenOddTransform([3, 4, 9], 3)) // [9, -2, 15]
// console.log(evenOddTransform([0, 0, 0], 10)) // [-20, -20, -20]
// console.log(evenOddTransform([1, 2, 3], 1) ) // [3, 0, 5]

// console.log('%c exercise 192', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Return the sum of all items in an array, where each item is multiplied
 *  by its index (zero-based). For empty arrays, return 0.
 */
// const indexMultiplier1 = arr => arr.map((e,i) => e * i).reduce((a,b) => a + b, 0)  ;

// console.log(indexMultiplier1([1, 2, 3, 4, 5])) // 40
// console.log(indexMultiplier1([-3, 0, 8, -6])) // -2

// console.log('%c exercise 193', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Return the total number of arrays inside a given array.
 */
// const numOfSubbarrays = arr => arr.filter(e => Array.isArray(e) ? 0 : arr.length) ;

// console.log(numOfSubbarrays([[1, 2, 3]])) // 1
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]])) // 3
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]])) // 4
// console.log(numOfSubbarrays([1, 2, 3])) // 0

// console.log('%c exercise 194', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

Return true if the marathon is 25 miles long, otherwise, return false.
 */
// const marathonDistance = arr => arr.reduce((a,b) => a + b, 0) === 25 ;

// console.log(marathonDistance([1, 2, 3, 4])) // false
// console.log(marathonDistance([1, 9, 5, 8, 2])) // true
// console.log(marathonDistance([-6, 15, 4])) // false

// console.log('%c exercise 195', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  There's a great war between the even and odd numbers. Many numbers already lost their life in this war and it's your task to end this. You have to determine which group sums larger: the even, or the odd. The larger group wins.

Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between sum of even and odd numbers.
 */
// const warOfNumbers = arr => {
//   let o = arr.filter(e => e % 2 === 0).reduce((a,b) => a + b, 0)
//   let e = arr.filter(e => e % 2 !== 0).reduce((a,b) => a + b, 0)
//   return e > o ? e - o : o - e
// };

// console.log(warOfNumbers([2, 8, 7, 5])) // 2
// console.log(warOfNumbers([12, 90, 75])) // 27
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])) // 168

// console.log('%c exercise 196', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

/**
 *  Create a function that returns only strings with unique characters.
 */

// const filterUnique = arr => {
//   let res =''
//   for(let i=0; i <arr.length ; i++){
//         if(arr[i] !== arr[++i]){
//             res += arr[i]
//             break;
//         }
//   }
//   return res;
// }

// console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])) // ["abc"]
// console.log(filterUnique(["88", "999", "989", "9988", "9898"])) // []
// console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])) // ["ABCDE", "BED", "BAC"]

// console.log('%c exercise 197', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Given an array and an integer n, return the sum of the first n numbers in the array.
 */
// const sliceSum = ( arr, n ) => arr.slice(0,3).reduce((a,b) => a + b, 0)  ;

// console.log(sliceSum([9, 8, 7, 6], 3)) // 24
// console.log(sliceSum([1, 3, 2], 2)) // 18
// console.log(sliceSum([3, 6, 2], 0)) // 0

// console.log('%c exercise 198', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). 
 * Create a function that takes the video length and return it in seconds.
 */

// const minutesToSeconds = str => {
//   let mins = Number(str.slice(0,2)) * 60
//   let sec = Number(str.slice(3,5))

//   if(sec >=60){return false}
//    return mins + sec;
// } ;

// console.log(minutesToSeconds("01:00")) // 60
// console.log(minutesToSeconds("13:56")) // 836
// console.log(minutesToSeconds("10:60")) // false

// console.log('%c exercise 198', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  
 */

// const p = n => Number(String(Math.PI).slice(0,2+n))

// console.log(p(4)) // 3.1415
// console.log(p(5)) // 3.14159
// console.log(p(15)) // 3.141592653589793

// console.log('%c exercise 199', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes a string 
 * and returns a new string with all vowels removed.
 */
// const removeVowels = str => str.replace(/[a,e,i,o,u]/ig, '') 

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke.")) // " hv nvr sn  thn prsn drnkng Dt Ck."
// console.log(removeVowels("We're gonna build a wall!")) // "W'r gnn bld  wll!"
// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!")) // "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

// console.log('%c exercise 200', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes a string and returns the number (count) of vowels contained within it.
 */
// const countVowels = str => str.match(/[a,e,i,o,u]/ig).length ;

// console.log(countVowels("Celebration")) // 5
// console.log(countVowels("Palm")) // 1
// console.log(countVowels("Prediction")) // 4

// console.log('%c exercise 201', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
// /**
//  *  
//  */
// const factorial = n => {
//   let a =1;
//   for(let i=1; i <=n ; i++){
//         a *= i;
//   }
//   return a;
// } ;

// console.log(factorial(3)) // 6
// console.log(factorial(5)) // 120 
// console.log(factorial(13)) // 6227020800

// console.log('%c exercise 202', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that evaluates an equation.
 */
// const eq = str => eval(str) ;

// console.log(eq("1+2")) // 3
// console.log(eq("6/(9-7)")) // 3
// console.log(eq("3+2-4")) // 1

// console.log('%c exercise 203', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided 
 * by the second parameter will have a remainder, possibly zero. Return that value.
 */
// const remainder = ( a, b ) => a % b  ;

// console.log(remainder(1, 3)) //1
// console.log(remainder(3, 4)) // 3
// console.log(remainder(-9, 45)) // -9
// console.log(remainder(5,5)) // 0

// console.log('%c exercise 204', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Help fix all the bugs in the function incrementItems! 
 * It is intended to add 1 to every element in the array!
 */
// const incrementItems = arr => arr.map(e => e + 1) ;

// console.log(incrementItems([0, 1, 2, 3])) // [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8])) // [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4])) // [0, -1, -2, -3]

// console.log('%c exercise 205', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Write a function to reverse an array.
 */
// const reverse = arr =>  arr.reverse();

// console.log(reverse([1, 2, 3, 4])) // [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])) // [4, 3, 2, 9, 9]
// console.log(reverse([])) // []


// console.log('%c exercise 206', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function which returns the number of true values there are in an array.
 */
// const countTrue = arr => {
//   if(arr.length === 0){return 0}
//   let counter = 0;
//   for(let i=0; i < arr.length ; i++){
//         if(arr[i] === true){
//           counter++
//         }
//   }
//   return counter;
// } ;

// console.log(countTrue([true, false, false, true, false]) ) // 2
// console.log(countTrue([false, false, false, false])) // 0
// console.log(countTrue([])) // 0

// console.log('%c exercise 207', 
// 'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that concatenates n input arrays, where n is variable.
 */
// const concat = (...n) => n.flat()  ;

// console.log(concat([1, 2, 3], [4, 5], [6, 7])) // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7])) // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1, 2], [3, 4])) // [1, 2, 3, 4]
// console.log(concat([4, 4, 4, 4, 4])) // [4, 4, 4, 4, 4]

console.log('%c exercise 208', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
 */

// const changeEnough = ( arr, r ) => {
//   let q = arr[0]
//   let d = arr[1]
//   let n = arr[2]
//   let p = arr[3]

//   return (q * .25 + d * .1 + n * .05 + p * .01) >= r
// }

// console.log(changeEnough([25, 20, 5, 0], 4.25)) // true
// console.log(changeEnough([0, 0, 20, 5], 0.75)) // true
// console.log(changeEnough([2, 100, 0, 0], 14.11)) // false
// console.log(changeEnough([30, 40, 20, 5], 12.55)) // true
// console.log(changeEnough([10, 0, 0, 50], 3.85)) // false
// console.log(changeEnough([1, 0, 5, 219], 19.99)) // false

console.log('%c exercise 209', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes two numbers as arguments (num, length) and returns 
 * an array of multiples of num until the array length reaches length.
 */
const arrayOfMultiples = ( a, b ) => {
  let out =[];
  for(let i=1; i <b ; i++){
        out.push(a *2)
  }
  return out;
} ;

console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) //  [17, 34, 51, 68, 85, 102]

console.log('%c exercise 210', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Create a function that takes an array of integers and returns the sum of all the integers that have an even index,
 *  multiplied by the integer at the last index.
 */

const evenLast = arr =>{
  if(arr.length === 0){return 0}
   let res =[]
  for(let i=0; i < arr.length; i+=2){
        res.push(arr[i])
  }
return res.reduce((a,b) => a+b) * arr[arr.length -1];
};

console.log(evenLast([])) // 0
console.log(evenLast([1, 3, 3, 1, 10])) // 140
console.log(evenLast([-11, 3, 3, 1, 10])) //20

console.log('%c exercise 211', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Suppose an image can be represented as a 2D array of 0s and 1s. Write 
 * a function to reverse an image. Replace the 0s with 1s and vice versa.
 */

// NIE WIEM JAKIM CUDEM TO DZIAŁA????

const reverseImage = arr => {
  for(let i=0 ; i <arr.length ; i++){
        for(let j=0; j < arr[i].length; j++){
              if(arr[i][j]==0){
                (arr[i][j] +=1)
              }else{
                (arr[i][j] -=1)
              }
        }
  }
  return arr;
}



console.log(reverseImage([[1, 0, 0],[0, 1, 0],[0, 0, 1]])) // [[0, 1, 1],[1, 0, 1],[1, 1, 0]]
console.log(reverseImage([[1, 1, 1],[0, 0, 0]])) // [[0, 0, 0],[1, 1, 1]]
console.log(reverseImage([[1, 0, 0],[1, 0, 0]])) // [[0, 1, 1],[0, 1, 1]]

console.log('%c exercise 212', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')
/**
 *  Write a function that takes an array and returns
 *  a new array with unique positive (more than 0) numbers.
 */

const uniqueArr = arr => [...new Set(arr)].filter(e=> e > 0) ;

console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])) // [1, 3]
console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3])) // [3, 5]
console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5])) //  [10, 6, 13, 5]