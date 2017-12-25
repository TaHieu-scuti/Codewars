function gap(g, m, n) {
    var lastPrime = 0;
    var isPrime = function(x) {
        for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }

    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }

    return null;
}


//test case
// Test.describe("Gap",function() {
// Test.it("Basic tests",function() {
//     Test.assertSimilar(gap(2,100,110), [101, 103]);
//     Test.assertSimilar(gap(4,100,110), [103, 107]);
//     Test.assertSimilar(gap(6,100,110), null);
//     Test.assertSimilar(gap(8,300,400), [359, 367]);
//     Test.assertSimilar(gap(10,300,400), [337, 347]);
// })})