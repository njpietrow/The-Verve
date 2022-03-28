export const titleCase = (string) => {
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }

  return words.join(" ")
};

export const amountFormat = (num) => {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export const averageRating = (reviewsArray) => {
  let total = 0;
  if (reviewsArray.length === 0) return "No Reviews Yet"
  reviewsArray.forEach(review => {
    total += review.stars;
  })    
  return total/reviewsArray.length;
}
