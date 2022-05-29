import '../io_utils.dart';
import './prova_utils.dart';

void main(List<String> args) {
  print("Lendo arquivos...");
  var linhas = loadFile("./notas.txt").split("\n");

  List<double> notas = [];
  var aprovados = 0;
  var reprovados = 0;
  var deProvaFinal = 0;
  var reprovadosPorFalta = 0;

  for (var linha in linhas) {
    
    var items = linha.split(";");

    var aluno = items[0];
    var nota1 = double.parse(items[1]);
    var nota2 = double.parse(items[2]);
    var nota3 = double.parse(items[3]);

    notas.add(nota1);
    notas.add(nota2);
    notas.add(nota3);

    var media = calcularMediaPond(nota1, nota2, nota3);

    var falta = int.parse(items[4].split("/")[0]);
    var aulasTotais = int.parse(items[4].split("/")[1]);
    var taxaFalta =  falta / aulasTotais;

    print("Aluno: ${aluno}");
    print("Média: ${media.toStringAsFixed(2)}");
    if(taxaFalta > 0.25){
      print("! Reprovado por Falta");
      reprovadosPorFalta++;
    } else 
    if(media < 4){
      print("! Reprovado");
      reprovados++;
    } else
    if(4 <= media && media < 7){
      print("! Em Prova Final");
      deProvaFinal++;
    } else
    if(media >= 7){
      print("! Aprovado");
      aprovados++;
    }
    print("");
  }
  
    var mediaClasse = calcularMediaArit(notas);

    print("Media da classe: ${mediaClasse.toStringAsFixed(2)}");
    print("Aprovados: $aprovados");
    print("Prova Final: $deProvaFinal");
    print("Reprovados: $reprovados");
    print("Reprovados por falta: $reprovadosPorFalta");

}

num calcularMediaPond(n1, n2, n3) {
  var p1 = 1;
  var p2 = 2;
  var p3 = 3;
  
  
  return ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);
}

double calcularMediaArit(List<double> notas){
  int qtd = 0;
  double soma = 0;
  for (var nota in notas) {
    qtd++;
    soma+=nota;
  }
  return soma / qtd;
}