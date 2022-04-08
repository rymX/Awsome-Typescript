import { HasFormatter } from "../interfaces/HasFormater";


export class ListTemplate {

    constructor(
        private container : HTMLUListElement
    ){}

    render(item : HasFormatter , heading : string , pos : 'start'|'end'){
        const Li = document.createElement('li') ;

        const h4 = document.createElement('h4') ;

        h4.innerText = heading; 
        Li.append(h4) ; 
        const p = document.createElement('p') ;
        p.innerText = item.format();
        Li.append(p);

        if (pos === 'start'){
            this.container.prepend(Li)
        } else {this.container.append(Li)}


    }

}