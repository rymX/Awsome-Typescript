export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const Li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        Li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        Li.append(p);
        if (pos === 'start') {
            this.container.prepend(Li);
        }
        else {
            this.container.append(Li);
        }
    }
}
