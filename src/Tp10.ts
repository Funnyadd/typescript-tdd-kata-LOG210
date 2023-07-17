export class Course {}
export class Student {}
export class Teacher {}

exports.createClass = () => {
    const environmentClassName = process.env.CLASSNAME

    switch(environmentClassName) {
        case "teacher": 
            return new Teacher()
        case "student":
            return new Student()
        case "course":
            return new Course()
        default:
            return null
    }
}
