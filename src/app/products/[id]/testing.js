const fetchSimilar = {
    id: 'xyz',
    items: [
        {
            id: 1,
            name: "Product 1",
            categories: [{ id: 'a', name: "chair" }, { id: 'b', name: "lamp" }]
        },
        {
            id: 2,
            name: "Product 3",
            categories: [{ id: 'c', name: "sofa" }, { id: 'd', name: "table" }]
        },
        {
            id: 3,
            name: "Product 3",
            categories: [{ name: "chair" }, { id: 'c', name: "sofa" }]
        },
        {
            id: 4,
            name: "Product 4",
            categories: [{ name: "chair" }, { name: "table" }]
        },
        {
            id: 5,
            name: "Product 5",
            categories: [{ name: "goat" }, { name: "book" }]
        }
    ]
};

const specificProd = {
    items: [
        // {
        //     id: 1,
        //     name: "Product 1",
        //     categories: [{ id: 'a', name: "chair" }, { id: 'b', name: "lamp" }]
        // },
        {
            id: 4,
            name: "Product 2",
            categories: [{ name: "chair" }, { name: "table" }]
        }

    ]
}

const currentCategories = specificProd.items.flatMap(prod => {
    return prod.categories.map(cat => cat.name)
})

// console.log(currentCategories);

const checkSim = fetchSimilar.items.filter(itms => itms?.categories?.every(cat => currentCategories.includes(cat.name)))

// console.log('checkSim is', checkSim);



const students = [
    { name: "Alice", age: 20, scores: [85, 90, 78] },
    { name: "Bob", age: 22, scores: [58, 62, 70] },
    { name: "Charlie", age: 23, scores: [95, 88, 92] },
    { name: "David", age: 21, scores: [45, 55, 52] },
    { name: "Eve", age: 20, scores: [65, 70, 75] }
];


// const passed = students.filter(stud => stud.scores.reduce((tot, cur) => (tot + cur), 0) / stud.scores.length >= 60)
const passed = students.filter(stud => {
    return stud.scores.reduce((tot, acc) => tot + acc, 0) / stud.scores.length >= 60

})

// console.log(passed);


// avg of all students combined

const average = students.flatMap(s => s.scores).reduce((tot, curr) => tot + curr, 0) / students.flatMap(s => s.scores).length
// console.log(average);


// const io = students.flatMap(stud => stud.scores)
// const highest = Math.max(...io)

const highest = Math.max(...students.flatMap(stud => stud.scores))
// console.log(highest);

// const highestPerson = students.filter(stud => Math.max(...stud.scores))
// console.log(highestPerson);


// const sort = students.sort(stud => stud.scores.reduce((t, a) => t + a, 0))
const sorted = students.sort((a, b) => {
    const avgA = a.scores.reduce((a, b) => a + b, 0) / a.scores.length
    const avgB = b.scores.reduce((a, b) => a + b, 0) / a.scores.length
    return avgA - avgB
})
// console.log(sorted);

const highestPerson = students.reduce((total, current) => {
    const maxCurrentScore = Math.max(...current.scores)
    const maxPreviousScore = Math.max(...total.scores)

    return maxCurrentScore > maxPreviousScore ? current : total
}, students[0])
// console.log(highestPerson);


// const highestPerson = students.reduce((highest, student) => {
//     const studentMaxScore = Math.max(...student.scores);

//     const highestMaxScore = Math.max(...highest.scores);

//     return studentMaxScore > highestMaxScore ? student : highest;
// }, students[0]); // Initialize the highest with the first student in the array



const products = [
    { name: "Laptop", price: 1200, categories: [{ id: 1, name: "electronics" }, { id: 2, name: "computers" }] },
    { name: "Smartphone", price: 800, categories: [{ id: 1, name: "electronics" }] },
    { name: "Tablet", price: 600, categories: [{ id: 1, name: "electronics" }, { id: 3, name: "gadgets" }] },
    { name: "Headphones", price: 200, categories: [{ id: 3, name: "gadgets" }] },
    { name: "Chair", price: 150, categories: [{ id: 4, name: "furniture" }] }
];


const filterElectronics = products.filter(prod => prod.categories.some(pro => pro.name === 'electronics'))
console.log(filterElectronics);

const averagePrice = [...filterElectronics].reduce((a, b) => a + b.price, 0) / filterElectronics.length
console.log(averagePrice);



const highestPrice = products.reduce((total, current) => {
    // const maxTotalPrice = total.price
    // const maxCurrentPrice = current.price

    return current.total > total.total ? current : total
}, products[0])


console.log(highestPrice);