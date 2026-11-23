# Node.js mein EventEmitter ek built-in class hai jo event-driven programming ke liye use hoti hai.

Simple language mein:
- on() → Event ke liye listener register karta hai.
- emit() → Event trigger karta hai.
- once() → Event listener sirf ek baar execute hota hai.
- off() → Registered event listener remove karta hai.



# Method	                Purpose
on()	                Listener register
emit()	                Event trigger
once()	                Listener ek baar execute
off()	                Specific listener remove
removeListener()	    Listener remove (off ka alias)
removeAllListeners()	All/specified event listeners remove
listenerCount()	        Listener count return
eventNames()	        Registered event names return

##  EventEmitter vs Callback vs Promise
# Concept	                    Purpose
Callback	            Function ko baad mein ya kisi event par call karna
Promise	                Asynchronous result/error handle karna
EventEmitter	        Named events ke through listeners notify karna

# Why Use EventEmitter 
-> EventEmitter ka use tab karte hain jab koi event occur hone par automatically ek ya multiple functions execute karwane hon.

Simple language mein:
- Event → Koi action hua (jaise login, payment, order placed).
- Listener (on) → Event hone par kya kaam karna hai.
- Emitter (emit) → Event trigger karna.


1.  Real-Life Example: User Login
    Maan lo user login karta hai. Login hone ke baad hume 3 kaam karne hain:
a        Welcome message show karna.
b.       Login activity log karna.
c.       Notification send karna.