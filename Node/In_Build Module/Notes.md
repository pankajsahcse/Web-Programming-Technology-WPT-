# 1. File System (fs) Module
fs module ka use files aur directories ko create, read, update aur delete karne ke liye hota hai.

-> fs.writeFile() asynchronous method hai aur isme callback function dena required hai.


fs.readFile() → Callback

fs.readFileSync() → Direct return value

fs.promises.readFile() → Promise (.then() ya await)

'utf8' → File content ko string ke form mein read karega.


# Important fs Methods
Synchronous	          Asynchronous (callback)
writeFileSync()	      writeFile()
readFileSync()	      readFile()
appendFileSync()	  appendFile()
unlinkSync()	      unlink()
mkdirSync()	          mkdir()
readdirSync()	      readdir()
renameSync()	      rename()