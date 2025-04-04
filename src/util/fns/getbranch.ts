import { OperatorData } from "types/operators/operator";

export default function getBranch(op: OperatorData) {
    op.branch
    return `/img/subclass/sub_${op.branch.toLowerCase().replace(" ","_")}_icon.png`
}