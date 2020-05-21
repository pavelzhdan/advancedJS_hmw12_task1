import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    price(): number{
        let totalPrice = 0;
        [...this._items].forEach(element => totalPrice += element.price)
        return totalPrice
    }

    discontPrice(discount: number): number{
        return Math.round(this.price() * (1 - (discount/100)))
    }

    removeFromCart(idToDelete: number): void {
        const indexToDelete = [...this._items].findIndex(element => element.id === idToDelete);
        this._items.splice(indexToDelete, 1)
      }
}