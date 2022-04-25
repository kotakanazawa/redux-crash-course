export const deposit = (amount) => ({
  type: "deposit",
  payload: amount
})

export const withdraw = (amount) => ({
  type: "withdraw",
  payload: amount
})
