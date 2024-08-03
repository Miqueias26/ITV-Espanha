// funcao criada para armazenamento das informações enviadas nos inputs 
document.getElementById('formularioDGT').addEventListener('submit', function(event) {
    
    event.preventDefault();


    // variavel que oculta o display de ajuda quando o input submit é acionado 
    ajuda.style.display = 'none'



    // variavel que armazena o tipo de veiculo 
    var tipodeveiculo = document.getElementById('tipodeveiculo').value.trim(); //pega o tipo de veiculo 
    console.log (tipodeveiculo); // arameza o tipo de veiculo

    var ano = document.getElementById('year').value.trim(); // pega o ano de cadastro
    console.log (ano); // armazena o mes de cadastros
    
   
// VAR QUE ARMAZENA OS ANOS DOS VEICULOS INTERMEDIARIOS QUE ESTAO DENTRO DO PRAZO DE CIRCULACAO
   let veiculosintermediarios = 2019;

   // VAR QUE ARAMAZENA OS ANOS DOS VEICULOS INTERMEDIARIOS PARA VEICULOS ESCOLARES OU PESADOS

   let veiculosespeciais = 2022;

// VAR´s CRIADAS PARA VEICULOS AGRICOLAS  

   let veiculosnovosagricolas = 2016;

   let veiuclosintermediariosagricolas = 2008;




   //   VAR QUE ARMAZENA OS ANOS DOS CARROS COM MAIS DE 10 ANOS DE IDADE E JA NAO PODEM MAIS CIRCULAR
    let veiculosvencidos = 2014;

    let idadeveiculo =  2024 - ano; // VARIAVEL QUE ARMAZENA A IDADE DO VEICULO
    let primeirainspecao = ano * 1 + 4; // VARIAVEL QUE ARMAZENA O ANO RECOMENDADO PARA PRIMEIRA INSPEÇAO
    let segundainspecao = primeirainspecao + 2; // VARIAVEL QUE ARMAZENA O ANO RECOMENDADO PARS SEGUNDA INSPECAO
    let inspecaoanual = ano * 1 + 1; // VARIAVEL QUE ARMAZENA O ANO RECOMENDADO PARA PRIMEIRA INSPEÇAO DE VEICULOS ESCOLARES E PESADOS
    let inspececaoespecial = inspecaoanual + 1; // VARIAVEL QUE ARMAZENA O ANO PARA SEGUNDA  INSPEÇAO DE VEICULOS ESCOLARES E PESADOS  


   resultado.style.textAlign = 'center'
    // ESTRUTURA CONDICIONAL PARA TURISMO NOVOS
    if (tipodeveiculo === 'Turismo' && ano > veiculosintermediarios) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informado ${ano}, su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años y no necesita pasar por inspección en este momento, ya que los vehículos de hasta 4 años de antigüedad, a partir de la fecha de matriculación, están exentos de inspección. <br>

            <br> Con carácter general, consulte las normas de tráfico de la DGT para obtener más detalles. <br>
            <br>Es imprescindible que busque más información sobre su vehículo.`);  
    }

    // ESTRUTURA CONDICIONAL PARA TURISMO INTERMEDIARIOS
    if (tipodeveiculo === 'Turismo' && ano <= veiculosintermediarios && ano > veiculosvencidos) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informe ${ano}, su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años y necesitaría realizar la primera inspección en ${primeirainspecao}. <br>
            <br>La segunda inspección se realiza dos años después de la primera, en este caso como la primiera ha sido en (${primeirainspecao}) la segunda sería en (${segundainspecao})<br>
            <br> Con carácter general, consulte las normas de tráfico de la DGT para obtener más detalles. <br>
             <br> Es imprescindible que busque más información sobre su vehículo!`)
           
    }

    // ESTRUTURA CONDICIONAL PARA TURISMO VENCIDOS

    if (tipodeveiculo === 'Turismo' && ano <= veiculosvencidos){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informe (${ano}), su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años por lo tanto vehículos a partir de los 10 años pueden circular, pero deben cumplir con ITV anual y pueden enfrentar restricciones en ZBE como Madrid y Barcelona debido a sus mayores emisiones. <br>
            <br> Consulta las regulaciones locales para evitar sanciones. Es imprescindible que busque más información sobre su vehículo.`)
    }

    // SALTA MODALIDADE DE VEIUCLO  2TIME//

    if (tipodeveiculo === 'Motocicletas' && ano > veiculosintermediarios) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informado ${ano}, su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años y no necesita pasar por inspección en este momento. <br>
            <br>Los vehículos de hasta 4 años de antigüedad, a partir de la fecha de matriculación, están exentos de inspección.<br>
            <br> Con carácter general, consulte las normas de tráfico de la DGT para obtener más detalles. Es imprescindible que busque más información sobre su vehículo.`);
    }

    // ESTRUTURA CONDICIONAL PARA MOTOCICLETAS INTERMEDIARIOS
    if (tipodeveiculo === 'Motocicletas' && ano <= veiculosintermediarios && ano > veiculosvencidos) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informe ${ano}, su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años y necesitaría realizar la primera inspección en ${primeirainspecao}. <br>
            
            <br>La segunda inspección se realiza dos años después de la primera, en este caso como la primiera ha sido en (${primeirainspecao}) la segunda sería en (${segundainspecao}) <br>
            
            <br>Con carácter general, consulte las normas de tráfico de la DGT para obtener más detalles. Es imprescindible que busque más información sobre su vehículo.`)      
    }

    // ESTRUTURA CONDICIONAL PARA MOTOCICLETAS VENCIDOS

    if (tipodeveiculo === 'Motocicletas' && ano <= veiculosvencidos){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informe (${ano}), su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años por lo tanto vehículos a partir de los 10 años pueden circular, pero deben cumplir con ITV anual y pueden enfrentar restricciones en ZBE como Madrid y Barcelona debido a sus mayores emisiones. <br>
            <br>Consulta las regulaciones locales para evitar sanciones. <br>
            <br> Es imprescindible que busque más información sobre su vehículo.`)
    }
        // SALTA MODALIDADE DE VEIUCLO 3TIME //


    // ESTRUTURA CONDICIONAL PARA ESCOLAR NOVOS
    if (tipodeveiculo === 'Escolar' && ano > veiculosespeciais) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informado ${ano}, su vehículo escolar (${tipodeveiculo}) tiene ${idadeveiculo} años y no necesita pasar por inspección en este momento. <br>

            <br>Los vehículos escolares de hasta 2 años de antigüedad, a partir de la fecha de matriculación, están exentos de inspección. <br>

            <br>Con carácter general, consulte las normas de tráfico de la DGT para obtener más detalles. Es imprescindible que busque más información sobre su vehículo.`);  
 
    }

    // ESTRUTURA CONDICIONAL PARA ESCOLAR INTERMEDIARIOS
    if (tipodeveiculo === 'Escolar' && ano < veiculosespeciais && ano > veiculosvencidos) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informe ${ano}, su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años y necesitaría realizar la primera inspección en ${inspecaoanual}. <br>

            <br>La segunda inspección se realiza un años después de la primera, en este caso como la primiera ha sido en (${inspecaoanual}) la segunda sería en (${inspececaoespecial}). <br>

            <br>Con carácter general consulte las normas de tráfico de la DGT para obtener más detalles. Es imprescindible que busque más información sobre su vehículo.`)
           
    }

    // ESTRUTURA CONDICIONAL PARA ESCOLAR VENCIDOS

    if (tipodeveiculo === 'Escolar' && ano <= veiculosintermediarios){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informado (${ano}), su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años. <br>

            <br>Los vehículos escolares de hasta 5 años pueden circular, pero deben cumplir con la ITV anual, y aquellos con más de 5 años deben pasar la ITV cada 6 meses. Pueden enfrentar restricciones en ZBE como Madrid y Barcelona debido a sus mayores emisiones. <br>

            <br> Consulta las regulaciones locales para evitar sanciones. Es imprescindible que busque más información sobre su vehículo.`)

    }
        // SALTA MODALIDADE DE VEIUCLO 4TIME //

    // ESTRUTURA CONDICIONAL PARA AGRICOLAS NOVOS
    if (tipodeveiculo === 'Agrícolas' && ano > veiculosnovosagricolas) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informado ${ano}, su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años y no necesita pasar por inspección en este momento. <br>
            
            <br> Los vehículos de hasta 4 años de antigüedad, a partir de la fecha de matriculación, están exentos de inspección. <br>

            <br> Con carácter general, consulte las normas de tráfico de la DGT para obtener más detalles. Es imprescindible que busque más información sobre su vehículo.`);  
    }

    // ESTRUTURA CONDICIONAL PARA AGRICOLAS INTERMEDIARIOS
    if (tipodeveiculo === 'Agrícolas' && ano < veiculosnovosagricolas && ano  > veiuclosintermediariosagricolas) {
        let resultado = document.getElementById('resultado');
resultado.innerHTML = (`Según el año informado ${ano}, su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años y necesitaría realizar la primera inspección en ${veiculosespeciais}. <br>
    
   <br> La segunda inspección se realiza dos años después de la primera, en este caso como la primera ha sido en (${primeirainspecao}) la segunda sería en (${segundainspecao}). <br>
   <br> Con carácter general, consulte las normas de tráfico de la DGT para obtener más detalles. Es imprescindible que busque más información sobre su vehículo.`)

           
    }

    // ESTRUTURA CONDICIONAL PARA AGRICOLAS VENCIDOS

    if (tipodeveiculo === 'Agrícolas' && ano <=veiuclosintermediariosagricolas ){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Según el año informe (${ano}), su vehículo (${tipodeveiculo}) tiene ${idadeveiculo} años. <br>

            <br>Por lo tanto vehículos Agrícolas con más de 16 años pueden circular, pero deben cumplir con ITV y pueden enfrentar restricciones en ZBE como Madrid y Barcelona debido a sus mayores emisiones. <br>
            
            <br>Consulta las regulaciones locales para evitar sanciones. Es imprescindible que busque más información sobre su vehículo.`)
    }

    


}
)

// FUNCAO CRIADA PARA AJUDA DE PREENCHIMENTO

document.getElementById('info').addEventListener('click', function () {
    document.getElementById('ajuda')
    ajuda.style.textAlign = 'center'
    ajuda.innerHTML = `Por favor, siga las siguientes instrucciones para completar el formulario correctamente: <br>

<br>Tipos de Vehículos: <br>
- Turismo
- Motocicletas
- Escolar
- Agrícolas <br>

<br>* Ingrese de la misma manera que en el ejemplo anterior. <br>


<br>Año: <br>
- El año debe ser escrito con cuatro dígitos (ej: 2010, 2012)
<br>
Gracias por su cooperación.`
} )


