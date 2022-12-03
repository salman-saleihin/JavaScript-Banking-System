    
    //Login Button - Event Handler

    const loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click" , function(){
        const loginArea = document.getElementById("login-area") ;
        loginArea.style.display = "none" ;

        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block" ;
    })

//Deposit Button - Event Handler

    const depoBtn = document.getElementById("addDeposit") ;
    depoBtn.addEventListener("click" , function(){
        
        // const depoAmount = document.getElementById("depositAmount").value ;
        // const depoNum = parseFloat(depoAmount) ;

        const depoNum = getInputNumber("depositAmount") ;


        // const currentDeposit = document.getElementById("currentDeposit").innerText ;
        // const currentDepositNum = parseFloat(currentDeposit);

        // const totalDeposit = depoNum + currentDepositNum ;

        // document.getElementById("currentDeposit").innerText = totalDeposit ;


        updateSpanText("currentDeposit" , depoNum ) ;

        updateSpanText("currentBalance" , depoNum );


        document.getElementById("depositAmount").value = ""; 

    })


    // Withdraw Button - Event handler

    const withdrawBtn = document.getElementById("addWithdraw");
    withdrawBtn.addEventListener("click" , function(){

        const withdrawNumber = getInputNumber("withdrawAmount") ; 

        updateSpanText("currentWithdraw" , withdrawNumber) ;

        updateSpanText("currentBalance" , -1 * withdrawNumber)

        document.getElementById("withdrawAmount").value = "";
    })



    // Functions 

    function getInputNumber (id){
        const Amount = document.getElementById(id).value ;
        const amountNumber = parseFloat(Amount) ;

        return amountNumber ; 
    }


    function updateSpanText(id , depoNum){

        const current = document.getElementById(id).innerText ;
        const currentNumber= parseFloat(current) ;

        const totalAmount = depoNum + currentNumber ;

        document.getElementById(id).innerText = totalAmount;

    }
