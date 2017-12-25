function pickPeaks(arr){
    var result = {pos: [], peaks: []};
    if(arr.length > 2) {
        var pos = -1;
        for(var i=1; i<arr.length;i++){
            if(arr[i] > arr[i-1]) {
                pos = i;
            } else if(arr[i] < arr[i-1] && pos != -1) {
                result.pos.push(pos);
                result.peaks.push(arr[pos]);
                pos = -1;
            }
        }
    }
    return result;
}


// other way

function pickPeaks(arr){
    const peaks = {pos: [], peaks: []};
    let latestMax, latestMaxPos;

    for(var i = 1; i < arr.length; i++){
        if(arr[i] > arr[i-1]){ // This may be a local peak
            latestMaxPos = i;
            latestMax = arr[i];
        }else if(arr[i] < arr[i-1]){
            if(latestMaxPos) {
                peaks.pos.push(latestMaxPos);
                peaks.peaks.push(latestMax);
                latestMax = latestMaxPos = null;
            }
        }
    }
    return peaks;
}