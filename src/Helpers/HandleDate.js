 export function HandleDate(release) {
    if (release) {
        const dates = `${release[8]}${release[9]}/${release[5]}${release[6]}/${release[0]}${release[1]}${release[2]}${release[3]} `
        return dates
    } else {
        return 'Sem informações sobre lançamento'
    }
}