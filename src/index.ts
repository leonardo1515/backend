import express from "express";

const app = express();

app.get("/cauculadora", (req, res) => {
  let operacao = req.query.operacao;
  let valorA = Number(req.query.valorA);
  let valorB = Number(req.query.valorB);
  if (operacao === "somar") {
    res.send({ Resultado: valorA + valorB });
  }
  if (operacao === "diminuir") {
    res.send({ Resultado: valorA - valorB });
  }
  if (operacao === "multiplicar") {
    res.send({ Resultado: valorA * valorB });
  }
});
let contador: number = 0;
app.get("/contador", (req, res) => {
  contador++;
  if (contador === 10) {
    res.send({ Resporta: "Chegou a 10" });
    contador = 0;
  } else {
    res.send({ Resporta: contador });
  }
});

app.get("/numeral", (req, res) => {
  const valor: number = Number(req.query.valor);
  let operacao = "Anterior" || "Proximo";
  operacao = String(req.query.operacao);

  if (operacao === "Anterior") {
    let result = valor - 1;
    return res.send({
      operacao: operacao,
      valor: valor,
      resultado: result,
    });
  } else if (operacao === "Proximo") {
    let result = valor + 1;
    return res.send({
      operacao: operacao,
      valor: valor,
      resultado: result,
    });
  }
});
app.get("/invertstring", (req, res) => {
  let nome = String(req.query.nome);

  function reverse(nome: string) {
    return nome.split("").reverse().join("");
  }

  var result = reverse(nome);
  res.send({ Resultado: result });
});
let result: string[] = [];
app.get("/removervogais", (req, res) => {
  let valor = String(req.query.valor);

  function removeVogaisString(valor: string) {
    return valor.replace(/[a|e|i|o|u|à|ú]/gi, "");
  }

  var resultado = removeVogaisString(valor);
  result.push(resultado);
  res.send({ result });
});

app.listen(4444, () => {
  console.log("A API está rodando...");
});
