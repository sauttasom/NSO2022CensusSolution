export class LandCalculator {

    public static CalculateSummary(A:number, B:number, C:number){
        let result:number = A + (B / 4) + (C / 400)
        return result
    }
}