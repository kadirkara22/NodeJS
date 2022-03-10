const circleArea = (r) => {
    const alan = Math.PI * r * r;
    console.log("circle Area : ", alan)
}

const circleCircumference = (r) => {
    const cevre = 2 * Math.PI * r;
    console.log("Circle Circumference : ", cevre)
}

module.exports = { circleArea, circleCircumference }