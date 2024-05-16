// https://www.npmjs.com/package/yargs

import yargs from "yargs";
import { hideBin } from "yargs/helpers";


export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Limite de la tabla de multiplicar"
  }
  )
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola"
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "Nombre del archivo"
  }
  ).option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "Directorio de destino"
  }
  )

  .check((argv, options) => {
    // console.log({ argv, options })

    if (argv.b < 1) {
      throw new Error("La base debe ser mayor a 0");
    }


    return true
  })

  .parseSync();