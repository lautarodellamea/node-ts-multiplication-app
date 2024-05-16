import fs from "fs";

// fer dice que le podriamos poner el nombre option en vez de SaveFileOptions total ya se sobrentiende que son de este casod e uso

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean
}


export interface SaveFileOptions {
  fileContent: string
  filePath?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor(
    /* ID */
    /* repository: StorageRepository - seria donde voy a grabar estos datos, podria ser en un servicio o en una base de datos */

  ) { }



  execute({ fileContent, filePath = "outputs", fileName = "table" }: SaveFileOptions): boolean {

    try {
      fs.mkdirSync(filePath, { recursive: true });
      fs.writeFileSync(`${filePath}/${fileName}.txt`, fileContent)
      console.log("File created!");
      return true
    } catch (error) {
      console.log(error)
      return false
    }

  }
}