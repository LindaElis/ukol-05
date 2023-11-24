
function Salary(wage, hours, days) {
    const celkovaMzda = wage * hours * days
    return celkovaMzda;
}


function taxed(množstvo, DanovePercento) {
 const vyskaDane = (množstvo * DanovePercento) / 100
 const dan = množstvo - vyskaDane
 return dan
}
const MzdaZaHodinu = 300
const HodinZaDen = 7.5
const dniZaMesiac = 21

const celkovaMzda = Salary(MzdaZaHodinu, HodinZaDen, dniZaMesiac)
console.log(`Hruba mzda: ${celkovaMzda} Korun`)

const DanovePercento = 15
const CistaMzda = taxed(celkovaMzda, DanovePercento)
console.log(`Cista mzda po zdaneni: ${CistaMzda} Korun`)

