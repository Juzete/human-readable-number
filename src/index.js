module.exports = function toReadable (number) {
let toNine = ["zero", "one", "two", "three", "four" ,
   "five", "six", "seven", "eight", "nine"]

let tenToNineteen = ["ten","eleven","twelve","thirteen",
    "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]

let tenners = ["twenty","thirty","forty","fifty",
"sixty","seventy","eighty","ninety"]

if (number < 10) return toNine[number]
let splitedNum = number.toString().split("")


if (number < 20) return tenToNineteen[splitedNum[1]]

else if (number < 100 && splitedNum[1] == 0) return  tenners[splitedNum[0] - 2]

else if (number < 100 && splitedNum[1] !== 0) return tenners[splitedNum[0] - 2] + " " + toNine[splitedNum[1]]

else if (number < 1000 && splitedNum[1] == 0 && splitedNum[2] == 0) return toNine[splitedNum[0]] + " hundred"  // сотни

else if (number < 1000 && splitedNum[1] == 0) return toNine[splitedNum[0]] + " hundred " +  toNine[splitedNum[2]] // sotni bez desyatkov

else if (number < 1000 && splitedNum[2] == 0 && splitedNum[1] != 1) return toNine[splitedNum[0]] + " hundred " +  tenners[splitedNum[1] - 2] // sotni s desyakami bez edenic

else if (number < 1000 && splitedNum[1] == 1) return toNine[splitedNum[0]] + " hundred " +  tenToNineteen[splitedNum[2]] // sotni do 20

return toNine[splitedNum[0]] + " hundred " + tenners[splitedNum[1] - 2] + " " + toNine[splitedNum[2]] // ves farsh
}
