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
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
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
      previousBackground: 'Education',
      className: 'WEBPT4',
      favSubjects: ['HTML', 'CSS', 'Preprocessing', 'JavaScript', 'Design']
  })

  const sebastian = new Student({
      name: 'Sebastian',
      location: 'Mexico',
      age: 25,
      gender: 'male',
      previousBackground: 'Unknown',
      className: 'UXDesign3',
      favSubjects: ['Photoshop', 'Illustrator', 'InDesign']
  })

  const athena = new ProjectManager({
      name: 'Athena',
      location: 'Greece',
      age: 23,
      gender: 'female',
      gradClassName: 'GOD1',
      favInstructor: 'Zeus'
  })

  const squall = new ProjectManager({
      name: 'Squall',
      location: 'Balamb Garden',
      age: 20,
      gender: 'male',
      gradClassName: 'FFVIII',
      favInstructor: 'Quistis'
  })

  //Instructors
  console.log(freida.favLanguage);
  console.log(freida.demo('HTML'));
  console.log(freida.speak());
  console.log(cam.specialty);
  console.log(cam.speak());
  console.log(cam.grade(edgar, 'Front End Design'))

  //Students
  console.log(edgar.speak());
  console.log(sebastian.speak());
  console.log(edgar.listsSubjects());
  console.log(sebastian.listsSubjects());
  console.log(edgar.PRAssignment('Ruby'));
  console.log(sebastian.sprintChallenge('MySQL'))

  //Project Managers
  console.log(athena.gender);
  console.log(squall.age);
  console.log(athena.speak());
  console.log(squall.speak());
  console.log(athena.standUp('WebPT4 Chat'))
  console.log(squall.debugsCode(sebastian, 'Back End Design'))


  