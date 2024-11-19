function findLongestWord(sentence) {
    return sentence
        .split(" ")                   
        .reduce((longest, current) =>  
            current.length > longest.length ? current : longest, 
            "");                         
}

const sentence = "Javascript is so intuitive and interesting";
console.log(findLongestWord(sentence));  
