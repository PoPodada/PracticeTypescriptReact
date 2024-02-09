export const Practice3 = () =>{
    const getTotalFee = (num:number):number=>{
        const total:number = num * 1.1; 
        // console.log(total);
        return total
    }
    const onClickPractice = () =>{
        let total:number = 0;
        total = getTotalFee(1000);
        console.log(total);
    } 
    
    return(
        <div>
            <p>練習</p>
            <button onClick={onClickPractice}>練習問題を実行</button>
        </div>
    )
}