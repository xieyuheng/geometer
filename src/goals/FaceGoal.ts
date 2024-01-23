import { type GoalQueue } from "../goal-queue/index.js"
import { type Goal } from "../goal/index.js"
import { Subst } from "../subst/index.js"

export class FaceGoal implements Goal {
  evaluate(subst: Subst): Array<GoalQueue> {
    throw new Error("TODO")
  }
}
