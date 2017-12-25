function expandedForm(num) {
    return num.toString().split("").map((n,i,a) => n*Math.pow(10, a.length-i-1)).filter(n => n>0).join(" + ")
}

//test case
// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');