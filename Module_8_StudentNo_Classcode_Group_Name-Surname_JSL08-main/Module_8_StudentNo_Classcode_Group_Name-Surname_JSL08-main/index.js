// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"


// 2. Define a class called `BankBranch` for managing branch information.


// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.

// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.

// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.

// A singleton instance is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.

class BankBranch {
    constructor(branchInfo) {
        // Check if bankBranchInstance is null
        if (BankBranch.bankBranchInstance == null) {
            // If it is null, create a new instance with the provided branchInfo
            this.branchInfo = branchInfo;
            // Assign the current instance to the bankBranchInstance
            BankBranch.bankBranchInstance = this;
        }
        // Return the existing instance or the newly created instance
        return BankBranch.bankBranchInstance;
    }
  
    // Method to get branch information
    getBranchInfo() {
        return this.branchInfo;
    }
}
  
// Usage
const branchA = new BankBranch({ name: "Branch A", location: "City A" });
const branchB = new BankBranch({ name: "Branch B", location: "City B" });
  
console.log(branchA === branchB); // true, both instances refer to the same object
  
console.log(branchA.getBranchInfo()); // { name: "Branch A", location: "City A" }
console.log(branchB.getBranchInfo()); // { name: "Branch A", location: "City A" }
