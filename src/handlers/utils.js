function generator(count, generatorFuntion) {
    count = parseInt(count)
    const data = new Array(count || 1)
        .fill()
        .map(e => generatorFuntion())

    return data
}

module.exports = { generator }