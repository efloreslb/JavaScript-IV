// CODE here for your Lambda Classes

class Person {
    constructor(personProperties) {
        this.name = personProperties.name
        this.age = personProperties.age
        this.location = personProperties.location
        this.gender = personProperties.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorProperties) {
        super(instructorProperties)
        this.specialty = instructorProperties.specialty
        this.favLanguage = instructorProperties.favLanguage
        this.catchPhrase = instructorProperties.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentProperties) {
        super(studentProperties)
        this.previousBackground = studentProperties.previousBackground
        this.className = studentProperties.className
        this.favSubjects = studentProperties.favSubjects
    }

    listsSubjects() {
        return `${this.favSubjects}`
    }

    PRAssignment(subject) { 
        return `${student.name} has begun sprint challenge on ${subject}`
    }

    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(pmProperties) {
        super(pmProperties)
        this.gradClassName = pmProperties.gradClassName
        this.favInstructor = pmProperties.favInstructor
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const freida = new Instructor({
    name: 'Freida',
    location: 'Bedrock',
    age: 37,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the ladies`
  });

  const cam = new Instructor({
      name: 'Cameron',
      location: 'Somewhere City',
      age: 35,
      gender: 'male',
      favLanguage: 'Python',
      specialty: 'Back-end',
      catchPhrase: `Don't forget the homies`
  });

  const edgar = new Student({
      name: 'Edgar',
      location: 'Los Angeles',
      age: 28,
      gender: 'male',
      
  })

  console.log(freida.favLanguage);
  console.log(freida.demo('HTML'));
  console.log(cam.specialty);
 // console.log(cam.grade())
  