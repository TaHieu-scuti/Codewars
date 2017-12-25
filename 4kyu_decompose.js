function decompose(n) {
    return loop(n - 1, n * n, []);
    function loop(k, rest, path) {
        return (rest === 0) ? path :
            (rest < 0 || k === 0) ? null :
                loop(k - 1, rest - k * k, [k].concat(path)) ||
                loop(k - 1, rest, path);
    }
}