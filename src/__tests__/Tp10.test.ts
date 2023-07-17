import { Course, Student, Teacher } from "../Tp10";
const main = require("../Tp10")

describe("Tests for TP10", () => {
    it("Should create a 'student' class from environment variables", () => {
        process.env.CLASSNAME = "student"
        const coolClass = main.createClass()
        expect(coolClass).toBeInstanceOf(Student)
    })

    it("Should create a 'teacher' class from environment variables", () => {
        process.env.CLASSNAME = "teacher"
        const coolClass = main.createClass()
        expect(coolClass).toBeInstanceOf(Teacher)
    })

    it("Should create a 'photo' class from environment variables", () => {
        process.env.CLASSNAME = "course"
        const coolClass = main.createClass()
        expect(coolClass).toBeInstanceOf(Course)
    })

    it("Should return null when the className in the environment variables doesn't exist", () => {
        process.env.CLASSNAME = "blabla"
        const coolClass = main.createClass()
        expect(coolClass).toBeNull();
    })
})