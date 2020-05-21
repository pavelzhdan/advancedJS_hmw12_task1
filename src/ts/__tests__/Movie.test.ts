import Buyable from '../domain/Buyable';
import Cart from '../service/Cart'
import Movie from '../domain/Movie'

test("movie added",() => {
    const cart = new Cart();

    const avengers = new Movie(11, "avengers", 2012, 100, 124, "assemble", "USA", "action")
    cart.add(avengers);

    expect(cart.items).toEqual([avengers]);

})