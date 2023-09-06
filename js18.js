class Calculate{

    // constructor of class
    constructor(num1,num2)
    {
        this.num1 = this.convertToNumber(num1)
        this.num2 = this.convertToNumber(num2)
    }

    // plus two number
    addTwoNumber()
    {
        console.log(this.num1+this.num2)
    }

    // minus two number
    minusTwoNumber()
    {
        console.log(this.num1-this.num2)
    }

    // tagsim
    tagTwoNumber(){
        console.log(this.num1/this.num2)
    }

    
    




    // check Numbers and convert to number
    convertToNumber(number)
    {
        if(number == '' || number == null)
            return 0;
        
        if(typeof number == 'number')
            return number
        number = parseInt(number)
        if(typeof number == 'number' && 
           number != NaN )
        {
            return number
        }
        return 0
    }
    
}

var calculate = new Calculate(20,'0')
calculate.addTwoNumber()

calculate.minusTwoNumber()

calculate.tagTwoNumber()