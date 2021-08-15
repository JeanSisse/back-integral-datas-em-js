const aberto = new Date();

function taAberto(chegadaDeCliente){
    const segudaFeira = 1;
    const sextaFeira = 5;

    const sabado = 6;
    const domingo = 0;

    const abertoDiasUteis = 8;
    const horaDeFecharDiasUteis = 18;
    const minutoDeFecharDiasUteis = 01;

    const horaDeFecharFinalDeSemana = 12;
    
    const hora = chegadaDeCliente.getHours();
    const minutos = chegadaDeCliente.getMinutes(); 
    const dia = chegadaDeCliente.getDay();
    
    if(hora >= abertoDiasUteis 
        && hora <= horaDeFecharDiasUteis 
        && dia >= segudaFeira 
        && dia <= sextaFeira)
    {
        if(hora < horaDeFecharDiasUteis){
            return true;
        } else if (minutos < minutoDeFecharDiasUteis){
            return true;
        }

        return false;
    }
    else if(hora >= abertoDiasUteis 
        && hora < horaDeFecharFinalDeSemana
        && (dia === sabado || dia === domingo)){
        return true;
    }

    return false;
        
}

console.log(taAberto(new Date(2021,3,24,9,30)));