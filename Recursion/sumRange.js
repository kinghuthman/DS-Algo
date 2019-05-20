function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(3); // 6
// return 3 + sumRange(2)'3'= 6
// return 2 + sumRange(1) = 3
// return 1