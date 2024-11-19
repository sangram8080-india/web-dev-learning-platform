function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

const sentence = "Practice makes javaScript perect";
console.log(reverseWords(sentence));