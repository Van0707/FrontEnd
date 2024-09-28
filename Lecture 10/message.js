const message = () => {
    const name = "Ivan Ibrani Kaseger"
    const age = 18
    const status = "Single"
    const major = "Informatics"
    const fac = "Computer Science"
    const add = "Kost Wullur"
    const ins = "Programming, DevOps, Cyber Security"

    return `
    <h2 align="center">Personal Information</h2>
    <hr />
    <strong>Name:</strong> ${name} <br>
    <strong>Age:</strong> ${age} <br>
    <strong>Status:</strong> ${status} <br>
    <strong>Major:</strong> ${major} <br>
    <strong>Faculty:</strong> ${fac} <br>
    <strong>Address:</strong> ${add} <br>
    <strong>Interest:</strong> ${ins} <br>
    `
}

export default message