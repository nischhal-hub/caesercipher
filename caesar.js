/*the logic i created for caesar cipher is:
first split the given words into array using split function. then finding the index of each element of wordarray relative to lower alphabet
and upperalphabet and return the value by adding the given number*/
const caesar = function(word , number) {
    //array for both upper and lower alphabets..
    let lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // -------------------------------------//
    let wordArray = word.split(""); //splits each word into individual element of array.
    let ciphertext = "";            // declaring variable for return value.
    let index = 0;           
    let newNumber = 0;              //declaring variable for the new number input. elaborater in line 10.
    // the following code results new number if given input is more than 26 basically it results the number less than 26.
    if(number > 26 && number < 52){
        newNumber = number - 26;
    }
    else if(number > 52 && number < 78){
        newNumber = number - 52;
    }
    else {
        newNumber = number;
    }
    //--------------------------------------//

    // this loop returns the ciphertext.
    for(i=0;i<wordArray.length;i++){
        if(wordArray[i] == '!'||wordArray[i] ==','||wordArray[i] ==' '||wordArray[i] =='.'||wordArray[i] =='?'){ //checks if given word have punctuations.
            ciphertext += wordArray[i]; //if yes it returns as it is.
        }

        //this branch checks if the given word have uppercase letters and if the final value exceeds 26 or not,
        else if(wordArray[i] == 'A'||wordArray[i] =='B'||wordArray[i] =='C'||wordArray[i] =='D'||wordArray[i] =='E'||wordArray[i] =='F'||wordArray[i] =='G'||wordArray[i] =='H'||wordArray[i] =='I'||wordArray[i] =='J'||wordArray[i] =='K'||wordArray[i] =='L'||wordArray[i] =='M'||wordArray[i] =='N'||wordArray[i] =='O'||wordArray[i] =='P'||wordArray[i] =='Q'||wordArray[i] =='R'||wordArray[i] =='S'||wordArray[i] =='T'||wordArray[i] =='U'||wordArray[i] =='V'||wordArray[i] =='W'||wordArray[i] =='X'||wordArray[i] =='Y'||wordArray[i] =='Z'){
            index = upperAlphabet.indexOf(wordArray[i]);
                if((index + newNumber) > 25){       
                    ciphertext += upperAlphabet[(index + (newNumber))-26];
                }
                else if((index + newNumber) < 0){
                ciphertext += upperAlphabet[(index + (newNumber)) + 26];
            }
                else ciphertext += upperAlphabet[index + (newNumber)];
        }
        else{
            index = lowerAlphabet.indexOf(wordArray[i]);
            if((index + newNumber) > 25){
                    ciphertext += lowerAlphabet[(index + (newNumber))-26];
                }
            else if((index + newNumber) < 0){
                ciphertext += lowerAlphabet[(index + (newNumber)) + 26];
            }
            else ciphertext += lowerAlphabet[index + (newNumber)];
        }

}     
    return ciphertext
};

// Do not edit below this line
module.exports = caesar;
