// @t "can sum" asyncSum(1, 1) ~expect-async 6
function asyncSum(num1, num2) {
    return new Promise((resolve, reject) => {
        resolve(num1 + num2);
    });
}

module.exports = {
    asyncSum
}