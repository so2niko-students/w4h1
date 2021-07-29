function ticTacToeChecker(table){
    const tableStr = table.flat().join('');
    if(getRegWinner(1).test(tableStr)) return 1;
    if(getRegWinner(2).test(tableStr)) return 2;

    if(tableStr.includes(0)) return -1;

    return 0;
}

function getRegWinner(n){
     const reg = new RegExp(`/^${n}{3}|${n}{3}$|^...${n}{3}|${n}..${n}..${n}|${n}...${n}...${n}|..${n}.${n}.${n}../`);
    return reg;
}

/*
111...... ok
...111... ok
......111 ok

1..1..1.. ok
.1..1..1. ok
..1..1..1 ok

1...1...1 ok
..1.1.1.. ok

*/


console.log(ticTacToeChecker([[1, 2, 1], 
    [2, 1, 0], 
    [2, 2, 2]]))