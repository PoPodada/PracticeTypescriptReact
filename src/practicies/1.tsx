export const Practice1 = () =>{
    const CalcTotalFee = (num:number)=>{
        const total = num * 1.1; 
        console.log(total);
    }
    const onClickPractice = () => CalcTotalFee(1000);
    return(
        <div>
            <p>練習</p>
            <button onClick={onClickPractice}>練習問題を実行</button>
        </div>
    )
}