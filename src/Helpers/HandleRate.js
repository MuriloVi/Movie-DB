export function HandleRate(rate) {
    if (rate) {
      const score = `${rate*10}%`
      return score
    } else {
        return '0'
    }
}