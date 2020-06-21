import {bubbleSort} from './../bubble-sort';
test("test bubble sort",()=>{
    const testArray = [2,3,1,7,4,6,5,8];
    const actual = bubbleSort(testArray);
    const expected = [
        [ 2, 3, 1, 7, 4, 6, 5, 8 ],
        [ 2, 1, 3, 7, 4, 6, 5, 8 ],
        [ 2, 1, 3, 4, 7, 6, 5, 8 ],
        [ 2, 1, 3, 4, 6, 7, 5, 8 ],
        [ 2, 1, 3, 4, 6, 5, 7, 8 ],
        [ 1, 2, 3, 4, 6, 5, 7, 8 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8 ] 
    ] 
    console.log(actual);
    expect(actual).toEqual(expected);

})