

const DES_ = 'DES';
const ASC_ = 'ASC';
    
orderArrays = (arraytoOrder, typeOrder = 'ASC') =>
{
    let arrayToReturn = [];
    try
    {            
        switch(typeOrder)      
        {            
        case 'ASC':
            arrayToReturn = quickSort(arraytoOrder, ASC_);
            break;

        case 'DES':
            arrayToReturn = quickSort(arraytoOrder, DES_);
            break;
        default:
            arrayToReturn = arraytoOrder;
            console.warn("Cannot order the array because the Type order is not 'ASC' or 'DES'")
            break;
        }
        
    return arrayToReturn;
    }catch(warnMessage)
    {
        console.warn(warnMessage);
    }
}    

quickSort = (arra,type) =>{

    if(arra.length > 1)
    {
        let returnOrder = order(arra,type);        
        
        return quickSort(returnOrder.ArrayLeft,type).concat(returnOrder.Pivote, quickSort(returnOrder.ArrayRigth,type))
    }else{
        return arra;
    }
}

order = (arra,type)=>
{
    const pivote  = arra[0];
    let arrayleft  = [];
    let arrayrigth  = [];
    for(let iterator = 1; iterator < arra.length;  iterator++)
    {
        if(arra[iterator] < pivote)
        {
            if(type === ASC_)
            {
                arrayleft.push(arra[iterator])
            }else{
                arrayrigth.push(arra[iterator])
            }
            
        }else{
            if(type === ASC_)
            {
                arrayrigth.push(arra[iterator])
                
            }else{
                arrayleft.push(arra[iterator])
            }            
        }
    }
        
    pivoteArr = [pivote]
    objectReturn = {
        ArrayLeft : arrayleft,
        ArrayRigth : arrayrigth,
        Pivote : pivoteArr
    }
    return objectReturn;
}

module.exports = {orderArrays, DES_, ASC_};