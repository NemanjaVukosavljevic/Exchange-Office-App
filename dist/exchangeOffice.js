const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');

const firstImage = document.getElementById('firstImage');
const secondImage = document.getElementById('secondImage');

const resultText = document.getElementById('resultText');
const resultButton = document.getElementById('resultButton');

const inputBox = document.getElementById("inputBox");


let finalResult=0, userInput;



    document.getElementById("resultButton").onclick = function(){
        if(!document.getElementById("inputBox").value){
            alert('Please insert a number')
        } else {
            userInput = document.getElementById("inputBox").value;
            userInput = Number(userInput);

            // OVDE POCINJE KONVERZIJA U DINARE
        
            if (currencySecond.value == 'RSD'){
                if (currencyFirst.value == 'EUR'){
                    finalResult = userInput * 117;
                    finalResult = finalResult.toLocaleString("de-DE");
                    document.getElementById("resultText").innerHTML = `${inputBox.value} ${currencyFirst.value} = ${finalResult} RSD`
                }
                else if (currencyFirst.value == 'USD'){
                    finalResult = userInput * 108;
                    finalResult = finalResult.toLocaleString("de-DE");
                    document.getElementById("resultText").innerHTML = `${inputBox.value} ${currencyFirst.value} = ${finalResult} RSD`
                }
                else if (currencyFirst.value == 'RSD'){
                    alert(`YOU CAN'T EXCHANGE THE SAME CURRENCY`)
                }

            }

            // OVDE POCINJE KONVERZIJA U EURE

            else if (currencySecond.value == 'EUR'){
                if(currencyFirst.value == 'RSD'){
                    finalResult = userInput / 117;
                    finalResult = finalResult.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
                    document.getElementById("resultText").innerHTML = `${inputBox.value} ${currencyFirst.value} = ${finalResult}`
                }
                else if(currencyFirst.value == 'USD'){
                    finalResult = userInput * 0.93;
                    finalResult = finalResult.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
                    document.getElementById("resultText").innerHTML = `${inputBox.value} ${currencyFirst.value} = ${finalResult}`
                }
                else if(currencyFirst.value == 'EUR'){
                    alert(`YOU CAN'T EXCHANGE THE SAME CURRENCY`)
                }
            }

            // OVDE POCINJE KONVERZIJA U DOLARE
        

            else if (currencySecond.value == 'USD'){
                if(currencyFirst.value == 'RSD'){
                    finalResult = userInput / 109.06;
                    finalResult = finalResult.toLocaleString("de-DE", {style: "currency", currency: "USD"});
                    document.getElementById("resultText").innerHTML = `${inputBox.value} ${currencyFirst.value} = ${finalResult}`
                }
                else if(currencyFirst.value == 'EUR'){
                    finalResult = userInput * 1.08;
                    finalResult = finalResult.toLocaleString("de-DE", {style: "currency", currency: "USD"});
                    document.getElementById("resultText").innerHTML = `${inputBox.value} ${currencyFirst.value} = ${finalResult}`
                }
                else if(currencyFirst.value == 'USD'){
                    alert(`YOU CAN'T EXCHANGE THE SAME CURRENCY`)
                }
            }
            }
    
    }


    const imageChange = () => {
        firstImage.src = `./images/${currencyFirst.value}.png`;
        secondImage.src = `./images/${currencySecond.value}.png`;
    };
