export default function bubbleSort(array: Array<number>){
    let results = [array.slice()]; 
    let length: number = array.length;
    let swapped: boolean = false;
    do{
        swapped= false;
        for(let i=0; i< length; i++){
            if(array[i]> array[i+1]){
                let temp: number = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped= true;
                results.push(array.slice())
            }
        }
    }while(swapped);
    return results
}