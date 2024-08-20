function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length <= 1) return 0;
    
    // Initialize total cost
    let totalCost = 0;
    
    // Convert the array into a min-heap
    arr.sort((a, b) => a - b);
    
    while (arr.length > 1) {
        // Extract the two smallest elements (ropes)
        let first = arr.shift();
        let second = arr.shift();
        
        // The cost to connect these two ropes
        let cost = first + second;
        
        // Add this cost to the total cost
        totalCost += cost;
        
        // Insert the new rope back into the min-heap
        arr.push(cost);
        
        // Re-sort the array to maintain the min-heap property
        arr.sort((a, b) => a - b);
    }
    
    return totalCost;
  
}

module.exports=mincost;
