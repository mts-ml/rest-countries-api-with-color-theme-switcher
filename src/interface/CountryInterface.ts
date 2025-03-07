export interface CountryInterface {
   name: string
   alpha3Code?: string
   capital?: string   
   region: string
   population: number  
   numericCode?: string
   flags: { svg: string }
}
