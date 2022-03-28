export const TOGGLE_CART_MODAL = "TOGGLE_MODAL";

export const toggleCartModal = () => {
  // document.querySelector("body").style.overflow === "hidden" ? (
  //   document.querySelector("body").style.overflow = "auto"
  // ) : (
  //   document.querySelector("body").style.overflow = "hidden"
  // );
  return ({
    type: TOGGLE_CART_MODAL
  });
};