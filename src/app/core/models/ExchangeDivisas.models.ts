export class casaApi{
    constructor(
      public compra: string = "",
      public venta: string = "",
      public nombre: string = "",
      public agencia: string = ""
    ){}
  }
  
  
  export class ExchangeResponse{
    constructor(
      public casa: casaApi
    ){
    }
  }