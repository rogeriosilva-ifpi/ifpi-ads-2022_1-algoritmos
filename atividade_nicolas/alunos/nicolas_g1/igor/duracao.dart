
import '../io_utils.dart';

void main(List<String> args) {
  var hora1 = input("Insira o horario de inicio (hh:mm): ");
  var hora2 = input("Insira o horario de finalização(hh:mm): ");

  var duracao = diferencaHora(hora1, hora2);

  print("Duração: ${duracao[0]} hora(s) e ${duracao[1]} minuto(s)");
}

List<int> diferencaHora(String hora1, String hora2){

    var horaIn = hora1.split(":").map((e) => int.parse(e)).toList()[0];
    var horaFi = hora2.split(":").map((e) => int.parse(e)).toList()[0];

    var minuIn = hora1.split(":").map((e) => int.parse(e)).toList()[1];
    var minuFi = hora2.split(":").map((e) => int.parse(e)).toList()[1];

    

    var difHora = horaFi - horaIn;
    var difMinute = minuFi - minuIn;
    

    if(difMinute  < 0){
        difMinute+=60;
        difHora--;
    }

    return [difHora, difMinute];
}
