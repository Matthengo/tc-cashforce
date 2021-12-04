export const formatDate = (date) => {
  const year = date.substring(0, 4); 
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const formatted = `${day}/${month}/${year}`

  return formatted;
}

export const formatMoney = (money, currency) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  })

  return formatter.format(money);
}