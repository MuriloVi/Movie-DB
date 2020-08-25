export function HandleDescription(des) {
    if (des.length > 500) {
        return `${des.slice(0, 500)}....`
    } else if (des.length < 500 && des.length > 0) {
        return des
    } else if (des.length === 0) {
        return 'Ainda não há uma sinopse para este filme'
    }
}