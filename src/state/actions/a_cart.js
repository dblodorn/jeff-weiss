import { store } from './../store'

const updateQuantityInCart = (lineItemId, quantity) => {
  const state = store.getState(); // state from redux store
  const checkoutId = state.cart.checkout.id
  const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
  state.cart.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
    store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
  });
}

const removeLineItemInCart = (lineItemId) => {
  const state = store.getState(); // state from redux store
  const checkoutId = state.cart.checkout.id
  state.cart.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
    store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
  });
}

const addVariantToCart = (variantId, quantity) => {
  const state = store.getState(); // state from redux store
  const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
  const checkoutId = state.cart.checkout.id
  state.cart.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
    store.dispatch({type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: res}});
  });
}

const handleCartClose = () => {
  store.dispatch({type: 'CLOSE_CART'});
}

const handleCartOpen = () => {
  store.dispatch({type: 'OPEN_CART'});
}

export {
  updateQuantityInCart,
  removeLineItemInCart,
  handleCartClose,
  handleCartOpen,
  addVariantToCart
}
