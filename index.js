

const DES_ = 'DES';
const ASC_ = 'ASC';


class Order{
    
    static arrays(arraytoOrder, typeOrder = 'ASC')
    {
        let arrayToReturn = [];
        try
        {            
          switch(typeOrder)      
          {            
            case 'ASC':
                arrayToReturn = quickSort(arraytoOrder);
                break;

            case 'DES':
                arrayToReturn = quickSort(arraytoOrder);
                break;
            default:
                arrayToReturn = arraytoOrder;
                break;
          }
          
        return arrayToReturn;
        }catch(warnMessage)
        {
            console.warn(warnMessage);
        }
    }    
}



quickSort = (arra) =>{

    if(arra.length > 1)
    {
        let returnOrder = orderSort(arra);        
        
        return quickSort(returnOrder.ArrayLeft).concat(returnOrder.Pivote, quickSort(returnOrder.ArrayRigth))
    }else{
        return arra;
    }
}



orderSort = (arra)=>
{
    const pivote  = arra[0];
    let arrayleft  = [];
    let arrayrigth  = [];
    for(let iterator = 1; iterator < arra.length;  iterator++)
    {
        if(arra[iterator] < pivote)
        {
            arrayleft.push(arra[iterator])
        }else{
            arrayrigth.push(arra[iterator])
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




console.log(Order.arrays([1,4,2,8,5], ASC_))

module.exports = {Order, DES_, ASC_};