// Function to perform monoalphabetic encryption
function monoalphabeticEncrypt(plaintext, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const encrypted = [];

    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i].toUpperCase();

        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char);
            encrypted.push(key[index]);
        } else {
            // Keep non-alphabetic characters unchanged
            encrypted.push(char);
        }
    }

    return encrypted.join('');
}

// Example usage
const plaintext = document.getElementById("plaintext1");
const key = document.getElementById("decrypted1");

const plaintextValue = plaintext.value;
const keyValue = key.value;

const newEncrypted1 = monoalphabeticEncrypt(plaintext, key);

document.getElementById("encrypted1").value = newEncrypted1;

const ciphertext = monoalphabeticEncrypt(plaintext, key);
console.log(`Plaintext: ${plaintext}`);
console.log(`Ciphertext: ${ciphertext}`);


function clearButton() {
    clear();
}

function clear(){
    document.getElementById("plaintext1").value="";
    document.getElementById("key1").value="";
    document.getElementById("encrypted1").value="";
}