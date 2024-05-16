// crearemos una clase para mantener estructurada la logica de mi servidor

import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"


interface RunOptions {
  base: number
  limit: number
  showTable: boolean
  fileName?: string
  filePath?: string
}




export class ServerApp {



  static run(options: RunOptions) {

    console.log("Server running...")
    console.log({ options })


    const table = new CreateTable().execute({
      base: options.base,
      limit: options.limit
    })

    const wasCreated = new SaveFile().execute({
      fileContent: table,
      filePath: options.filePath,
      fileName: options.fileName
    })


    if (options.showTable) {
      console.log(table)
    }

    (wasCreated) ? console.log("File created") : console.log("File not created")



  }
}