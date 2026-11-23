# HTTP Module

-> We can create server by this module without using the Express Js

# Code	                    Meaning
require('http')	        HTTP module import
http.createServer()	    HTTP server create
req	                    Client se aane wali request
res	                    Client ko bheja jane wala response
res.end()	            Response complete karta hai
server.listen(3000)	    Port 3000 par server start

# res.write() → Response body mein data write karta hai, response complete nahi karta.
# res.end() → Response complete karta hai; optional final data bhi send kar sakta hai.

#  HTTP Status Codes

# Code	  Meaning
200	        OK
201	        Created
400	        Bad Request
401     	Unauthorized
403	        Forbidden
404	        Not Found
500	        Internal Server Error