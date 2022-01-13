---------------------------------------------------------


static UI  =>  data + style  
dynamic UI =>  data + style + interactivity

static-web-ui  => HTML + CSS
dynamic-web-ui => HTML + CSS + javascript 



---------------------------------------------------------



------------------------------------------------------------------
why we need javascript language?
------------------------------------------------------------------

 => client-side (dynamic web-ui) application   : runtime ( browser )
 => sever-side application                     : runtime ( Node.js )  



------------------------------------------------------------------
javascript features
------------------------------------------------------------------

=> flexibility
    - dynamic
    - FP & OOP    
=> by default, all IO operations are non-blocking/asynchrnous
=> by default, single-threaded process / light-weight process
=> can execute concurrent actions due to non-blocking IO  
    

-------------------------------------------------------------------



------------------------------------------------------------------
javascript standarnd
------------------------------------------------------------------

=> ECMAScript community
    - specs

    current version: ECMAScript-2015 or ES6



------------------------------------------------------------------
How to run javascript program ?
------------------------------------------------------------------


=> using javascript runtime/engine


client ( browser ) envi :
--------------------------


a. chrome  => v8 ( c++ )
b. firefox => rhino ( java ) / spider monkey
c. IE/Edge => chakra
d. Safari  => Nitro


other envi :
--------------------------

a. Node.js => v8 ( c++ )
b. JVM     => rhino / nashorn


-----------------------------------
Naming conventions
-----------------------------------

keywords ==> lower-case
Types ( class ) ==> pascal-case : A____B___C___  e.g ReactEmployee
variables/functions ==> camel-case : ____B____C____ e.g studName, addNumbers()
constant number values     ==> upper-case , e.g const PI=3.14  
file-names          ==> pascal-case,lower-case , data-types.js


-----------------------------------------------------------------------



------------------------------------------------------------------
//  core javascript : level-1 topics
------------------------------------------------------------------

 => basic data types
 => literal-style objects 
 => scopes / execution-context  ( how code executes )
 => FP ( imp topic ) , arrow-function ( es6 )
 => OOP  ( less imp )
 => data structures ( list/array , set ( es6 )  , map ( es6 ))
 
------------------------------------------------------------------
//  javascript : level-2 topics
------------------------------------------------------------------

=> Es6 New-syntax & New APIs 
    => spread operators
    => de-structuring
    => symbols
    => iterables & generator functions`
    => for-of loop
    ........
=> modules
=> package management tools : NPM / YARN


------------------------------------------------------------------
//  javascript : level-3 topics
------------------------------------------------------------------

Async/Non-blocking Programming APIs
-----------------------------------

=> promise api
=> reactive programming extensions ( RxJs) with javascript
+
=> Unit Testing using ( Jest | jasmine | Mocha )


---------------------------------------------------------------

References:


    - https://javascript.info/
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript
    - https://exploringjs.com/


----------------------------------------------------------------    

https://github.com/nagcloudlab/ui-batch/tree/main/Stage-1/1-Javascript