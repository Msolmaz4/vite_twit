

export const numberForms = value =>{

    let config = {}
    if(value > 999 )
    config = {
        notation:'compact',
        maximumFractionDigits:1
       }
   return Intl.NumberFormat('tr',config).format(value)
}

