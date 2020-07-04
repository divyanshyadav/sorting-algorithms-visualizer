import { swap } from "../sort-utils";

export default function bubbleSort(array: Array<number>){
    let results = [array.slice()]; 
    let length: number = array.length;
    let swapped: boolean = false;
    
    do {
        swapped= false;
        for (let i=0; i< length; i++){
            if (array[i]> array[i+1]){
                swap(array, i, i + 1)
                swapped= true;
                results.push(array.slice())
            }
        }
    } while(swapped);
    
    return results
}