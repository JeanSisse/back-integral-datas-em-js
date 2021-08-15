const aberto = new Date();

function taAberto(chegadaDeCliente){
    const segudaFeira = 1;
    const sextaFeira = 5;

    const momento = new Date();
    momento.setHours(08);
    const abertoNoMomento = momento.getHours();
    momento.setHours(18, 01);
    const horaDeFechar = momento.getHours();
    const minutoDeFechar = momento.getMinutes();

    // console.log(momento.getDay());
    
    const hora = chegadaDeCliente.getHours();
    const minutos = chegadaDeCliente.getMinutes(); 
    const dia = chegadaDeCliente.getDay();
    console.log(dia);
    if(hora >= abertoNoMomento 
        && hora <= horaDeFechar 
        && dia >= segudaFeira 
        && dia <= sextaFeira)
    {
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

console.log(taAberto(new Date(2021,3,26,07,59)));