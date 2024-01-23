import { GoalQueue } from "../goal-queue/index.js"
import { Subst } from "../subst/index.js"

export abstract class Goal {
  abstract evaluate(subst: Subst): Array<GoalQueue>
}
