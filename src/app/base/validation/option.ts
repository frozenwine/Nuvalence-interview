export class Option {
    optionName: string;
    multiSelect : boolean;
    numSelect: number;
    unlimitSelect: boolean;
    optionItems: OptionItem[];
    optionDescription:string;
}

export class OptionItem {
    description: string;
    price: number;

    constructor(description : string, price : number){
        this.description = description;
        this.price = price;
    }
}