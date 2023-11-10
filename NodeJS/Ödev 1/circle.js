const arguments = process.argv.slice(2)

function daireAlan (yariCap) {
    let alan = Math.PI * (yariCap * yariCap)
    console.log(`Yarıçapı ${yariCap} olan dairenin alanı: ${alan}`)
}

daireAlan(arguments[0] * 1)
