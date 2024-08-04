/**
 * @param {number[]} nums
 * @return {number}
 */

 //Floyd's Tortoise and Hare algo 
 var findDuplicate = function(arr) {
    //Find the Intersection Point in the Cycle:

    let slow = 0;
    let fast = 0;
    do{
        slow = arr[slow];
        fast = arr[arr[fast]];

    }while(slow != fast);
    //Find the Entrance to the Cycle:
    slow = 0;
    while(slow != fast){
        slow = arr[slow];
        fast = arr[fast];
    }
    return fast;
};