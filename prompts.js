function iteration({n, m}) {
    let min = n < m ? n : m;
    let max = n > m ? n : m;

    console.log(`Start iteration from ${min} to ${max}`);

    setTimeout(()=>{
        while (min <= max){
            console.log(min);
            min+=1;
        }
    }, 1000)
}

const prompts = require('prompts');

const questions = [
    {
        type: 'number',
        name: 'n',
        message: 'Enter `N`'
    },
    {
        type: 'number',
        name: 'm',
        message: 'Enter `M`'
    },
];

(async () => {
    const response = await prompts(questions);

    iteration(response);
})();