type TeacherModel = {
  id: number
  name: string
  email: string
  document: string
  role: string
}

type StudentModel = {
  id: number
  name: string
  email: string
  document: string
}

type TeacherStudentModel = {
  teacher: TeacherModel
  studentId: StudentModel
}

type CategoryExerciceModel = {
  id: number
  name: string
  subCategory?: CategoryExerciceModel
}

type ExerciceTechniqueModel = {
  id: number
  name: string
}

type ExerciceModel = {
  id: number
  name: string
  category: CategoryExerciceModel
}

type TrainingSheetModel = {
  id: number
  name: string
  teacher: TeacherModel
  student: StudentModel
}

type TrainingSheetExerciceModel = {
  id: number
  trainingSheetId: number
  exerciceId: number
  repetitions: number
  series: number
  techniques: ExerciceTechniqueModel[]
  restTime: number
  description: string
  observation: string
}

type StudentStatisticsModel = {
  id: number
  student: StudentModel
  exercice: ExerciceModel
  technique: ExerciceTechniqueModel
  repetitions: number
  series: number
  weight: number
  createdAt: Date
  observation: string
}
