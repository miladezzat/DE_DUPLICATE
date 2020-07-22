const assert = require('chai').assert
const expect = require('chai').expect

const DE_Duplicated = require('../index')



// let uniqueSimpleArray = DE_Duplicated.simpleArray(simpleArray);

// console.log(uniqueSimpleArray);


describe('simpleArray method', function() {
    describe('#Array of numbers element', function() {
        let simpleArray = [2, 5, 8, 2, 2, 8, 5, 2, 3];
        let result = [2, 5, 8, 3];
        it(`sent array[ ${[...simpleArray]} ]should result equal [ ${result} ]`, () => {
            expect(DE_Duplicated.simpleArray(simpleArray)).to.be.eql(result)
        })
    });
    describe('#Array of String elements', function() {
        let simpleArray = ['john', 'milad', 'Milad', 'john', 'John'];
        let result = ['john', 'milad'];
        it(`sent array[ ${[...simpleArray]} ]should result equal [ ${result} ]`, () => {
            expect(DE_Duplicated.simpleArray(simpleArray)).to.be.eql(result)
        })
    });
    describe('#Array of mix of string and numbers elements', function() {
        let simpleArray = [1, 2, 1, 2, 5, 8, 8, 5, 'john', 'milad', 'Milad', 'john', 'John'];
        let result = [1, 2, 5, 8, 'john', 'milad'];
        it(`sent array[ ${[...simpleArray]} ]should result equal [ ${result} ]`, () => {
            expect(DE_Duplicated.simpleArray(simpleArray)).to.be.eql(result)
        })
    });

});

describe('Complex method', function() {
    describe('#Array of Objects element key for deleting duplicated(id)', function() {
        let compexArray = [
            { id: 1, name: "Milad", age: 24 },
            { id: 2, name: "Milad", age: 24 },
            { id: 1, name: "Milad", age: 24 },
            { id: 3, name: "Milad", age: 24 },
            { id: 1, name: "Milad", age: 24 },
            { id: 2, name: "Milad", age: 24 },
        ];
        let result = [
            { id: 1, name: 'Milad', age: 24 },
            { id: 2, name: 'Milad', age: 24 },
            { id: 3, name: 'Milad', age: 24 }
        ];
        it(`sent complex array of objects and key (id) should result equal unique array`, () => {
            expect(DE_Duplicated.complexArray(compexArray, 'id')).to.be.eql(result)
        })

    });
    describe('#Array of Objects element key for deleting duplicated(name)', function() {
        let compexArray = [
            { id: 1, name: "Milad", age: 24 },
            { id: 2, name: "John", age: 24 },
            { id: 1, name: "Milad", age: 24 },
            { id: 3, name: "John", age: 24 },
            { id: 1, name: "Milad", age: 24 },
            { id: 2, name: "Milad", age: 24 },
        ]
        let result = [{ id: 1, name: 'Milad', age: 24 }, { id: 2, name: 'John', age: 24 }];
        it(`sent complex array of objects and key (name) should result equal unique array`, () => {
            expect(DE_Duplicated.complexArray(compexArray, 'name')).to.be.eql(result)
        })

    });

    describe('#Array of Objects element key for deleting duplicated(name) case sensetive', function() {
        let compexArray = [
            { id: 1, name: "Milad", age: 24 },
            { id: 2, name: "milad", age: 24 },
            { id: 1, name: "Milad", age: 24 },
            { id: 3, name: "milad", age: 24 },
            { id: 1, name: "Milad", age: 24 },
            { id: 2, name: "Milad", age: 24 },
        ]
        let result = [
            { id: 1, name: 'Milad', age: 24 },
            { id: 2, name: 'milad', age: 24 }
        ];
        it(`sent complex array of objects and key (name) should result equal unique array`, () => {
            expect(DE_Duplicated.complexArray(compexArray, 'name')).to.be.eql(result)
        })

    });


});