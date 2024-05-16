

interface CreateTableUseCase {

  execute: (options: CreateTableOptions) => string


}

interface CreateTableOptions {
  base: number
  limit?: number
}

export class CreateTable implements CreateTableUseCase {
  constructor(
    /* 
      DI: Inyeccion de dependencias - Dependency Injection
    */
  ) { }


  // aca es donde terminamos ejecutando el caso de uso
  execute({ base, limit = 10 }: CreateTableOptions) {

    let outputMessage = "";

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    return outputMessage
  }


}