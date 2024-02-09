export const Practice2 = () =>{
    const getTotalFee = (num:number):number=>{
        const total = num * 1.1; 
        // console.log(total);
        return total
    }
    const onClickPractice = () => console.log(getTotalFee(1000));
    return(
        <div>
            <p>練習</p>
            <button onClick={onClickPractice}>練習問題を実行</button>
        </div>
    )
}