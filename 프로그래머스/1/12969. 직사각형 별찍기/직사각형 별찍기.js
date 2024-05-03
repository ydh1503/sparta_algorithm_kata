process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = Number(input[0]), m = Number(input[1]);
    let square = '';
    
    for(let i=0; i<m; i++){
        // for(let j=0; j<n; j++){
        //     square += '*';
        // }
        square += '*'.repeat(n);
        square += '\n';
    }
    console.log(square);
});