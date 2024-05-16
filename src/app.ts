
import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

// vemos los parametros de la linea de comandos
// console.log(process.argv)

// vemos los argumentos de la linea de comandos usando esta libreria mas recomendada
// console.log(yarg)
// console.log(yarg.b)


//  funcion anonima auto-invocada
(async () => {
  await main()
})()


// punto de entrada de cualquier aplicacion ya sea en node, java , flutter, en alguno lenguajes ya viene por defecto
async function main() {
  // console.log(yarg.base)
  console.log(yarg)

  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: filePath } = yarg

  ServerApp.run({ base, limit, showTable, fileName, filePath })
}