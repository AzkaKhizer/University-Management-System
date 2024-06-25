#! /usr/bin/env node
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class Student extends Person {
    rollnumber;
    courses = [];
    constructor(name, age, rollnumber) {
        super(name, age);
        this.rollnumber = rollnumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("Azka", 25, 2345);
const std2 = new Student("Ali", 23, 4566);
const ins1 = new Instructor("Arham", 35, 100000);
const ins2 = new Instructor("Asharaib", 36, 150000);
class Course {
    student_id;
    name;
    students = [];
    instructor = [];
    constructor(student_id, name) {
        this.student_id = student_id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(ins) {
        this.instructor.push(ins);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const course1 = new Course(1, "HTML");
const course2 = new Course(2, "CSS");
course1.addStudent(std1);
course2.addStudent(std1);
course1.addStudent(std2);
course1.setInstructor(ins1);
course2.setInstructor(ins2);
console.log(course1.students);
const dep1 = new Department("Computer Science");
dep1.addCourse(course1);
dep1.addCourse(course2);
console.log(dep1.courses[0]);
export {};
