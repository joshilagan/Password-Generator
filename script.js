const genPass = document.querySelector('.gen-pass')
const copyPass = document.querySelector('.copy-pass')
const passw = document.querySelector('.password')
const eight = document.querySelector('.eight')
const ten = document.querySelector('.ten')
const fourteen = document.querySelector('.fourteen')

//click event listener for Generate Password button div
function genpass () {
    //this is where we take in random alphanumeric character set
    const aa = Math.random().toString(36).slice(3)
    const ab = Math.random().toString(36).slice(3)
    const ac = Math.random().toString(36).slice(3)
    const ad = Math.random().toString(36).slice(3)
    
    //single random alphanumeric character options
    const aa1 = aa.charAt(3);
    const ab1 = ab.charAt(5);
    const ac1 = ac.charAt(6);
    const ad1 = ad.charAt(7);
    
    //double random alphanumeric character options
    const aa2 = aa.charAt(2) + aa.charAt(3);
    const ab2 = ab.charAt(5) + aa.charAt(7);
    const ac2 = ac.charAt(8) + ac.charAt(6);
    const ad2 = ad.charAt(4) + ad.charAt(8);

    //special characters (random) - this is where we take special character sets
    const sc = "!@E!H#$J%^js&*ti@$ao%^y*";
    const sd = "&$*#5*!@*#^%3!*^#%&#@*";
    const se = "**&^%$#@!";
    const sh = "&^%$#@!$^^#@&*@!*!%&#^";
    //randomized single special character options
    const sc1 = sc.charAt(Math.floor(Math.random() * sc.length ));
    const sd1 = sd.charAt(Math.floor(Math.random() * sd.length ));
    const se1 = se.charAt(Math.floor(Math.random() * se.length ));
    const sh1 = sh.charAt(Math.floor(Math.random() * sh.length ));
    const sd2 = sd.charAt(Math.floor(Math.random() * sd.length ));
    const sh2 = sh.charAt(Math.floor(Math.random() * sh.length ));

    //conditional statements for password length option
    if(eight.checked){
        //Set eight character password with special characters and display in input
        const bb = sc1 + aa2 + sd1 + ab2 + se1 + aa1;
        passw.value = bb;

        //event listener for copying the password to clipboard
        function copy() {
            console.log('copy');
            // passw.value = fourth;
            //select the input value text
            passw.select();
            // Copy the text inside the text field
            navigator.clipboard.writeText(passw.value);
            //return the original format of the 14 character password 
            passw.value = '';           
            passw.value = bb;

            //set color blink for copy password
            copyPass.style.backgroundColor = 'rgb(6 182 212)'
            copyPass.textContent = 'Password Copied!'
            copyPass.style.fontWeight = '700'
            copyPass.style.color = 'rgb(30 64 175)'
                const brown = setTimeout((origs), 500)              
        }        
        copyPass.addEventListener('click', copy)

    }else if(ten.checked){
        //Set eight character password with special characters and display in input
        const cc = ` ${sc1}${aa1}${sh1}${ac2}-${se1}${ad2}${sd2}${sh2}`;
        passw.value = cc;
        //Use slice to remove the dashes
        const tenth = cc.slice(0,5) + cc.slice(6, 11)

        //event listener for copying the password to clipboard
        function copy() {
            console.log('copy');
            passw.value = tenth;
            //select the input value text
            passw.select();
            // Copy the text inside the text field
            navigator.clipboard.writeText(passw.value);
            //return the original format of the 14 character password            
            passw.value = cc;

            //set color blink for copy password
            copyPass.style.backgroundColor = 'rgb(6 182 212)'
            copyPass.textContent = 'Password Copied!'
            copyPass.style.fontWeight = '700'
            copyPass.style.color = 'rgb(30 64 175)'
                const brown = setTimeout((origs), 500)              
        }        
        copyPass.addEventListener('click', copy)


    }else if(fourteen.checked){
        //Set eight character password with special characters and display in input
        const dd = `${sc1}${ab1}${sh1}${ac2}-${se1}${ad2}${sd2}${sh2}-${se1}${aa1}${ac1}${ad1}`;
        passw.value = dd;
        //Use slice to remove the dashes
        const fourth = dd.slice(0,5) + dd.slice(6, 11) + dd.slice(12, 16);
        
        //event listener for copying the password to clipboard
        function copy() {
            console.log('copy');
            passw.value = fourth;
            //select the input value text
            passw.select();
            // Copy the text inside the text field
            navigator.clipboard.writeText(passw.value);
            //return the original format of the 14 character password            
            passw.value = dd;

            //set color blink for copy password
            copyPass.style.backgroundColor = 'rgb(6 182 212)'
            copyPass.textContent = 'Password Copied!'
            copyPass.style.fontWeight = '700'
            copyPass.style.color = 'rgb(30 64 175)'
                const brown = setTimeout((origs), 500)              
        }        
        copyPass.addEventListener('click', copy)
    }
    //set color blink for generate password button div
    genPass.style.backgroundColor = 'rgb(6 182 212)'
    genPass.style.fontWeight = '700'
    genPass.style.color = 'rgb(30 64 175)'
    const blue = setTimeout((origsto), 200);
    function origsto (){
        genPass.style.backgroundColor = 'rgb(17 24 39)'
        genPass.style.fontWeight = '400'
        genPass.style.color = 'rgb(214 211 209)'
    }
}
genPass.addEventListener('click', genpass)

function origs (){
    copyPass.style.backgroundColor = 'rgb(17 24 39)'
    copyPass.textContent = 'Copy Password'
    copyPass.style.fontWeight = '400'
    copyPass.style.color = 'rgb(214 211 209)'
}