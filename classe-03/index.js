const aberto = new Date();

function taAberto(chegadaDeCliente){
    const momento = new Date();
    momento.setHours(08);
    const abertoNoMomento = momento.getHours();
    momento.setHours(18, 01);
    const horaDeFechar = momento.getHours();
    const minutoDeFechar = momento.getMinutes();

    const hora = chegadaDeCliente.getHours();
    const minutos = chegadaDeCliente.getMinutes(); 
    
    if(hora >= abertoNoMomento && hora <= horaDeFechar){
        if(hora < horaDeFechar){
            return true;
        } else if (minutos < minutoDeFechar){
            return true;
        }

        return false;
    }
    else
        return false;
        
}

console.log(taAberto(new Date(2015,1,1,12)));