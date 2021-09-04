import { Goal } from "../goal"
import { Subst } from "../subst"
import { GoalQueue } from "../goal-queue"

export class FaceGoal implements Goal {
  evaluate(subst: Subst): Array<GoalQueue> {
    throw new Error("TODO")
  }
}
