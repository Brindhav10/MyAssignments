
//Example 1
let input = 'Hello World'
let wordtosplit = input.split(' ')
console.log("Splitted words: " , wordtosplit)
let lastWord = wordtosplit.length-1
console.log("Length of the last word:" ,wordtosplit[lastWord].length )

//Example 2
let input1 = " fly me to the moon "
let splitwords = input1.trim().split(' ')
console.log("Splitted words: " , splitwords)
let lastword = splitwords.length-1
console.log("Length of the last word:" ,splitwords[lastword].length )


//Example 3
function isAnagrams (string1,string2) {
    let status = true
    
    let str1 = string1.trim().toLowerCase()
    let str2 = string2.trim().toLowerCase()
    
    if(str1.length != str2.length)
    {
        status = false
    }
    else
    {
        //convert the string into array for sorting
        let sorted1 = str1.split('').sort().join('')
        let sorted2 = str2.split('').sort().join('')
        status =( sorted1 === sorted2 )
    }
return status
}

console.log("Anagram Validation: " , isAnagrams('Listen','Silent'))
console.log("Anagram Validation: " , isAnagrams('Hello','World'))