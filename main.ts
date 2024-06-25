#! /usr/bin/env node

import inquirer from "inquirer";

class Person {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
};


class Student extends Person{
    rollnumber:number;
    courses:Course[] = []

    constructor(name:string, age:number,rollnumber:number){
        super(name,age,)

        this.rollnumber = rollnumber;

    }
    registerForCourses(course:any){
        this.courses.push(course)
    }
}


class Instructor extends Person{
    salary:number;
    courses:Course[]= [];

    constructor(name:string, age:number,salary:number,){
        super(name,age)
        this.salary= salary;
    }
    assignCourse(course:Course){
        this.courses.push(course)
    }
}

const std1 = new Student("Azka", 25 , 2345)
const std2 = new Student("Ali", 23 , 4566)

const ins1 = new Instructor("Arham" , 35, 100000)
const ins2 = new Instructor("Asharaib", 36, 150000)


class Course {
    student_id:number;
    name:string;
    students:Student[] = [];
    instructor:Instructor[]=[];

    constructor(student_id:number, name:string, ){
        this.student_id= student_id;
        this.name= name;
    }
    addStudent(std:Student){
         this.students.push(std)
    
    }
    setInstructor(ins:Instructor){
        this.instructor.push(ins)
    }
}

class Department {
    name:string;
    courses:Course[]= [];
    constructor(name:string){
        this.name = name
    }

    addCourse(course:Course){
        this.courses.push(course)
    }
}



const course1 = new Course(1 , "HTML")
const course2 = new Course(2, "CSS")

course1.addStudent(std1)
course2.addStudent(std1)
course1.addStudent(std2)

course1.setInstructor(ins1)
course2.setInstructor(ins2)

console.log(course1.students)


const dep1 = new Department("Computer Science");
dep1.addCourse(course1)
dep1.addCourse(course2);

console.log(dep1.courses[0])