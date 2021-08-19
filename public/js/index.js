
  
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

  const pairs = (a1, a2) => [a1, a2]

  console.log(pairs(51, 21))

  console.log('%c exercise #2:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  // const getVoteCount = obj =>

  console.log('%c exercise #3:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const sumArray = arr => arr.reduce((a, b) => a + b)

  console.log(sumArray([1, 2, 3, 4, 5])) // > 15
  console.log(sumArray([1, 0, -1])) // > 0

  console.log('%c exercise #4:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const reverseArr = arr => arr.reverse()

  console.log(reverseArr([1, 2, 3, 4, 5])) // > [5,4,3,2,1]
  console.log(reverseArr(['a', 'b', 'c'])) // > ['c','b','a']

  console.log('%c exercise #5:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const evenOrOdd = arr => {
    if (arr[0] == 0 && arr.length == 1 || arr.length == 0) { return 'even' }

    const check = arr.reduce((a, b) => a + b)
    check % 2 !== 0 ? console.log('odd') : console.log('even')
  }

  console.log(evenOrOdd([0])) // 'even'
  console.log(evenOrOdd([1])) // 'odd'
  console.log(evenOrOdd([])) // 'even'
  console.log(evenOrOdd([0, 1, 5], '[0,1,5]')) // 'even'

  console.log('%c exercise #6:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  function drop (arr, c) {
    result = [arr[c]]
    console.log(result)
  }

  console.log(drop([1, 2, 3], 1)) // > 2

  function drop1 (arr, c) {
    result = [arr.slice(c)]
    console.log(result)
  }

  console.log(drop1([1, 2, 3], 1)) // > [2,3]

  console.log('%c exercise #7:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const arr = [1, 2, 3, 4, 5, 6]

  const [a, b] = arr
  console.log(a)
  console.log(b)

  console.log('%c exercise #8:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const getLastItem = arr => arr[arr.length - 1]

  console.log(getLastItem([1, 2, 3, 4, 5, 6]))
  console.log(getLastItem(['a', 'b', 'c', 'd']))

  console.log('%c exercise #9:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const rangeOfNum = (r1, r2) => {
    result = []

    for (let i = r1 + 1; i < r2; i++) {
      result.push(i)
    }
    return result
  }

  console.log(rangeOfNum(1, 9))

  console.log('%c exercise #10:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const rotateByOne = arr => {
    const posZero = arr.pop()

    const result = [posZero, ...arr]

    return result
  }

  console.log(rotateByOne([1, 2, 3, 4, 5]))

  console.log('%c exercise #11:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const arrayValues = arr => {
    const result = []

    for (let i = 0; i < arr.length; i++) {
      result.push(typeof (arr[i]))
    }
    return result
  }

  console.log(arrayValues([1, 2, 'null', []]))

  console.log('%c exercise #12:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const arrayToString = arr => arr.join('')

  console.log(arrayToString([1, 2, 3, 4, 5]))
  console.log(arrayToString(['a', 'b', 'c', 'd']))
  console.log(arrayToString([2, 4, 'c', 'd']))

  console.log('%c exercise #13:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const incrementItems = arr => arr.map(el => el += 1)

  console.log(incrementItems([2, 4, 6]))

  console.log('%c exercise #14:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const concatenation = (arr1, arr2) => arr1.concat(arr2)

  console.log(concatenation([1, 3, 5], [2, 6, 8]))

  console.log('%c exercise #15:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const findIndex = (arr, ind) => arr.indexOf(ind)

  console.log(findIndex(['hi', 'edabit', 'fgh', 'abc'], 'fgh')) // 2

  console.log('%c exercise #16:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const sumFive = arr => arr.filter(el => el > 5).reduce((a, b) => a + b)

  console.log(sumFive([1, 5, 20, 30, 4, 9, 18])) // 77

  console.log('%c exercise #17:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const parseArray = arr => arr.map(el => el.toString())

  console.log(parseArray([1, 2, 'a', 'r']))

  console.log('%c exercise #18:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const search = (arr, ind) => arr.indexOf(ind)

  console.log(search([1, 2, 3, 4, 5, 6, 7], 25))

  console.log('%c exercise #19:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const check = (arr, ind) => arr.includes(ind)

  console.log(check([1, 2, 3, 4, 5], 3))
  console.log(check([]), 3)

  console.log('%c exercise #19:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const minSum = arr => {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
      result += Math.min.apply(null, arr[i])
    }
    return result
  }

  console.log(minSum([[1, 2, 3, 4, 5], [5, 6, 7, 8], [20, 21, 34, 56, 100]])) // 26

  console.log('%c exercise #20:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const arrBetween = (n1, n2, arr) => {
    const result = []
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > n1 && arr[i] < n2) {
        result.push(arr[i])
      }
    }
    return result
  }

  console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) // [8,6]
  console.log(arrBetween(7, 32, [1, 2, 3, 78])) // []
  console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) // [5,4,7]

  console.log('%c exercise #21:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const hasSame = (arr1, arr2) => {
    if (arr1[0] == arr2[0] && arr1[arr1.length - 1] == arr2[arr2.length - 1]) {
      return true
    }
    return false
  }

  console.log(hasSame(['aa', 'bb', 'aa'], ['aa', 'cc', 'aa']))

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

  const invertArray = arr => arr.map(e => e * -1)

  console.log(invertArray([1, 2, 3, 4, 5]))
  console.log(invertArray([1, 2, -3, 4, -5]))

  console.log('%c exercise #24:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const len = str => {
    const spl = str.split('')
    let res = 0

    console.log(spl)

    for (let i = 0; i < spl.length; i++) {
      res++
    }
    return res
  }

  console.log(len('Hello World')) // 11

  console.log('%c exercise #25:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const halfQeight = n => [n / 2, n / 4, n / 8]

  console.log(halfQeight(6)) // [3,1.5,0.75]
  console.log(halfQeight(22)) // [11, 5.5, 2.75]

  console.log('%c exercise #26:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const shapes = n => {
    obj = {
      1: 'circle',
      2: 'semi-circle',
      3: 'triangle',
      4: 'square',
      5: 'pentagon',
      6: 'hexagon',
      7: 'heptagon',
      8: 'octagon',
      9: 'nonagon',
      10: 'decagon'
    }

    return obj[n]
  }

  console.log(shapes(2), 2) // "semi circle"
  console.log(shapes(5), 5) // "pentagon"

  console.log('%c exercise #27:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const bytwo = arr => arr.map(e => e * 2)

  console.log(bytwo([1, 2, 3, 4, 5])) // [2,4,6,8,10]

  console.log('%c exercise #28:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const wordLengths = arr => {
    res = []

    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i].length)
    }
    return res
  }

  console.log(wordLengths(['hello', 'world'])) // [5,5]
  console.log(wordLengths(['Halloween', 'Thanksgiving', 'Christmas'])) // [9,12,9]
  console.log(wordLengths(['She', 'sells', 'seashells', 'down', 'by', 'the', 'seashore'])) // [3, 5, 9, 4, 2, 3, 8]

  console.log('%c exercise #29:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  function sumMinimums (arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      count += Math.min(...arr[i])
    }
    return count
  }
  console.log(sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
  ])) // 26 (1 + 5 +20)

  console.log('%c exercise #30:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const trimmedAverages = arr => {
    const res = []

    const max = arr.pop()
    const min = arr.shift()

    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i])
    }
    return res.reduce((a, b) => a + b) / res.length
  }

  console.log(trimmedAverages([4, 5, 7, 100]))

  console.log('%c exercise #31:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  function arrIndex (list, idx) {
    const arr = list.flat()
    return idx.map(x => arr[x - 1]).join('')
  }

  console.log(arrIndex([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']
  ]))

  console.log('%c exercise #32:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const birthdayCakeCandles = arr => {
    const max = Math.max(...arr)
    const res = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == max) {
        res.push(arr[i])
      }
    }
    return res.length
  }

  console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])) // 4
  console.log(birthdayCakeCandles([3, 2, 1, 3])) // 2
  console.log(birthdayCakeCandles([4, 4, 1, 3])) // 2

  console.log('%c exercise #33:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const spaceMeOut = str => {
    res = ''
    for (let i = 0; i < str.length; i++) {
      res += str[i] + ' '
    }
    return res
  }

  console.log(spaceMeOut('space')) // "s p a c e"
  console.log(spaceMeOut('far out')) // "f a r  o u t"
  console.log(spaceMeOut('elongated musk')) // "e l o n g a t e d   m u s k"

  console.log('%c exercise #34:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  // const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
  // let [ trans1, trans2, [trans3, [trans4]] ] = arr

  // console.log(trans2)

  console.log('%c exercise #35:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const outlierNumber = arr => {
    const odd = []
    const even = []

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i])
      } else {
        even.push(arr[i])
      }
    }
    odd.length < even.length ? console.log(odd) : console.log(even)
  }

  console.log(outlierNumber([2, 3, 4])) // 3
  console.log(outlierNumber([4, 1, 3, 5, 9])) // 4

  console.log('%c exercise #36:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const getSumOfItems = arr => arr.reduce((a, b) => a + b, 0)

  console.log(getSumOfItems([2, 7, 4])) // 13

  console.log('%c exercise #37:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const getFileName = str => {
    const spli = str.split('/')
    return spli[spli.length - 1]
  }

  console.log(getFileName('C:/Projects/pil_tests/ascii/edabit.txt')) // edabit.txt
  console.log(getFileName('C:/Users/johnsmith/Music/Beethoven_5.mp3')) // Beethoven_5.mp3
  console.log(getFileName('ffprobe.exe')) // ffprobe.exe

  console.log('%c exercise #38:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  function moveZeros (arr) {
    return arr
      .filter((val) => val !== 0)
      .concat(arr.filter((val) => val === 0))
  }

  console.log(moveZeros([0, 1, null, 2, false, 1, 0])) // [1, null, 2, false, 1, 0, 0]

  console.log('%c exercise #39:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const integerBoolean = n => {
    const spli = n.split('')
    const res = []
    for (let i = 0; i < spli.length; i++) {
      if (spli[i] == 1) {
        res.push(true)
      } else { res.push(false) }
    }
    return res
  }

  console.log(integerBoolean('100101')) // [true, false, false, true, false, true]
  console.log(integerBoolean('10')) // [true, false]
  console.log(integerBoolean('1011')) // [true, false, true, true]

  console.log('%c exercise #40:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const oddSum = arr => {
    const resultArray = []
    for (let i = 0; i < arr.length - 1; i++) {
	  if ((arr[i] + arr[i + 1]) % 2 === 0) {
        resultArray.push(true)
	  } else {
        resultArray.push(false)
	  }
    }
    return resultArray
  }

  console.log(oddSum([11, 15, 6, 8, 9, 10])) // [true, false, true, false, false]

  console.log('%c exercise #41:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const lonelyInteger = a => a.find(b => !a.includes(-b))

  console.log(lonelyInteger([1, -1, 2, -2, 3])) // -> 3
  console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])) // -> -4
  console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])) // -> -9

  console.log('%c exercise #42:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  function simpleEncoder (str) {
    text = ''
    for (let i = 0; i < str.length; i++) {
      let occurrences = false
      for (let j = 0; j < str.length; j++) {
        if (str[i].toLowerCase() === str[j].toLowerCase() && i != j) { occurrences = true }
      }
      if (occurrences) { text += ']' } else { text += '[' }
    }
    return text
  }

  console.log(simpleEncoder('Mubashir')) // [[[[[[[[
  console.log(simpleEncoder('Matt')) // [[]]
  console.log(simpleEncoder('eD  aBiT')) // [[]][[[[

  console.log('%c exercise #43:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const stringPairs = str => (str + '*').match(/../g) || []

  console.log(stringPairs('airforces'))

  console.log('%c exercise #44:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const findBob = arr => arr.indexOf('Bob')

  console.log(findBob(['Jimmy', 'Layla', 'Bob']))

  console.log('%c exercise #45:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const unlucky13 = arr => arr.filter(v => v % 13 !== 0)

  console.log(unlucky13([53, 182, 435, 591, 637]))
  console.log(unlucky13([104, 351, 455, 806, 871]))
  console.log(unlucky13([24, 316, 393, 458, 1279]))

  console.log('%c exercise #46:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  largestNumbers = (n, arr) => {
    const sor = arr.sort((a, b) => a - b).reverse()
    const res = []
    for (i = 0; i < n; i++) {
      res.push(arr[i])
    }
    return res.reverse()
  }

  console.log(largestNumbers(2, [4, 3, 2, 1])) // -> [3,4]
  console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) // ➞ [16, 18, 57]

  console.log('%c exercise #47:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const countUppercase = arr => arr.join('').replace(/[^A-Z]/g, '').length

  console.log(countUppercase(['SOLO', 'hello', 'Tea', 'wHat'])) // -> 6
  console.log(countUppercase(['little', 'lower', 'down'])) // -> 0
  console.log(countUppercase(['EDAbit', 'Educate', 'Coding'])) // -> 5

  console.log('%c exercise #48:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const findLargestNum = arr => arr.sort((a, b) => b - a)[0]

  console.log(findLargestNum([4, 5, 1, 3])) // -> 5
  console.log(findLargestNum([1000, 1001, 857, 1])) // -> 1001
  console.log(findLargestNum([300, 200, 600, 150])) // -> 600

  console.log('%c exercise #49:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const checkit = (a1, a2) => a2.filter((v, i) => v[i] !== a1[i] ? -1 : 1)

  console.log(checkit(['cat', 'blue', 'skt', 'umbrells', 'paddy'],
    ['cat', 'blue', 'sky', 'umbrella', 'paddy']))

  console.log('%c exercise #50:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const addIndexes = arr => arr.map((e, i) => e + i)
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

  const arrayLessThan100 = arr => arr.reduce((a, b) => a + b) < 100

  console.log(arrayLessThan100([5, 57])) // -> true

  console.log('%c exercise #52:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const outlieNumber = arr => {
    const ev = []
    const od = []

    for (let i = 0; i < arr.length; i++) {
      arr[i] % 2 == 0 ? ev.push(arr[i]) : od.push(arr[i])
    }
    if (ev.length > od.length) {
      for (let i = 0; i < od.length; i++) {
        console.log(od[i])
      }
    } else {
      for (let i = 0; i < ev.length; i++) {
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

  console.log(isFourLetters(['Tomato', 'Potato', 'Pair'])) // ➞ ["Pair"]
  console.log(isFourLetters(['Kangaroo', 'Bear', 'Fox'])) // -> ["Bear"]
  console.log(isFourLetters(['Ryan', 'Kieran', 'Jason', 'Matt'])) // ["Ryan", "Matt"]

  console.log('%c exercise #54:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const difference = arr => {
    const sorted = arr.sort((a, b) => a - b)
    return sorted[sorted.length - 1] - sorted[0]
  }

  console.log(difference([10, 15, 20, 2, 10, 6])) // -> 18
  console.log(difference([-3, 4, -9, -1, -2, 15])) // -> 24
  console.log(difference([4, 17, 12, 2, 10, 2])) // -> 15

  console.log('%c exercise #55:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const noOdds = arr => arr.filter(e => e % 2 == 0)

  console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])) // -> [2,4,6,8]
  console.log(noOdds([43, 65, 23, 89, 53, 9, 6])) //  ➞ [6]
  console.log(noOdds([718, 991, 449, 644, 380, 440])) // ➞ [718, 644, 380, 440]

  console.log('%c exercise #56:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const nextElement = arr => arr[arr.length - 1] + (arr[1] - arr[0])

  console.log(nextElement([3, 5, 7, 9])) // -> 11
  console.log(nextElement([-5, -6, -7])) // -> -8
  console.log(nextElement([2, 2, 2, 2, 2])) // -> 2

  console.log('%c exercise #57:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const canCapture = ([s1, s2]) => s1[0] === s2[0] || s1[1] === s2[1]

  console.log(canCapture(['A8', 'E8'])) // -> true
  console.log(canCapture(['A1', 'B2'])) // -> false
  console.log(canCapture(['H4', 'H3'])) // -> true
  console.log(canCapture(['F5', 'C8'])) // -> false

  console.log('%c exercise #58:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const addEnding = (arr, n) => {
    const res = []
    for (i = 0; i < arr.length; i++) {
      res.push(arr[i] + n)
    }
    return res
  }

  console.log(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly')) // ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
  console.log(addEnding(['new', 'pander', 'scoop'], 'er')) // ➞ ["newer", "panderer", "scooper"]
  console.log(addEnding(['bend', 'sharpen', 'mean'], 'ing')) // ➞ ["bending", "sharpening", "meaning"]

  console.log('%c exercise #59:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  // const getFillings = arr => arr.filter(e => e !== "bread")
  const getFillings = arr => arr.slice(1, -1)

  console.log(getFillings(['bread', 'ham', 'cheese', 'ham', 'bread'])) //  ["ham", "cheese", "ham"]
  console.log(getFillings(['bread', 'sausage', 'tomato', 'bread'])) //  ["sausage", "tomato"]
  console.log(getFillings(['bread', 'lettuce', 'bacon', 'tomato', 'bread'])) // ➞ ["lettuce", "bacon", "tomato"]

  console.log('%c exercise #60:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const countdown = n => {
    const res = []
    for (i = 0; i <= n; i++) { res.push(i) }
    return res.reverse()
  }

  console.log(countdown(5)) // [5, 4, 3, 2, 1, 0]
  console.log(countdown(1)) // [1, 0]
  console.log(countdown(0)) //  [0]

  console.log('%c exercise #61:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const getSequence = (n1, n2) => {
    const res = []
    for (let i = n1; i <= n2; i++) {
      res.push(i)
    }
    return res
  }

  console.log(getSequence(1, 5)) // -> [1, 2, 3, 4, 5]
  console.log(getSequence(98, 100)) // ➞ [98, 99, 100]
  console.log(getSequence(1000, 1000)) // ➞ [1000]

  console.log('%c exercise #62:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const hurdleJump = (arr, n) => arr.sort((a, b) => b - a)[0] <= n

  console.log(hurdleJump([1, 2, 3, 4, 5], 5)) // -> true
  console.log(hurdleJump([5, 5, 3, 4, 5], 3)) // -> false
  console.log(hurdleJump([5, 4, 5, 6], 10)) // -> true
  console.log(hurdleJump([1, 2, 1], 1)) // -> false

  console.log('%c exercise #63:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const additiveInverse = arr => arr.map(e => e * -1)

  console.log(additiveInverse([5, -7, 8, 3])) // ➞ [-5, 7, -8, -3]
  console.log(additiveInverse([1, 1, 1, 1, 1])) // ➞ [-1, -1, -1, -1, -1]
  console.log(additiveInverse([-5, -25, 35])) // ➞ [5, 25, -35]

  console.log('%c exercise #64:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const wordL = arr => arr.map(e => e.length)

  console.log(wordL(['hello', 'world'])) // [5,5]
  console.log(wordL(['Halloween', 'Thanksgiving', 'Christmas'])) //  ➞ [9, 12, 9]
  console.log()

  console.log('%c exercise #65:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const largestNum = (n, arr) => arr.sort((a, b) => a - b).reverse().slice(0, n)

  console.log(largestNum(2, [4, 3, 2, 1])) // [4,3]
  console.log(largestNum(1, [7, 19, 4, 2])) // [19]
  console.log(largestNum(3, [14, 12, 57, 11, 18, 16])) // [16,18,57]

  console.log('%c exercise #66:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const makeRug = (m, n, s = '#') => Array(m).fill(s.repeat(n))

  console.log('%c exercise #64:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const nthSmallest = (arr, n) => {
    const sli = arr.slice(n - 1)
    return sli.reduce((a, b) => Math.min(a, b))
  }

  console.log(nthSmallest([1, 3, 5, 7], 1)) // -> 1
  console.log(nthSmallest([1, 3, 5, 7], 3)) // -> 5
  console.log(nthSmallest([1, 3, 5, 7], 2)) // -> 3
  console.log(nthSmallest([7, 3, 5, 1], 2)) // -> 3

  console.log('%c exercise #65:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const findSmallestNum = arr => arr.sort((a, b) => a - b)[0]

  console.log(findSmallestNum([34, 15, 88, 2])) // -> 2
  console.log(findSmallestNum([34, -345, -1, 100])) // -> -345
  console.log(findSmallestNum([-76, 1.345, 1, 0])) // -76
  console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])) // -> -0.999
  console.log(findSmallestNum([7, 7, 7])) // -> 7

  console.log('%c exercise #66:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const multiplyByLength = arr => arr.map(e => e * arr.length)

  console.log(multiplyByLength([2, 3, 1, 0])) // ➞ [8, 12, 4, 0]
  console.log(multiplyByLength([4, 1, 1])) // ➞ ([12, 3, 3])
  console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])) // -> [7, 0, 21, 21, 49, 14, 7]
  console.log(multiplyByLength([0])) // -> [0]

  console.log('%c exercise #67:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const removeNull = arr => arr.filter(e => e !== null)

  console.log(removeNull(['a', null, 'b', null])) // ➞ ["a", "b"]
  console.log(removeNull([null, null, null, null, null])) // ➞ []
  console.log(removeNull([7, 8, null, 9])) // ➞ [7, 8, 9]

  console.log('%c exercise #68:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const transform = arr => arr.map(e => e % 2 == 0 ? e - 1 : e + 1)

  console.log(transform([1, 2, 3, 4, 5])) //  ➞ [2, 1, 4, 3, 6]
  console.log(transform([3, 3, 4, 3])) // ➞ [4, 4, 3, 4]
  console.log(transform([2, 2, 0, 8, 10])) // ➞ [1, 1, -1, 7, 9]

  console.log('%c exercise #69:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const deNest = arr => arr.flat(Infinity)[0]

  console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])) // -> 3
  console.log(deNest([[[[[[[true]]]]]]])) // -> true
  console.log(deNest([[[[[[[[[[[[[[[[['edabit']]]]]]]]]]]]]]]]])) // ➞ "edabit"

  console.log('%c exercise #70:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  // const getDiscounts = ( arr, n ) => {

  //   let obj = {
  //      "50%": 0.5,
  //      "75%": 0.75,
  //      "45%": 0.45
  //   }[n]

  //   return arr.map(e=> e * obj[n])
  // }

  // console.log(getDiscounts([2, 4, 6, 11], "50%")) // ➞ [1, 2, 3, 5.5]
  // console.log(getDiscounts([10, 20, 40, 80], "75%")) // ➞ [7.5, 15, 30, 60]
  // console.log(getDiscounts([100], "45%")) // ➞ [45]

  console.log('%c exercise #71:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const filterStateNames = (arr, str) => arr.filter(e => str == 'abb' ? e.length < 3 : str == 'full' ? e.length > 3 : false)

  console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb')) // ➞ ["CA", "NY"]
  console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full')) // ➞ ["Arizona", "Nevada"]
  console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb')) // ➞ ["MT", "NJ", "TX", "ID", "IL"]
  console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full')) // -> []

  console.log('%c exercise #72:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const repeat = (s, n) => {
    const arr = []
    for (i = 0; i < n; i++) {
      arr.push(s)
    }
    return arr
  }

  console.log(repeat('edabit', 3)) // ➞ ["edabit", "edabit", "edabit"]
  console.log(repeat(13, 5)) // ➞ [13, 13, 13, 13, 13]
  console.log(repeat('7', 2)) // ➞ ["7", "7"]
  console.log(repeat(0, 0)) // ➞ []

  console.log('%c exercise #73:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const returnOnlyInteger = arr => arr.filter(Number.isInteger)

  console.log(returnOnlyInteger([9, 2, 'space', 'car', 'lion', 16])) // ➞ [9, 2, 16]
  console.log(returnOnlyInteger(['hello', 81, 'basketball', 123, 'fox'])) // ➞ [81, 123]
  console.log(returnOnlyInteger([10, '121', 56, 20, 'car', 3, 'lion'])) // ➞ [10, 56, 20, 3]
  console.log(returnOnlyInteger(['String', true, 3.3, 1])) // ➞ [1]

  console.log('%c exercise #74:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const convertCartesian = (a1, a2) => {
    const res = []
    return res
  }

  console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])) // ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]
  console.log(convertCartesian([9, 8, 3], [1, 1, 1])) // ➞ [[9, 1], [8, 1], [3, 1]]

  console.log('%c exercise #75:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const existsHigher = (arr, n) => arr.filter(e => e >= n)

  console.log(existsHigher([5, 3, 15, 22, 4], 10)) // true
  console.log(existsHigher([1, 2, 3, 4, 5], 8)) // false
  console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)) // true
  console.log(existsHigher([], 5)) // false

  console.log('%c exercise #76:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const mod = (arr, n) => arr.map(e => e % n)

  console.log(mod([5, 7, 8, 2, 1], 2)) // ➞ [1, 1, 0, 0, 1]
  console.log(mod([9, 8, 16, 47], 4)) // ➞ [1, 0, 0, 3]
  console.log(mod([17, 11, 99, 55, 23, 1], 5)) // ➞ [2, 1, 4, 0, 3, 1]
  console.log(mod([6, 1], 7)) // ➞ [6, 1]
  console.log(mod([3, 2, 9], 3)) // [0, 2, 0]
  console.log(mod([48, 22, 0, 19, 33, 100], 10)) // ➞ [8, 2, 0, 9, 3, 0]

  console.log('%c exercise #77:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const filterDigitLength = (arr, n) => arr.map(e => e.toString()).filter(e => e.length == n).map(e => Number(e))

  console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) // ➞ [232, 555]
  console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) // ➞ [2, 7, 8, 9]
  console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) // ➞ []
  console.log(filterDigitLength([5, 6, 8, 9], 1)) //  ➞ [5, 6, 8, 9]

  console.log('%c exercise #78:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const mirror = arr => arr.concat(arr.slice(0, -1).reverse())

  console.log(mirror([0, 2, 4, 6])) // ➞ [0, 2, 4, 6, 4, 2, 0]
  console.log(mirror([1, 2, 3, 4, 5])) // ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
  console.log(mirror([3, 5, 6, 7, 8])) // ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

  console.log('%c exercise #79:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const sum = arr => arr.reduce((a, b) => a + b)

  console.log(sum([1, 2, 3, 4])) // -> 10
  console.log(sum([1, 2])) // -> 3
  console.log(sum([1])) // -> 1
  // console.log(sum([])) // -> 0

  console.log('%c exercise #80:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const rogerShots = arr => {
    let res = 0

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'Bang!' || arr[i] === 'BangBang!') {
        res += 0.5
      }
    }
    return res
  }

  console.log(rogerShots(['Bang!', 'Bang!', 'Bang!', 'Bang!', 'Bang!', 'Bang!'])) // -> 3
  console.log(rogerShots(['Bang!', 'Bang!', 'Bang!', 'Bang!', 'BangBang!'])) // -> 2.5
  console.log(rogerShots(['Bang!', 'BangBangBang!', 'Boom!', 'Bang!', 'BangBang!', 'BangBang!'])) // -> 2

  console.log('%c exercise #81:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const minMax = arr => {
    const sor = arr.sort((a, b) => a - b)
    return [sor[0], sor[sor.length - 1]]
  // return Array(sor[0], sor[sor.length -1])
  }

  console.log(minMax([1, 2, 3, 4, 5])) // ➞ [1, 5]
  console.log(minMax([2334454, 5])) // ➞ [5, 2334454]
  console.log(minMax([1])) // ➞ [1, 1]

  console.log('%c exercise #82:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  // const canNest = ( a1, a2 ) => {
  //   let max1 = a1.sort((a,b)=>a-b).slice(-1)
  //   let min1 = a1.sort((a,b)=>a-b)[0]
  //   let max2 = a2.sort((a,b)=>a-b).slice(-1)
  //   let min2 = a2.sort((a,b)=>a-b)[0]

  //   (min1 > min2 && max1 < max2) ? true : false;

  // }

  // console.log(canNest([1, 2, 3, 4], [0, 6])) // ➞ false
  // console.log(canNest([3, 1], [4, 0])) // ➞ true
  // console.log(canNest([9, 9, 8], [8, 9])) // false
  // console.log(canNest([1, 2, 3, 4], [2, 3])) // false

  console.log('%c exercise #84:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const getExtension = arr => arr.map(e => e.split('.').pop())

  console.log(getExtension(['code.html', 'code.css'])) // ➞ ["html", "css"]
  console.log(getExtension(['project1.jpg', 'project1.pdf', 'project1.mp3'])) // ➞ ["jpg", "pdf", "mp3"]
  console.log(getExtension(['ruby.rb', 'cplusplus.cpp', 'python.py', 'javascript.js'])) // ➞ ["rb", "cpp", "py", "js"]

  console.log(makeRug(3, 5, '$'))

  console.log('%c exercise #83:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const arraySum = arr => arr.map(e => e % 2 == 0 ? Math.pow(e, 2) : Math.sqrt(e, 2)).reduce((a, b) => a + b).toFixed(2)

  console.log(arraySum([1, 3, 3, 1, 10])) // ➞ 105.46
  console.log(arraySum([2, 3, 4, 5])) // ➞ 23.97
  console.log(arraySum([1, 31, 3, 11, 0])) // ➞ 11.62

  console.log('%c exercise #84:',
    'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

  const integerBool = str => str.split('').map(e => Number(e)).map(e => e ? true : false)


console.log('%c exercise #85:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const checkFactors = ( arr,  n ) => {

  for(i = 0; i < arr.length; i++){
      if(n % arr[i]) return false;
  }
  return true
}

console.log(checkFactors([2, 3, 4], 12)) // -> true
console.log(checkFactors([1, 2, 3, 8], 12)) // -> false
console.log(checkFactors([1, 2, 50], 100)) // -> true
console.log(checkFactors([3, 6], 9)) // -> false


  console.log(integerBool('100101')) // ➞ [true, false, false, true, false, true]
  console.log(integerBool('10')) // ➞ [true, false]
  console.log(integerBool('001')) // ➞ [false, false, true]

  console.log('%c exercise #86:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const sumOfCubes = arr => arr.map(e => Math.pow(e,3)).reduce(( a , b ) => a + b)

console.log(sumOfCubes([1, 5, 9])) //  ➞ 855
console.log(sumOfCubes([3, 4, 5])) // ➞ 216
console.log(sumOfCubes([2])) // ➞ 8
// console.log(sumOfCubes([])) // ➞ 0


console.log('%c exercise #87:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const getOnlyEvens = arr => arr.filter(( e, i ) => e % 2 == 0 && i % 2 == 0)

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])) // ➞ [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4])) // ➞ [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])) //  ➞ []

console.log('%c exercise #88:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const sortByLength = arr => arr.sort(( a, b ) => a.length - b.length)

console.log(sortByLength(["Google", "Apple", "Microsoft"])) // ➞ ["Apple", "Google", "Microsoft"]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])) // ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
console.log(sortByLength(["Turing", "Einstein", "Jung"])) // ➞ ["Jung", "Turing", "Einstein"]

console.log('%c exercise #89:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const isAvgWhole = arr => {
 const avg =  arr.reduce(( a, b) => a + b ) / arr.length;
 return Number.isInteger(avg) 
} 

console.log(isAvgWhole([1, 3])) // true
console.log(isAvgWhole([1, 2, 3, 4])) // false
console.log(isAvgWhole([1, 5, 6])) // true
console.log(isAvgWhole([1, 1, 1])) // true
console.log(isAvgWhole([9, 2, 2, 5])) // false

console.log('%c exercise #90:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const mean = arr => Number((arr.reduce(( a, b ) => a + b ) / arr.length).toFixed(1))

console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10])) // ➞ 7.2
console.log(mean([1, 3, 8, 9, 9, 10])) // ➞ 6.7
console.log(mean([2, 3, 3, 6, 6, 8, 9, 10])) // ➞ 5.9


console.log('%c exercise #91:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const minimumRemovals= arr => arr.reduce(( a, b ) => a + b) % 2 == 0 ? 0 : 1;

console.log(minimumRemovals([1, 2, 3, 4, 5])) // -> 1
console.log(minimumRemovals([5, 7, 9, 11])) // -> 0
console.log(minimumRemovals([5, 7, 9, 12])) // -> 1


console.log('%c exercise #92:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

 const oddElim = odd => odd.filter(e=>e%2==0)

console.log(oddElim([1, 2, 3, 4, 5, 6]))


console.log('%c exercise #93:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const onlynum = arr => arr.filter( e => typeof e == 'number' )


console.log(onlynum(['text', 3, 7, 'github', 13, 'dev']))


console.log('%c exercise #94:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


const minmaxlengthavg = arr => {
  let sorted = arr.sort((a,b) => a - b)
  let min = sorted[0]
  let max =sorted[sorted.length -1]
  let len = sorted.length;
   return `the minimum number is ${min}, the maximum number is ${max}, the length is ${len}`
}

console.log(minmaxlengthavg([1,2,5,39,4]))

console.log('%c exercise #95:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')



const sumabs = arr => arr.map(e => Math.abs(e)).reduce((a,b) => a +b)


console.log(sumabs([-1, -3, -5, -4, -10, 0])) // 23

console.log('%c exercise #96:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const multiplyByLen = arr => arr.map(e => e * arr.length)


console.log(multiplyByLen([4,2,3])) // 12, 6, 9

// ===================== algorythms ========================= //


console.log('%c exercise #97:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// Create a function that returns the number of frames 
// shown in a given number of minutes for a certain FPS.


const frames = (a,b) => ( a * 60 ) * b; 

console.log(frames(1,1)) // 60
console.log(frames(10,1)) // 600
console.log(frames(10,25)) // 15000


console.log('%c exercise #98:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// Create a function that takes two arguments. Both arguments are integers, a and b. 
// Return true if one of them is 10 or if their sum is 10.

const makesTen = ( a, b ) => ( a === 10 || b === 10 ) || ( a + b ) === 10  ? true : false; 


console.log(makesTen(9, 10)) // true
console.log(makesTen(9, 9)) // false
console.log(makesTen(1, 9)) // true

console.log('%c exercise #99:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.


const acceptIntoMovie = ( n, bool ) => {
  if( n < 15 && bool=== true){ return true}
  if( n > 15 && bool=== true){ return true}
  return false;
}


console.log(acceptIntoMovie(14, true)) // true
console.log(acceptIntoMovie(14, false)) // false
console.log(acceptIntoMovie(16, true)) // true

console.log('%c exercise #100:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// Here's an image of four models. Some of the cubes are hidden behind other cubes. 
// Model one consists of one cube. Model two consists of four cubes, and so on...
// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high,
//  visible and invisible.


const stackBoxes = n => n*n;

console.log(stackBoxes(1)) // 1
console.log(stackBoxes(2)) // 4
console.log(stackBoxes(0)) // 0
console.log(stackBoxes(4)) // 16


console.log('%c exercise #101:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// A typical car can hold four passengers and one driver, 
// allowing five people to travel around. Given n number of people, 
// return how many cars are needed to seat everyone comfortably.


carsNeeded = n => ( n / 5 ) % 2 !== 0 ? Math.floor(( n / 5 ) + 1) : ( n / 5 );

console.log(carsNeeded(5)) // 1
console.log(carsNeeded(11)) // 3
console.log(carsNeeded(0)) // 0 

console.log('%c exercise #102:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// Create a function that takes an array and returns the types of values (data types) in a new array.

const arrayValuesTypes = arr => arr.map(e=> typeof e)

console.log(arrayValuesTypes([1, 2, "null", []])) // ["number", "number", "string", "object"]
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])) // ["string", "boolean", "boolean", "number", "number", "object", "object"]
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])) // ["number", "string", "string", "object", "object", "boolean", "number"]


console.log('%c exercise #103:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const stutter = str => `${str.slice(0,2)}... ${str.slice(0,2)}... ${str}?`


console.log(stutter("incredible")) // "in... in... incredible?"
console.log(stutter("enthusiastic")) // "en... en... enthusiastic?"
console.log(stutter("outstanding")) // "ou... ou... outstanding?"

console.log('%c exercise #104:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).



const evenOdd = arr => {
  if(arr.length == 0){return `even`}
  return arr.reduce( ( a, b ) => a + b ) % 2 == 0 ? `even` : `odd`
}

console.log(evenOdd([0])) // 'even'
console.log(evenOdd([1])) // "odd"
console.log(evenOdd([])) // "even"
console.log(evenOdd([0,1,5])) // 'even'

console.log('%c exercise #105:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// Create a function that counts how many D's are in a sentence.

const countDs = str => {
  let Dsumm = 0;

  for(let i = 0; i < str.length; i++){
    if(str[i] === "D" || str[i] === 'd')
    Dsumm++
  }
  return Dsumm;
}

console.log(countDs("My friend Dylan got distracted in school.")) // 4
console.log(countDs("Debris was scattered all over the yard.")) // 3
console.log(countDs("The rodents hibernated in their den.")) // 3

console.log('%c exercise #106:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups.
//  Create a function that takes n cups bought and return as an integer the total number of cups I would get.


const totalCups = n => n + Math.floor( n / 6 )

console.log(totalCups(6)) // 7
console.log(totalCups(12)) // 14
console.log(totalCups(213)) // 248


console.log('%c exercise #107:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const programmers = ( a, b, c ) => {
  let s = [a,b,c].sort((a,b) => a - b)
  return `${s[s.length - 1] - s[0]}`
}
 
console.log(programmers(147, 33, 526)) // 493
console.log(programmers(33, 72, 74)) // 41
console.log(programmers(1, 5, 9)) // 8


console.log('%c exercise #108:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const sumCubes = n => {
  let sum = 0;
  for(let i=1; i <= n; i++){
      sum += i ** 3
  }
  return sum;
}

console.log(sumCubes(7)) // 784
console.log(sumCubes(8)) // 1296
console.log(sumCubes(9)) // 2025

console.log('%c exercise #109:', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, 
// separated by commas.


const nTablesPlusOne = n => {

  let arr1 =[]

  for(let i= 1; i < 10; i++){
    arr1.push(n*i+1)
  }
  return arr1;
}


console.log(nTablesPlusOne(7)) // "8,15,22,29,36,43,50,57,64,71"
console.log(nTablesPlusOne(1)) // "2,3,4,5,6,7,8,9,10,11"
console.log(nTablesPlusOne(3)) // "4,7,10,13,16,19,22,25,28,31"


console.log('%c exercise #110', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// Create a function that takes a code of chess board square and return his color.

const chessBoard = str => {
 let splited = str.split("")
  if(splited[0] === 'a' || splited[0] === 'c' || splited[0] === 'e' || splited[0] === 'g' && splited[1] % 2 !== 0){
    return 'black'
  }else if(splited[0] === 'b' || splited[0] === 'd' || splited[0] === 'f' || splited[0] === 'h' && splited[1] % 2 == 0){
    return 'white'
  }
}

console.log(chessBoard("a1")) // black
console.log(chessBoard("e5")) // black
console.log(chessBoard("d1")) // white

console.log('%c exercise #111', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// Create a function to multiply all of the values in an array by the amount of values in the given array.


const multiplyByLe = arr => arr.map( e => e * arr.length )


console.log(multiplyByLe([1,2,3,4])) // [4,8,12,16]
console.log(multiplyByLe([5,6,8])) // [15, 16, 24]
console.log(multiplyByLe([0])) // [0]
console.log(multiplyByLe([1, 0, 3, 3, 7, 2, 1])) // [7, 0, 21, 21, 49, 14, 7]

console.log('%c exercise #112', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// Create a function that applies a discount d to every number in the array.

const getDiscounts = ( arr, str ) => arr.map( e => ( e / 100 ) * Number(str.slice(0, -1)) )

console.log(getDiscounts([2, 4, 6, 11], "50%")) // [1, 2, 3, 5.5]
console.log(getDiscounts([10, 20, 40, 80], "75%")) // [7.5, 15, 30, 60]
console.log(getDiscounts([100], "45%")) // [45]

console.log('%c exercise #113', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')



// Create a function that takes a number as an argument. Add up all the numbers from 1 
// to the number you passed to the function. For example, 
// if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


const addUp = n => {
  let colect = [];
  for( let i = 1; i <= n; i++ ){
    colect.push(i)
  }
  return colect.reduce((a,b) => a + b);
}

console.log(addUp(4)) // 10
console.log(addUp(13)) // 91
console.log(addUp(600)) // 180300

console.log('%c exercise #114', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

// Create a function that takes a number as an argument, 
// increments the number by +1 and returns the result.

const addition = n => n += 1

console.log(addition(0) )// 1
console.log(addition(9) )// 10
console.log(addition(-3)) //-2


console.log('%c exercise #115', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const footballPoints = ( w, d, l ) => ( w * 3 ) + ( d * 1 ) + ( l * 0 )

console.log(footballPoints(3, 4, 2)) // 13
console.log(footballPoints(5, 0, 2)) // 15
console.log(footballPoints(0, 0, 1)) // 0

console.log('%c exercise #116', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')


// Create a function that takes an integer and return true if it's divisible by 100, 
// otherwise return false.

const divisible = n => n % 100 === 0

console.log(divisible(1)) // false
console.log(divisible(1000)) // true
console.log(divisible(100)) // true

console.log('%c exercise #117', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

const imposterFormula = ( i, p ) => `${Math.ceil(100 * ( i / p ))}%`

console.log(imposterFormula(1, 10)) // 10%
console.log(imposterFormula(2, 5)) // 40%
console.log(imposterFormula(1, 8)) // 13%

console.log('%c exercise #118', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

/*
* The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs,
 30% after tax income on wants, 
and 20% after-tax income on savings or paying off debt.
Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object
 that shows how much a person needs to spend on needs, wants, and savings.
*/

const fiftyThirtyTwenty = n => {
  return { needs: n / 100 * 50, wants: n / 100 * 30, savings: n / 100 * 20 }
}

console.log(fiftyThirtyTwenty(10000)) // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
console.log(fiftyThirtyTwenty(50000)) // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
console.log(fiftyThirtyTwenty(13450)) // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

console.log('%c exercise #119', 
'color:goldenrod; font-size:20px;padding:10px; background:#000000; margin:10px 0;')

