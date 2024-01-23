import { Goal } from "../goal"
import { GoalQueue } from "../goal-queue"
import { Subst } from "../subst"

export class FaceGoal implements Goal {
  evaluate(subst: Subst): Array<GoalQueue> {
    throw new Error("TODO")
  }
}
