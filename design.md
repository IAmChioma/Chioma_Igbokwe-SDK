### Design
Kept it simple

Used modularization to capture: Exported the  MovieSDK. Other methods of the SDK are hidden. For this concept, would be more defined when typecsript is used as the "private" keyword can be used on the methods. 


###### Object Oriented
The methods in the SDK can only be accessed through the MoviesSDK object i.e an instance of the MoviesSDK


###### Reusability
Made the _apiCall function once and used it for the different API calls.

###### Single Responsibility
Simple is better than complex. The Api Call function, The methods in the MoviesSDK and the Class Itself is simple