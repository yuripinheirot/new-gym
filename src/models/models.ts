type UserModel = {
  id: number
  name: string
  email: string
  document: string
}

type TeacherStudentModel = {
  teacher: UserModel
  student: UserModel
}

type ExerciseCategoryModel = {
  id: number
  name: string
  subCategory?: ExerciseCategoryModel
}

type ExerciseTechniqueModel = {
  id: number
  name: string
}

type ExerciseModel = {
  id: number
  name: string
  category: ExerciseCategoryModel
}

type WorkoutSheetModel = {
  id: number
  name: string
  user: UserModel
  teacher?: UserModel
}

type WorkoutSheetExerciseModel = {
  id: number
  repetitions: number
  series: number
  restTime: number
  description: string
  observation: string
  exercise: ExerciseModel
  techniques: ExerciseTechniqueModel[]
  workoutSheet: WorkoutSheetModel
}

type StudentStatisticsModel = {
  id: number
  repetitions: number
  series: number
  weight: number
  createdAt: Date
  observation: string
  student: UserModel
  exercise: ExerciseModel
  technique: ExerciseTechniqueModel
}
