import '../io_utils.dart';
import 'dart:io';


num getNumber(String output){
  var number = int.tryParse(input(output))?? double.tryParse(input(output));

  while(number == null){
    print("Insira um numero");
    number = getNumber(output);
  }
  return number;
}

num getNumberOnRange(String output, int min, int max){
  var number = getNumber(output);

  while(!(min <= number && number <= max)){
    print("Insira um numero dentro do intervalo [$min-$max]");
    number = getNumberOnRange(output, min, max);
  }
  return number;
}

String loadFile(String file){
  return File(file).readAsStringSync();
}