import Cart from '../service/Cart';
import Movie from '../domain/Movie'

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("price calculated",() => {
  const cart = new Cart();

  const avengers = new Movie(11, "avengers", 2012, 100, 124, "assemble", "USA", "action")
  const lalaland = new Movie(12, "lalalend", 2012, 5000, 124, "assemble", "USA", "action")
  const lord = new Movie(13, "lalal", 2012, 502, 124, "assemble", "USA", "action")
  cart.add(lalaland);
  cart.add(avengers);
  cart.add(lord);

  expect(cart.price()).toBe(5602);

})

test("price calculated with discount",() => {
  const cart = new Cart();

  const avengers = new Movie(11, "avengers", 2012, 100, 124, "assemble", "USA", "action")
  const lalaland = new Movie(12, "lalalend", 2012, 5000, 124, "assemble", "USA", "action")
  const lord = new Movie(13, "lalalen", 2012, 502, 124, "assemble", "USA", "action")
  cart.add(lalaland);
  cart.add(avengers);
  cart.add(lord);

  expect(cart.price()).toBe(5602);

})

test("movie deleted from cart",() => {
  const cart = new Cart();

  const avengers = new Movie(11, "avengers", 2012, 100, 124, "assemble", "USA", "action")
  const lalaland = new Movie(12, "lalalend", 2012, 5000, 124, "assemble", "USA", "action")
  const lord = new Movie(13, "lalalen", 2012, 502, 124, "assemble", "USA", "action")
  cart.add(lalaland);
  cart.add(avengers);
  cart.add(lord);
  cart.removeFromCart(12);
  expect(cart.items).toEqual([avengers, lord]);

})