import '../io_utils.dart';

void main(List<String> args) {
  var inp = input("Insira uma frase com 80 a 180 caracteres: \n -> ");
  var qtd = inp.length;
  while(qtd < 80 || qtd > 180){
    inp = input("A frase deve ter de 80 a 180 caracteres:\n -> ");
  }

  var quantity = inp.split(" ").length;
  print("A frase contem $quantity palavras.");

}